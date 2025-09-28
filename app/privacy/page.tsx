'use client';

import Navigation from '../components/Navigation';
import { useLanguage } from '../contexts/LanguageContext';

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/20" style={{ zIndex: -2 }}></div>

      <div className="relative z-10">
        <Navigation />

        <section className="relative py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
                {t('privacyPolicy')}
              </h1>
              <p className="text-xl text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Personal information (name, email, address)</li>
                  <li>Payment information</li>
                  <li>Communication preferences</li>
                  <li>Usage data and analytics</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We use the information we collect to provide, maintain, and improve our services.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Process transactions and fulfill orders</li>
                  <li>Provide customer support</li>
                  <li>Send important updates and notifications</li>
                  <li>Improve our platform and services</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div className="text-center mt-12">
                <p className="text-lg text-gray-600 mb-4">
                  For privacy-related questions, contact us at:
                </p>
                <p className="text-lg font-semibold text-blue-600">privacy@elephant-global.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}