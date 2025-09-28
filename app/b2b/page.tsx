'use client';

import Navigation from '../components/Navigation';
import { useLanguage } from '../contexts/LanguageContext';

export default function B2BPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Executive Level Premium Background System */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-red-50/20" style={{ zIndex: -2 }}></div>

      {/* Premium Corporate Pattern Overlay */}
      <div
        className="fixed inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dc2626' fill-opacity='1'%3E%3Cpath d='M20 20h15v15H20V20zm40 0h15v15H60V20zm40 0h15v15h-15V20zM10 40h15v15H10V40zm40 0h15v15H50V40zm40 0h15v15H90V40zM20 60h15v15H20V60zm40 0h15v15H60V60zm40 0h15v15h-15V60zM10 80h15v15H10V80zm40 0h15v15H50V80zm40 0h15v15H90V80z'/%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: -1
        }}
      ></div>

      {/* Executive Floating Elements */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-gradient-to-br from-red-100/30 to-orange-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-[60%] right-[10%] w-80 h-80 bg-gradient-to-br from-slate-100/40 to-gray-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-[20%] left-[30%] w-64 h-64 bg-gradient-to-br from-red-200/20 to-pink-100/15 rounded-full blur-2xl animate-ping opacity-50"></div>
      </div>

      <div className="relative z-10">
        <Navigation />
        {/* Executive Level B2B Hero Presentation */}
        <section className="relative">
          <div className="relative min-h-screen overflow-hidden">
            {/* Ultra-Premium Industrial Corporate Hero */}
            <div className="absolute inset-0">
              {/* Luxury Industrial Manufacturing Background */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1565008576948-7c397892e1ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80")`
                }}
              >
                {/* Premium Industrial Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/97 via-red-900/85 to-slate-900/97"></div>

                {/* Executive Glass Effect */}
                <div className="absolute inset-0 backdrop-blur-[2px]"></div>

                {/* Industrial Ambient Elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-[20%] left-[10%] w-[250px] h-[250px] bg-gradient-to-br from-red-500/20 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute top-[60%] right-[15%] w-[200px] h-[200px] bg-gradient-to-br from-amber-500/15 to-yellow-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
                  <div className="absolute bottom-[25%] left-[40%] w-[180px] h-[180px] bg-gradient-to-br from-orange-500/12 to-red-500/6 rounded-full blur-2xl animate-ping opacity-70"></div>
                </div>
              </div>

              {/* Sophisticated Industrial Text Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
                <div className="w-full">
                  {/* Executive Level Branding */}
                  <div className="text-center mb-16">
                    {/* Premium Status Badge */}
                    <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20 mb-10 shadow-2xl">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span className="text-white font-bold text-lg tracking-wide">{t('b2bIndustrialOperationsActive')}</span>
                        <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
                      </div>
                      <div className="w-px h-6 bg-white/30"></div>
                      <span className="text-red-200 font-semibold">{t('globalManufacturingNetwork')}</span>
                    </div>

                    {/* Executive Typography */}
                    <h1 className="mb-12">
                      <span className="block text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-white via-red-100 to-orange-200 bg-clip-text text-transparent">
                          {t('industrial')}
                        </span>
                      </span>
                      <span className="block text-3xl sm:text-4xl lg:text-5xl font-light text-slate-300 mb-6 tracking-[0.2em]">
                        {t('excellence')}
                      </span>
                      <span className="block text-xl sm:text-2xl text-red-200 max-w-6xl mx-auto font-medium">
                        {t('globalB2bManufacturingPlatform')}
                      </span>
                    </h1>

                    <p className="text-2xl sm:text-3xl text-slate-200 mb-16 max-w-5xl mx-auto leading-relaxed font-light">
                      {t('connecting50kManufacturers')}
                    </p>

                    {/* Executive Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                        <a href="#procurement" className="relative inline-flex items-center gap-4 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-slate-900 px-12 py-6 rounded-2xl text-xl font-black hover:from-red-400 hover:via-orange-400 hover:to-yellow-400 transition-all shadow-2xl transform hover:scale-105 border border-red-300">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <div>
                            <span className="block">{t('industrialProcurement')}</span>
                            <span className="text-sm font-medium opacity-80">{t('fortune500Access')}</span>
                          </div>
                        </a>
                      </div>
                      <a href="#suppliers" className="inline-flex items-center gap-4 border-2 border-white/80 text-white hover:bg-white hover:text-slate-900 px-12 py-6 rounded-2xl text-xl font-bold transition-all backdrop-blur-sm hover:backdrop-blur-none shadow-xl">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <span className="block">{t('certifiedSuppliers')}</span>
                          <span className="text-sm font-medium opacity-80">{t('joinEliteNetwork')}</span>
                        </div>
                      </a>
                    </div>

                    {/* Executive Level Metrics */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                      <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:border-red-300/50">
                        <div className="text-center">
                          <div className="text-5xl lg:text-6xl font-black text-red-400 mb-4 group-hover:scale-110 transition-transform">50K+</div>
                          <div className="text-slate-200 font-bold text-xl mb-2">{t('manufacturers')}</div>
                          <div className="text-slate-400 text-sm font-medium">{t('certifiedSuppliersLabel')}</div>
                          <div className="mt-4 w-full bg-white/20 rounded-full h-2 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-red-400 to-orange-400 rounded-full w-full transform origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-700"></div>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:border-red-300/50">
                        <div className="text-center">
                          <div className="text-5xl lg:text-6xl font-black text-orange-400 mb-4 group-hover:scale-110 transition-transform">$1.5B+</div>
                          <div className="text-slate-200 font-bold text-xl mb-2">{t('tradeVolume')}</div>
                          <div className="text-slate-400 text-sm font-medium">{t('annualB2bSales')}</div>
                          <div className="mt-4 w-full bg-white/20 rounded-full h-2 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full w-4/5 transform origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-700"></div>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:border-red-300/50">
                        <div className="text-center">
                          <div className="text-5xl lg:text-6xl font-black text-emerald-400 mb-4 group-hover:scale-110 transition-transform">107</div>
                          <div className="text-slate-200 font-bold text-xl mb-2">{t('countriesLabel')}</div>
                          <div className="text-slate-400 text-sm font-medium">{t('globalNetwork')}</div>
                          <div className="mt-4 w-full bg-white/20 rounded-full h-2 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full w-3/4 transform origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-700"></div>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:border-red-300/50">
                        <div className="text-center">
                          <div className="text-5xl lg:text-6xl font-black text-blue-400 mb-4 group-hover:scale-110 transition-transform">99.5%</div>
                          <div className="text-slate-200 font-bold text-xl mb-2">{t('qualityRate')}</div>
                          <div className="text-slate-400 text-sm font-medium">{t('iso9001Standard')}</div>
                          <div className="mt-4 w-full bg-white/20 rounded-full h-2 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full w-full transform origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-700"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Executive Trust Indicators */}
                    <div className="flex justify-center mt-16">
                      <div className="inline-flex items-center gap-10 bg-white/5 backdrop-blur-sm px-12 py-6 rounded-2xl border border-white/10">
                        <div className="flex items-center gap-3 text-white/90">
                          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                          <span className="font-bold tracking-wide">{t('iso9001Quality')}</span>
                        </div>
                        <div className="w-px h-6 bg-white/20"></div>
                        <div className="flex items-center gap-3 text-white/90">
                          <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse delay-300"></div>
                          <span className="font-bold tracking-wide">{t('24x7Operations')}</span>
                        </div>
                        <div className="w-px h-6 bg-white/20"></div>
                        <div className="flex items-center gap-3 text-white/90">
                          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-600"></div>
                          <span className="font-bold tracking-wide">{t('globalLogistics')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>

      {/* Premium Services Overview */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-red-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {t('industrialServiceStandards')}
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                {t('b2bWholesaleServices')}
              </span>
              <span className="block text-gray-800">{t('coreAdvantages')}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('professionalWholesalePlatform')}<br/>
              <span className="text-red-600 font-semibold">{t('fromInquiryToDelivery')}</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('flexibleMinimumOrder')}</h3>
              <p className="text-gray-600 mb-6">
                {t('flexibleMoqSetting')}
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 小批量：50-500件起</li>
                <li>• 中批量：500-5000件</li>
                <li>• 大批量：5000件以上</li>
                <li>• 定制化：根据需求协商</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('wholesalePriceAdvantage')}</h3>
              <p className="text-gray-600 mb-6">
                {t('directFactoryConnection')}
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 比零售价低30-50%</li>
                <li>• 阶梯价格体系</li>
                <li>• 长期合作折扣</li>
                <li>• 季节性促销价格</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('qualityAssurance')}</h3>
              <p className="text-gray-600 mb-6">
                {t('strictSupplierCertification')}
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• ISO认证供应商</li>
                <li>• 第三方质检报告</li>
                <li>• 批次追溯系统</li>
                <li>• 质量问题包赔</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('financialSupport')}</h3>
              <p className="text-gray-600 mb-6">
                {t('multiplePaymentMethods')}
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 信用证支付</li>
                <li>• 分期付款</li>
                <li>• 贸易融资</li>
                <li>• 货物保险</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('globalLogisticsService')}</h3>
              <p className="text-gray-600 mb-6">
                {t('completeLogisticsNetwork')}
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 海运/空运选择</li>
                <li>• 清关代理服务</li>
                <li>• 实时货物追踪</li>
                <li>• 仓储配送服务</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 110 19.5 9.75 9.75 0 010-19.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('professionalService')}</h3>
              <p className="text-gray-600 mb-6">
                {t('professionalAccountManagers')}
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 专属客户经理</li>
                <li>• 24/7客服支持</li>
                <li>• 市场分析报告</li>
                <li>• 定制化解决方案</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('mainProductCategories')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('productsCoveringMultipleFields')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('aiIntelligentEquipment')}</h3>
              <p className="text-gray-600 mb-4">人工智能硬件、机器学习设备、智能芯片</p>
              <div className="text-sm text-blue-600 font-semibold">MOQ: 100件起</div>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:from-green-100 hover:to-green-200 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('newEnergyProducts')}</h3>
              <p className="text-gray-600 mb-4">锂电池、充电设备、太阳能产品</p>
              <div className="text-sm text-green-600 font-semibold">MOQ: 200件起</div>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('iotDevices')}</h3>
              <p className="text-gray-600 mb-4">传感器、通信模块、边缘计算设备</p>
              <div className="text-sm text-purple-600 font-semibold">MOQ: 500件起</div>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 hover:from-orange-100 hover:to-orange-200 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('intelligentManufacturing')}</h3>
              <p className="text-gray-600 mb-4">工业机器人、自动化设备、精密仪器</p>
              <div className="text-sm text-orange-600 font-semibold">MOQ: 50件起</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t('wholesaleProcurementProcess')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('streamlinedProcurementProcess')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{t('productInquiry')}</h3>
              <p className="text-gray-300">{t('browseProductCatalog')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{t('sampleConfirmation')}</h3>
              <p className="text-gray-300">{t('applySampleTesting')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{t('contractSigning')}</h3>
              <p className="text-gray-300">{t('negotiateTerms')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{t('deliveryAcceptance')}</h3>
              <p className="text-gray-300">{t('goodsDelivery')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t('startWholesaleJourney')}
          </h2>
          <p className="text-xl mb-8 text-red-100">
            {t('registerAsWholesaleCustomer')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              {t('registerWholesaleAccount')}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              {t('applyToBeSupplier')}
            </button>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold mb-2">wholesale@elephant-global.com</div>
              <div className="text-red-200">{t('wholesaleBusinessEmail')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">+86 400-800-1000</div>
              <div className="text-red-200">{t('wholesaleHotline')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">{t('weekdaysNineToSix')}</div>
              <div className="text-red-200">{t('serviceHours')}</div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}