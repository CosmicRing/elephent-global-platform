'use client';

import Navigation from '../components/Navigation';
import { useLanguage } from '../contexts/LanguageContext';

export default function B2CPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen relative">
      {/* B2C Background Pattern */}
      <div
        className="fixed inset-0 bg-green-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f0fdf4' fill-opacity='0.5'%3E%3Crect x='5' y='5' width='6' height='6' rx='1'/%3E%3Crect x='19' y='5' width='6' height='6' rx='1'/%3E%3Crect x='5' y='19' width='6' height='6' rx='1'/%3E%3Crect x='19' y='19' width='6' height='6' rx='1'/%3E%3Ccircle cx='15' cy='15' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: -1
        }}
      ></div>
      <div className="relative z-10">
        <Navigation />
      {/* Luxury Shopping Experience Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Premium Consumer Shopping Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`
          }}
        >
          {/* Sophisticated E-commerce Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/96 via-emerald-800/94 to-teal-900/96"></div>

          {/* Premium Glass Effect */}
          <div className="absolute inset-0 backdrop-blur-[2px]"></div>

          {/* Shopping Ambient Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-[25%] left-[8%] w-[220px] h-[220px] bg-gradient-to-br from-green-500/18 to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-[65%] right-[12%] w-[190px] h-[190px] bg-gradient-to-br from-teal-500/15 to-cyan-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-[30%] left-[45%] w-[170px] h-[170px] bg-gradient-to-br from-emerald-500/12 to-green-500/6 rounded-full blur-2xl animate-ping opacity-75"></div>
          </div>
        </div>

        {/* Elegant Shopping Text Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/35"></div>

        {/* Dynamic Shopping Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-400/10 rounded-full blur-2xl animate-ping"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            {/* Premium Brand Badge */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 bg-emerald-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-400/30 mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-bold text-lg">{t('b2cEnterpriseStore')}</span>
                <div className="w-px h-5 bg-white/30"></div>
                <span className="text-emerald-200 text-sm">{t('globalEcommerceCertified')}</span>
              </div>
            </div>

            {/* Premium Typography */}
            <h1 className="mb-8">
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-white via-emerald-100 to-teal-200 bg-clip-text text-transparent leading-tight">
                {t('techProductsGlobalDirect')}
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-200 mb-4">
                {t('smartStoreGlobalData')}
              </span>
              <span className="block text-lg text-emerald-300 max-w-4xl mx-auto">
                {t('b2cPlatformDescription')}
              </span>
            </h1>

                    {/* Executive Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                        <a href="#marketplace" className="relative inline-flex items-center gap-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 text-slate-900 px-12 py-6 rounded-2xl text-xl font-black hover:from-emerald-400 hover:via-teal-400 hover:to-green-400 transition-all shadow-2xl transform hover:scale-105 border border-emerald-300">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                          <div>
                            <span className="block">{t('launchMarketplace')}</span>
                            <span className="text-sm font-medium opacity-80">{t('enterpriseCommerce')}</span>
                          </div>
                        </a>
                      </div>
                      <a href="#success-stories" className="inline-flex items-center gap-4 border-2 border-white/80 text-white hover:bg-white hover:text-slate-900 px-12 py-6 rounded-2xl text-xl font-bold transition-all backdrop-blur-sm hover:backdrop-blur-none shadow-xl">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <div>
                          <span className="block">{t('successStories')}</span>
                          <span className="text-sm font-medium opacity-80">{t('caseStudies')}</span>
                        </div>
                      </a>
                    </div>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-4xl lg:text-5xl font-black text-emerald-400 mb-3 group-hover:scale-110 transition-transform">2,000+</div>
                <div className="text-emerald-200 font-semibold text-lg mb-1">{t('enrolledEnterprises')}</div>
                <div className="text-emerald-300 text-sm">{t('globalTechBrands')}</div>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-4xl lg:text-5xl font-black text-teal-400 mb-3 group-hover:scale-110 transition-transform">80+</div>
                <div className="text-emerald-200 font-semibold text-lg mb-1">{t('salesCountries')}</div>
                <div className="text-emerald-300 text-sm">{t('globalMarketCoverage')}</div>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-4xl lg:text-5xl font-black text-yellow-400 mb-3 group-hover:scale-110 transition-transform">500万+</div>
                <div className="text-emerald-200 font-semibold text-lg mb-1">{t('monthlyActiveUsers')}</div>
                <div className="text-emerald-300 text-sm">{t('activeShoppingUsers')}</div>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-4xl lg:text-5xl font-black text-purple-400 mb-3 group-hover:scale-110 transition-transform">95%</div>
                <div className="text-emerald-200 font-semibold text-lg mb-1">{t('customerSatisfaction')}</div>
                <div className="text-emerald-300 text-sm">{t('fiveStarRating')}</div>
              </div>
            </div>

            {/* Shopping Experience Highlights */}
            <div className="mt-16">
              <div className="inline-flex items-center gap-8 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{t('securePayment')}</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{t('globalShipping')}</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{t('rapidStoreSetup')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('b2cPlatformCoreFeatures')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('completeEcommerceSolution')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('independentBrandStore')}</h3>
              <p className="text-gray-600 mb-6">
                {t('independentBrandStoreDesc')}
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• {t('customStoreDesign')}</li>
                <li>• {t('brandDomainBinding')}</li>
                <li>• {t('productDisplaySystem')}</li>
                <li>• {t('companyStoryDisplay')}</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('globalMarketingPromotion')}</h3>
              <p className="text-gray-600 mb-6">
                {t('globalMarketingPromotionDesc')}
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• {t('seoOptimization')}</li>
                <li>• {t('socialMediaPromotion')}</li>
                <li>• {t('precisionAdvertising')}</li>
                <li>• {t('influencerMarketing')}</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('multiCurrencyPayment')}</h3>
              <p className="text-gray-600 mb-6">
                {t('multiCurrencyPaymentDesc')}
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• {t('majorCurrencies')}</li>
                <li>• {t('creditCardPaypal')}</li>
                <li>• {t('cryptoPayment')}</li>
                <li>• {t('installmentSupport')}</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('globalLogisticsDelivery')}</h3>
              <p className="text-gray-600 mb-6">
                {t('globalLogisticsDeliveryDesc')}
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• {t('globalExpressNetwork')}</li>
                <li>• {t('realTimeTracking')}</li>
                <li>• {t('overseasWarehouse')}</li>
                <li>• {t('localizedDelivery')}</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 110 19.5 9.75 9.75 0 010-19.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('multilingualCustomerService')}</h3>
              <p className="text-gray-600 mb-6">
                {t('multilingualCustomerServiceDesc')}
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• {t('multipleLanguages')}</li>
                <li>• {t('24x7OnlineSupport')}</li>
                <li>• {t('presaleAftersaleSupport')}</li>
                <li>• {t('professionalTechConsulting')}</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('dataAnalyticsReports')}</h3>
              <p className="text-gray-600 mb-6">
                {t('dataAnalyticsReportsDesc')}
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• {t('salesDataStatistics')}</li>
                <li>• {t('userBehaviorAnalysis')}</li>
                <li>• {t('marketTrendReports')}</li>
                <li>• {t('competitorAnalysis')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('successCaseDisplay')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('successfulTechCompanies')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('smartConnectTech')}</h3>
                <p className="text-sm text-gray-600 mb-4">{t('aiSpeakerManufacturer')}</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('monthlySales')}</span>
                  <span className="font-bold text-blue-600">$50万</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('salesCountries')}</span>
                  <span className="font-bold text-green-600">25个</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('customerRating')}</span>
                  <span className="font-bold text-yellow-600">4.8/5.0</span>
                </div>
                <p className="text-sm text-gray-500 italic">
                  "通过大象出海平台，我们的AI音箱产品成功打入欧美市场，月销售额增长了300%。"
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">绿能动力</h3>
                <p className="text-sm text-gray-600 mb-4">便携式储能设备</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('monthlySales')}</span>
                  <span className="font-bold text-blue-600">$80万</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('salesCountries')}</span>
                  <span className="font-bold text-green-600">35个</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('customerRating')}</span>
                  <span className="font-bold text-yellow-600">4.9/5.0</span>
                </div>
                <p className="text-sm text-gray-500 italic">
                  "平台的营销推广帮助我们快速建立了全球品牌知名度，销售网络覆盖了5大洲。"
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">物联先锋</h3>
                <p className="text-sm text-gray-600 mb-4">智能家居系统</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('monthlySales')}</span>
                  <span className="font-bold text-blue-600">$120万</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('salesCountries')}</span>
                  <span className="font-bold text-green-600">40个</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('customerRating')}</span>
                  <span className="font-bold text-yellow-600">4.7/5.0</span>
                </div>
                <p className="text-sm text-gray-500 italic">
                  "多语言客服和本地化服务让我们在不同国家都能提供优质的用户体验。"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('servicePlanPricing')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('flexiblePricingPlans')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('basicPlan')}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  $299
                  <span className="text-lg text-gray-500 font-normal">/月</span>
                </div>
                <p className="text-gray-600">{t('suitableForStartups')}</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{t('independentBrandStore')}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{t('maxHundredProducts')}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{t('basicMarketing')}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{t('emailSupport')}</span>
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                {t('chooseBasic')}
              </button>
            </div>

            <div className="bg-green-600 text-white rounded-xl shadow-lg p-8 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  推荐
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{t('professionalPlan')}</h3>
                <div className="text-4xl font-bold mb-2">
                  $599
                  <span className="text-lg font-normal opacity-80">/月</span>
                </div>
                <p className="opacity-80">{t('suitableForGrowingCompanies')}</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>基础版所有功能</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>最多1000个产品</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>专业营销推广</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>多语言客服支持</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>数据分析报告</span>
                </li>
              </ul>
              <button className="w-full bg-white text-green-600 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                选择专业版
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">企业版</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  $1299
                  <span className="text-lg text-gray-500 font-normal">/月</span>
                </div>
                <p className="text-gray-600">适合大型企业</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>专业版所有功能</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>无限产品数量</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>定制化解决方案</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>专属客户经理</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>API接口支持</span>
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                选择企业版
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            开启您的全球销售之旅
          </h2>
          <p className="text-xl mb-8 text-green-100">
            立即开设企业商城，让您的科创产品走向全球市场
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              免费开设商城
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              预约产品演示
            </button>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold mb-2">b2c@elephant-global.com</div>
              <div className="text-green-200">商城服务邮箱</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">+86 400-800-2000</div>
              <div className="text-green-200">商城服务热线</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">全天候</div>
              <div className="text-green-200">在线支持</div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}