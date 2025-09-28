'use client';

import Navigation from '../components/Navigation';
import { useLanguage } from '../contexts/LanguageContext';

export default function VisionPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Ocean Background with Ship */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(59, 130, 246, 0.85) 50%, rgba(147, 197, 253, 0.9) 100%), url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")`,
          zIndex: -1
        }}
      ></div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <section className="relative py-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-8">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-bold text-lg">{t('globalVisionMission')}</span>
              <div className="w-px h-5 bg-white/30"></div>
              <span className="text-blue-200 text-sm">{t('elephentGlobalOutreach')}</span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6">
              <span className="block bg-gradient-to-r from-green-400 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
                {t('strongestGlobalBridge')}
              </span>
            </h1>

            <p className="text-2xl sm:text-3xl font-bold text-blue-100 mb-4">
              {t('shortestRouteClosestPath')}
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left Panel - Core Opportunities */}
            <div className="bg-blue-900/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">🎯</span>
                {t('coreOpportunities')}
              </h2>

              <div className="space-y-4">
                {[
                  t('productGlobalExpansion'),
                  t('capitalConnections'),
                  t('projectSelection'),
                  t('resourceIntegration'),
                  t('channelExpansion'),
                  t('marketDevelopment'),
                  t('orderAcquisition'),
                  t('partnershipBuilding')
                ].map((opportunity, index) => (
                  <div key={index} className="flex items-center text-white/90 hover:text-white transition-colors">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-4"></div>
                    <span className="font-medium">{opportunity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel - Global Presence */}
            <div className="bg-blue-800/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">🌏</span>
                {t('confirmedGlobalPartners')}
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-green-400 pl-6">
                  <h3 className="text-xl font-bold text-white mb-3">{t('keyRegionalFocus')}</h3>
                  <div className="space-y-3">
                    {[
                      { region: t('industryExpansionAsia'), color: 'text-yellow-300' },
                      { region: t('industryExpansionMiddleEast'), color: 'text-green-300' },
                      { region: t('industryExpansionEurope'), color: 'text-blue-300' },
                      { region: t('industryExpansionBeltRoad'), color: 'text-purple-300' }
                    ].map((item, index) => (
                      <div key={index} className={`${item.color} font-medium flex items-center`}>
                        <span className="mr-3">🚢</span>
                        {item.region}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-l-4 border-blue-400 pl-6">
                  <h3 className="text-xl font-bold text-white mb-3">{t('strategicPartners')}</h3>
                  <div className="grid grid-cols-1 gap-2 text-blue-100 text-sm">
                    <div>• {t('fortune500Corporations')}</div>
                    <div>• {t('internationalBankingGroup')}</div>
                    <div>• {t('technologyInnovationCenters')}</div>
                    <div>• {t('globalTradeAssociations')}</div>
                    <div>• {t('emergingMarketFunds')}</div>
                    <div>• {t('economicDevelopmentBoards')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '107', label: t('globalCountries'), color: 'from-green-400 to-emerald-300' },
              { number: '$2.8B+', label: t('annualRevenue'), color: 'from-blue-400 to-cyan-300' },
              { number: '500+', label: t('enterprisePartners'), color: 'from-purple-400 to-pink-300' },
              { number: '15', label: t('regionalOffices'), color: 'from-yellow-400 to-orange-300' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`text-4xl lg:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform`}>
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-8 bg-white/10 backdrop-blur-sm px-8 py-6 rounded-3xl border border-white/20">
              <div className="text-white/80 font-medium">
                {t('joinGlobalJourney')}
              </div>
              <a
                href="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-2xl font-bold hover:from-green-400 hover:to-emerald-400 transition-all transform hover:scale-105 shadow-xl"
              >
                {t('startYourJourney')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}