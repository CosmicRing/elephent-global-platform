'use client';

import Navigation from '../components/Navigation';
import { useLanguage } from '../contexts/LanguageContext';

export default function C2CPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Executive Level Premium Background System */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50/20" style={{ zIndex: -2 }}></div>

      {/* Premium Corporate Pattern Overlay */}
      <div
        className="fixed inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%237c3aed' fill-opacity='1'%3E%3Cpath d='M20 20h15v15H20V20zm40 0h15v15H60V20zm40 0h15v15h-15V20zM10 40h15v15H10V40zm40 0h15v15H50V40zm40 0h15v15H90V40zM20 60h15v15H20V60zm40 0h15v15H60V60zm40 0h15v15h-15V60zM10 80h15v15H10V80zm40 0h15v15H50V80zm40 0h15v15H90V80z'/%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: -1
        }}
      ></div>

      {/* Executive Floating Elements */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-gradient-to-br from-purple-100/30 to-pink-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-[60%] right-[10%] w-80 h-80 bg-gradient-to-br from-slate-100/40 to-gray-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-[20%] left-[30%] w-64 h-64 bg-gradient-to-br from-purple-200/20 to-indigo-100/15 rounded-full blur-2xl animate-ping opacity-50"></div>
      </div>

      <div className="relative z-10">
        <Navigation />
        {/* Executive Level C2C Hero Presentation */}
        <section className="relative">
          <div className="relative min-h-screen overflow-hidden">
            {/* Ultra-Premium Creator Innovation Studio */}
            <div className="absolute inset-0">
              {/* Luxury Creative Workshop Background */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`
                }}
              >
                {/* Premium Creative Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/97 via-purple-900/88 to-slate-900/97"></div>

                {/* Executive Glass Effect */}
                <div className="absolute inset-0 backdrop-blur-[2px]"></div>

                {/* Creative Innovation Elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-[18%] left-[12%] w-[240px] h-[240px] bg-gradient-to-br from-purple-500/22 to-pink-500/12 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute top-[68%] right-[18%] w-[210px] h-[210px] bg-gradient-to-br from-indigo-500/18 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                  <div className="absolute bottom-[22%] left-[38%] w-[190px] h-[190px] bg-gradient-to-br from-pink-500/15 to-purple-500/8 rounded-full blur-2xl animate-ping opacity-80"></div>
                </div>
              </div>

              {/* Sophisticated Creative Text Overlay */}
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
                        <span className="text-white font-bold text-lg tracking-wide">{t('c2cInnovationHubActive')}</span>
                        <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
                      </div>
                      <div className="w-px h-6 bg-white/30"></div>
                      <span className="text-purple-200 font-semibold">{t('creatorExcellenceNetwork')}</span>
                    </div>

                    {/* Executive Typography */}
                    <h1 className="mb-12">
                      <span className="block text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent">
                          {t('creator')}
                        </span>
                      </span>
                      <span className="block text-3xl sm:text-4xl lg:text-5xl font-light text-slate-300 mb-6 tracking-[0.2em]">
                        {t('innovation')}
                      </span>
                      <span className="block text-xl sm:text-2xl text-purple-200 max-w-6xl mx-auto font-medium">
                        {t('globalCreatorMarketplace')}
                      </span>
                    </h1>

                    <p className="text-2xl sm:text-3xl text-slate-200 mb-16 max-w-5xl mx-auto leading-relaxed font-light">
                      {t('empowering50kCreators')}
                    </p>

                    {/* Executive Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                        <a href="#creators" className="relative inline-flex items-center gap-4 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-slate-900 px-12 py-6 rounded-2xl text-xl font-black hover:from-purple-400 hover:via-pink-400 hover:to-indigo-400 transition-all shadow-2xl transform hover:scale-105 border border-purple-300">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          <div>
                            <span className="block">{t('joinCreatorHub')}</span>
                            <span className="text-sm font-medium opacity-80">{t('innovationNetwork')}</span>
                          </div>
                        </a>
                      </div>
                      <a href="#stories" className="inline-flex items-center gap-4 border-2 border-white/80 text-white hover:bg-white hover:text-slate-900 px-12 py-6 rounded-2xl text-xl font-bold transition-all backdrop-blur-sm hover:backdrop-blur-none shadow-xl">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <div>
                          <span className="block">{t('successStories')}</span>
                          <span className="text-sm font-medium opacity-80">{t('creatorJourneys')}</span>
                        </div>
                      </a>
                    </div>

                    {/* Executive Level Metrics */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                      <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:border-purple-300/50">
                        <div className="text-center">
                          <div className="text-5xl lg:text-6xl font-black text-purple-400 mb-4 group-hover:scale-110 transition-transform">50K+</div>
                          <div className="text-slate-200 font-bold text-xl mb-2">{t('creatorsLabel')}</div>
                          <div className="text-slate-400 text-sm font-medium">{t('activeInnovators')}</div>
                          <div className="mt-4 w-full bg-white/20 rounded-full h-2 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full w-full transform origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-700"></div>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:border-purple-300/50">
                        <div className="text-center">
                          <div className="text-5xl lg:text-6xl font-black text-pink-400 mb-4 group-hover:scale-110 transition-transform">1M+</div>
                          <div className="text-slate-200 font-bold text-xl mb-2">{t('products')}</div>
                          <div className="text-slate-400 text-sm font-medium">{t('uniqueDesigns')}</div>
                          <div className="mt-4 w-full bg-white/20 rounded-full h-2 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-pink-400 to-rose-400 rounded-full w-4/5 transform origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-700"></div>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:border-purple-300/50">
                        <div className="text-center">
                          <div className="text-5xl lg:text-6xl font-black text-yellow-400 mb-4 group-hover:scale-110 transition-transform">120+</div>
                          <div className="text-slate-200 font-bold text-xl mb-2">{t('countriesLabel')}</div>
                          <div className="text-slate-400 text-sm font-medium">{t('globalReach')}</div>
                          <div className="mt-4 w-full bg-white/20 rounded-full h-2 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full w-3/4 transform origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-700"></div>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:border-purple-300/50">
                        <div className="text-center">
                          <div className="text-5xl lg:text-6xl font-black text-emerald-400 mb-4 group-hover:scale-110 transition-transform">$5M</div>
                          <div className="text-slate-200 font-bold text-xl mb-2">{t('revenue')}</div>
                          <div className="text-slate-400 text-sm font-medium">{t('monthlyVolume')}</div>
                          <div className="mt-4 w-full bg-white/20 rounded-full h-2 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-emerald-400 to-green-400 rounded-full w-full transform origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-700"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Executive Trust Indicators */}
                    <div className="flex justify-center mt-16">
                      <div className="inline-flex items-center gap-10 bg-white/5 backdrop-blur-sm px-12 py-6 rounded-2xl border border-white/10">
                        <div className="flex items-center gap-3 text-white/90">
                          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                          <span className="font-bold tracking-wide">{t('innovationHub')}</span>
                        </div>
                        <div className="w-px h-6 bg-white/20"></div>
                        <div className="flex items-center gap-3 text-white/90">
                          <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-300"></div>
                          <span className="font-bold tracking-wide">{t('crowdfunding')}</span>
                        </div>
                        <div className="w-px h-6 bg-white/20"></div>
                        <div className="flex items-center gap-3 text-white/90">
                          <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse delay-600"></div>
                          <span className="font-bold tracking-wide">{t('globalSales')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>

      {/* Premium Creative Platform Services */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              {t('innovationIncubationStandards')}
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t('c2cCreatorPlatform')}
              </span>
              <span className="block text-gray-800">{t('coreAdvantages')}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('zeroBarrierEntry')}<br/>
              <span className="text-purple-600 font-semibold">{t('fromIdeaToSuccess')}</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('zeroFeeEntry')}</h3>
              <p className="text-gray-600 mb-6">
                {t('freeRegistrationNoFees')}
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 注册开店完全免费</li>
                <li>• 无月租费或年费</li>
                <li>• 仅成交时收取5%佣金</li>
                <li>• 前100笔订单免佣金</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('creatorCommunitySupport')}</h3>
              <p className="text-gray-600 mb-6">
                {t('activeCreatorCommunity')}
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 创客论坛交流</li>
                <li>• 导师一对一指导</li>
                <li>• 技术开发支持</li>
                <li>• 定期创客聚会</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('crowdfundingFeature')}</h3>
              <p className="text-gray-600 mb-6">
                {t('builtInCrowdfunding')}
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 产品众筹发起</li>
                <li>• 早鸟优惠定价</li>
                <li>• 市场需求验证</li>
                <li>• 资金快速回收</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('innovativeProductIncubation')}</h3>
              <p className="text-gray-600 mb-6">
                {t('professionalIncubationService')}
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 创意评估分析</li>
                <li>• 产品设计优化</li>
                <li>• 原型制作支持</li>
                <li>• 市场推广指导</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v16l-3.236-1.382a2 2 0 00-1.528 0L12 18.764l-2.236-1.146a2 2 0 00-1.528 0L5 18.764V1a1 1 0 011-1h2a1 1 0 011 1v3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('marketingPromotionSupport')}</h3>
              <p className="text-gray-600 mb-6">
                {t('freeMarketingTools')}
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 平台首页推荐</li>
                <li>• 社交媒体推广</li>
                <li>• 创客故事宣传</li>
                <li>• 新品发布支持</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 110 19.5 9.75 9.75 0 010-19.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('globalLogisticsForCreators')}</h3>
              <p className="text-gray-600 mb-6">
                {t('cooperateWithLogisticsPartners')}
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 全球配送网络</li>
                <li>• 物流费用优化</li>
                <li>• 包装标准指导</li>
                <li>• 关税处理支持</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('creatorCategoryShowcase')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('creatorsFromDifferentFields')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('inventorCreators')}</h3>
              <p className="text-gray-600 mb-4">专注于新奇实用发明的个人创新者</p>
              <div className="flex justify-between text-sm">
                <span className="text-purple-600 font-semibold">12,000+ 创客</span>
                <span className="text-gray-500">30,000+ 产品</span>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('techCreators')}</h3>
              <p className="text-gray-600 mb-4">专注于前沿科技产品的技术爱好者</p>
              <div className="flex justify-between text-sm">
                <span className="text-blue-600 font-semibold">18,000+ 创客</span>
                <span className="text-gray-500">45,000+ 产品</span>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:from-green-100 hover:to-green-200 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('designCreators')}</h3>
              <p className="text-gray-600 mb-4">注重美学设计的创意产品制作者</p>
              <div className="flex justify-between text-sm">
                <span className="text-green-600 font-semibold">8,000+ 创客</span>
                <span className="text-gray-500">20,000+ 产品</span>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 hover:from-orange-100 hover:to-orange-200 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('educationCreators')}</h3>
              <p className="text-gray-600 mb-4">专注于教育科技产品的教育工作者</p>
              <div className="flex justify-between text-sm">
                <span className="text-orange-600 font-semibold">6,000+ 创客</span>
                <span className="text-gray-500">15,000+ 产品</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('creatorSuccessStories')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('realCreatorStories')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">{t('liXiaoMing')}</h3>
                  <p className="text-blue-100">智能温控器发明者</p>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">$8万</div>
                    <div className="text-sm text-gray-500">{t('monthlyIncome')}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">15个</div>
                    <div className="text-sm text-gray-500">销售国家</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">4.9</div>
                    <div className="text-sm text-gray-500">{t('userRating')}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic">
                  {t('liXiaoMingTestimonial')}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">{t('wangMeiLi')}</h3>
                  <p className="text-purple-100">智能穿戴设备设计师</p>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">$12万</div>
                    <div className="text-sm text-gray-500">{t('monthlyIncome')}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">25个</div>
                    <div className="text-sm text-gray-500">销售国家</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">4.8</div>
                    <div className="text-sm text-gray-500">{t('userRating')}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic">
                  {t('wangMeiLiTestimonial')}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">{t('zhangEngineer')}</h3>
                  <p className="text-green-100">教育机器人开发者</p>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">$15万</div>
                    <div className="text-sm text-gray-500">{t('monthlyIncome')}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">30个</div>
                    <div className="text-sm text-gray-500">销售国家</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">4.9</div>
                    <div className="text-sm text-gray-500">{t('userRating')}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic">
                  {t('zhangEngineerTestimonial')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t('howToStartCreatorJourney')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('fourSimpleSteps')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{t('freeRegistration')}</h3>
              <p className="text-gray-300">{t('registerCreatorAccount')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{t('uploadProducts')}</h3>
              <p className="text-gray-300">{t('uploadInnovativeProducts')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{t('getPromotion')}</h3>
              <p className="text-gray-300">{t('utilizePlatformResources')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{t('globalSalesReach')}</h3>
              <p className="text-gray-300">{t('throughGlobalSalesNetwork')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t('readyToBeGlobalCreator')}
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            {t('joinCreatorFamily')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              {t('freeCreatorRegistration')}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              {t('applyCrowdfundingProject')}
            </button>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold mb-2">c2c@elephant-global.com</div>
              <div className="text-purple-200">{t('creatorServiceEmail')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">+86 400-800-3000</div>
              <div className="text-purple-200">{t('creatorServiceHotline')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">{t('creatorWechatGroup')}</div>
              <div className="text-purple-200">{t('scanToJoinCommunity')}</div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}