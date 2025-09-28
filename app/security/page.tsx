'use client';

import Navigation from '../components/Navigation';
import { useLanguage } from '../contexts/LanguageContext';

export default function SecurityPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-red-50/20" style={{ zIndex: -2 }}></div>

      <div className="relative z-10">
        <Navigation />

        <section className="relative py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
                {t('security')}
              </h1>
              <p className="text-xl text-gray-600">
                Enterprise-grade security protecting your data and transactions
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Security Certifications</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our platform meets the highest industry security standards and certifications.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-lg font-semibold text-gray-900">ISO 27001</div>
                    <div className="text-sm text-gray-600">Certified</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-lg font-semibold text-gray-900">SOC 2 Type II</div>
                    <div className="text-sm text-gray-600">Compliant</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-lg font-semibold text-gray-900">GDPR</div>
                    <div className="text-sm text-gray-600">Compliant</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>End-to-end encryption for all data transmission</li>
                  <li>AES-256 encryption for data at rest</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Multi-factor authentication (MFA) support</li>
                  <li>24/7 security monitoring and incident response</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Infrastructure Security</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our infrastructure is built on Fortune 500 grade security principles:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Cloud infrastructure with 99.8% uptime SLA</li>
                  <li>Distributed denial-of-service (DDoS) protection</li>
                  <li>Regular automated backups and disaster recovery</li>
                  <li>Network segmentation and access controls</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsible Disclosure</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you discover a security vulnerability, please report it to our security team. We appreciate responsible disclosure and will work with you to address any issues promptly.
                </p>
              </div>

              <div className="text-center mt-12">
                <p className="text-lg text-gray-600 mb-4">
                  For security concerns, contact us at:
                </p>
                <p className="text-lg font-semibold text-red-600">security@elephant-global.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}