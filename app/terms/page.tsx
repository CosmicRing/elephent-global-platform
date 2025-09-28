'use client';

import Navigation from '../components/Navigation';
import { useLanguage } from '../contexts/LanguageContext';

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-green-50/20" style={{ zIndex: -2 }}></div>

      <div className="relative z-10">
        <Navigation />

        <section className="relative py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
                {t('termsOfService')}
              </h1>
              <p className="text-xl text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using Elephent Technology platform, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Use License</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Permission is granted to temporarily access our platform for personal, non-commercial transitory viewing only.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on our platform</li>
                  <li>Remove any copyright or other proprietary notations</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Platform Usage</h2>
                <p className="text-gray-600 leading-relaxed">
                  Users are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  Elephent Technology shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
                </p>
              </div>

              <div className="text-center mt-12">
                <p className="text-lg text-gray-600 mb-4">
                  For legal questions, contact us at:
                </p>
                <p className="text-lg font-semibold text-green-600">legal@elephant-global.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}