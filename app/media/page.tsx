'use client';

import Navigation from '../components/Navigation';
import { useLanguage } from '../contexts/LanguageContext';

export default function MediaPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-orange-50/20" style={{ zIndex: -2 }}></div>

      <div className="relative z-10">
        <Navigation />

        <section className="relative py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
                {t('mediaCenter')}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
                Latest news, press releases, and media resources from Elephent Technology
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Press Releases</h3>
                  <p className="text-gray-600">Latest company announcements and business updates</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Media Kit</h3>
                  <p className="text-gray-600">Brand assets, logos, and multimedia resources</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Press Contact</h3>
                  <p className="text-gray-600">Media inquiries and interview requests</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-600 mb-8">
                  For media inquiries, press materials, or interview requests, please contact our media relations team.
                </p>
                <div className="space-y-4">
                  <p className="text-lg font-semibold text-orange-600">media@elephant-global.com</p>
                  <p className="text-lg font-semibold text-orange-600">+86 400-800-0002</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}