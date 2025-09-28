'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';

interface AnalysisResult {
  demandBreakdown: string[];
  recommendedSolution: {
    designer: {
      name: string;
      type: string;
      capability: string;
      rating: number;
      price: string;
    };
    manufacturer: {
      name: string;
      type: string;
      capability: string;
      rating: number;
      capacity: string;
    };
    distributor: {
      name: string;
      type: string;
      coverage: string;
      rating: number;
      commission: string;
    };
  };
  estimatedCost: string;
  timeline: string;
  successProbability: string;
}

export default function AIAggregationPage() {
  const [demand, setDemand] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  const handleAnalyzeDemand = () => {
    setIsAnalyzing(true);
    // 模拟AI分析过程
    setTimeout(() => {
      setAnalysisResult({
        demandBreakdown: [
          "产品设计与开发",
          "原材料采购",
          "制造与生产",
          "质量控制",
          "物流配送",
          "海外销售渠道"
        ],
        recommendedSolution: {
          designer: {
            name: "深圳创新设计工作室",
            type: "C2C创客",
            capability: "智能穿戴设备设计",
            rating: 4.9,
            price: "¥5,000 - ¥15,000"
          },
          manufacturer: {
            name: "东莞精密制造有限公司",
            type: "B2B工厂",
            capability: "小批量精密制造",
            rating: 4.8,
            capacity: "500-10,000件/月"
          },
          distributor: {
            name: "欧洲科技产品分销商",
            type: "B2C渠道",
            coverage: "欧盟27国",
            rating: 4.7,
            commission: "15-20%"
          }
        },
        timeline: "总计30-45天",
        estimatedCost: "单价: $12-18, MOQ: 500件",
        successProbability: "95%"
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Pattern */}
      <div
        className="fixed inset-0 bg-gradient-to-br from-orange-50 to-yellow-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fed7aa' fill-opacity='0.3'%3E%3Ccircle cx='5' cy='5' r='2'/%3E%3Ccircle cx='25' cy='5' r='2'/%3E%3Ccircle cx='15' cy='15' r='3'/%3E%3Ccircle cx='5' cy='25' r='2'/%3E%3Ccircle cx='25' cy='25' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: -1
        }}
      ></div>

      <div className="relative z-10">
        <Navigation />

        {/* Enhanced Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 text-white overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-orange-300/15 rounded-full blur-2xl animate-ping"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              {/* Premium Status Badge */}
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-bold">AI大象无形聚合服务</span>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-300"></div>
                </div>
                <div className="w-px h-4 bg-white/30"></div>
                <span className="text-orange-100 text-sm">Beta版 • 免费体验</span>
              </div>

              {/* Enhanced Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight">
                <span className="block bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
                  智能需求分析
                </span>
                <span className="block text-yellow-200">& 资源聚合</span>
              </h1>

              <p className="text-xl sm:text-2xl text-orange-50 mb-12 max-w-4xl mx-auto leading-relaxed">
                🚀 全球首创AI驱动的跨平台资源聚合系统<br/>
                <span className="text-yellow-200 font-semibold">一个需求，智能匹配B2B+B2C+C2C最优解决方案</span>
              </p>

              {/* Real-time Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-yellow-300 mb-1">3秒</div>
                  <div className="text-orange-100 text-sm">AI分析速度</div>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-yellow-300 mb-1">99.2%</div>
                  <div className="text-orange-100 text-sm">需求理解准确率</div>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-yellow-300 mb-1">500%</div>
                  <div className="text-orange-100 text-sm">效率提升倍数</div>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-yellow-300 mb-1">10,000+</div>
                  <div className="text-orange-100 text-sm">成功聚合案例</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Analysis Interface */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">描述您的需求</h2>
                <p className="text-gray-600">请详细描述您的产品需求，AI将为您进行智能分析</p>
              </div>

              <div className="mb-6">
                <textarea
                  value={demand}
                  onChange={(e) => setDemand(e.target.value)}
                  placeholder="例如：我需要为美国市场设计一款智能手表表带，要求环保材料，支持心率监测，预期订量1000件..."
                  className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                />
              </div>

              <div className="text-center">
                <button
                  onClick={handleAnalyzeDemand}
                  disabled={!demand.trim() || isAnalyzing}
                  className="group relative bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-10 py-4 rounded-2xl font-bold hover:from-orange-600 hover:to-yellow-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl transform hover:scale-105 disabled:transform-none"
                >
                  {isAnalyzing ? (
                    <div className="flex items-center gap-3">
                      {/* Enhanced Loading Animation */}
                      <div className="relative">
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <div className="absolute inset-0 w-6 h-6 border-2 border-transparent border-r-white/70 rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg">AI大脑分析中...</span>
                        <span className="text-xs opacity-90">正在处理您的需求</span>
                      </div>
                      {/* Processing Dots */}
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-0"></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <div className="flex flex-col">
                        <span className="text-lg">开始AI智能分析</span>
                        <span className="text-xs opacity-90">3秒出结果</span>
                      </div>
                      <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    </div>
                  )}

                  {/* Button Enhancement Effects */}
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                  {!isAnalyzing && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-75"></div>
                  )}
                </button>

                {/* Additional UI Feedback */}
                <div className="mt-4 flex justify-center">
                  <div className="inline-flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>免费试用</span>
                    </div>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                      <span>无需注册</span>
                    </div>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-600"></div>
                      <span>秒级响应</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Analysis Results */}
        {analysisResult && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">AI聚合分析结果</h2>
                <p className="text-gray-600">基于您的需求，AI为您推荐以下最优解决方案</p>
              </div>

              {/* Demand Breakdown */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">需求分解</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {analysisResult.demandBreakdown.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-gray-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Solution */}
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {/* Designer */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white">
                    <h4 className="font-bold text-lg">C2C 设计师</h4>
                    <p className="text-blue-100 text-sm">创意设计与产品开发</p>
                  </div>
                  <div className="p-6">
                    <h5 className="font-bold text-gray-900 mb-2">{analysisResult.recommendedSolution.designer.name}</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">专业领域:</span>
                        <span className="font-medium">{analysisResult.recommendedSolution.designer.capability}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">评分:</span>
                        <span className="font-medium text-yellow-600">⭐ {analysisResult.recommendedSolution.designer.rating}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">价格区间:</span>
                        <span className="font-medium text-green-600">{analysisResult.recommendedSolution.designer.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Manufacturer */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 text-white">
                    <h4 className="font-bold text-lg">B2B 制造商</h4>
                    <p className="text-green-100 text-sm">专业制造与生产</p>
                  </div>
                  <div className="p-6">
                    <h5 className="font-bold text-gray-900 mb-2">{analysisResult.recommendedSolution.manufacturer.name}</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">生产能力:</span>
                        <span className="font-medium">{analysisResult.recommendedSolution.manufacturer.capability}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">评分:</span>
                        <span className="font-medium text-yellow-600">⭐ {analysisResult.recommendedSolution.manufacturer.rating}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">产能:</span>
                        <span className="font-medium text-blue-600">{analysisResult.recommendedSolution.manufacturer.capacity}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Distributor */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white">
                    <h4 className="font-bold text-lg">B2C 分销商</h4>
                    <p className="text-purple-100 text-sm">全球销售渠道</p>
                  </div>
                  <div className="p-6">
                    <h5 className="font-bold text-gray-900 mb-2">{analysisResult.recommendedSolution.distributor.name}</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">覆盖范围:</span>
                        <span className="font-medium">{analysisResult.recommendedSolution.distributor.coverage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">评分:</span>
                        <span className="font-medium text-yellow-600">⭐ {analysisResult.recommendedSolution.distributor.rating}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">佣金:</span>
                        <span className="font-medium text-red-600">{analysisResult.recommendedSolution.distributor.commission}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl p-8">
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold mb-2">⏱️</div>
                    <div className="font-semibold mb-1">预计时间</div>
                    <div className="text-orange-100">{analysisResult.timeline}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-2">💰</div>
                    <div className="font-semibold mb-1">预计成本</div>
                    <div className="text-orange-100">{analysisResult.estimatedCost}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-2">📈</div>
                    <div className="font-semibold mb-1">成功概率</div>
                    <div className="text-orange-100">{analysisResult.successProbability}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-2">🤝</div>
                    <div className="font-semibold mb-1">聚合优势</div>
                    <div className="text-orange-100">成本降低35%</div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    确认此聚合方案
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">AI聚合服务原理</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">了解AI如何分析需求并实现跨平台资源最优匹配</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">1. 需求理解</h3>
                <p className="text-gray-600 text-sm">AI语义分析用户需求，智能分解为具体任务模块</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">2. 资源匹配</h3>
                <p className="text-gray-600 text-sm">搜索B2B+B2C+C2C平台，匹配最适合的服务提供商</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">3. 方案优化</h3>
                <p className="text-gray-600 text-sm">基于成本、时间、质量多维度优化聚合方案</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">4. 执行监控</h3>
                <p className="text-gray-600 text-sm">实时监控项目进度，智能协调各方合作</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}