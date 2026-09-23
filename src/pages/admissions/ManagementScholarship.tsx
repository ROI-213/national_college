import React, { useState } from 'react';
import { AdmissionsLayout } from '../../components/layout/AdmissionsLayout';
import { Card } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Checkbox } from '../../components/ui/checkbox';
import { Button } from '../../components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Award, User, GraduationCap, FileText, Upload, ShieldCheck, Loader2 } from 'lucide-react';

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ACCEPTED_TYPES = ['application/pdf', 'image/jpeg', 'image/png'];

const fileSchema = (required: boolean) => {
  const base = z.any();
  if (!required) return base.optional();
  return base.refine((f) => f instanceof FileList && f.length > 0, 'File is required')
    .refine((f) => !(f instanceof FileList && f.length > 0) || ACCEPTED_TYPES.includes(f[0]?.type), 'Only PDF, JPG, PNG allowed')
    .refine((f) => !(f instanceof FileList && f.length > 0) || f[0]?.size <= MAX_FILE_SIZE, 'Max 2MB');
};

const schema = z.object({
  fullName: z.string().trim().min(1, 'Required').max(100),
  gender: z.string().min(1, 'Required'),
  dob: z.string().min(1, 'Required'),
  aadhaar: z.string().max(12).optional(),
  category: z.string().optional(),
  religion: z.string().optional(),
  caste: z.string().optional(),
  mobile: z.string().trim().min(10, 'Enter valid mobile').max(15),
  email: z.string().trim().email('Enter valid email').max(255),
  permanentAddress: z.string().trim().min(1, 'Required').max(500),
  correspondenceAddress: z.string().max(500).optional(),
  parentName: z.string().trim().min(1, 'Required').max(100),
  parentContact: z.string().trim().min(10, 'Enter valid number').max(15),
  parentOccupation: z.string().optional(),
  annualIncome: z.string().trim().min(1, 'Required'),
  course: z.string().min(1, 'Required'),
  yearSemester: z.string().min(1, 'Required'),
  registerNumber: z.string().trim().min(1, 'Required'),
  tenth: z.string().trim().min(1, 'Required'),
  twelfth: z.string().trim().min(1, 'Required'),
  prevSemester: z.string().optional(),
  achievements: z.string().max(1000).optional(),
  scholarshipType: z.string().min(1, 'Required'),
  reason: z.string().trim().min(100, 'Minimum 100 characters required').max(2000),
  otherScholarship: z.string().min(1, 'Required'),
  otherScholarshipDetails: z.string().optional(),
  photograph: fileSchema(true),
  tenthCard: fileSchema(true),
  twelfthCard: fileSchema(true),
  incomeCert: fileSchema(true),
  casteCert: fileSchema(false),
  prevSemCard: fileSchema(false),
  declaration: z.boolean().refine(v => v === true, 'You must accept the declaration'),
  digitalSignature: z.string().trim().min(1, 'Required').max(100),
});

type FormData = z.infer<typeof schema>;

const SectionHeader = ({ icon: Icon, title, section }: { icon: React.ElementType; title: string; section: string }) => (
  <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-primary/20">
    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <div>
      <span className="text-xs font-semibold text-primary uppercase tracking-wider">{section}</span>
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
    </div>
  </div>
);

const FieldError = ({ message }: { message?: string }) =>
  message ? <p className="text-sm text-destructive mt-1">{message}</p> : null;

const FileField = ({ label, required, register, name, error }: any) => (
  <div>
    <Label>{label} {required && <span className="text-destructive">*</span>}</Label>
    <Input type="file" accept=".pdf,.jpg,.jpeg,.png" {...register(name)} className="mt-1" />
    <p className="text-xs text-muted-foreground mt-1">PDF, JPG, PNG — Max 2MB</p>
    <FieldError message={error?.message} />
  </div>
);

