'use client';

import Navigation from '../components/Navigation';
import { useLanguage } from '../contexts/LanguageContext';

export default function InvestorRelationsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/20" style={{ zIndex: -2 }}></div>

      <div className="relative z-10">
        <Navigation />

        <section className="relative py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
                {t('investorRelations')}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
                Building the future of global commerce through innovative technology solutions
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-black text-indigo-600 mb-2">$2.8B+</div>
                  <div className="text-gray-600">Annual Revenue</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-black text-green-600 mb-2">50K+</div>
                  <div className="text-gray-600">Enterprise Partners</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-black text-blue-600 mb-2">107</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-black text-purple-600 mb-2">99.8%</div>
                  <div className="text-gray-600">Platform Uptime</div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-600 mb-8">
                  For investor inquiries and financial information, please contact our investor relations team.
                </p>
                <div className="space-y-4">
                  <p className="text-lg font-semibold text-indigo-600">investors@elephant-global.com</p>
                  <p className="text-lg font-semibold text-indigo-600">+86 400-800-0001</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}