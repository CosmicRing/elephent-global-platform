'use client';

import Navigation from './components/Navigation';
import { useLanguage } from './contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Executive Level Premium Background System */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-amber-50/20" style={{ zIndex: -2 }}></div>

      {/* Premium Corporate Pattern Overlay */}
      <div
        className="fixed inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23334155' fill-opacity='1'%3E%3Cpath d='M20 20h10v10H20V20zm40 0h10v10H60V20zm40 0h10v10h-10V20zM10 40h10v10H10V40zm40 0h10v10H50V40zm40 0h10v10H90V40zM20 60h10v10H20V60zm40 0h10v10H60V60zm40 0h10v10h-10V60zM10 80h10v10H10V80zm40 0h10v10H50V80zm40 0h10v10H90V80z'/%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: -1
        }}
      ></div>

      {/* Executive Floating Elements */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-gradient-to-br from-amber-100/30 to-orange-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-[60%] right-[10%] w-80 h-80 bg-gradient-to-br from-slate-100/40 to-gray-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-[20%] left-[30%] w-64 h-64 bg-gradient-to-br from-amber-200/20 to-yellow-100/15 rounded-full blur-2xl animate-ping opacity-50"></div>
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Luxury Executive Hero with Premium Real Images */}
        <section className="relative">
          <div className="relative min-h-screen overflow-hidden">
            {/* Luxury Corporate Hero with Real World Business Imagery */}
            <div className="absolute inset-0">
              {/* Ultra-Premium Real Business Background */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`
                }}
              >
                {/* Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>

                {/* Premium Glass Effect Layer */}
                <div className="absolute inset-0 backdrop-blur-[2px]"></div>

                {/* Executive Ambient Particles */}
                <div className="absolute inset-0">
                  <div className="absolute top-[15%] left-[8%] w-[300px] h-[300px] bg-gradient-to-br from-amber-400/20 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute top-[60%] right-[12%] w-[250px] h-[250px] bg-gradient-to-br from-emerald-400/15 to-teal-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
                  <div className="absolute bottom-[25%] left-[35%] w-[200px] h-[200px] bg-gradient-to-br from-blue-400/12 to-purple-500/6 rounded-full blur-2xl animate-ping opacity-60"></div>
                </div>
              </div>

              {/* Sophisticated Text Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
              <div className="w-full">
                {/* Executive Level Branding */}
                <div className="text-center mb-16">
                  {/* Premium Status Badge */}
                  <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20 mb-10 shadow-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-white font-bold text-lg tracking-wide">{t('globalOperationsActiveText')}</span>
                      <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
                    </div>
                    <div className="w-px h-6 bg-white/30"></div>
                    <span className="text-amber-200 font-semibold">{t('fortune500GradePlatform')}</span>
                  </div>

                  {/* Executive Typography */}
                  <h1 className="mb-12">
                    <span className="block text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                      <span className="bg-gradient-to-r from-white via-amber-100 to-orange-200 bg-clip-text text-transparent">
                        {t('elephentTechnology')}
                      </span>
                    </span>
                    <span className="block text-3xl sm:text-4xl lg:text-5xl font-light text-slate-300 mb-6 tracking-[0.2em]">
                      {t('technologySubtitle')}
                    </span>
                    <span className="block text-xl sm:text-2xl text-amber-200 max-w-6xl mx-auto font-medium">
                      {t('globalTechInfrastructure')}
                    </span>
                  </h1>

                  <p className="text-2xl sm:text-3xl text-slate-200 mb-16 max-w-5xl mx-auto leading-relaxed font-light">
                    {t('poweringText')} <span className="text-amber-400 font-semibold">{t('billionAmount')}</span> {t('globalTransactionsText')}
                    <span className="text-amber-400 font-semibold"> {t('countriesCount')}</span> {t('withInfrastructureText')}
                  </p>

                  {/* Executive Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                      <a href="/ai-aggregation" className="relative inline-flex items-center gap-4 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 text-slate-900 px-12 py-6 rounded-2xl text-xl font-black hover:from-amber-400 hover:via-orange-400 hover:to-yellow-400 transition-all shadow-2xl transform hover:scale-105 border border-amber-300">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <div>
                          <span className="block">{t('aiAggregationEngineBtn')}</span>
                          <span className="text-sm font-medium opacity-80">{t('experienceTheFutureText')}</span>
                        </div>
                      </a>
                    </div>
                    <a href="#enterprise" className="inline-flex items-center gap-4 border-2 border-white/80 text-white hover:bg-white hover:text-slate-900 px-12 py-6 rounded-2xl text-xl font-bold transition-all backdrop-blur-sm hover:backdrop-blur-none shadow-xl">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      <div>
                        <span className="block">{t('enterpriseSolutionsFullBtn')}</span>
                        <span className="text-sm font-medium opacity-80">{t('globalInfrastructureText')}</span>
                      </div>
                    </a>
                  </div>

                  {/* Executive Level Metrics */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:border-amber-300/50">
                      <div className="text-center">
                        <div className="text-5xl lg:text-6xl font-black text-amber-400 mb-4 group-hover:scale-110 transition-transform">107</div>
                        <div className="text-slate-200 font-bold text-xl mb-2">{t('countriesLabel')}</div>
                        <div className="text-slate-400 text-sm font-medium">{t('globalPresence')}</div>
                        <div className="mt-4 w-full bg-white/20 rounded-full h-2 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full w-full transform origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-700"></div>
                        </div>
                      </div>
                    </div>

                    <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:border-amber-300/50">
                      <div className="text-center">
                        <div className="text-5xl lg:text-6xl font-black text-emerald-400 mb-4 group-hover:scale-110 transition-transform">$2.8B+</div>
                        <div className="text-slate-200 font-bold text-xl mb-2">{t('revenue')}</div>
                        <div className="text-slate-400 text-sm font-medium">{t('annualTransactions')}</div>
                        <div className="mt-4 w-full bg-white/20 rounded-full h-2 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-emerald-400 to-green-400 rounded-full w-4/5 transform origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-700"></div>
                        </div>
                      </div>
                    </div>

                    <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:border-amber-300/50">
                      <div className="text-center">
                        <div className="text-5xl lg:text-6xl font-black text-blue-400 mb-4 group-hover:scale-110 transition-transform">50K+</div>
                        <div className="text-slate-200 font-bold text-xl mb-2">{t('partners')}</div>
                        <div className="text-slate-400 text-sm font-medium">{t('verifiedSuppliers')}</div>
                        <div className="mt-4 w-full bg-white/20 rounded-full h-2 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full w-3/4 transform origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-700"></div>
                        </div>
                      </div>
                    </div>

                    <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:border-amber-300/50">
                      <div className="text-center">
                        <div className="text-5xl lg:text-6xl font-black text-purple-400 mb-4 group-hover:scale-110 transition-transform">99.8%</div>
                        <div className="text-slate-200 font-bold text-xl mb-2">{t('uptime')}</div>
                        <div className="text-slate-400 text-sm font-medium">{t('enterpriseSLA')}</div>
                        <div className="mt-4 w-full bg-white/20 rounded-full h-2 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full w-full transform origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-700"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Executive Trust Indicators */}
                  <div className="flex justify-center mt-16">
                    <div className="inline-flex items-center gap-10 bg-white/5 backdrop-blur-sm px-12 py-6 rounded-2xl border border-white/10">
                      <div className="flex items-center gap-3 text-white/90">
                        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span className="font-bold tracking-wide">{t('iso27001')}</span>
                      </div>
                      <div className="w-px h-6 bg-white/20"></div>
                      <div className="flex items-center gap-3 text-white/90">
                        <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-300"></div>
                        <span className="font-bold tracking-wide">{t('soc2')}</span>
                      </div>
                      <div className="w-px h-6 bg-white/20"></div>
                      <div className="flex items-center gap-3 text-white/90">
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-600"></div>
                        <span className="font-bold tracking-wide">{t('gdpr')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Luxury AI Technology Showcase with Real Tech Imagery */}
        <section id="ai-showcase" className="relative py-32 overflow-hidden">
          {/* Premium Technology Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2125&q=80")`
            }}
          >
            {/* Sophisticated Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/97 via-slate-50/95 to-amber-50/92"></div>

            {/* Premium Glass Effect */}
            <div className="absolute inset-0 backdrop-blur-[1px]"></div>

            {/* Floating Tech Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-[20%] left-[10%] w-[150px] h-[150px] bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute top-[70%] right-[15%] w-[120px] h-[120px] bg-gradient-to-br from-purple-500/8 to-pink-500/4 rounded-full blur-2xl animate-pulse delay-700"></div>
              <div className="absolute bottom-[30%] left-[60%] w-[100px] h-[100px] bg-gradient-to-br from-amber-500/12 to-orange-500/6 rounded-full blur-xl animate-ping opacity-70"></div>
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-8 shadow-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {t('aiElephantEngine')}
              </div>
              <h2 className="text-5xl sm:text-6xl font-black text-slate-900 mb-8 leading-tight">
                <span className="bg-gradient-to-r from-slate-800 via-slate-600 to-amber-600 bg-clip-text text-transparent">
                  {t('revolutionizingTitle')}
                </span>
                <span className="block text-amber-600">{t('globalCommerceTitle')}</span>
              </h2>
              <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
                {t('worldFirstAI')}
                <span className="text-amber-600 font-bold"> {t('b2bB2cC2cEcosystems')} </span>
                {t('ecosystemsRealTime')}
              </p>
            </div>

            {/* Executive CTA */}
            <div className="text-center">
              <div className="space-y-8">
                <div className="relative group">
                  {/* Luxury Button Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

                  <a
                    href="/ai-aggregation"
                    className="relative inline-block bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 text-white px-16 py-6 rounded-2xl text-2xl font-black hover:from-amber-400 hover:via-orange-400 hover:to-yellow-400 transition-all duration-500 shadow-2xl hover:shadow-[0_30px_100px_-12px_rgba(251,146,60,0.4)] transform hover:scale-105 hover:-translate-y-1 border border-amber-300/50 hover:border-amber-200"
                  >
                    {/* Premium Button Inner Glow */}
                    <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative">{t('experienceAIEngine')}</span>
                  </a>

                  {/* Floating Sparkles */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-orange-300 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-200 transition-opacity duration-500"></div>
                </div>
                <div className="flex items-center justify-center gap-12 text-lg text-slate-600 font-medium">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span>{t('freeEnterpriseTrial')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span>{t('noSetupRequired')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>{t('instantResults')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Luxury Enterprise Solutions with Premium Business Imagery */}
        <section id="enterprise" className="relative py-32 overflow-hidden">
          {/* Ultra-Premium Executive Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1565367785343-8e71dc824ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`
            }}
          >
            {/* Sophisticated Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/96 via-slate-800/94 to-slate-900/96"></div>

            {/* Executive Glass Layer */}
            <div className="absolute inset-0 backdrop-blur-[1.5px]"></div>

            {/* Premium Ambient Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-[25%] left-[5%] w-[200px] h-[200px] bg-gradient-to-br from-amber-500/15 to-orange-500/8 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-[65%] right-[8%] w-[180px] h-[180px] bg-gradient-to-br from-emerald-500/12 to-teal-500/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute bottom-[20%] left-[50%] w-[160px] h-[160px] bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-full blur-2xl animate-ping opacity-80"></div>
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="text-center mb-20">
              <h2 className="text-5xl sm:text-6xl font-black mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-amber-100 to-orange-200 bg-clip-text text-transparent">
                  {t('enterpriseSolutionsTitle')}
                </span>
              </h2>
              <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                {t('fortune500Infrastructure')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {/* B2B Enterprise */}
              <a href="/b2b" className="group relative block">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:border-amber-300/50">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6">{t('b2bEnterpriseTitle')}</h3>
                  <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                    {t('b2bEnterpriseDesc')}
                  </p>
                  <div className="text-amber-400 font-bold text-lg">{t('b2bAnnualVolume')}</div>
                </div>
              </a>

              {/* B2C Consumer */}
              <a href="/b2c" className="group relative block">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:border-amber-300/50">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6">{t('b2cMarketplaceTitle')}</h3>
                  <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                    {t('b2cMarketplaceDesc')}
                  </p>
                  <div className="text-amber-400 font-bold text-lg">{t('b2cActiveUsers')}</div>
                </div>
              </a>

              {/* C2C Innovation */}
              <a href="/c2c" className="group relative block">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:border-amber-300/50">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6">{t('c2cInnovationTitle')}</h3>
                  <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                    {t('c2cInnovationDesc')}
                  </p>
                  <div className="text-amber-400 font-bold text-lg">{t('c2cCreators')}</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Executive Footer */}
        <footer className="bg-slate-950 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center">
                  <span className="text-slate-900 font-black text-2xl">E</span>
                </div>
                <div>
                  <h3 className="text-3xl font-black">{t('elephentTechnologyFull')}</h3>
                  <p className="text-slate-400">{t('fortune500Platform')}</p>
                </div>
              </div>
              <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg">
                {t('copyrightText')}
                {t('globalOpsCenter')} | {t('iso27001Certified')}
              </p>
              <div className="flex items-center justify-center gap-8 text-slate-500">
                <a href="/privacy" className="hover:text-white transition-colors">{t('privacyPolicy')}</a>
                <span>|</span>
                <a href="/terms" className="hover:text-white transition-colors">{t('termsOfService')}</a>
                <span>|</span>
                <a href="/security" className="hover:text-white transition-colors">{t('security')}</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}