const ManagementScholarship = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { declaration: false, otherScholarship: '' },
  });

  const otherScholarship = watch('otherScholarship');

  const onSubmit = async (_data: FormData) => {
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setSubmitting(false);
    toast({
      title: '✅ Application Submitted Successfully',
      description: 'Your Management Scholarship application has been received. You will be notified via email.',
    });
    reset();
  };

  return (
    <AdmissionsLayout pageTitle="Management Scholarship Application" breadcrumbPath="Management Scholarship" category="Admissions">
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Introduction */}
          <Card className="p-8 mb-10 border-l-4 border-primary shadow-md">
            <div className="flex items-start gap-4">
              <Award className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Supporting Merit • Encouraging Excellence</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Management Scholarship is instituted to support meritorious and deserving students by providing financial assistance and encouraging academic excellence. Eligible students are invited to apply through the online application form below.
                </p>
              </div>
            </div>
          </Card>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

            {/* Section A */}
            <Card className="p-6 md:p-8 shadow-md">
              <SectionHeader icon={User} title="Student Personal Details" section="Section A" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <Label>Full Name (as per records) <span className="text-destructive">*</span></Label>
                  <Input {...register('fullName')} className="mt-1" />
                  <FieldError message={errors.fullName?.message} />
                </div>
                <div>
                  <Label>Gender <span className="text-destructive">*</span></Label>
                  <select {...register('gender')} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm mt-1">
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                  <FieldError message={errors.gender?.message} />
                </div>
                <div>
                  <Label>Date of Birth <span className="text-destructive">*</span></Label>
                  <Input type="date" {...register('dob')} className="mt-1" />
                  <FieldError message={errors.dob?.message} />
                </div>
                <div>
                  <Label>Aadhaar Number</Label>
                  <Input {...register('aadhaar')} maxLength={12} className="mt-1" />
                </div>
                <div>
                  <Label>Category</Label>
                  <select {...register('category')} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm mt-1">
                    <option value="">Select</option>
                    <option>General</option>
                    <option>OBC</option>
                    <option>SC</option>
                    <option>ST</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <Label>Religion</Label>
                  <Input {...register('religion')} className="mt-1" />
                </div>
                <div>
                  <Label>Caste</Label>
                  <Input {...register('caste')} className="mt-1" />
                </div>
                <div>
                  <Label>Mobile Number <span className="text-destructive">*</span></Label>
                  <Input type="tel" {...register('mobile')} className="mt-1" />
                  <FieldError message={errors.mobile?.message} />
                </div>
                <div>
                  <Label>Email ID <span className="text-destructive">*</span></Label>
                  <Input type="email" {...register('email')} className="mt-1" />
                  <FieldError message={errors.email?.message} />
                </div>
                <div className="md:col-span-2">
                  <Label>Permanent Address <span className="text-destructive">*</span></Label>
                  <Textarea {...register('permanentAddress')} className="mt-1" rows={2} />
                  <FieldError message={errors.permanentAddress?.message} />
                </div>
                <div className="md:col-span-2">
                  <Label>Correspondence Address</Label>
                  <Textarea {...register('correspondenceAddress')} className="mt-1" rows={2} />
                </div>
                <div>
                  <Label>Parent/Guardian Name <span className="text-destructive">*</span></Label>
                  <Input {...register('parentName')} className="mt-1" />
                  <FieldError message={errors.parentName?.message} />
                </div>
                <div>
                  <Label>Parent/Guardian Contact <span className="text-destructive">*</span></Label>
                  <Input type="tel" {...register('parentContact')} className="mt-1" />
                  <FieldError message={errors.parentContact?.message} />
                </div>
                <div>
                  <Label>Occupation of Parent/Guardian</Label>
                  <Input {...register('parentOccupation')} className="mt-1" />
                </div>
                <div>
                  <Label>Annual Family Income <span className="text-destructive">*</span></Label>
                  <Input {...register('annualIncome')} placeholder="e.g. ₹3,00,000" className="mt-1" />
                  <FieldError message={errors.annualIncome?.message} />
                </div>
              </div>
            </Card>

            {/* Section B */}
            <Card className="p-6 md:p-8 shadow-md">
              <SectionHeader icon={GraduationCap} title="Academic Details" section="Section B" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Label>Course Currently Studying <span className="text-destructive">*</span></Label>
                  <select {...register('course')} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm mt-1">
                    <option value="">Select</option>
                    <option>BBA</option>
                    <option>B.Com</option>
                    <option>BCA</option>
                    <option>B.Sc</option>
                    <option>BA</option>
                    <option>M.Com</option>
                    <option>MCA</option>
                    <option>Other</option>
                  </select>
                  <FieldError message={errors.course?.message} />
                </div>
                <div>
                  <Label>Year / Semester <span className="text-destructive">*</span></Label>
                  <select {...register('yearSemester')} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm mt-1">
                    <option value="">Select</option>
                    <option>1st Year / 1st Semester</option>
                    <option>1st Year / 2nd Semester</option>
                    <option>2nd Year / 3rd Semester</option>
                    <option>2nd Year / 4th Semester</option>
                    <option>3rd Year / 5th Semester</option>
                    <option>3rd Year / 6th Semester</option>
                  </select>
                  <FieldError message={errors.yearSemester?.message} />
                </div>
                <div>
                  <Label>Register Number <span className="text-destructive">*</span></Label>
                  <Input {...register('registerNumber')} className="mt-1" />
                  <FieldError message={errors.registerNumber?.message} />
                </div>
                <div>
                  <Label>10th Percentage / CGPA <span className="text-destructive">*</span></Label>
                  <Input {...register('tenth')} placeholder="e.g. 85%" className="mt-1" />
                  <FieldError message={errors.tenth?.message} />
                </div>
                <div>
                  <Label>12th Percentage / CGPA <span className="text-destructive">*</span></Label>
                  <Input {...register('twelfth')} placeholder="e.g. 78%" className="mt-1" />
                  <FieldError message={errors.twelfth?.message} />
                </div>
                <div>
                  <Label>Previous Semester Percentage</Label>
                  <Input {...register('prevSemester')} className="mt-1" />
                </div>
                <div className="md:col-span-2">
                  <Label>Achievements (Academic / Sports / Cultural)</Label>
                  <Textarea {...register('achievements')} className="mt-1" rows={3} placeholder="List any notable achievements..." />
                </div>
              </div>
            </Card>

            {/* Section C */}
            <Card className="p-6 md:p-8 shadow-md">
              <SectionHeader icon={FileText} title="Scholarship Details" section="Section C" />
              <div className="space-y-5">
                <div>
                  <Label>Type of Scholarship Applying For <span className="text-destructive">*</span></Label>
                  <select {...register('scholarshipType')} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm mt-1">
                    <option value="">Select</option>
                    <option>Merit-Based Scholarship</option>
                    <option>Need-Based Scholarship</option>
                    <option>Sports Scholarship</option>
                    <option>Cultural Excellence Scholarship</option>
                    <option>SC/ST Scholarship</option>
                    <option>Management Quota Scholarship</option>
                  </select>
                  <FieldError message={errors.scholarshipType?.message} />
                </div>
                <div>
                  <Label>Reason for Applying <span className="text-destructive">*</span></Label>
                  <Textarea {...register('reason')} className="mt-1" rows={5} placeholder="Minimum 100 characters..." />
                  <FieldError message={errors.reason?.message} />
                </div>
                <div>
                  <Label>Any Other Scholarship Availed? <span className="text-destructive">*</span></Label>
                  <div className="flex gap-6 mt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" value="Yes" {...register('otherScholarship')} className="accent-primary" /> Yes
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" value="No" {...register('otherScholarship')} className="accent-primary" /> No
                    </label>
                  </div>
                  <FieldError message={errors.otherScholarship?.message} />
                </div>
                {otherScholarship === 'Yes' && (
                  <div>
                    <Label>Mention Details</Label>
                    <Textarea {...register('otherScholarshipDetails')} className="mt-1" rows={2} placeholder="Provide details of the other scholarship..." />
                  </div>
                )}
              </div>
            </Card>

            {/* Section D */}
            <Card className="p-6 md:p-8 shadow-md">
              <SectionHeader icon={Upload} title="Document Upload" section="Section D" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FileField label="Recent Photograph" required register={register} name="photograph" error={errors.photograph} />
                <FileField label="10th Marks Card" required register={register} name="tenthCard" error={errors.tenthCard} />
                <FileField label="12th Marks Card" required register={register} name="twelfthCard" error={errors.twelfthCard} />
                <FileField label="Income Certificate" required register={register} name="incomeCert" error={errors.incomeCert} />
                <FileField label="Caste Certificate" required={false} register={register} name="casteCert" error={errors.casteCert} />
                <FileField label="Previous Semester Marks Card" required={false} register={register} name="prevSemCard" error={errors.prevSemCard} />
              </div>
            </Card>

            {/* Section E */}
            <Card className="p-6 md:p-8 shadow-md">
              <SectionHeader icon={ShieldCheck} title="Declaration" section="Section E" />
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="declaration"
                    checked={watch('declaration')}
                    onCheckedChange={(checked) => {
                      const event = { target: { name: 'declaration', value: checked } };
                      register('declaration').onChange(event as any);
                    }}
                    className="mt-1"
                  />
                  <Label htmlFor="declaration" className="leading-relaxed cursor-pointer">
                    I hereby declare that the information provided is true and correct to the best of my knowledge. I understand that any false information may lead to the cancellation of my scholarship. <span className="text-destructive">*</span>
                  </Label>
                </div>
                <FieldError message={errors.declaration?.message} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Label>Digital Signature (Type Full Name) <span className="text-destructive">*</span></Label>
                    <Input {...register('digitalSignature')} placeholder="Type your full name" className="mt-1 italic" />
                    <FieldError message={errors.digitalSignature?.message} />
                  </div>
                  <div>
                    <Label>Date</Label>
                    <Input value={new Date().toLocaleDateString('en-IN')} readOnly className="mt-1 bg-muted" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Submit */}
            <div className="text-center">
              <Button type="submit" size="lg" disabled={submitting} className="px-12 py-6 text-lg font-semibold shadow-lg">
                {submitting ? (
                  <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Submitting...</>
                ) : (
                  'Submit Application'
                )}
              </Button>
              <p className="text-sm text-muted-foreground mt-3">All fields marked with <span className="text-destructive">*</span> are mandatory</p>
            </div>
          </form>
        </div>
      </section>
    </AdmissionsLayout>
  );
};

export default ManagementScholarship;
