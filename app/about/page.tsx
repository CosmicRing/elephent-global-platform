'use client';

import Navigation from '../components/Navigation';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Executive Level Premium Background System */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/20" style={{ zIndex: -2 }}></div>

      {/* Premium Corporate Pattern Overlay */}
      <div
        className="fixed inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2364748b' fill-opacity='1'%3E%3Cpath d='M20 20h15v15H20V20zm40 0h15v15H60V20zm40 0h15v15h-15V20zM10 40h15v15H10V40zm40 0h15v15H50V40zm40 0h15v15H90V40zM20 60h15v15H20V60zm40 0h15v15H60V60zm40 0h15v15h-15V60zM10 80h15v15H10V80zm40 0h15v15H50V80zm40 0h15v15H90V80z'/%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: -1
        }}
      ></div>

      {/* Executive Floating Elements */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-gradient-to-br from-blue-100/30 to-indigo-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-[60%] right-[10%] w-80 h-80 bg-gradient-to-br from-slate-100/40 to-gray-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-[20%] left-[30%] w-64 h-64 bg-gradient-to-br from-blue-200/20 to-cyan-100/15 rounded-full blur-2xl animate-ping opacity-50"></div>
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Executive Level About Hero */}
        <section className="relative">
          <div className="relative min-h-screen overflow-hidden">
            {/* Ultra-Premium Corporate About Background */}
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80")`
                }}
              >
                {/* Premium Corporate Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/96 via-blue-900/88 to-slate-900/96"></div>

                {/* Executive Glass Effect */}
                <div className="absolute inset-0 backdrop-blur-[2px]"></div>

                {/* Corporate Innovation Elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-[18%] left-[12%] w-[240px] h-[240px] bg-gradient-to-br from-blue-500/22 to-cyan-500/12 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute top-[68%] right-[18%] w-[210px] h-[210px] bg-gradient-to-br from-indigo-500/18 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                  <div className="absolute bottom-[22%] left-[38%] w-[190px] h-[190px] bg-gradient-to-br from-cyan-500/15 to-blue-500/8 rounded-full blur-2xl animate-ping opacity-80"></div>
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
                      <span className="text-white font-bold text-lg tracking-wide">{t('aboutElephentTechnology')}</span>
                      <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
                    </div>
                    <div className="w-px h-6 bg-white/30"></div>
                    <span className="text-blue-200 font-semibold">{t('globalTechLeadership')}</span>
                  </div>

                  {/* Executive Typography */}
                  <h1 className="mb-12">
                    <span className="block text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                      <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                        {t('aboutUs')}
                      </span>
                    </span>
                    <span className="block text-3xl sm:text-4xl lg:text-5xl font-light text-slate-300 mb-6 tracking-[0.2em]">
                      {t('corporateVision')}
                    </span>
                    <span className="block text-xl sm:text-2xl text-blue-200 max-w-6xl mx-auto font-medium">
                      {t('globalTechInnovationLeader')}
                    </span>
                  </h1>

                  <p className="text-2xl sm:text-3xl text-slate-200 mb-16 max-w-5xl mx-auto leading-relaxed font-light">
                    {t('elephentTechMissionStatement')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {t('corporateOverview')}
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {t('ourStory')}
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {t('elephentFoundationStory')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('innovation')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('innovationDescription')}
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('globalReach')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('globalReachDescription')}
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('excellence')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('excellenceDescription')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  {t('ourMission')}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t('missionStatement')}
                </p>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  {t('ourVision')}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t('visionStatement')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}