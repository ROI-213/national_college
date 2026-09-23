import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { useToast } from '../../hooks/use-toast';
import { GraduationCap, User, BookOpen, Upload, FileCheck, AlertCircle, CheckCircle2, Sparkles } from 'lucide-react';

interface MCAApplicationFormProps {
  className?: string;
  source?: string;
}

export const MCAApplicationForm: React.FC<MCAApplicationFormProps> = ({
  className = '',
  source = 'mca_apply_online',
}) => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [declarationChecked, setDeclarationChecked] = useState(false);

  const [formData, setFormData] = useState({
    // Personal Details
    fullName: '',
    gender: '',
    dob: '',
    aadhaar: '',
    category: '',
    nationality: 'Indian',
    religion: '',
    caste: '',
    bloodGroup: '',
    mobile: '',
    altContact: '',
    email: '',
    parentName: '',
    parentContact: '',
    parentOccupation: '',
    annualIncome: '',
    permanentAddress: '',
    correspondenceAddress: '',

    // 10th
    tenthBoard: '',
    tenthYear: '',
    tenthPercentage: '',

    // 12th / PUC
    twelfthBoard: '',
    twelfthYear: '',
    twelfthStream: '',
    twelfthPercentage: '',
    registerNumber: '',
    subjectsStudied: '',

    // Under-Graduate Degree (Essential for MCA)
    ugDegree: '',
    ugCollege: '',
    ugYear: '',
    ugPercentage: '',

    // Course Selection (Auto-selected to MCA)
    course: 'MCA',
    specialization: 'Artificial Intelligence & Cloud Computing',
    medium: 'english',
  });

  const [files, setFiles] = useState<Record<string, File | null>>({
    tenthMarks: null,
    twelfthMarks: null,
    degreeMarks: null,
    transferCert: null,
    casteCert: null,
    incomeCert: null,
    photo: null,
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const allowedExtensions = ['pdf', 'jpg', 'jpeg', 'png', 'doc', 'docx'];
      const fileExt = file.name.split('.').pop()?.toLowerCase() || '';
      if (!allowedExtensions.includes(fileExt)) {
        toast({
          title: 'Invalid file type',
          description: 'Only PDF, JPG, JPEG, PNG, and DOC/DOCX files are allowed.',
          variant: 'destructive',
        });
        e.target.value = '';
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: 'File too large',
          description: 'Maximum file size is 5MB',
          variant: 'destructive',
        });
        e.target.value = '';
        return;
      }
    }
    setFiles(prev => ({ ...prev, [field]: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const required = [
      'fullName', 'gender', 'dob', 'mobile', 'email', 'parentName', 'parentContact', 'permanentAddress',
      'tenthBoard', 'tenthYear', 'tenthPercentage', 'twelfthBoard', 'twelfthYear', 'twelfthStream', 'twelfthPercentage',
      'course', 'medium'
    ];

    const missing = required.filter(f => !formData[f as keyof typeof formData]);
    if (missing.length > 0) {
      toast({
        title: 'Missing fields',
        description: 'Please fill all mandatory fields marked with *',
        variant: 'destructive',
      });
      return;
    }

    if (!declarationChecked) {
      toast({
        title: 'Declaration required',
        description: 'Please accept the declaration to proceed',
        variant: 'destructive',
      });
      return;
    }

    setSubmitting(true);

    // Prepare combined academic summary including UG degree for storage
    const combinedSubjects = [
      formData.subjectsStudied ? `12th Subjects: ${formData.subjectsStudied}` : '',
      formData.ugDegree ? `UG Degree: ${formData.ugDegree} (${formData.ugCollege || 'College N/A'}, Passing: ${formData.ugYear || 'N/A'}, %: ${formData.ugPercentage || 'N/A'})` : '',
    ].filter(Boolean).join(' | ');

    const { data: insertedData, error } = await supabase.from('apply_online_enquiries').insert([{
      full_name: formData.fullName,
      gender: formData.gender,
      dob: formData.dob,
      aadhaar: formData.aadhaar,
      category: formData.category,
      nationality: formData.nationality,
      religion: formData.religion,
      caste: formData.caste,
      blood_group: formData.bloodGroup,
      mobile: formData.mobile,
      alt_contact: formData.altContact,
      email: formData.email,
      parent_name: formData.parentName,
      parent_contact: formData.parentContact,
      parent_occupation: formData.parentOccupation,
      annual_income: formData.annualIncome,
      permanent_address: formData.permanentAddress,
      correspondence_address: formData.correspondenceAddress,
      tenth_board: formData.tenthBoard,
      tenth_year: formData.tenthYear,
      tenth_percentage: formData.tenthPercentage,
      twelfth_board: formData.twelfthBoard,
      twelfth_year: formData.twelfthYear,
      twelfth_stream: formData.twelfthStream,
      twelfth_percentage: formData.twelfthPercentage,
      subjects_studied: combinedSubjects || formData.subjectsStudied,
      register_number: formData.registerNumber,
      course: 'MCA',
      specialization: formData.specialization,
      medium: formData.medium,
      source,
      status: 'Not Contacted',
      notes: formData.ugDegree ? `UG Degree: ${formData.ugDegree}, College: ${formData.ugCollege}, Year: ${formData.ugYear}, Marks: ${formData.ugPercentage}%` : undefined,
    }]).select();

    if (error || !insertedData || insertedData.length === 0) {
      toast({
        title: 'Submission Failed',
        description: 'Something went wrong while submitting. Please try again.',
        variant: 'destructive',
      });
      setSubmitting(false);
      return;
    }

    const leadId = insertedData[0].id;

    // Upload files to Supabase storage if provided
    for (const [key, file] of Object.entries(files)) {
      if (file) {
        const safeName = file.name.replace(/[^a-zA-Z0-9.]/g, '_');
        const filePath = `${leadId}/${key}_${Date.now()}_${safeName}`;

        const { error: uploadError } = await supabase.storage
          .from('enquiry-documents')
          .upload(filePath, file, { contentType: file.type, upsert: false });

        if (uploadError) {
          console.error(`Error uploading ${key}:`, uploadError);
          toast({
            title: 'File Upload Warning',
            description: `Could not upload ${file.name}. Your application details were saved.`,
            variant: 'destructive',
          });
          continue;
        }

        const { data: urlData } = supabase.storage
          .from('enquiry-documents')
          .getPublicUrl(filePath);
        const fileUrl = urlData?.publicUrl || '';

        await supabase.from('enquiry_documents').insert([
          {
            lead_id: leadId,
            file_name: file.name,
            file_path: filePath,
            file_url: fileUrl,
            mime_type: file.type || 'application/octet-stream',
            file_size: file.size,
          },
        ]);
      }
    }

    setSubmitting(false);
    setSubmitted(true);
    toast({
      title: 'MCA Application Submitted!',
      description: 'Your application for MCA 2026-27 has been submitted successfully.',
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '', gender: '', dob: '', aadhaar: '', category: '', nationality: 'Indian', religion: '', caste: '', bloodGroup: '',
      mobile: '', altContact: '', email: '', parentName: '', parentContact: '', parentOccupation: '', annualIncome: '',
      permanentAddress: '', correspondenceAddress: '',
      tenthBoard: '', tenthYear: '', tenthPercentage: '',
      twelfthBoard: '', twelfthYear: '', twelfthStream: '', twelfthPercentage: '', registerNumber: '', subjectsStudied: '',
      ugDegree: '', ugCollege: '', ugYear: '', ugPercentage: '',
      course: 'MCA', specialization: 'Artificial Intelligence & Cloud Computing', medium: 'english',
    });
    setFiles({
      tenthMarks: null, twelfthMarks: null, degreeMarks: null, transferCert: null, casteCert: null, incomeCert: null, photo: null,
    });
    setDeclarationChecked(false);
  };

  const SectionHeader = ({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) => (
    <div className="flex items-start gap-3 mb-6 pb-3 border-b-2 border-logo-blue/20">
      <div className="w-10 h-10 bg-logo-blue/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
        <Icon className="w-5 h-5 text-logo-blue" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-logo-navy">{title}</h3>
        {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );

  if (submitted) {
    return (
      <div className={`max-w-2xl mx-auto my-8 ${className}`}>
        <div className="bg-green-50/80 border-2 border-green-300 rounded-2xl p-10 text-center shadow-lg">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 shadow-inner">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-200 text-green-800 mb-3">
            <Sparkles size={14} /> Batch 2026-27 Application Received
          </span>
          <h2 className="text-3xl font-extrabold text-logo-navy mb-3">
            MCA Application Submitted Successfully!
          </h2>
          <p className="text-gray-700 font-medium mb-2">
            Thank you for applying to the <strong>Master of Computer Applications (MCA)</strong> program at The National College, Basavanagudi.
          </p>
          <p className="text-gray-600 text-sm mb-6">
            A confirmation has been recorded for <strong className="text-logo-navy">{formData.email}</strong>. Our admissions team will review your application and contact you within 24-48 working hours.
          </p>

          <div className="bg-white rounded-xl p-4 border border-green-200 text-left max-w-md mx-auto mb-8 text-sm space-y-1.5 text-gray-700">
            <p><strong>Applicant Name:</strong> {formData.fullName}</p>
            <p><strong>Course Applied:</strong> MCA (2-Year Full-Time AICTE Approved)</p>
            <p><strong>Mobile:</strong> {formData.mobile}</p>
            <p><strong>Academic Year:</strong> 2026-27</p>
          </div>

          <Button
            onClick={handleReset}
            className="bg-logo-navy hover:bg-logo-navy-dark text-white px-8 py-2.5 font-semibold"
          >
            Submit Another MCA Application
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* A. Personal Details */}
        <Card className="p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border-slate-200">
          <SectionHeader
            icon={User}
            title="A. Personal Details"
            subtitle="Please enter candidate's personal details matching official identity records"
          />
          <div className="grid md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Label className="font-semibold text-gray-700">
                Full Name (as per Degree / 10th records) <span className="text-red-500">*</span>
              </Label>
              <Input
                value={formData.fullName}
                onChange={e => handleChange('fullName', e.target.value)}
                placeholder="Enter candidate's full legal name"
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label className="font-semibold text-gray-700">
                Gender <span className="text-red-500">*</span>
              </Label>
              <Select value={formData.gender} onValueChange={v => handleChange('gender', v)} required>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="font-semibold text-gray-700">
                Date of Birth <span className="text-red-500">*</span>
              </Label>
              <Input
                type="date"
                value={formData.dob}
                onChange={e => handleChange('dob', e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label className="font-semibold text-gray-700">Aadhaar Number</Label>
              <Input
                value={formData.aadhaar}
                onChange={e => handleChange('aadhaar', e.target.value)}
                placeholder="12-digit Aadhaar number"
                maxLength={12}
                className="mt-1"
              />
            </div>

            <div>
              <Label className="font-semibold text-gray-700">Category</Label>
              <Select value={formData.category} onValueChange={v => handleChange('category', v)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General / GM</SelectItem>
                  <SelectItem value="obc">OBC</SelectItem>
                  <SelectItem value="sc">SC</SelectItem>
                  <SelectItem value="st">ST</SelectItem>
                  <SelectItem value="cat-1">Category-1</SelectItem>
                  <SelectItem value="2a">2A</SelectItem>
                  <SelectItem value="2b">2B</SelectItem>
                  <SelectItem value="3a">3A</SelectItem>
                  <SelectItem value="3b">3B</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="font-semibold text-gray-700">Nationality</Label>
              <Input
                value={formData.nationality}
                onChange={e => handleChange('nationality', e.target.value)}
                placeholder="e.g. Indian"
                className="mt-1"
              />
            </div>

            <div>
              <Label className="font-semibold text-gray-700">Religion</Label>
              <Input
                value={formData.religion}
                onChange={e => handleChange('religion', e.target.value)}
                placeholder="e.g. Hindu, Muslim, Christian, Jain, etc."
                className="mt-1"
              />
            </div>

            <div>
              <Label className="font-semibold text-gray-700">Caste</Label>
              <Input
                value={formData.caste}
                onChange={e => handleChange('caste', e.target.value)}
                placeholder="Enter caste (if applicable)"
                className="mt-1"
              />
            </div>

            <div>
              <Label className="font-semibold text-gray-700">Blood Group</Label>
              <Select value={formData.bloodGroup} onValueChange={v => handleChange('bloodGroup', v)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select Blood Group" />
                </SelectTrigger>
                <SelectContent>
                  {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bg => (
                    <SelectItem key={bg} value={bg}>{bg}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="font-semibold text-gray-700">
                Applicant Mobile Number <span className="text-red-500">*</span>
              </Label>
              <Input
                type="tel"
                value={formData.mobile}
                onChange={e => handleChange('mobile', e.target.value)}
                placeholder="10-digit mobile number"
                maxLength={10}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label className="font-semibold text-gray-700">Alternate Contact Number</Label>
              <Input
                type="tel"
                value={formData.altContact}
                onChange={e => handleChange('altContact', e.target.value)}
                placeholder="Alternate phone number"
                maxLength={10}
                className="mt-1"
              />
            </div>

            <div className="md:col-span-2">
              <Label className="font-semibold text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                type="email"
                value={formData.email}
                onChange={e => handleChange('email', e.target.value)}
                placeholder="your.email@example.com"
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label className="font-semibold text-gray-700">
                Parent / Guardian Name <span className="text-red-500">*</span>
              </Label>
              <Input
                value={formData.parentName}
                onChange={e => handleChange('parentName', e.target.value)}
                placeholder="Father's / Mother's / Guardian's name"
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label className="font-semibold text-gray-700">
                Parent / Guardian Contact <span className="text-red-500">*</span>
              </Label>
              <Input
                type="tel"
                value={formData.parentContact}
                onChange={e => handleChange('parentContact', e.target.value)}
                placeholder="Parent 10-digit mobile number"
                maxLength={10}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label className="font-semibold text-gray-700">Parent Occupation</Label>
              <Input
                value={formData.parentOccupation}
                onChange={e => handleChange('parentOccupation', e.target.value)}
                placeholder="e.g. Business, Private Service, Govt. Service"
                className="mt-1"
              />
            </div>

            <div>
              <Label className="font-semibold text-gray-700">Annual Family Income</Label>
              <Input
                value={formData.annualIncome}
                onChange={e => handleChange('annualIncome', e.target.value)}
                placeholder="e.g. 5,00,000"
                className="mt-1"
              />
            </div>

            <div className="md:col-span-2">
              <Label className="font-semibold text-gray-700">
                Permanent Address <span className="text-red-500">*</span>
              </Label>
              <Textarea
                value={formData.permanentAddress}
                onChange={e => handleChange('permanentAddress', e.target.value)}
                placeholder="Complete postal address including City, State and PIN code"
                rows={2}
                required
                className="mt-1"
              />
            </div>

            <div className="md:col-span-2">
              <Label className="font-semibold text-gray-700">Correspondence Address</Label>
              <Textarea
                value={formData.correspondenceAddress}
                onChange={e => handleChange('correspondenceAddress', e.target.value)}
                placeholder="Leave blank if same as permanent address"
                rows={2}
                className="mt-1"
              />
            </div>
          </div>
        </Card>

        {/* B. Academic Details */}
        <Card className="p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border-slate-200">
          <SectionHeader
            icon={BookOpen}
            title="B. Academic Details"
            subtitle="Previous school, pre-university and qualifying undergraduate details"
          />
          <div className="space-y-6">
            {/* 10th Standard */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <h4 className="font-bold text-logo-navy mb-3 text-sm uppercase tracking-wide">
                10th Standard / SSLC
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label className="text-xs font-semibold text-gray-700">
                    Board Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    value={formData.tenthBoard}
                    onChange={e => handleChange('tenthBoard', e.target.value)}
                    placeholder="e.g. Karnataka SSLC, CBSE, ICSE"
                    required
                    className="mt-1 bg-white"
                  />
                </div>
                <div>
                  <Label className="text-xs font-semibold text-gray-700">
                    Year of Passing <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    value={formData.tenthYear}
                    onChange={e => handleChange('tenthYear', e.target.value)}
                    placeholder="e.g. 2020"
                    maxLength={4}
                    required
                    className="mt-1 bg-white"
                  />
                </div>
                <div>
                  <Label className="text-xs font-semibold text-gray-700">
                    Percentage / CGPA <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    value={formData.tenthPercentage}
                    onChange={e => handleChange('tenthPercentage', e.target.value)}
                    placeholder="e.g. 85% or 8.5 CGPA"
                    required
                    className="mt-1 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* 12th Standard / PUC */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <h4 className="font-bold text-logo-navy mb-3 text-sm uppercase tracking-wide">
                12th Standard / PUC / Diploma
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label className="text-xs font-semibold text-gray-700">
                    Board / Pre-University Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    value={formData.twelfthBoard}
                    onChange={e => handleChange('twelfthBoard', e.target.value)}
                    placeholder="e.g. Karnataka PUC, CBSE, ISC"
                    required
                    className="mt-1 bg-white"
                  />
                </div>
                <div>
                  <Label className="text-xs font-semibold text-gray-700">
                    Year of Passing <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    value={formData.twelfthYear}
                    onChange={e => handleChange('twelfthYear', e.target.value)}
                    placeholder="e.g. 2022"
                    maxLength={4}
                    required
                    className="mt-1 bg-white"
                  />
                </div>
                <div>
                  <Label className="text-xs font-semibold text-gray-700">
                    Stream <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.twelfthStream} onValueChange={v => handleChange('twelfthStream', v)} required>
                    <SelectTrigger className="mt-1 bg-white">
                      <SelectValue placeholder="Select Stream" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="science">Science (PCMC/PCMB/PCME)</SelectItem>
                      <SelectItem value="commerce">Commerce</SelectItem>
                      <SelectItem value="arts">Arts / Humanities</SelectItem>
                      <SelectItem value="diploma">Technical Diploma (CS/IT/E&C)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-xs font-semibold text-gray-700">
                    Percentage / CGPA <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    value={formData.twelfthPercentage}
                    onChange={e => handleChange('twelfthPercentage', e.target.value)}
                    placeholder="e.g. 80% or 8.0 CGPA"
                    required
                    className="mt-1 bg-white"
                  />
                </div>
                <div>
                  <Label className="text-xs font-semibold text-gray-700">Register / Roll Number</Label>
                  <Input
                    value={formData.registerNumber}
                    onChange={e => handleChange('registerNumber', e.target.value)}
                    placeholder="Board Register number"
                    className="mt-1 bg-white"
                  />
                </div>
                <div>
                  <Label className="text-xs font-semibold text-gray-700">Subjects Studied at 10+2</Label>
                  <Input
                    value={formData.subjectsStudied}
                    onChange={e => handleChange('subjectsStudied', e.target.value)}
                    placeholder="e.g. Physics, Chemistry, Maths, CS"
                    className="mt-1 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Qualifying Undergraduate Degree (MCA requirement) */}
            <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-200/80">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-logo-navy text-sm uppercase tracking-wide flex items-center gap-2">
                  <GraduationCap size={16} className="text-logo-blue" />
                  Qualifying Under-Graduate Degree (UG)
                </h4>
                <span className="text-xs font-medium text-logo-blue bg-blue-100/80 px-2 py-0.5 rounded">
                  Eligible for MCA
                </span>
              </div>
              <p className="text-xs text-gray-600 mb-3">
                Eligible degrees: BCA, B.Sc (Computer Science / IT / Maths), B.Voc, B.Com, BBA, B.E / B.Tech or equivalent with Mathematics at 10+2 or Degree level.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <Label className="text-xs font-semibold text-gray-700">Degree Name</Label>
                  <Input
                    value={formData.ugDegree}
                    onChange={e => handleChange('ugDegree', e.target.value)}
                    placeholder="e.g. BCA, B.Sc (CS), B.Com"
                    className="mt-1 bg-white"
                  />
                </div>
                <div>
                  <Label className="text-xs font-semibold text-gray-700">College / University</Label>
                  <Input
                    value={formData.ugCollege}
                    onChange={e => handleChange('ugCollege', e.target.value)}
                    placeholder="University or Institution name"
                    className="mt-1 bg-white"
                  />
                </div>
                <div>
                  <Label className="text-xs font-semibold text-gray-700">Year of Passing / Appearing</Label>
                  <Input
                    value={formData.ugYear}
                    onChange={e => handleChange('ugYear', e.target.value)}
                    placeholder="e.g. 2025 or 2026"
                    maxLength={4}
                    className="mt-1 bg-white"
                  />
                </div>
                <div>
                  <Label className="text-xs font-semibold text-gray-700">Aggregate % / CGPA</Label>
                  <Input
                    value={formData.ugPercentage}
                    onChange={e => handleChange('ugPercentage', e.target.value)}
                    placeholder="e.g. 75% or 7.5 CGPA"
                    className="mt-1 bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* C. Course Selection - Auto-selected for MCA */}
        <Card className="p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border-slate-200">
          <SectionHeader
            icon={GraduationCap}
            title="C. Program Selection (Auto-Selected: MCA)"
            subtitle="The MCA program is automatically selected for this admission application"
          />
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <Label className="font-semibold text-gray-700">
                Applying for Program <span className="text-red-500">*</span>
              </Label>
              <div className="mt-1 p-3 bg-blue-50 border-2 border-logo-blue/40 rounded-lg flex items-center justify-between">
                <div>
                  <p className="font-bold text-logo-navy text-sm">
                    MCA (Master of Computer Applications)
                  </p>
                  <p className="text-xs text-logo-blue font-medium mt-0.5">
                    2-Year Full-Time • AICTE Approved • Autonomous
                  </p>
                </div>
                <span className="bg-logo-blue text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                  Selected
                </span>
              </div>
              <input type="hidden" name="course" value="MCA" />
            </div>

            <div>
              <Label className="font-semibold text-gray-700">
                Area of Specialization / Interest
              </Label>
              <Select value={formData.specialization} onValueChange={v => handleChange('specialization', v)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select Specialization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Artificial Intelligence & Cloud Computing">
                    AI & Cloud Computing
                  </SelectItem>
                  <SelectItem value="Data Science & Big Data Analytics">
                    Data Science & Big Data
                  </SelectItem>
                  <SelectItem value="Full-Stack Web & Mobile App Development">
                    Full-Stack & Mobile Development
                  </SelectItem>
                  <SelectItem value="Cybersecurity & DevOps">
                    Cybersecurity & DevOps
                  </SelectItem>
                  <SelectItem value="General Computer Applications">
                    General Computer Applications
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="font-semibold text-gray-700">
                Medium of Instruction <span className="text-red-500">*</span>
              </Label>
              <div className="mt-1 p-3 bg-gray-50 border rounded-lg text-sm text-gray-800 font-semibold flex items-center justify-between">
                <span>English</span>
                <span className="text-xs text-gray-500 font-normal">MCA curriculum medium</span>
              </div>
              <input type="hidden" name="medium" value="english" />
            </div>
          </div>
        </Card>

        {/* D. Document Upload */}
        <Card className="p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border-slate-200">
          <SectionHeader
            icon={Upload}
            title="D. Document Upload"
            subtitle="Upload candidate's academic and supporting documents (optional at enquiry stage)"
          />
          <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-lg text-xs text-amber-800 mb-6 flex items-start gap-2">
            <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
            <span>
              Accepted formats: <strong>PDF, JPG, JPEG, PNG, DOC, DOCX</strong>. Maximum file size: <strong>5MB</strong> per document.
              Documents can also be submitted physically during campus counseling.
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { key: 'tenthMarks', label: '10th Standard Marks Card' },
              { key: 'twelfthMarks', label: '12th / PUC Marks Card' },
              { key: 'degreeMarks', label: 'UG Degree Marks Card / Provisional Certificate' },
              { key: 'transferCert', label: 'Transfer Certificate (TC)' },
              { key: 'casteCert', label: 'Caste / Category Certificate (if applicable)' },
              { key: 'incomeCert', label: 'Income Certificate (if applicable)' },
              { key: 'photo', label: 'Recent Passport Size Photograph' },
            ].map(({ key, label }) => (
              <div key={key} className="bg-slate-50/80 p-3.5 rounded-lg border border-slate-200">
                <Label className="text-xs font-semibold text-gray-800">{label}</Label>
                <Input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  onChange={e => handleFileChange(key, e)}
                  className="mt-1.5 bg-white text-xs file:text-xs file:py-1 file:px-2 file:rounded-md file:border-0 file:bg-logo-blue/10 file:text-logo-navy hover:file:bg-logo-blue/20 cursor-pointer"
                />
                {files[key] && (
                  <p className="text-xs text-green-700 font-medium mt-1.5 flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-green-600" />
                    {files[key]!.name} ({(files[key]!.size / 1024).toFixed(0)} KB)
                  </p>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* E. Declaration */}
        <Card className="p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border-slate-200">
          <SectionHeader
            icon={FileCheck}
            title="E. Declaration & Undertaking"
          />
          <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <Checkbox
              id="mca-declaration"
              checked={declarationChecked}
              onCheckedChange={(checked) => setDeclarationChecked(checked === true)}
              className="mt-1"
            />
            <label
              htmlFor="mca-declaration"
              className="text-sm text-gray-700 leading-relaxed cursor-pointer select-none"
            >
              I hereby declare that all information provided in this <strong>MCA 2026-27 admission application</strong> is accurate, true, and complete. I confirm that I meet the AICTE eligibility criteria for the Master of Computer Applications program. I understand that false or misleading information will result in immediate disqualification of my admission. I agree to abide by the rules and regulations of The National College, Autonomous, Basavanagudi, Bengaluru.
            </label>
          </div>

          <div className="mt-8 text-center">
            <Button
              type="submit"
              size="lg"
              className="px-12 py-3 bg-logo-blue hover:bg-logo-navy text-white text-base font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.01]"
              disabled={submitting}
            >
              {submitting ? (
                <span className="flex items-center gap-2 justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting MCA Application...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <GraduationCap size={20} />
                  Submit MCA Application (Batch 2026-27)
                </span>
              )}
            </Button>
            <p className="text-xs text-gray-500 mt-3">
              After submission, our postgraduate admissions counselor will get in touch with you.
            </p>
          </div>
        </Card>
      </form>
    </div>
  );
};

export default MCAApplicationForm;
