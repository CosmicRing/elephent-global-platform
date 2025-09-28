'use client';

import Navigation from '../components/Navigation';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Executive Level Premium Background System */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-green-50/20" style={{ zIndex: -2 }}></div>

      {/* Premium Corporate Pattern Overlay */}
      <div
        className="fixed inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2316a34a' fill-opacity='1'%3E%3Cpath d='M20 20h15v15H20V20zm40 0h15v15H60V20zm40 0h15v15h-15V20zM10 40h15v15H10V40zm40 0h15v15H50V40zm40 0h15v15H90V40zM20 60h15v15H20V60zm40 0h15v15H60V60zm40 0h15v15h-15V60zM10 80h15v15H10V80zm40 0h15v15H50V80zm40 0h15v15H90V80z'/%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: -1
        }}
      ></div>

      {/* Executive Floating Elements */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-gradient-to-br from-green-100/30 to-emerald-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-[60%] right-[10%] w-80 h-80 bg-gradient-to-br from-slate-100/40 to-gray-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-[20%] left-[30%] w-64 h-64 bg-gradient-to-br from-green-200/20 to-teal-100/15 rounded-full blur-2xl animate-ping opacity-50"></div>
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Executive Level Contact Hero */}
        <section className="relative">
          <div className="relative min-h-screen overflow-hidden">
            {/* Ultra-Premium Corporate Contact Background */}
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")`
                }}
              >
                {/* Premium Corporate Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/96 via-green-900/88 to-slate-900/96"></div>

                {/* Executive Glass Effect */}
                <div className="absolute inset-0 backdrop-blur-[2px]"></div>

                {/* Corporate Communication Elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-[18%] left-[12%] w-[240px] h-[240px] bg-gradient-to-br from-green-500/22 to-emerald-500/12 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute top-[68%] right-[18%] w-[210px] h-[210px] bg-gradient-to-br from-teal-500/18 to-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                  <div className="absolute bottom-[22%] left-[38%] w-[190px] h-[190px] bg-gradient-to-br from-emerald-500/15 to-green-500/8 rounded-full blur-2xl animate-ping opacity-80"></div>
                </div>
              </div>

              {/* Sophisticated Corporate Text Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-black/45"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
              <div className="w-full">
                {/* Executive Level Branding */}
                <div className="text-center mb-16">
                  {/* Premium Status Badge */}
                  <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20 mb-10 shadow-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-white font-bold text-lg tracking-wide">{t('globalContactCenter')}</span>
                      <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
                    </div>
                    <div className="w-px h-6 bg-white/30"></div>
                    <span className="text-green-200 font-semibold">{t('247Support')}</span>
                  </div>

                  {/* Executive Typography */}
                  <h1 className="mb-12">
                    <span className="block text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                      <span className="bg-gradient-to-r from-white via-green-100 to-emerald-200 bg-clip-text text-transparent">
                        {t('contact')}
                      </span>
                    </span>
                    <span className="block text-3xl sm:text-4xl lg:text-5xl font-light text-slate-300 mb-6 tracking-[0.2em]">
                      {t('globalSupport')}
                    </span>
                    <span className="block text-xl sm:text-2xl text-green-200 max-w-6xl mx-auto font-medium">
                      {t('enterpriseCustomerSupport')}
                    </span>
                  </h1>

                  <p className="text-2xl sm:text-3xl text-slate-200 mb-16 max-w-5xl mx-auto leading-relaxed font-light">
                    {t('contactUsDescription')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t('globalContactChannels')}
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {t('getInTouch')}
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {t('contactDescription')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* B2B Contact */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('b2bSupport')}</h3>
                <p className="text-gray-600 mb-4">{t('b2bSupportDescription')}</p>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-red-600">wholesale@elephant-global.com</p>
                  <p className="text-lg font-semibold text-red-600">+86 400-800-1000</p>
                  <p className="text-sm text-gray-500">{t('weekdaysNineToSix')}</p>
                </div>
              </div>

              {/* B2C Contact */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('b2cSupport')}</h3>
                <p className="text-gray-600 mb-4">{t('b2cSupportDescription')}</p>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-green-600">store@elephant-global.com</p>
                  <p className="text-lg font-semibold text-green-600">+86 400-800-2000</p>
                  <p className="text-sm text-gray-500">{t('roundTheClock')}</p>
                </div>
              </div>

              {/* C2C Contact */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('c2cSupport')}</h3>
                <p className="text-gray-600 mb-4">{t('c2cSupportDescription')}</p>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-purple-600">c2c@elephant-global.com</p>
                  <p className="text-lg font-semibold text-purple-600">+86 400-800-3000</p>
                  <p className="text-sm text-gray-500">{t('weekdaysNineToSix')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {t('sendMessage')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('contactFormDescription')}
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('fullName')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder={t('enterFullName')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('email')}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder={t('enterEmail')}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('company')}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder={t('enterCompany')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('subject')}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder={t('enterSubject')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('message')}
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder={t('enterMessage')}
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-colors shadow-lg"
                >
                  {t('sendMessage')}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}