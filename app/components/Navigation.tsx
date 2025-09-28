'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function Navigation() {
  const { language, setLanguage, isEnglish, t } = useLanguage();

  return (
    <>
      {/* Executive Level Top Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-3 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-slate-300 font-medium">{t('globalOperationsCenter')}</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <span className="text-amber-100 font-semibold">{t('globalStats')}</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/investor-relations" className="text-slate-300 hover:text-white transition-colors font-medium">{t('investorRelations')}</a>
              <span className="text-slate-500">|</span>
              <a href="/media" className="text-slate-300 hover:text-white transition-colors font-medium">{t('mediaCenter')}</a>
              <span className="text-slate-500">|</span>
              <a href="/careers" className="text-slate-300 hover:text-white transition-colors font-medium">{t('careers')}</a>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Executive Navigation */}
      <nav className="bg-white/95 backdrop-blur-xl border-b border-slate-200/60 relative z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Executive Level Brand Identity */}
            <div className="flex items-center space-x-12">
              <div className="flex items-center space-x-5">
                {/* Premium Corporate Logo */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 rounded-3xl flex items-center justify-center shadow-2xl border border-amber-200/30">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center">
                      <span className="text-slate-900 font-black text-2xl">E</span>
                    </div>
                  </div>
                </div>

                {/* Executive Brand Typography */}
                <div className="flex flex-col">
                  <a href="/" className="group flex items-center space-x-3">
                    <span className="text-4xl font-black bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent tracking-tight group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300">
                      ELEPHENT
                    </span>
                    <span className="text-xl font-light text-slate-500 tracking-[0.2em]">TECHNOLOGY</span>
                  </a>
                  <div className="flex items-center space-x-3 mt-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    <span className="text-sm font-bold text-slate-600 tracking-wide uppercase">
                      {t('globalEnterprisePlatform')}
                    </span>
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    <span className="text-sm text-slate-400 font-medium">Fortune 500 Grade</span>
                  </div>
                </div>
              </div>

              {/* Executive Level Navigation Suite */}
              <div className="hidden lg:flex items-center space-x-12">
                {/* Enterprise Solutions Mega Menu */}
                <div className="relative group">
                  <button className="flex items-center text-slate-700 hover:text-amber-600 font-bold transition-all duration-300 hover:scale-105 py-3 px-2">
                    <div className="relative mr-3">
                      <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                    </div>
                    <span className="text-lg tracking-wide">{t('enterpriseSolutions')}</span>
                    <svg className="w-5 h-5 ml-3 text-slate-400 group-hover:text-amber-500 group-hover:rotate-180 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Executive Mega Menu Dropdown */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[95vw] max-w-[500px] lg:w-[500px] lg:left-0 lg:translate-x-0 bg-white/98 backdrop-blur-xl border border-slate-200/80 rounded-3xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-50 overflow-hidden">
                    <div className="relative">
                      {/* Premium Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-amber-50/30"></div>

                      <div className="relative p-10">
                        {/* Executive Header */}
                        <div className="mb-10 pb-8 border-b border-slate-200">
                          <div className="flex items-center space-x-4 mb-3">
                            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                            <h3 className="text-3xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                              {t('enterpriseSolutions')}
                            </h3>
                          </div>
                          <p className="text-slate-600 font-medium text-lg leading-relaxed">
                            {t('fortune500Infrastructure')}
                          </p>
                        </div>

                        {/* Executive Solutions Portfolio */}
                        <div className="space-y-6">
                          {/* B2B Enterprise Solutions */}
                          <a href="/b2b" className="group relative block p-6 rounded-3xl bg-gradient-to-r from-slate-50 to-red-50/30 hover:from-red-50 hover:to-red-100/50 border border-slate-200/50 hover:border-red-200 transition-all duration-300 hover:shadow-xl">
                            <div className="flex items-start space-x-5">
                              <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-red-600 via-red-500 to-orange-500 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                  </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center">
                                  <span className="text-xs font-black text-slate-900">B</span>
                                </div>
                              </div>

                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-3">
                                  <h4 className="font-black text-slate-900 text-xl">{t('b2bEnterpriseWholesale')}</h4>
                                  <span className="px-3 py-1.5 bg-red-100 text-red-700 text-xs font-bold rounded-full border border-red-200">ENTERPRISE</span>
                                </div>
                                <p className="text-slate-600 font-medium mb-3 leading-relaxed">
                                  {t('globalIndustrialProcurement')}
                                </p>
                                <div className="flex items-center space-x-4 text-sm text-slate-500 font-medium">
                                  <span>• {t('volumeLabel')}</span>
                                  <span>• {t('countriesNavLabel')}</span>
                                  <span>• {t('suppliersLabel')}</span>
                                </div>
                              </div>

                              <div className="text-red-400 group-hover:text-red-600 group-hover:translate-x-2 transition-all duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </div>
                          </a>

                          {/* B2C Consumer Solutions */}
                          <a href="/b2c" className="group relative block p-6 rounded-3xl bg-gradient-to-r from-slate-50 to-green-50/30 hover:from-green-50 hover:to-green-100/50 border border-slate-200/50 hover:border-green-200 transition-all duration-300 hover:shadow-xl">
                            <div className="flex items-start space-x-5">
                              <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-600 via-green-500 to-teal-500 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                  </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center">
                                  <span className="text-xs font-black text-slate-900">C</span>
                                </div>
                              </div>

                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-3">
                                  <h4 className="font-black text-slate-900 text-xl">{t('b2cEnterpriseStore')}</h4>
                                  <span className="px-3 py-1.5 bg-green-100 text-green-700 text-xs font-bold rounded-full border border-green-200">CONSUMER</span>
                                </div>
                                <p className="text-slate-600 font-medium mb-3 leading-relaxed">
                                  {t('globalConsumerMarketNav')}
                                </p>
                                <div className="flex items-center space-x-4 text-sm text-slate-500 font-medium">
                                  <span>• {t('usersLabel')}</span>
                                  <span>• {t('eightCountries')}</span>
                                  <span>• {t('satisfactionLabel')}</span>
                                </div>
                              </div>

                              <div className="text-green-400 group-hover:text-green-600 group-hover:translate-x-2 transition-all duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </div>
                          </a>

                          {/* C2C Creator Solutions */}
                          <a href="/c2c" className="group relative block p-6 rounded-3xl bg-gradient-to-r from-slate-50 to-purple-50/30 hover:from-purple-50 hover:to-purple-100/50 border border-slate-200/50 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
                            <div className="flex items-start space-x-5">
                              <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                  </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center">
                                  <span className="text-xs font-black text-slate-900">I</span>
                                </div>
                              </div>

                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-3">
                                  <h4 className="font-black text-slate-900 text-xl">{t('c2cInnovationCenter')}</h4>
                                  <span className="px-3 py-1.5 bg-purple-100 text-purple-700 text-xs font-bold rounded-full border border-purple-200">INNOVATION</span>
                                </div>
                                <p className="text-slate-600 font-medium mb-3 leading-relaxed">
                                  {t('creatorMarketplaceNav')}
                                </p>
                                <div className="flex items-center space-x-4 text-sm text-slate-500 font-medium">
                                  <span>• {t('creatorsNavLabel')}</span>
                                  <span>• {t('oneHundredTwentyCountries')}</span>
                                  <span>• {t('revenueLabel')}</span>
                                </div>
                              </div>

                              <div className="text-purple-400 group-hover:text-purple-600 group-hover:translate-x-2 transition-all duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </div>
                          </a>

                          {/* AI Aggregation - Premium Feature */}
                          <a href="/ai-aggregation" className="group relative block p-6 rounded-3xl bg-gradient-to-r from-amber-50 via-orange-50/50 to-yellow-50/30 hover:from-amber-100 hover:to-orange-100/50 border-2 border-dashed border-amber-300 hover:border-amber-400 transition-all duration-300 hover:shadow-xl">
                            <div className="flex items-start space-x-5">
                              <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-500 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center animate-pulse">
                                  <span className="text-xs font-black text-white">AI</span>
                                </div>
                              </div>

                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-3">
                                  <h4 className="font-black text-slate-900 text-xl">{t('aiAggregationEngineNav')}</h4>
                                  <span className="px-3 py-1.5 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs font-bold rounded-full border border-amber-200">EXCLUSIVE</span>
                                </div>
                                <p className="text-slate-600 font-medium mb-3 leading-relaxed">
                                  {t('aiDrivenOptimization')}
                                </p>
                                <div className="flex items-center space-x-4 text-sm text-slate-500 font-medium">
                                  <span>• {t('accuracyLabel')}</span>
                                  <span>• {t('responseLabel')}</span>
                                  <span>• {t('efficiencyLabel')}</span>
                                </div>
                              </div>

                              <div className="text-amber-500 group-hover:text-amber-600 group-hover:translate-x-2 transition-all duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </div>

                            {/* Premium Sparkle Effects */}
                            <div className="absolute top-3 right-3 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-75"></div>
                            <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse delay-300"></div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Executive Navigation */}
                <a href="/vision" className="text-slate-700 hover:text-amber-600 font-bold text-lg transition-all duration-300 hover:scale-105">
                  {t('vision')}
                </a>
                <a href="/about" className="text-slate-700 hover:text-amber-600 font-bold text-lg transition-all duration-300 hover:scale-105">
                  {t('about')}
                </a>
                <a href="/contact" className="text-slate-700 hover:text-amber-600 font-bold text-lg transition-all duration-300 hover:scale-105">
                  {t('contact')}
                </a>
              </div>
            </div>

            {/* Executive Right Side - Premium Actions */}
            <div className="flex items-center space-x-8">
              {/* Premium Language Selector */}
              <div className="relative group">
                <button className="flex items-center text-slate-700 hover:text-amber-600 font-bold transition-all duration-300 hover:scale-105 bg-slate-50 hover:bg-amber-50 px-4 py-3 rounded-2xl border border-slate-200 hover:border-amber-300">
                  <svg className="w-5 h-5 mr-3 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <span className="text-base font-bold">{language}</span>
                  <svg className="w-4 h-4 ml-2 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Executive Language Dropdown */}
                <div className="absolute top-full right-0 mt-3 w-48 bg-white/98 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50 overflow-hidden">
                  <div className="p-3">
                    <button
                      onClick={() => setLanguage('English')}
                      className={`flex items-center w-full text-left px-4 py-3 text-base rounded-xl transition-all duration-200 ${language === 'English' ? 'bg-amber-50 text-amber-700 font-bold border border-amber-200' : 'text-slate-700 hover:bg-slate-50'}`}
                    >
                      <span className="mr-3 text-lg">🇺🇸</span>
                      <span>English</span>
                      {language === 'English' && (
                        <svg className="w-5 h-5 ml-auto text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                    <button
                      onClick={() => setLanguage('中文')}
                      className={`flex items-center w-full text-left px-4 py-3 text-base rounded-xl transition-all duration-200 ${language === '中文' ? 'bg-amber-50 text-amber-700 font-bold border border-amber-200' : 'text-slate-700 hover:bg-slate-50'}`}
                    >
                      <span className="mr-3 text-lg">🇨🇳</span>
                      <span>中文</span>
                      {language === '中文' && (
                        <svg className="w-5 h-5 ml-auto text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Executive AI Access Button */}
              <a
                href="/ai-aggregation"
                className="hidden lg:flex items-center gap-3 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 text-white px-6 py-3.5 rounded-2xl hover:from-amber-600 hover:via-orange-600 hover:to-yellow-600 font-bold transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-base">{t('aiEngine')}</span>
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
              </a>

              {/* Executive Login Portal */}
              <a href="/admin" className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 text-white px-8 py-3.5 rounded-2xl hover:from-slate-700 hover:via-slate-600 hover:to-slate-800 font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3 border border-slate-600/50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-base">{t('executivePortal')}</span>
              </a>

              {/* Mobile Menu Button */}
              <button className="lg:hidden p-3 rounded-2xl hover:bg-slate-100 transition-colors border border-slate-200">
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}