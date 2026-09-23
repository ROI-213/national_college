import React from 'react';
import { AdmissionsLayout } from '../../components/layout/AdmissionsLayout';
import { Card } from '../../components/ui/card';
import { FileText, AlertTriangle, ClipboardList, Phone, Mail, IndianRupee, Clock, CheckCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';

const FeeRefundPolicy = () => {
  const refundRules = [
    { stage: 'Before commencement of classes', percentage: '100%', remarks: 'After deducting processing fee. On written request.' },
    { stage: 'Within 15 days of commencement', percentage: '75%', remarks: 'Subject to approval by management.' },
    { stage: 'Within 30 days of commencement', percentage: '50%', remarks: 'As per management discretion.' },
    { stage: 'After 30 days', percentage: 'No Refund', remarks: '—' },
  ];

  const procedureSteps = [
    'Submit written application for withdrawal.',
    'Attach original fee receipt.',
    'Obtain clearance from concerned departments.',
    'Submit bank account details for refund transfer.',
    'Refund processed after verification and approval.',
  ];

  const importantNotes = [
    'Refund requests must be submitted in writing.',
    'No refund for hostel/mess fees once occupied (if applicable).',
    'Management decision will be final and binding.',
    'Refunds will be made only through bank transfer.',
  ];

  return (
    <AdmissionsLayout pageTitle="Fee Refund Policy" breadcrumbPath="Fee Refund Policy" category="Admissions">
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">

            {/* Introduction */}
            <Card className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The institution maintains a transparent and fair Fee Refund Policy in accordance with regulatory guidelines. Refunds, where applicable, are processed based on the stage of withdrawal and submission of required documents.
              </p>
            </Card>

            {/* Scope of Policy */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-logo-navy mb-6 flex items-center">
                <FileText className="mr-3 text-logo-blue" size={24} />
                Scope of Policy
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start"><CheckCircle className="mr-3 mt-1 text-green-600 flex-shrink-0" size={18} />Applicable to all undergraduate programs.</li>
                <li className="flex items-start"><CheckCircle className="mr-3 mt-1 text-green-600 flex-shrink-0" size={18} />Covers admission cancellation and course withdrawal.</li>
                <li className="flex items-start"><CheckCircle className="mr-3 mt-1 text-green-600 flex-shrink-0" size={18} />Subject to institutional and regulatory norms.</li>
              </ul>
            </Card>

            {/* Refund Rules Table */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-logo-navy mb-6 flex items-center">
                <IndianRupee className="mr-3 text-logo-blue" size={24} />
                Refund Rules & Conditions
              </h2>
              <div className="overflow-x-auto rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-logo-navy/5">
                      <TableHead className="font-semibold text-logo-navy">Stage of Withdrawal</TableHead>
                      <TableHead className="font-semibold text-logo-navy text-center">Refund Percentage</TableHead>
                      <TableHead className="font-semibold text-logo-navy">Remarks</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {refundRules.map((rule, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{rule.stage}</TableCell>
                        <TableCell className="text-center font-bold text-logo-blue">{rule.percentage}</TableCell>
                        <TableCell className="text-muted-foreground">{rule.remarks}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Note: Table values may be modified as per institution policy and regulatory updates.
              </p>
            </Card>

            {/* Processing Fee */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-logo-navy mb-6 flex items-center">
                <Clock className="mr-3 text-logo-blue" size={24} />
                Processing Fee
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start"><CheckCircle className="mr-3 mt-1 text-green-600 flex-shrink-0" size={18} />A nominal administrative/processing fee will be deducted from the refund amount.</li>
                <li className="flex items-start"><CheckCircle className="mr-3 mt-1 text-green-600 flex-shrink-0" size={18} />Processing timelines: 15–30 working days after approval.</li>
              </ul>
            </Card>

            {/* Refund Procedure */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-logo-navy mb-6 flex items-center">
                <ClipboardList className="mr-3 text-logo-blue" size={24} />
                Refund Procedure
              </h2>
              <div className="space-y-4">
                {procedureSteps.map((step, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-logo-blue text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mr-4 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-muted-foreground pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Important Notes */}
            <Card className="p-8 border-yellow-200 bg-yellow-50">
              <h2 className="text-2xl font-bold text-yellow-900 mb-6 flex items-center">
                <AlertTriangle className="mr-3 text-yellow-600" size={24} />
                Important Notes
              </h2>
              <ul className="space-y-3 text-yellow-800">
                {importantNotes.map((note, i) => (
                  <li key={i} className="flex items-start">
                    <AlertTriangle className="mr-3 mt-1 text-yellow-600 flex-shrink-0" size={16} />
                    {note}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Contact */}
            <Card className="p-8 bg-gradient-to-r from-logo-navy to-logo-blue text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Contact for Refund Queries</h3>
                <p className="mb-6">Office of Admissions</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone size={18} />
                    <span>+91 80 6603 0240</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={18} />
                    <span>admissions@nationalcollege.edu.in</span>
                  </div>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </section>
    </AdmissionsLayout>
  );
};

export default FeeRefundPolicy;
