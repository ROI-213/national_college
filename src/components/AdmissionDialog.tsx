
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GraduationCap, User, Mail, Phone, BookOpen, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';

interface AdmissionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

export const AdmissionDialog: React.FC<AdmissionDialogProps> = ({
  isOpen,
  onClose,
  source = 'quick_apply',
}) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    program: '',
    address: '',
    message: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const { error } = await supabase.from('apply_online_enquiries').insert([{
      full_name: formData.name,
      email: formData.email,
      mobile: formData.phone,
      dob: formData.dob,
      course: formData.program,
      permanent_address: formData.address,
      notes: formData.message,
      source,
      status: 'Not Contacted',
    }]);

    setSubmitting(false);

    if (error) {
      toast({
        title: 'Submission Failed',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Application Submitted!',
      description: "Your application has been received. We'll contact you within 24 hours.",
    });

    setFormData({ name: '', email: '', phone: '', dob: '', program: '', address: '', message: '' });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center pb-4 border-b">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="bg-logo-navy/10 p-2 rounded-full">
              <GraduationCap className="text-logo-navy" size={24} />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Apply for Admission
          </DialogTitle>
          <p className="text-gray-600 text-sm">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
              <User size={18} className="text-logo-navy" />
              <span>Personal Information</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <Input
                  value={formData.name}
                  onChange={e => handleChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="focus:ring-logo-navy focus:border-logo-navy"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <Input
                  type="date"
                  value={formData.dob}
                  onChange={e => handleChange('dob', e.target.value)}
                  className="focus:ring-logo-navy focus:border-logo-navy"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
              <Phone size={18} className="text-logo-navy" />
              <span>Contact Information</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={e => handleChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="focus:ring-logo-navy focus:border-logo-navy"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={e => handleChange('phone', e.target.value)}
                  placeholder="+91 9876543210"
                  required
                  className="focus:ring-logo-navy focus:border-logo-navy"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <Textarea
                value={formData.address}
                onChange={e => handleChange('address', e.target.value)}
                placeholder="Enter your complete address"
                className="focus:ring-logo-navy focus:border-logo-navy"
                rows={3}
              />
            </div>
          </div>

          {/* Academic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
              <BookOpen size={18} className="text-logo-navy" />
              <span>Academic Information</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Program of Interest <span className="text-red-500">*</span>
                </label>
                <Select required value={formData.program} onValueChange={v => handleChange('program', v)}>
                  <SelectTrigger className="focus:ring-logo-navy focus:border-logo-navy">
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="B.A">B.A</SelectItem>
                    <SelectItem value="B.Sc">B.Sc</SelectItem>
                    <SelectItem value="B.Sc Animation">B.Sc Animation</SelectItem>
                    <SelectItem value="B.Com">B.Com</SelectItem>
                    <SelectItem value="B.Com Logistics">B.Com - Logistics</SelectItem>
                    <SelectItem value="BBA">BBA</SelectItem>
                    <SelectItem value="BCA">BCA</SelectItem>
                    <SelectItem value="M.Com">M.Com</SelectItem>
                    <SelectItem value="MCA">MCA</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Message
              </label>
              <Textarea
                value={formData.message}
                onChange={e => handleChange('message', e.target.value)}
                placeholder="Any specific questions or requirements?"
                className="focus:ring-logo-navy focus:border-logo-navy"
                rows={3}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex space-x-3 pt-4 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={submitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-logo-navy hover:bg-logo-navy-dark"
              disabled={submitting}
            >
              {submitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <CheckCircle size={16} />
                  Submit Application
                </span>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
