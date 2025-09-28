'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'English' | '中文';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isEnglish: boolean;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 翻译字典
const translations = {
  // 顶部栏
  'globalOperationsCenter': {
    'English': 'Global Operations Center',
    '中文': '全球运营中心'
  },
  'globalStats': {
    'English': '107 Countries • $2.8B+ Revenue • Fortune 500 Grade',
    '中文': '107个国家 • 28亿美元+营收 • 世界500强级别'
  },
  'investorRelations': {
    'English': 'Investor Relations',
    '中文': '投资者关系'
  },
  'mediaCenter': {
    'English': 'Media Center',
    '中文': '媒体中心'
  },
  'careers': {
    'English': 'Careers',
    '中文': '职业发展'
  },

  // 导航栏
  'globalEnterprisePlatform': {
    'English': 'Global Enterprise Platform',
    '中文': '全球企业平台'
  },
  'enterpriseSolutions': {
    'English': 'Enterprise Solutions',
    '中文': '企业解决方案'
  },
  'about': {
    'English': 'About',
    '中文': '关于我们'
  },
  'contact': {
    'English': 'Contact',
    '中文': '联系我们'
  },
  'vision': {
    'English': 'Vision',
    '中文': '愿景'
  },
  'aiEngine': {
    'English': 'AI Engine',
    '中文': 'AI引擎'
  },
  'executivePortal': {
    'English': 'Executive Portal',
    '中文': '管理入口'
  },

  // 主页内容
  'globalOperationsActive': {
    'English': 'Global Operations Active',
    '中文': '全球运营中心启动'
  },
  'fortune500Grade': {
    'English': 'Fortune 500 Grade Platform',
    '中文': '世界500强级平台'
  },
  'elephentTech': {
    'English': 'ELEPHENT TECHNOLOGY',
    '中文': '大象科技'
  },
  'globalTechInfra': {
    'English': 'Global Enterprise Platform • 全球企业级技术基础设施',
    '中文': '全球企业平台 • Global Enterprise Technology Infrastructure'
  },
  'powering': {
    'English': 'Powering',
    '中文': '驱动'
  },
  'billion': {
    'English': '$2.8 Billion+',
    '中文': '28亿美元+'
  },
  'globalTransactions': {
    'English': 'in global transactions across',
    '中文': '全球交易额，覆盖'
  },
  'countries': {
    'English': '107 countries',
    '中文': '107个国家'
  },
  'withInfrastructure': {
    'English': 'with Fortune 500 grade infrastructure',
    '中文': '，采用世界500强级技术基础设施'
  },

  // 按钮
  'aiAggregationEngine': {
    'English': 'AI AGGREGATION ENGINE',
    '中文': 'AI聚合引擎'
  },
  'experienceTheFuture': {
    'English': 'Experience the Future',
    '中文': '体验未来'
  },
  'enterpriseSolutionsBtn': {
    'English': 'ENTERPRISE SOLUTIONS',
    '中文': '企业解决方案'
  },
  'globalInfrastructure': {
    'English': 'Global Infrastructure',
    '中文': '全球基础设施'
  },

  // 统计数字
  'countriesLabel': {
    'English': 'Countries',
    '中文': '国家'
  },
  'globalPresence': {
    'English': 'Global Presence',
    '中文': '全球布局'
  },
  'revenue': {
    'English': 'Revenue',
    '中文': '营收'
  },
  'annualTransactions': {
    'English': 'Annual Transactions',
    '中文': '年交易额'
  },
  'partners': {
    'English': 'Partners',
    '中文': '合作伙伴'
  },
  'verifiedSuppliers': {
    'English': 'Verified Suppliers',
    '中文': '认证供应商'
  },
  'uptime': {
    'English': 'Uptime',
    '中文': '可用性'
  },
  'enterpriseSLA': {
    'English': 'Enterprise SLA',
    '中文': '企业级SLA'
  },

  // 认证标识
  'iso27001': {
    'English': 'ISO 27001 Certified',
    '中文': 'ISO 27001认证'
  },
  'soc2': {
    'English': 'SOC 2 Type II',
    '中文': 'SOC 2 Type II'
  },
  'gdpr': {
    'English': 'GDPR Compliant',
    '中文': 'GDPR合规'
  },

  // 主页英雄区内容
  'globalOperationsActiveText': {
    'English': 'Global Operations Active',
    '中文': '全球运营中心启动'
  },
  'fortune500GradePlatform': {
    'English': 'Fortune 500 Grade Platform',
    '中文': '世界500强级平台'
  },
  'elephentTechnology': {
    'English': 'ELEPHENT',
    '中文': '大象科技'
  },
  'technologySubtitle': {
    'English': 'TECHNOLOGY',
    '中文': '科技'
  },
  'globalTechInfrastructure': {
    'English': 'Global Enterprise Platform • 全球企业级技术基础设施',
    '中文': '全球企业平台 • Global Enterprise Technology Infrastructure'
  },
  'poweringText': {
    'English': 'Powering',
    '中文': '驱动'
  },
  'billionAmount': {
    'English': '$2.8 Billion+',
    '中文': '28亿美元+'
  },
  'globalTransactionsText': {
    'English': 'in global transactions across',
    '中文': '全球交易额，覆盖'
  },
  'countriesCount': {
    'English': '107 countries',
    '中文': '107个国家'
  },
  'withInfrastructureText': {
    'English': 'with Fortune 500 grade infrastructure',
    '中文': '，采用世界500强级技术基础设施'
  },
  'aiAggregationEngineBtn': {
    'English': 'AI AGGREGATION ENGINE',
    '中文': 'AI聚合引擎'
  },
  'experienceTheFutureText': {
    'English': 'Experience the Future',
    '中文': '体验未来'
  },
  'enterpriseSolutionsFullBtn': {
    'English': 'ENTERPRISE SOLUTIONS',
    '中文': '企业解决方案'
  },
  'globalInfrastructureText': {
    'English': 'Global Infrastructure',
    '中文': '全球基础设施'
  },

  // AI展示区
  'revolutionizingTitle': {
    'English': 'Revolutionizing',
    '中文': '革命性改变'
  },
  'globalCommerceTitle': {
    'English': 'Global Commerce',
    '中文': '全球商务'
  },
  'worldFirstAI': {
    'English': 'World\'s first AI-powered enterprise aggregation platform connecting',
    '中文': '全球首个AI驱动的企业聚合平台，连接'
  },
  'b2bB2cC2cEcosystems': {
    'English': 'B2B • B2C • C2C',
    '中文': 'B2B • B2C • C2C'
  },
  'ecosystemsRealTime': {
    'English': 'ecosystems in real-time',
    '中文': '生态系统实时连接'
  },
  'experienceAIEngine': {
    'English': '🚀 Experience AI Aggregation Engine',
    '中文': '🚀 体验AI聚合引擎'
  },
  'freeEnterpriseTrial': {
    'English': 'Free Enterprise Trial',
    '中文': '免费企业试用'
  },
  'noSetupRequired': {
    'English': 'No Setup Required',
    '中文': '无需设置'
  },
  'instantResults': {
    'English': 'Instant Results',
    '中文': '即时结果'
  },

  // 企业解决方案区
  'enterpriseSolutionsTitle': {
    'English': 'Enterprise Solutions',
    '中文': '企业解决方案'
  },
  'fortune500Infrastructure': {
    'English': 'Fortune 500 grade infrastructure powering global commerce transformation',
    '中文': 'Fortune 500级基础设施推动全球商务转型'
  },
  'b2bEnterpriseTitle': {
    'English': 'B2B Enterprise',
    '中文': 'B2B企业批发'
  },
  'b2bEnterpriseDesc': {
    'English': 'Global industrial procurement and supply chain management for Fortune 500 companies',
    '中文': '为Fortune 500公司提供全球工业采购和供应链管理'
  },
  'b2bAnnualVolume': {
    'English': '$2.8B+ Annual Volume →',
    '中文': '28亿美元+年交易额 →'
  },
  'b2cMarketplaceTitle': {
    'English': 'B2C Marketplace',
    '中文': 'B2C市场平台'
  },
  'b2cMarketplaceDesc': {
    'English': 'Global consumer marketplace connecting brands directly with millions of customers',
    '中文': '全球消费者市场平台，直接连接品牌与数百万客户'
  },
  'b2cActiveUsers': {
    'English': '5M+ Active Users →',
    '中文': '500万+活跃用户 →'
  },
  'c2cInnovationTitle': {
    'English': 'C2C Innovation Hub',
    '中文': 'C2C创新中心'
  },
  'c2cInnovationDesc': {
    'English': 'Creator marketplace and innovation ecosystem empowering global entrepreneurs',
    '中文': '创客市场和创新生态系统，赋能全球企业家'
  },
  'c2cCreators': {
    'English': '50K+ Creators →',
    '中文': '5万+创客 →'
  },

  // AI展示区遗漏的翻译
  'aiElephantEngine': {
    'English': 'AI ELEPHENT Aggregation Engine',
    '中文': 'AI大象无形聚合引擎'
  },

  // Footer翻译
  'elephentTechnologyFull': {
    'English': 'ELEPHENT TECHNOLOGY',
    '中文': '大象科技'
  },
  'fortune500Platform': {
    'English': 'Fortune 500 Grade Global Platform',
    '中文': 'Fortune 500级全球平台'
  },
  'copyrightText': {
    'English': '© 2024 Elephent Technology. All rights reserved. |',
    '中文': '© 2024 大象科技. 保留所有权利. |'
  },
  'globalOpsCenter': {
    'English': 'Global Operations Center',
    '中文': '全球运营中心'
  },
  'iso27001Certified': {
    'English': 'ISO 27001 Certified',
    '中文': 'ISO 27001认证'
  },
  'privacyPolicy': {
    'English': 'Privacy Policy',
    '中文': '隐私政策'
  },
  'termsOfService': {
    'English': 'Terms of Service',
    '中文': '服务条款'
  },
  'security': {
    'English': 'Security',
    '中文': '安全'
  },

  // B2B页面翻译
  'b2bIndustrialOperationsActive': {
    'English': 'B2B Industrial Operations Active',
    '中文': 'B2B工业运营中心启动'
  },
  'globalManufacturingNetwork': {
    'English': 'Global Manufacturing Network',
    '中文': '全球制造网络'
  },
  'industrial': {
    'English': 'INDUSTRIAL',
    '中文': '工业'
  },
  'excellence': {
    'English': 'EXCELLENCE',
    '中文': '卓越'
  },
  'globalB2bManufacturingPlatform': {
    'English': 'Global B2B Manufacturing Platform • 全球工业制造采购平台',
    '中文': '全球B2B制造平台 • Global B2B Manufacturing Platform'
  },
  'connecting50kManufacturers': {
    'English': 'Connecting 50,000+ Manufacturers with Global Enterprise Buyers across 107 countries',
    '中文': '连接50,000+制造商与全球企业采购商，覆盖107个国家'
  },
  'industrialProcurement': {
    'English': 'INDUSTRIAL PROCUREMENT',
    '中文': '工业采购'
  },
  'fortune500Access': {
    'English': 'Fortune 500 Access',
    '中文': '世界500强准入'
  },
  'certifiedSuppliers': {
    'English': 'CERTIFIED SUPPLIERS',
    '中文': '认证供应商'
  },
  'joinEliteNetwork': {
    'English': 'Join Elite Network',
    '中文': '加入精英网络'
  },
  'manufacturers': {
    'English': 'Manufacturers',
    '中文': '制造商'
  },
  'certifiedSuppliersLabel': {
    'English': 'Certified Suppliers',
    '中文': '认证供应商'
  },
  'tradeVolume': {
    'English': 'Trade Volume',
    '中文': '贸易额'
  },
  'annualB2bSales': {
    'English': 'Annual B2B Sales',
    '中文': '年B2B销售额'
  },
  'globalNetwork': {
    'English': 'Global Network',
    '中文': '全球网络'
  },
  'qualityRate': {
    'English': 'Quality Rate',
    '中文': '质量率'
  },
  'iso9001Standard': {
    'English': 'ISO 9001 Standard',
    '中文': 'ISO 9001标准'
  },
  'iso9001Quality': {
    'English': 'ISO 9001 Quality',
    '中文': 'ISO 9001质量'
  },
  '24x7Operations': {
    'English': '24/7 Operations',
    '中文': '24/7运营'
  },
  'globalLogistics': {
    'English': 'Global Logistics',
    '中文': '全球物流'
  },
  'industrialServiceStandards': {
    'English': 'Industrial Service Standards',
    '中文': '工业级服务标准'
  },
  'b2bWholesaleServices': {
    'English': 'B2B Wholesale Services',
    '中文': 'B2B批发服务'
  },
  'coreAdvantages': {
    'English': 'Core Advantages',
    '中文': '核心优势'
  },
  'professionalWholesalePlatform': {
    'English': 'Professional wholesale platform providing one-stop procurement solutions for global enterprises',
    '中文': '专业的批发平台，为全球企业提供一站式采购解决方案'
  },
  'fromInquiryToDelivery': {
    'English': 'From inquiry to delivery, comprehensive intelligent management',
    '中文': '从询价到交付，全程智能化管理'
  },
  'flexibleMinimumOrder': {
    'English': 'Flexible Minimum Order',
    '中文': '灵活起订量'
  },
  'flexibleMoqSetting': {
    'English': 'Flexible minimum order quantity (MOQ) settings, suitable for procurement needs of enterprises of different scales, from small batch trials to large-scale procurement',
    '中文': '最低起订量(MOQ)灵活设置，适合不同规模企业的采购需求，从小批量试订到大规模采购'
  },
  'wholesalePriceAdvantage': {
    'English': 'Wholesale Price Advantage',
    '中文': '批发价格优势'
  },
  'directFactoryConnection': {
    'English': 'Direct factory connection, eliminating intermediaries, providing highly competitive wholesale prices with volume discounts',
    '中文': '直接对接工厂，省去中间环节，提供极具竞争力的批发价格，量大从优'
  },
  'qualityAssurance': {
    'English': 'Quality Assurance',
    '中文': '质量保证'
  },
  'strictSupplierCertification': {
    'English': 'Strict supplier certification system and quality testing process ensure that every batch of goods meets international standards',
    '中文': '严格的供应商认证体系和质量检测流程，确保每批货物都符合国际标准'
  },
  'financialSupport': {
    'English': 'Financial Support',
    '中文': '金融支持'
  },
  'multiplePaymentMethods': {
    'English': 'Provide multiple payment methods and financial services to reduce procurement risks and optimize cash flow management',
    '中文': '提供多种支付方式和金融服务，降低采购风险，优化现金流管理'
  },
  'globalLogisticsService': {
    'English': 'Global Logistics',
    '中文': '全球物流'
  },
  'completeLogisticsNetwork': {
    'English': 'Complete international logistics network providing door-to-door service to ensure safe and fast delivery of goods',
    '中文': '完善的国际物流网络，提供门到门服务，确保货物安全快速到达'
  },
  'professionalService': {
    'English': 'Professional Service',
    '中文': '专业服务'
  },
  'professionalAccountManagers': {
    'English': 'Professional account manager team providing one-on-one service to solve various problems in the procurement process',
    '中文': '专业的客户经理团队，提供一对一服务，解决采购过程中的各种问题'
  },
  'mainProductCategories': {
    'English': 'Main Product Categories',
    '中文': '主要产品类别'
  },
  'productsCoveringMultipleFields': {
    'English': 'Products covering multiple technology fields to meet wholesale procurement needs of different industries',
    '中文': '涵盖多个科创领域的产品，满足不同行业的批发采购需求'
  },
  'aiIntelligentEquipment': {
    'English': 'AI Intelligent Equipment',
    '中文': 'AI智能设备'
  },
  'newEnergyProducts': {
    'English': 'New Energy Products',
    '中文': '新能源产品'
  },
  'iotDevices': {
    'English': 'IoT Devices',
    '中文': '物联网设备'
  },
  'intelligentManufacturing': {
    'English': 'Intelligent Manufacturing',
    '中文': '智能制造'
  },
  'wholesaleProcurementProcess': {
    'English': 'Wholesale Procurement Process',
    '中文': '批发采购流程'
  },
  'streamlinedProcurementProcess': {
    'English': 'Streamlined procurement process to make your wholesale procurement more efficient and convenient',
    '中文': '简化的采购流程，让您的批发采购变得更加高效便捷'
  },
  'productInquiry': {
    'English': 'Product Inquiry',
    '中文': '产品询价'
  },
  'browseProductCatalog': {
    'English': 'Browse product catalog, submit inquiry requirements, get professional quotation solutions',
    '中文': '浏览产品目录，提交询价需求，获取专业报价方案'
  },
  'sampleConfirmation': {
    'English': 'Sample Confirmation',
    '中文': '样品确认'
  },
  'applySampleTesting': {
    'English': 'Apply for sample testing, confirm product quality and specifications meet requirements',
    '中文': '申请样品测试，确认产品质量和规格符合要求'
  },
  'contractSigning': {
    'English': 'Contract Signing',
    '中文': '合同签署'
  },
  'negotiateTerms': {
    'English': 'Negotiate terms, sign procurement contracts, arrange production and logistics',
    '中文': '协商条款，签署采购合同，安排生产和物流'
  },
  'deliveryAcceptance': {
    'English': 'Delivery & Acceptance',
    '中文': '交付验收'
  },
  'goodsDelivery': {
    'English': 'Goods delivery, quality acceptance, complete transactions and establish long-term cooperation',
    '中文': '货物交付，质量验收，完成交易并建立长期合作'
  },
  'startWholesaleJourney': {
    'English': 'Start Your Wholesale Journey',
    '中文': '开启您的批发采购之旅'
  },
  'registerAsWholesaleCustomer': {
    'English': 'Register now as our wholesale customer and enjoy professional B2B procurement services',
    '中文': '立即注册成为我们的批发客户，享受专业的B2B采购服务'
  },
  'registerWholesaleAccount': {
    'English': 'Register Wholesale Account',
    '中文': '注册批发账户'
  },
  'applyToBeSupplier': {
    'English': 'Apply to Be Supplier',
    '中文': '申请成为供应商'
  },
  'wholesaleBusinessEmail': {
    'English': 'Wholesale Business Email',
    '中文': '批发业务邮箱'
  },
  'wholesaleHotline': {
    'English': 'Wholesale Hotline',
    '中文': '批发专线'
  },
  'serviceHours': {
    'English': 'Service Hours',
    '中文': '服务时间'
  },
  'weekdaysNineToSix': {
    'English': 'Weekdays 9:00-18:00',
    '中文': '工作日 9:00-18:00'
  },

  // B2C页面翻译
  'b2cEnterpriseStoreService': {
    'English': 'B2C Enterprise Store Service',
    '中文': 'B2C 企业商城服务'
  },
  'globalEcommerceCertification': {
    'English': 'Global E-commerce Certification',
    '中文': '全球电商认证'
  },
  'techProductsGlobalDirectSales': {
    'English': 'Tech Products Global Direct Sales',
    '中文': '科创产品全球直销'
  },
  'smartStoreGlobalDataDriven': {
    'English': 'Smart Store • Global Reach • Data Driven',
    '中文': '智能商城 • 全球触达 • 数据驱动'
  },
  'professionalB2cPlatformForTech': {
    'English': 'Professional B2C e-commerce platform for tech companies, selling innovative technology products directly to global consumers',
    '中文': '为科创企业提供专业的B2C电商平台，直接面向全球消费者销售科技创新产品'
  },
  'launchMarketplace': {
    'English': 'LAUNCH MARKETPLACE',
    '中文': '启动市场平台'
  },
  'enterpriseCommerce': {
    'English': 'Enterprise Commerce',
    '中文': '企业电商'
  },
  'successStories': {
    'English': 'SUCCESS STORIES',
    '中文': '成功案例'
  },
  'caseStudies': {
    'English': 'Case Studies',
    '中文': '案例研究'
  },
  'settledEnterprises': {
    'English': 'Settled Enterprises',
    '中文': '入驻企业'
  },
  'globalTechBrands': {
    'English': 'Global Tech Brands',
    '中文': '全球科创品牌'
  },
  'salesCountries': {
    'English': 'Sales Countries',
    '中文': '销售国家'
  },
  'globalMarketCoverage': {
    'English': 'Global Market Coverage',
    '中文': '全球市场覆盖'
  },
  'monthlyActiveUsers': {
    'English': 'Monthly Active Users',
    '中文': '月活用户'
  },
  'activeShoppingUsers': {
    'English': 'Active Shopping Users',
    '中文': '活跃购物用户'
  },
  'customerSatisfaction': {
    'English': 'Customer Satisfaction',
    '中文': '客户满意度'
  },
  'fiveStarRating': {
    'English': '5-Star Rating',
    '中文': '5星好评率'
  },
  'securePayment': {
    'English': 'Secure Payment',
    '中文': '安全支付'
  },
  'globalDelivery': {
    'English': 'Global Delivery',
    '中文': '全球配送'
  },
  'instantStoreSetup': {
    'English': 'Instant Store Setup',
    '中文': '极速开店'
  },
  'b2cPlatformCoreFeatures': {
    'English': 'B2C Platform Core Features',
    '中文': 'B2C平台核心功能'
  },
  'completeEcommerceSolution': {
    'English': 'Complete e-commerce solution for tech companies, helping products quickly enter global markets',
    '中文': '为科创企业提供完整的电商解决方案，助力产品快速进入全球市场'
  },
  'independentBrandStore': {
    'English': 'Independent Brand Store',
    '中文': '独立品牌商城'
  },
  'independentBrandStoreDesc': {
    'English': 'Provide independent brand stores for each enterprise, supporting personalized design to showcase corporate image and product features',
    '中文': '为每个企业提供独立的品牌商城，支持个性化设计，展现企业形象和产品特色'
  },
  'globalMarketingPromotion': {
    'English': 'Global Marketing Promotion',
    '中文': '全球营销推广'
  },
  'professionalMarketingTeam': {
    'English': 'Professional marketing team and promotion tools to help enterprise products quickly gain global market attention',
    '中文': '专业的营销团队和推广工具，帮助企业产品快速获得全球市场关注'
  },
  'multiCurrencyPayment': {
    'English': 'Multi-Currency Payment',
    '中文': '多币种支付'
  },
  'supportGlobalCurrencies': {
    'English': 'Support major global currencies and payment methods, providing convenient shopping experience for consumers',
    '中文': '支持全球主要货币和支付方式，为消费者提供便捷的购物体验'
  },
  'globalLogisticsDelivery': {
    'English': 'Global Logistics Delivery',
    '中文': '全球物流配送'
  },
  'cooperateWithGlobalLogistics': {
    'English': 'Cooperate with global logistics partners to provide fast and reliable delivery services, ensuring products arrive safely',
    '中文': '与全球物流伙伴合作，提供快速可靠的配送服务，确保产品安全到达'
  },
  'multiLanguageCustomerService': {
    'English': 'Multi-Language Customer Service',
    '中文': '多语言客服'
  },
  'multiLanguageSupport': {
    'English': 'Provide multi-language customer service support to ensure global consumers receive quality shopping experience',
    '中文': '提供多语言客服支持，确保全球消费者都能获得优质的购物体验'
  },
  'dataAnalyticsReport': {
    'English': 'Data Analytics Report',
    '中文': '数据分析报告'
  },
  'detailedSalesAnalytics': {
    'English': 'Provide detailed sales data analysis and market insights to help enterprises optimize products and marketing strategies',
    '中文': '提供详细的销售数据分析和市场洞察，帮助企业优化产品和营销策略'
  },
  'successCaseShowcase': {
    'English': 'Success Case Showcase',
    '中文': '成功案例展示'
  },
  'successfulTechCompanies': {
    'English': 'See tech companies that have succeeded on our platform and how their products reached global markets',
    '中文': '看看已经在我们平台成功的科创企业，他们的产品如何走向全球市场'
  },
  'smartConnectTech': {
    'English': 'Smart Connect Tech',
    '中文': '智联科技'
  },
  'greenEnergyDynamics': {
    'English': 'Green Energy Dynamics',
    '中文': '绿能动力'
  },
  'iotPioneer': {
    'English': 'IoT Pioneer',
    '中文': '物联先锋'
  },
  'servicePricingPlans': {
    'English': 'Service Pricing Plans',
    '中文': '服务套餐价格'
  },
  'flexiblePricingPlans': {
    'English': 'Flexible pricing plans to meet the needs of enterprises of different scales',
    '中文': '灵活的价格方案，满足不同规模企业的需求'
  },
  'basicPlan': {
    'English': 'Basic Plan',
    '中文': '基础版'
  },
  'professionalPlan': {
    'English': 'Professional Plan',
    '中文': '专业版'
  },
  'enterprisePlan': {
    'English': 'Enterprise Plan',
    '中文': '企业版'
  },
  'independentBrandStoreFeature': {
    'English': 'Independent Brand Store',
    '中文': '独立品牌商城'
  },
  'chooseBasicPlan': {
    'English': 'Choose Basic Plan',
    '中文': '选择基础版'
  },
  'allBasicFeatures': {
    'English': 'All Basic Features',
    '中文': '基础版所有功能'
  },
  'multiLanguageCustomerSupport': {
    'English': 'Multi-Language Customer Support',
    '中文': '多语言客服支持'
  },
  'chooseProfessionalPlan': {
    'English': 'Choose Professional Plan',
    '中文': '选择专业版'
  },
  'allProfessionalFeatures': {
    'English': 'All Professional Features',
    '中文': '专业版所有功能'
  },
  'chooseEnterprisePlan': {
    'English': 'Choose Enterprise Plan',
    '中文': '选择企业版'
  },
  'startGlobalSalesJourney': {
    'English': 'Start Your Global Sales Journey',
    '中文': '开启您的全球销售之旅'
  },
  'launchEnterpriseStore': {
    'English': 'Launch enterprise store now and let your tech products reach global markets',
    '中文': '立即开设企业商城，让您的科创产品走向全球市场'
  },
  'freeStoreSetup': {
    'English': 'Free Store Setup',
    '中文': '免费开设商城'
  },
  'scheduleProductDemo': {
    'English': 'Schedule Product Demo',
    '中文': '预约产品演示'
  },
  'storeServiceEmail': {
    'English': 'Store Service Email',
    '中文': '商城服务邮箱'
  },
  'storeServiceHotline': {
    'English': 'Store Service Hotline',
    '中文': '商城服务热线'
  },
  'roundTheClock': {
    'English': '24/7',
    '中文': '全天候'
  },
  'onlineSupport': {
    'English': 'Online Support',
    '中文': '在线支持'
  },

  // C2C页面翻译
  'c2cInnovationHubActive': {
    'English': 'C2C Innovation Hub Active',
    '中文': 'C2C创新中心启动'
  },
  'creatorExcellenceNetwork': {
    'English': 'Creator Excellence Network',
    '中文': '创客卓越网络'
  },
  'creator': {
    'English': 'CREATOR',
    '中文': '创客'
  },
  'innovation': {
    'English': 'INNOVATION',
    '中文': '创新'
  },
  'globalCreatorMarketplace': {
    'English': 'Global Creator Marketplace • 全球创客创新生态系统',
    '中文': '全球创客市场 • Global Creator Innovation Ecosystem'
  },
  'empowering50kCreators': {
    'English': 'Empowering 50,000+ Creators worldwide with Innovation Platform across 120 countries',
    '中文': '在120个国家赋能50,000+创客，提供创新平台支持'
  },
  'joinCreatorHub': {
    'English': 'JOIN CREATOR HUB',
    '中文': '加入创客中心'
  },
  'innovationNetwork': {
    'English': 'Innovation Network',
    '中文': '创新网络'
  },
  'creatorJourneys': {
    'English': 'Creator Journeys',
    '中文': '创客之旅'
  },
  'creatorsLabel': {
    'English': 'Creators',
    '中文': '创客'
  },
  'activeInnovators': {
    'English': 'Active Innovators',
    '中文': '活跃创新者'
  },
  'products': {
    'English': 'Products',
    '中文': '产品'
  },
  'uniqueDesigns': {
    'English': 'Unique Designs',
    '中文': '独特设计'
  },
  'globalReach': {
    'English': 'Global Reach',
    '中文': '全球覆盖'
  },
  'monthlyVolume': {
    'English': 'Monthly Volume',
    '中文': '月交易量'
  },
  'innovationHub': {
    'English': 'Innovation Hub',
    '中文': '创新中心'
  },
  'crowdfunding': {
    'English': 'Crowdfunding',
    '中文': '众筹'
  },
  'globalSales': {
    'English': 'Global Sales',
    '中文': '全球销售'
  },
  'innovationIncubationStandards': {
    'English': 'Innovation Incubation Standards',
    '中文': '创新孵化级服务标准'
  },
  'c2cCreatorPlatform': {
    'English': 'C2C Creator Platform',
    '中文': 'C2C创客平台'
  },
  'zeroBarrierEntry': {
    'English': 'Zero-barrier entry, comprehensive support, enabling every creator to realize global sales dreams',
    '中文': '零门槛入驻，全方位支持，让每个创客都能实现全球销售梦想'
  },
  'fromIdeaToSuccess': {
    'English': 'From idea to success, full journey support',
    '中文': '从创意到成功，全程陪伴成长'
  },
  'zeroFeeEntry': {
    'English': 'Zero Fee Entry',
    '中文': '零费用入驻'
  },
  'freeRegistrationNoFees': {
    'English': 'Free registration and store setup, no platform entry fees, no annual fees, only small commission on successful transactions',
    '中文': '免费注册开店，无平台入驻费，无年费，只在交易成功时收取少量佣金'
  },
  'creatorCommunitySupport': {
    'English': 'Creator Community Support',
    '中文': '创客社区支持'
  },
  'activeCreatorCommunity': {
    'English': 'Active creator community for experience sharing, technical exchange, and collaborative growth in innovation ecosystem',
    '中文': '活跃的创客社区，经验分享，技术交流，共同成长的创新生态'
  },
  'crowdfundingFeature': {
    'English': 'Crowdfunding Feature',
    '中文': '众筹启动功能'
  },
  'builtInCrowdfunding': {
    'English': 'Built-in crowdfunding feature to help creators raise startup funds for new products and validate market demand',
    '中文': '内置众筹功能，帮助创客为新产品筹集启动资金，验证市场需求'
  },
  'innovativeProductIncubation': {
    'English': 'Innovative Product Incubation',
    '中文': '创新产品孵化'
  },
  'professionalIncubationService': {
    'English': 'Professional product incubation service, from idea to product, providing comprehensive guidance and resource support',
    '中文': '专业的产品孵化服务，从创意到产品，全程指导和资源支持'
  },
  'marketingPromotionSupport': {
    'English': 'Marketing Promotion Support',
    '中文': '营销推广支持'
  },
  'freeMarketingTools': {
    'English': 'Free marketing tools and promotion channels to help creator products gain more exposure and sales',
    '中文': '免费的营销工具和推广渠道，帮助创客产品获得更多曝光和销量'
  },
  'globalLogisticsForCreators': {
    'English': 'Global Logistics Delivery',
    '中文': '全球物流配送'
  },
  'cooperateWithLogisticsPartners': {
    'English': 'Cooperate with global logistics partners to provide convenient international logistics solutions for creators',
    '中文': '与全球物流伙伴合作，为创客提供便捷的国际物流解决方案'
  },
  'creatorCategoryShowcase': {
    'English': 'Creator Category Showcase',
    '中文': '创客分类展示'
  },
  'creatorsFromDifferentFields': {
    'English': 'Creators from different fields showcase their innovative products here',
    '中文': '来自不同领域的创客在这里展示他们的创新产品'
  },
  'inventorCreators': {
    'English': 'Inventor Creators',
    '中文': '发明创客'
  },
  'techCreators': {
    'English': 'Tech Creators',
    '中文': '科技创客'
  },
  'designCreators': {
    'English': 'Design Creators',
    '中文': '设计创客'
  },
  'educationCreators': {
    'English': 'Education Creators',
    '中文': '教育创客'
  },
  'creatorSuccessStories': {
    'English': 'Creator Success Stories',
    '中文': '创客成功故事'
  },
  'realCreatorStories': {
    'English': 'Real creator stories showcasing the complete journey from idea to success',
    '中文': '真实的创客故事，展示从创意到成功的完整旅程'
  },
  'liXiaoMing': {
    'English': 'Li Xiaoming',
    '中文': '李小明'
  },
  'wangMeiLi': {
    'English': 'Wang Meili',
    '中文': '王美丽'
  },
  'zhangEngineer': {
    'English': 'Engineer Zhang',
    '中文': '张工程师'
  },
  'monthlyIncome': {
    'English': 'Monthly Income',
    '中文': '月收入'
  },
  'userRating': {
    'English': 'User Rating',
    '中文': '用户评分'
  },
  'liXiaoMingTestimonial': {
    'English': 'From a simple idea to a product with 80,000 monthly income, Elephant Global platform gave me the opportunity to realize my dreams. Professional guidance and global sales channels made my invention truly reach the world.',
    '中文': '从一个简单的创意到月收入8万的产品，大象出海平台给了我实现梦想的机会。专业的指导和全球销售渠道让我的发明真正走向了世界。'
  },
  'wangMeiLiTestimonial': {
    'English': 'As an independent designer, I successfully launched my smart bracelet project through the platforms crowdfunding feature. Now the product is sold in 25 countries, realizing my globalization dream.',
    '中文': '作为独立设计师，我通过平台的众筹功能成功启动了我的智能手环项目。现在产品已经销往25个国家，实现了我的全球化梦想。'
  },
  'zhangEngineerTestimonial': {
    'English': 'From hobby to full-time entrepreneurship, the platforms creator community provided me with a lot of technical guidance. Now my educational robots have entered schools in multiple countries worldwide.',
    '中文': '从业余爱好到全职创业，平台的创客社区给了我很多技术指导。现在我的教育机器人已经进入了全球多个国家的学校。'
  },
  'howToStartCreatorJourney': {
    'English': 'How to Start Creator Journey',
    '中文': '如何开始创客之旅'
  },
  'fourSimpleSteps': {
    'English': 'Four simple steps to start your global creator sales journey',
    '中文': '简单四步，开启您的全球创客销售之旅'
  },
  'freeRegistration': {
    'English': 'Free Registration',
    '中文': '免费注册'
  },
  'registerCreatorAccount': {
    'English': 'Register creator account, complete personal information, zero-barrier start to creator journey',
    '中文': '注册创客账户，完善个人信息，零门槛开启创客之旅'
  },
  'uploadProducts': {
    'English': 'Upload Products',
    '中文': '上传产品'
  },
  'uploadInnovativeProducts': {
    'English': 'Upload your innovative products, describe features in detail, set prices',
    '中文': '上传您的创新产品，详细描述功能特点，设置价格'
  },
  'getPromotion': {
    'English': 'Get Promotion',
    '中文': '获得推广'
  },
  'utilizePlatformResources': {
    'English': 'Utilize platform promotion resources, participate in creator activities, increase product exposure',
    '中文': '利用平台推广资源，参与创客活动，提升产品曝光'
  },
  'globalSalesReach': {
    'English': 'Global Sales',
    '中文': '全球销售'
  },
  'throughGlobalSalesNetwork': {
    'English': 'Through global sales network, sell your creative products to all corners of the world',
    '中文': '通过全球销售网络，将您的创意产品销往世界各地'
  },
  'readyToBeGlobalCreator': {
    'English': 'Ready to Be a Global Creator?',
    '中文': '准备成为全球创客了吗？'
  },
  'joinCreatorFamily': {
    'English': 'Join our creator family and let your creative products reach global markets',
    '中文': '加入我们的创客大家庭，让您的创意产品走向全球市场'
  },
  'freeCreatorRegistration': {
    'English': 'Free Creator Registration',
    '中文': '免费注册创客账户'
  },
  'applyCrowdfundingProject': {
    'English': 'Apply Crowdfunding Project',
    '中文': '申请众筹项目'
  },
  'creatorServiceEmail': {
    'English': 'Creator Service Email',
    '中文': '创客服务邮箱'
  },
  'creatorServiceHotline': {
    'English': 'Creator Service Hotline',
    '中文': '创客服务热线'
  },
  'creatorWechatGroup': {
    'English': 'Creator WeChat Group',
    '中文': '创客微信群'
  },
  'scanToJoinCommunity': {
    'English': 'Scan to Join Community',
    '中文': '扫码加入社区'
  },

  // Navigation高优先级修复翻译
  'b2bEnterpriseWholesale': {
    'English': 'B2B Enterprise',
    '中文': 'B2B企业批发'
  },
  'globalIndustrialProcurement': {
    'English': 'Global industrial procurement & supply chain management',
    '中文': '全球工业采购与供应链管理'
  },
  'volumeLabel': {
    'English': '$2.8B+ Volume',
    '中文': '28亿美元+交易额'
  },
  'countriesNavLabel': {
    'English': '107 Countries',
    '中文': '107个国家'
  },
  'suppliersLabel': {
    'English': '50K+ Suppliers',
    '中文': '5万+供应商'
  },
  'b2cEnterpriseStore': {
    'English': 'B2C Marketplace',
    '中文': 'B2C企业商城'
  },
  'globalConsumerMarketNav': {
    'English': 'Global consumer marketplace & direct sales platform',
    '中文': '全球消费者市场与直销平台'
  },
  'usersLabel': {
    'English': '5M+ Users',
    '中文': '500万+用户'
  },
  'eightCountries': {
    'English': '80 Countries',
    '中文': '80个国家'
  },
  'satisfactionLabel': {
    'English': '95% Satisfaction',
    '中文': '95%满意度'
  },
  'c2cInnovationCenter': {
    'English': 'C2C Innovation Hub',
    '中文': 'C2C创新中心'
  },
  'creatorMarketplaceNav': {
    'English': 'Creator marketplace & innovation ecosystem',
    '中文': '创客市场与创新生态系统'
  },
  'creatorsNavLabel': {
    'English': '50K+ Creators',
    '中文': '5万+创客'
  },
  'oneHundredTwentyCountries': {
    'English': '120 Countries',
    '中文': '120个国家'
  },
  'revenueLabel': {
    'English': '$500M Revenue',
    '中文': '5亿美元营收'
  },
  'aiAggregationEngineNav': {
    'English': 'AI Aggregation Engine',
    '中文': 'AI聚合引擎'
  },
  'aiDrivenOptimization': {
    'English': 'AI-powered intelligent resource aggregation & optimization',
    '中文': 'AI驱动的智能资源聚合与优化'
  },
  'accuracyLabel': {
    'English': '99.2% Accuracy',
    '中文': '99.2%准确率'
  },
  'responseLabel': {
    'English': '3s Response',
    '中文': '3秒响应'
  },
  'efficiencyLabel': {
    'English': '500% Efficiency',
    '中文': '500%效率提升'
  },

  // Navigation missing keys

  // About page translations
  'aboutElephentTechnology': {
    'English': 'About Elephent Technology',
    '中文': '关于大象科技'
  },
  'globalTechLeadership': {
    'English': 'Global Technology Leadership',
    '中文': '全球技术领导力'
  },
  'corporateVision': {
    'English': 'CORPORATE VISION',
    '中文': '企业愿景'
  },
  'globalTechInnovationLeader': {
    'English': 'Global Technology Innovation Leader • 全球科技创新引领者',
    '中文': '全球科技创新引领者 • Global Technology Innovation Leader'
  },
  'elephentTechMissionStatement': {
    'English': 'Empowering global businesses through cutting-edge technology solutions and Fortune 500 grade infrastructure',
    '中文': '通过前沿技术解决方案和世界500强级基础设施，赋能全球企业'
  },
  'corporateOverview': {
    'English': 'Corporate Overview',
    '中文': '企业概览'
  },
  'ourStory': {
    'English': 'Our Story',
    '中文': '我们的故事'
  },
  'elephentFoundationStory': {
    'English': 'Founded with the vision of transforming global commerce through technology, Elephent Technology has grown to become a Fortune 500 grade platform serving millions of users worldwide.',
    '中文': '大象科技秉承通过技术改变全球商务的愿景而成立，已发展成为服务全球数百万用户的世界500强级平台。'
  },
  'innovationDescription': {
    'English': 'Leading the industry with cutting-edge AI and technology solutions that drive business transformation.',
    '中文': '以前沿AI和技术解决方案引领行业，推动商业转型。'
  },
  'globalReachDescription': {
    'English': 'Operating across 107 countries with a network of 50,000+ verified partners and suppliers.',
    '中文': '业务遍及107个国家，拥有50,000+认证合作伙伴和供应商网络。'
  },
  'excellenceDescription': {
    'English': 'Committed to delivering Fortune 500 grade quality and service excellence in everything we do.',
    '中文': '致力于在我们所做的一切中提供世界500强级的质量和卓越服务。'
  },
  'ourMission': {
    'English': 'Our Mission',
    '中文': '我们的使命'
  },
  'missionStatement': {
    'English': 'To empower global businesses with innovative technology solutions that drive growth, efficiency, and success in the digital economy.',
    '中文': '通过创新技术解决方案赋能全球企业，在数字经济中推动增长、效率和成功。'
  },
  'ourVision': {
    'English': 'Our Vision',
    '中文': '我们的愿景'
  },
  'visionStatement': {
    'English': 'To be the world\'s leading technology platform that connects businesses, creators, and consumers in a unified global marketplace.',
    '中文': '成为全球领先的技术平台，在统一的全球市场中连接企业、创客和消费者。'
  },

  // Contact page translations
  'globalContactCenter': {
    'English': 'Global Contact Center',
    '中文': '全球联系中心'
  },
  'globalSupport': {
    'English': 'GLOBAL SUPPORT',
    '中文': '全球支持'
  },
  'enterpriseCustomerSupport': {
    'English': 'Enterprise Customer Support • 企业级客户支持',
    '中文': '企业级客户支持 • Enterprise Customer Support'
  },
  'contactUsDescription': {
    'English': 'Get in touch with our global support team for enterprise-grade assistance across all business verticals',
    '中文': '联系我们的全球支持团队，获得覆盖所有业务领域的企业级协助'
  },
  'globalContactChannels': {
    'English': 'Global Contact Channels',
    '中文': '全球联系渠道'
  },
  'getInTouch': {
    'English': 'Get In Touch',
    '中文': '联系我们'
  },
  'contactDescription': {
    'English': 'Choose the appropriate contact channel based on your business needs. Our specialized teams are ready to assist you.',
    '中文': '根据您的业务需求选择合适的联系渠道。我们的专业团队随时为您提供帮助。'
  },
  'b2bSupport': {
    'English': 'B2B Enterprise Support',
    '中文': 'B2B企业支持'
  },
  'b2bSupportDescription': {
    'English': 'Dedicated support for wholesale, procurement, and enterprise solutions.',
    '中文': '为批发、采购和企业解决方案提供专属支持。'
  },
  'b2cSupport': {
    'English': 'B2C Consumer Support',
    '中文': 'B2C消费者支持'
  },
  'b2cSupportDescription': {
    'English': 'Customer service for consumer marketplace and direct sales.',
    '中文': '为消费者市场和直销提供客户服务。'
  },
  'c2cSupport': {
    'English': 'C2C Creator Support',
    '中文': 'C2C创客支持'
  },
  'c2cSupportDescription': {
    'English': 'Support for creators, innovators, and marketplace sellers.',
    '中文': '为创客、创新者和市场卖家提供支持。'
  },
  'sendMessage': {
    'English': 'Send Message',
    '中文': '发送消息'
  },
  'contactFormDescription': {
    'English': 'Fill out the form below and our team will get back to you within 24 hours.',
    '中文': '填写下面的表单，我们的团队将在24小时内回复您。'
  },
  'fullName': {
    'English': 'Full Name',
    '中文': '全名'
  },
  'enterFullName': {
    'English': 'Enter your full name',
    '中文': '请输入您的全名'
  },
  'email': {
    'English': 'Email',
    '中文': '邮箱'
  },
  'enterEmail': {
    'English': 'Enter your email address',
    '中文': '请输入您的邮箱地址'
  },
  'company': {
    'English': 'Company',
    '中文': '公司'
  },
  'enterCompany': {
    'English': 'Enter your company name',
    '中文': '请输入您的公司名称'
  },
  'subject': {
    'English': 'Subject',
    '中文': '主题'
  },
  'enterSubject': {
    'English': 'Enter message subject',
    '中文': '请输入消息主题'
  },
  'message': {
    'English': 'Message',
    '中文': '消息'
  },
  'enterMessage': {
    'English': 'Enter your message',
    '中文': '请输入您的消息'
  },

  // 管理页面
  'adminDashboard': {
    'English': 'Admin Dashboard',
    '中文': '管理后台'
  },
  'comprehensiveManagementSystem': {
    'English': 'Comprehensive management system for enterprise operations',
    '中文': '企业运营综合管理系统'
  },
  'dashboard': {
    'English': 'Dashboard',
    '中文': '仪表盘'
  },
  'userManagement': {
    'English': 'User Management',
    '中文': '用户管理'
  },
  'orderManagement': {
    'English': 'Order Management',
    '中文': '订单管理'
  },
  'productManagement': {
    'English': 'Product Management',
    '中文': '产品管理'
  },
  'analytics': {
    'English': 'Analytics',
    '中文': '数据分析'
  },
  'systemSettings': {
    'English': 'System Settings',
    '中文': '系统设置'
  },
  'totalUsers': {
    'English': 'Total Users',
    '中文': '总用户数'
  },
  'totalOrders': {
    'English': 'Total Orders',
    '中文': '总订单数'
  },
  'revenue': {
    'English': 'Revenue',
    '中文': '营收'
  },
  'activeProducts': {
    'English': 'Active Products',
    '中文': '活跃产品'
  },
  'fromLastMonth': {
    'English': 'from last month',
    '中文': '较上月'
  },
  'user': {
    'English': 'User',
    '中文': '用户'
  },
  'email': {
    'English': 'Email',
    '中文': '邮箱'
  },
  'role': {
    'English': 'Role',
    '中文': '角色'
  },
  'status': {
    'English': 'Status',
    '中文': '状态'
  },
  'actions': {
    'English': 'Actions',
    '中文': '操作'
  },
  'orderNumber': {
    'English': 'Order Number',
    '中文': '订单号'
  },
  'customer': {
    'English': 'Customer',
    '中文': '客户'
  },
  'amount': {
    'English': 'Amount',
    '中文': '金额'
  },
  'featureInDevelopment': {
    'English': 'Feature in Development',
    '中文': '功能开发中'
  },
  'thisFeatureIsCurrentlyInDevelopment': {
    'English': 'This feature is currently in development and will be available soon.',
    '中文': '此功能正在开发中，即将推出。'
  },

  // B2C页面翻译
  'globalEcommerceCertified': {
    'English': 'Global E-commerce Certified',
    '中文': '全球电商认证'
  },
  'techProductsGlobalDirect': {
    'English': 'Tech Products Global Direct Sales',
    '中文': '科创产品全球直销'
  },
  'smartStoreGlobalData': {
    'English': 'Smart Store • Global Reach • Data Driven',
    '中文': '智能商城 • 全球触达 • 数据驱动'
  },
  'b2cPlatformDescription': {
    'English': 'Professional B2C e-commerce platform for tech companies to sell innovative products directly to global consumers',
    '中文': '为科创企业提供专业的B2C电商平台，直接面向全球消费者销售科技创新产品'
  },
  'launchMarketplace': {
    'English': 'LAUNCH MARKETPLACE',
    '中文': '启动商城'
  },
  'enterpriseCommerce': {
    'English': 'Enterprise Commerce',
    '中文': '企业商务'
  },
  'successStories': {
    'English': 'SUCCESS STORIES',
    '中文': '成功案例'
  },
  'caseStudies': {
    'English': 'Case Studies',
    '中文': '案例研究'
  },
  'enrolledEnterprises': {
    'English': 'Enrolled Enterprises',
    '中文': '入驻企业'
  },
  'globalTechBrands': {
    'English': 'Global Tech Brands',
    '中文': '全球科创品牌'
  },
  'salesCountries': {
    'English': 'Sales Countries',
    '中文': '销售国家'
  },
  'globalMarketCoverage': {
    'English': 'Global Market Coverage',
    '中文': '全球市场覆盖'
  },
  'monthlyActiveUsers': {
    'English': 'Monthly Active Users',
    '中文': '月活用户'
  },
  'activeShoppingUsers': {
    'English': 'Active Shopping Users',
    '中文': '活跃购物用户'
  },
  'customerSatisfaction': {
    'English': 'Customer Satisfaction',
    '中文': '客户满意度'
  },
  'fiveStarRating': {
    'English': '5-Star Rating',
    '中文': '5星好评率'
  },
  'securePayment': {
    'English': 'Secure Payment',
    '中文': '安全支付'
  },
  'globalShipping': {
    'English': 'Global Shipping',
    '中文': '全球配送'
  },
  'rapidStoreSetup': {
    'English': 'Rapid Store Setup',
    '中文': '极速开店'
  },
  'b2cPlatformCoreFeatures': {
    'English': 'B2C Platform Core Features',
    '中文': 'B2C平台核心功能'
  },
  'completeEcommerceSolution': {
    'English': 'Complete e-commerce solutions for tech companies to rapidly enter global markets',
    '中文': '为科创企业提供完整的电商解决方案，助力产品快速进入全球市场'
  },
  'independentBrandStore': {
    'English': 'Independent Brand Store',
    '中文': '独立品牌商城'
  },
  'independentBrandStoreDesc': {
    'English': 'Provide independent brand stores for each enterprise, support personalized design, showcase corporate image and product features',
    '中文': '为每个企业提供独立的品牌商城，支持个性化设计，展现企业形象和产品特色'
  },
  'customStoreDesign': {
    'English': 'Custom Store Design',
    '中文': '自定义商城设计'
  },
  'brandDomainBinding': {
    'English': 'Brand Domain Binding',
    '中文': '品牌域名绑定'
  },
  'productDisplaySystem': {
    'English': 'Product Display System',
    '中文': '产品展示系统'
  },
  'companyStoryDisplay': {
    'English': 'Company Story Display',
    '中文': '企业故事展示'
  },
  'globalMarketingPromotion': {
    'English': 'Global Marketing Promotion',
    '中文': '全球营销推广'
  },
  'globalMarketingPromotionDesc': {
    'English': 'Professional marketing team and promotion tools to help enterprise products quickly gain global market attention',
    '中文': '专业的营销团队和推广工具，帮助企业产品快速获得全球市场关注'
  },
  'seoOptimization': {
    'English': 'SEO Optimization',
    '中文': 'SEO搜索优化'
  },
  'socialMediaPromotion': {
    'English': 'Social Media Promotion',
    '中文': '社交媒体推广'
  },
  'precisionAdvertising': {
    'English': 'Precision Advertising',
    '中文': '精准广告投放'
  },
  'influencerMarketing': {
    'English': 'Influencer Marketing',
    '中文': '红人合作营销'
  },
  'multiCurrencyPayment': {
    'English': 'Multi-Currency Payment',
    '中文': '多币种支付'
  },
  'multiCurrencyPaymentDesc': {
    'English': 'Support major global currencies and payment methods, providing convenient shopping experience for consumers',
    '中文': '支持全球主要货币和支付方式，为消费者提供便捷的购物体验'
  },
  'majorCurrencies': {
    'English': 'USD/EUR/GBP etc.',
    '中文': '美元/欧元/英镑等'
  },
  'creditCardPaypal': {
    'English': 'Credit Card/PayPal',
    '中文': '信用卡/PayPal'
  },
  'cryptoPayment': {
    'English': 'Crypto Payment',
    '中文': '加密货币支付'
  },
  'installmentSupport': {
    'English': 'Installment Support',
    '中文': '分期付款支持'
  },
  'globalLogisticsDelivery': {
    'English': 'Global Logistics Delivery',
    '中文': '全球物流配送'
  },
  'globalLogisticsDeliveryDesc': {
    'English': 'Partner with global logistics providers to offer fast and reliable delivery services, ensuring products arrive safely',
    '中文': '与全球物流伙伴合作，提供快速可靠的配送服务，确保产品安全到达'
  },
  'globalExpressNetwork': {
    'English': 'Global Express Network',
    '中文': '全球快递网络'
  },
  'realTimeTracking': {
    'English': 'Real-time Tracking',
    '中文': '实时物流追踪'
  },
  'overseasWarehouse': {
    'English': 'Overseas Warehouse',
    '中文': '海外仓储服务'
  },
  'localizedDelivery': {
    'English': 'Localized Delivery',
    '中文': '本地化配送'
  },
  'multilingualCustomerService': {
    'English': 'Multilingual Customer Service',
    '中文': '多语言客服'
  },
  'multilingualCustomerServiceDesc': {
    'English': 'Provide multilingual customer service support to ensure global consumers receive excellent shopping experience',
    '中文': '提供多语言客服支持，确保全球消费者都能获得优质的购物体验'
  },
  'multipleLanguages': {
    'English': 'English/Chinese/Japanese etc.',
    '中文': '英语/中文/日语等'
  },
  '24x7OnlineSupport': {
    'English': '24/7 Online Support',
    '中文': '24/7在线客服'
  },
  'presaleAftersaleSupport': {
    'English': 'Pre-sale & After-sale Support',
    '中文': '售前售后支持'
  },
  'professionalTechConsulting': {
    'English': 'Professional Tech Consulting',
    '中文': '专业技术咨询'
  },
  'dataAnalyticsReports': {
    'English': 'Data Analytics Reports',
    '中文': '数据分析报告'
  },
  'dataAnalyticsReportsDesc': {
    'English': 'Provide detailed sales data analysis and market insights to help enterprises optimize products and marketing strategies',
    '中文': '提供详细的销售数据分析和市场洞察，帮助企业优化产品和营销策略'
  },
  'salesDataStatistics': {
    'English': 'Sales Data Statistics',
    '中文': '销售数据统计'
  },
  'userBehaviorAnalysis': {
    'English': 'User Behavior Analysis',
    '中文': '用户行为分析'
  },
  'marketTrendReports': {
    'English': 'Market Trend Reports',
    '中文': '市场趋势报告'
  },
  'competitorAnalysis': {
    'English': 'Competitor Analysis',
    '中文': '竞品分析对比'
  },
  'successCaseDisplay': {
    'English': 'Success Case Display',
    '中文': '成功案例展示'
  },
  'successfulTechCompanies': {
    'English': 'See how successful tech companies on our platform have brought their products to global markets',
    '中文': '看看已经在我们平台成功的科创企业，他们的产品如何走向全球市场'
  },
  'smartConnectTech': {
    'English': 'SmartConnect Tech',
    '中文': '智联科技'
  },
  'aiSpeakerManufacturer': {
    'English': 'AI Speaker Manufacturer',
    '中文': 'AI智能音箱制造商'
  },
  'monthlySales': {
    'English': 'Monthly Sales',
    '中文': '月销售额'
  },
  'customerRating': {
    'English': 'Customer Rating',
    '中文': '客户评分'
  },
  'smartConnectTestimonial': {
    'English': 'Through Elephant Global platform, our AI speaker products successfully entered European and American markets, with monthly sales growing by 300%.',
    '中文': '通过大象出海平台，我们的AI音箱产品成功打入欧美市场，月销售额增长了300%。'
  },
  'greenEnergyPower': {
    'English': 'GreenEnergy Power',
    '中文': '绿能动力'
  },
  'portableEnergyStorage': {
    'English': 'Portable Energy Storage',
    '中文': '便携式储能设备'
  },
  'greenEnergyTestimonial': {
    'English': 'The platform\'s marketing promotion helped us quickly establish global brand awareness, with sales network covering 5 continents.',
    '中文': '平台的营销推广帮助我们快速建立了全球品牌知名度，销售网络覆盖了5大洲。'
  },
  'iotPioneer': {
    'English': 'IoT Pioneer',
    '中文': '物联先锋'
  },
  'smartHomeSystem': {
    'English': 'Smart Home System',
    '中文': '智能家居系统'
  },
  'iotPioneerTestimonial': {
    'English': 'Multilingual customer service and localized services allow us to provide excellent user experience in different countries.',
    '中文': '多语言客服和本地化服务让我们在不同国家都能提供优质的用户体验。'
  },
  'servicePlanPricing': {
    'English': 'Service Plan Pricing',
    '中文': '服务套餐价格'
  },
  'flexiblePricingPlans': {
    'English': 'Flexible pricing plans to meet the needs of enterprises of different sizes',
    '中文': '灵活的价格方案，满足不同规模企业的需求'
  },
  'basicPlan': {
    'English': 'Basic Plan',
    '中文': '基础版'
  },
  'suitableForStartups': {
    'English': 'Suitable for startup tech companies',
    '中文': '适合初创科创企业'
  },
  'maxHundredProducts': {
    'English': 'Up to 100 products',
    '中文': '最多100个产品'
  },
  'basicMarketing': {
    'English': 'Basic Marketing',
    '中文': '基础营销推广'
  },
  'emailSupport': {
    'English': 'Email Support',
    '中文': '邮件客服支持'
  },
  'chooseBasic': {
    'English': 'Choose Basic',
    '中文': '选择基础版'
  },
  'professionalPlan': {
    'English': 'Professional Plan',
    '中文': '专业版'
  },
  'suitableForGrowingCompanies': {
    'English': 'Suitable for growing companies',
    '中文': '适合成长期企业'
  },

  // 愿景页面翻译
  'globalVisionMission': {
    'English': 'Global Vision & Mission',
    '中文': '全球愿景使命'
  },
  'elephentGlobalOutreach': {
    'English': 'Elephent Global Outreach',
    '中文': '大象全球出海'
  },
  'strongestGlobalBridge': {
    'English': 'Strongest Global Bridge',
    '中文': '最强出海摆渡人'
  },
  'shortestRouteClosestPath': {
    'English': 'Shortest Route • Closest Path',
    '中文': '最近的航程 • 最近的路'
  },
  'coreOpportunities': {
    'English': 'Core Business Opportunities',
    '中文': '核心商业机遇'
  },
  'productGlobalExpansion': {
    'English': 'Product Global Expansion',
    '中文': '产品全球化扩张'
  },
  'capitalConnections': {
    'English': 'Capital Connections',
    '中文': '资本链接'
  },
  'projectSelection': {
    'English': 'Project Selection',
    '中文': '项目甄选'
  },
  'resourceIntegration': {
    'English': 'Resource Integration',
    '中文': '资源整合'
  },
  'channelExpansion': {
    'English': 'Channel Expansion',
    '中文': '渠道扩充'
  },
  'marketDevelopment': {
    'English': 'Market Development',
    '中文': '开拓市场'
  },
  'orderAcquisition': {
    'English': 'Order Acquisition',
    '中文': '获取订单'
  },
  'partnershipBuilding': {
    'English': 'Partnership Building',
    '中文': '合作伙伴建设'
  },
  'confirmedGlobalPartners': {
    'English': 'Confirmed Global Partners',
    '中文': '已确定的全球合作伙伴'
  },
  'keyRegionalFocus': {
    'English': 'Key Regional Focus Areas',
    '中文': '重点关注出海地区'
  },
  'industryExpansionAsia': {
    'English': 'Industry Expansion (Southeast Asia)',
    '中文': '产业出海（东南亚洲）'
  },
  'industryExpansionMiddleEast': {
    'English': 'Industry Expansion (Middle East)',
    '中文': '产业出海（中东地区）'
  },
  'industryExpansionEurope': {
    'English': 'Industry Expansion (Europe)',
    '中文': '产业出海（欧洲）'
  },
  'industryExpansionBeltRoad': {
    'English': 'Industry Expansion (Belt & Road)',
    '中文': '产业出海（一带一路）'
  },
  'strategicPartners': {
    'English': 'Strategic Partner Network',
    '中文': '战略合作伙伴网络'
  },
  'fortune500Corporations': {
    'English': 'Fortune 500 Corporations',
    '中文': 'Fortune 500企业集团'
  },
  'internationalBankingGroup': {
    'English': 'International Banking Groups',
    '中文': '国际银行集团'
  },
  'technologyInnovationCenters': {
    'English': 'Technology Innovation Centers',
    '中文': '科技创新中心'
  },
  'globalTradeAssociations': {
    'English': 'Global Trade Associations',
    '中文': '全球贸易协会'
  },
  'emergingMarketFunds': {
    'English': 'Emerging Market Investment Funds',
    '中文': '新兴市场投资基金'
  },
  'economicDevelopmentBoards': {
    'English': 'Economic Development Boards',
    '中文': '经济发展局'
  },
  'globalCountries': {
    'English': 'Global Countries',
    '中文': '全球国家'
  },
  'annualRevenue': {
    'English': 'Annual Revenue',
    '中文': '年度营收'
  },
  'enterprisePartners': {
    'English': 'Enterprise Partners',
    '中文': '企业合作伙伴'
  },
  'regionalOffices': {
    'English': 'Regional Offices',
    '中文': '区域办事处'
  },
  'joinGlobalJourney': {
    'English': 'Ready to join our global journey?',
    '中文': '准备加入我们的全球征程？'
  },
  'startYourJourney': {
    'English': 'Start Your Journey',
    '中文': '开启您的征程'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('English');

  const isEnglish = language === 'English';

  const t = (key: string): string => {
    return translations[key as keyof typeof translations]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isEnglish, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}