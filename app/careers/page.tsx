'use client';

import Navigation from '../components/Navigation';
import { useLanguage } from '../contexts/LanguageContext';

export default function CareersPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50/20" style={{ zIndex: -2 }}></div>

      <div className="relative z-10">
        <Navigation />

        <section className="relative py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
                {t('careers')}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
                Join our world-class team and help shape the future of global commerce
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Engineering</h3>
                  <p className="text-gray-600">Build cutting-edge technology solutions at global scale</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Business</h3>
                  <p className="text-gray-600">Drive growth and expansion across global markets</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Operations</h3>
                  <p className="text-gray-600">Ensure seamless global operations and customer success</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-600 mb-8">
                  Ready to make an impact? We're always looking for talented individuals to join our team.
                </p>
                <div className="space-y-4">
                  <p className="text-lg font-semibold text-purple-600">careers@elephant-global.com</p>
                  <p className="text-lg font-semibold text-purple-600">+86 400-800-0003</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}