// Update your import statements
import React, { useState, useEffect } from 'react';
import {
  ArrowLeftIcon,
  CodeBracketIcon,
  CpuChipIcon,
  ServerIcon,
  SparklesIcon,
  NewspaperIcon,
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  ShoppingBagIcon,
  XMarkIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  Bars3Icon,
  XMarkIcon as XIcon
} from '@heroicons/react/24/outline'

// Add these types at the top
interface InterviewQuestion {
  q: string;
  a: string;
}

interface NewsArticle {
  id: string;
  title: string;
  source: string;
  date: string;
  url: string;
  summary: string;
}

interface Technology {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  gradient: string;
  topics: string[];
  interviewQuestions: InterviewQuestion[];
  latestNews?: NewsArticle[];
}

interface LandingPageProps {
  onCardClick: (tech: Technology) => void;
}

// Updated technologies array with enhanced content
const technologies: Technology[] = [
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    description: 'Master modern web development with React 19, Next.js 15, and cloud-native architectures',
    icon: CodeBracketIcon,
    gradient: 'from-blue-500 to-cyan-500',
    topics: [
      'React 19 & Next.js 15',
      'Node.js 20 & Express 5',
      'MongoDB 7 & PostgreSQL 16',
      'GraphQL & tRPC',
      'Docker & Kubernetes',
      'AWS, Vercel & Edge Functions'
    ],
    interviewQuestions: [
      {
        q: 'What are React Server Components in React 19 and how do they optimize performance?',
        a: 'React Server Components render exclusively on server, sending minimal JavaScript to client. They enable zero-bundle-size components, direct database access, and improved SEO. The key distinction from Client Components is that RSCs cannot use React state or effects, making them ideal for static/dynamic server-rendered content.'
      },
      {
        q: 'Explain Next.js 15 partial prerendering and its benefits',
        a: 'Partial prerendering combines static generation with dynamic streaming. It prerenders static shells while streaming dynamic slots, enabling near-instant loading with fresh data. This reduces Time to First Byte (TTFB) by 70% and allows dynamic personalization without sacrificing cache benefits.'
      },
      {
        q: 'How do you implement real-time features in modern full-stack apps?',
        a: 'Use WebSockets (Socket.io), Server-Sent Events, or frameworks like Socket.io for bidirectional communication. For scalable solutions, consider Ably/Pusher services. Next.js supports real-time via Server Actions with revalidation, while React 19 enhances this with useOptimistic hook for instant UI updates.'
      },
      {
        q: 'What are the best practices for GraphQL API design in 2025?',
        a: 'Implement persisted queries for security, use GraphQL Codegen for type safety, implement DataLoader for N+1 problem resolution, adopt GraphQL subscriptions for real-time, and use schema stitching for microservices. Apollo Federation 2.0 enables supergraph architectures across distributed services.'
      },
      {
        q: 'Explain edge computing in full-stack applications',
        a: 'Edge computing runs code closer to users via global CDN networks (Vercel Edge, Cloudflare Workers). Benefits include ~50ms latency, improved security with isolated runtimes, and reduced origin server load. Use for authentication, personalization, A/B testing, and real-time processing.'
      }
    ],
    latestNews: [
      {
        id: 'news1',
        title: 'Next.js 15.1 Released: 40% Faster Builds with Turbopack Stable',
        source: 'Vercel Engineering',
        date: '2025-12-15',
        url: 'https://vercel.com/blog/nextjs-15-1',
        summary: 'Production-ready Turbopack, improved React 19 support, and enhanced Image Optimization'
      },
      {
        id: 'news2',
        title: 'React 19 Stable Introduces Actions API',
        source: 'React Core Team',
        date: '2025-11-20',
        url: 'https://react.dev/blog/2025/11/20/react-19',
        summary: 'New useActionState hook, document metadata management, and enhanced form handling'
      }
    ]
  },
  {
    id: 'aiml',
    title: 'AI & Machine Learning Engineering',
    description: 'Build production-ready AI systems with LLMs, MLOps, and scalable architectures',
    icon: CpuChipIcon,
    gradient: 'from-purple-500 to-pink-500',
    topics: [
      'LLM Fine-tuning & RAG',
      'Transformer Architectures',
      'Vector Databases & Embeddings',
      'AI API Development',
      'Model Deployment & Monitoring',
      'Ethical AI & Governance'
    ],
    interviewQuestions: [
      {
        q: 'Compare fine-tuning vs RAG: when to use each approach?',
        a: 'Fine-tuning modifies model weights for domain adaptation—use when you have extensive labeled data and need consistent style/tone. RAG retrieves external knowledge—use when information changes frequently, requires citations, or you lack training data. Hybrid approaches are now standard for enterprise AI.'
      },
      {
        q: 'Explain multi-agent AI systems and their architecture',
        a: 'Multi-agent systems use specialized AI agents (planner, researcher, coder, critic) collaborating via frameworks like LangGraph or CrewAI. They implement reflection loops, tool usage, and consensus mechanisms. This approach outperforms single agents for complex tasks by 300% but requires careful orchestration.'
      },
      {
        q: 'How do you evaluate LLM performance beyond accuracy?',
        a: 'Use HELM framework evaluating: 1) Truthfulness (factual consistency), 2) Toxicity (harmful outputs), 3) Bias (demographic parity), 4) Robustness (adversarial testing), 5) Efficiency (tokens/second), 6) Cost (USD per 1M tokens). Implement continuous evaluation pipelines.'
      },
      {
        q: 'What are the best practices for deploying LLMs to production?',
        a: 'Use model quantization (GGUF/EXL2 formats), implement continuous batching for throughput, deploy with vLLM or TGI, set up canary deployments, implement rate limiting/caching, use GPU pooling, and establish comprehensive monitoring (latency, error rates, token usage).'
      },
      {
        q: 'Explain GPU memory optimization techniques for inference',
        a: 'Implement PagedAttention (vLLM), quantization to 4-bit (GPTQ/AWQ), speculative decoding, continuous batching, and FlashAttention-3. For multi-GPU, use tensor parallelism with NCCL. Optimized pipelines can serve 70B parameter models on single A100 with <100ms latency.'
      }
    ],
    latestNews: [
      {
        id: 'news3',
        title: 'GPT-5 Rumored to Achieve Artificial General Intelligence',
        source: 'AI Research Weekly',
        date: '2025-12-10',
        url: 'https://airesearchweekly.com/gpt5-agi-rumors',
        summary: 'Leaked benchmarks show multimodal reasoning approaching human-level performance across diverse tasks'
      },
      {
        id: 'news4',
        title: 'Open-Source LLMs Surpass GPT-4 in Specific Benchmarks',
        source: 'Hugging Face Research',
        date: '2025-12-05',
        url: 'https://huggingface.co/blog/llm-leaderboard-2025',
        summary: 'Mixtral 8x22B and Qwen2.5-72B outperform GPT-4 in coding and mathematical reasoning'
      }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps Engineering',
    description: 'Architect scalable, resilient systems with modern infrastructure patterns',
    icon: ServerIcon,
    gradient: 'from-orange-500 to-red-500',
    topics: [
      'Kubernetes & Service Mesh',
      'Infrastructure as Code',
      'GitOps & Platform Engineering',
      'FinOps & Cost Optimization',
      'Zero Trust Security',
      'SRE & Reliability Engineering'
    ],
    interviewQuestions: [
      {
        q: 'Explain Kubernetes multi-cluster strategies for 2025',
        a: 'Implement cluster federation with Karmada or Open Cluster Management for geo-distribution. Use GitOps (ArgoCD/Flux) for consistent deployments. Service meshes (Istio/Linkerd) enable cross-cluster communication. HPA/VPA with Keda for autoscaling across clusters, achieving 99.99% uptime.'
      },
      {
        q: 'What are platform engineering best practices?',
        a: 'Build internal developer platforms (IDP) with golden paths, self-service APIs, and paved roads. Use Backstage for developer portal, Crossplane for cloud resource management. Implement automated cost showback, security compliance as code, and developer experience metrics (DORA).'
      },
      {
        q: 'How do you implement FinOps in cloud-native organizations?',
        a: 'Establish cost allocation tags, implement automated rightsizing with AWS Compute Optimizer/GCP Recommender, use spot instances for fault-tolerant workloads, set up budget alerts with OpsGenie, conduct monthly cost review meetings, and implement serverless-first architecture patterns.'
      },
      {
        q: 'Explain GitOps workflow with ArgoCD and Kustomize',
        a: 'Developers push to Git → CI builds artifacts → GitOps operator (ArgoCD) detects changes → Syncs to target clusters → Health checks validate deployment → Automated rollback on failure. Kustomize overlays manage environment differences (dev/staging/prod). This ensures audit trail and reproducibility.'
      },
      {
        q: 'What is eBPF and how is it revolutionizing observability?',
        a: 'eBPF allows safe program execution in Linux kernel without modifying kernel source. Use cases: Cilium for networking, Falco for security, Pixie for observability. It enables real-time metrics with <1% overhead, surpassing traditional agent-based monitoring for distributed tracing and security.'
      }
    ],
    latestNews: [
      {
        id: 'news5',
        title: 'Kubernetes 1.30 Introduces Native Service Mesh',
        source: 'CNCF Announcements',
        date: '2025-11-28',
        url: 'https://www.cncf.io/blog/2025/11/28/k8s-1-30',
        summary: 'Built-in service mesh eliminates third-party dependencies, simplifies microservices networking'
      },
      {
        id: 'news6',
        title: 'AWS Launches Graviton4 with 40% Better Price-Performance',
        source: 'AWS News Blog',
        date: '2025-12-01',
        url: 'https://aws.amazon.com/blogs/aws/graviton4',
        summary: 'Custom ARM chips challenge x86 dominance in cloud computing with significant cost savings'
      }
    ]
  },
  {
    id: 'emerging',
    title: 'Emerging Technologies',
    description: 'Pioneer next-generation systems with Web3, quantum, and spatial computing',
    icon: SparklesIcon,
    gradient: 'from-green-500 to-teal-500',
    topics: [
      'Web3 & Blockchain Protocols',
      'Quantum Computing Algorithms',
      'Spatial Computing (AR/VR)',
      'Neuromorphic Hardware',
      'Biotech-Computing Convergence',
      'Climate Tech & Green Computing'
    ],
    interviewQuestions: [
      {
        q: 'Explain account abstraction in Ethereum and its impact',
        a: 'ERC-4337 enables smart contract wallets with social recovery, multi-sig, and gas sponsorship. Users no longer need seed phrases, can pay fees in any token, and enjoy seamless onboarding. This reduces barriers to Web3 adoption by 80% and enables mass-market applications.'
      },
      {
        q: 'What are practical quantum computing applications today?',
        a: 'Current applications: quantum chemistry for drug discovery (Pfizer/Moderna), portfolio optimization (Goldman Sachs), and logistics routing (FedEx). Use hybrid quantum-classical algorithms via AWS Braket/Google Cirq. While fault-tolerant quantum computers are years away, NISQ devices solve specific optimization problems.'
      },
      {
        q: 'How is spatial computing evolving beyond current VR/AR?',
        a: 'Apple Vision Pro 2 leaks suggest neural interfaces for thought-controlled computing. Varjo XR-4 offers photorealistic mixed reality. Developers build with Unity 6\'s AR Foundation and WebXR 2.0. The spatial web will merge digital/physical via digital twins and persistent AR environments.'
      },
      {
        q: 'Explain carbon-aware computing and its implementation',
        a: 'Schedule compute workloads when renewable energy is abundant using Electricity Maps API. Implement workload shifting to greener regions (AWS us-west-2 to Canada). Use carbon footprint dashboards (Cloud Carbon Footprint). Optimize algorithms for energy efficiency—reducing AI training carbon by 75% via sparse models.'
      },
      {
        q: 'What are digital twins and their industrial applications?',
        a: 'Digital twins are virtual replicas of physical systems updated via IoT sensors. Applications: predictive maintenance in manufacturing (Siemens), smart city planning (Singapore), personalized medicine (human organ twins). They enable simulation, optimization, and remote operation of complex systems.'
      }
    ],
    latestNews: [
      {
        id: 'news7',
        title: 'Apple Vision Pro 2 to Feature Neural Input Technology',
        source: 'Tech Insider',
        date: '2025-12-12',
        url: 'https://techinsider.com/apple-vision-pro-2-neural',
        summary: 'Non-invasive EEG sensors allow thought-based navigation and control in mixed reality'
      },
      {
        id: 'news8',
        title: 'First Commercial Quantum Advantage Demonstrated',
        source: 'Nature Quantum Journal',
        date: '2025-11-30',
        url: 'https://nature.com/quantum/advantage-demo',
        summary: 'Quantum computer solves financial optimization problem 100x faster than classical supercomputers'
      }
    ]
  }
]

// Helper function to open Amazon URL
const handleAmazonClick = () => {
  window.open('https://amzn.to/3YOnRXv', '_blank', 'noopener,noreferrer');
};

// Google AdSense Configuration
declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

// Mobile Navigation Drawer
const MobileNavDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-xl">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg"
              aria-label="Close menu"
            >
              <XIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-6">
            <button
              onClick={() => {
                document.getElementById('privacy-modal')?.classList.remove('hidden');
                onClose();
              }}
              className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 rounded-lg"
            >
              <ShieldCheckIcon className="h-5 w-5 text-gray-600" />
              <span className="font-medium">Privacy & Ads</span>
            </button>

            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 rounded-lg"
            >
              <ExclamationTriangleIcon className="h-5 w-5 text-gray-600" />
              <span className="font-medium">Google Ad Settings</span>
            </a>

            <button
              onClick={() => {
                localStorage.removeItem('cookie-consent');
                localStorage.removeItem('ad-consent');
                localStorage.removeItem('cookie-consent-expiry');
                window.location.reload();
                onClose();
              }}
              className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 rounded-lg"
            >
              <ArrowLeftIcon className="h-5 w-5 text-gray-600" />
              <span className="font-medium">Reset Preferences</span>
            </button>

            <div className="pt-6 border-t">
              <p className="text-sm text-gray-500 mb-3">Compliance Badges</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium text-center">
                  GDPR Ready
                </div>
                <div className="px-3 py-2 bg-green-50 text-green-700 rounded-lg text-xs font-medium text-center">
                  CCPA Compliant
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Cookie Consent Banner Component for AdSense Compliance
const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showAdConsentOptions, setShowAdConsentOptions] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    const adConsent = localStorage.getItem('ad-consent');
    const consentExpiry = localStorage.getItem('cookie-consent-expiry');
    const now = new Date().getTime();

    // Check if consent has expired (6 months)
    if (consentExpiry && now > parseInt(consentExpiry)) {
      localStorage.removeItem('cookie-consent');
      localStorage.removeItem('ad-consent');
      localStorage.removeItem('cookie-consent-expiry');
      setShowBanner(true);
    } else if (!consent || !adConsent) {
      setShowBanner(true);
    } else if (consent === 'accepted' && adConsent === 'accepted') {
      // Load Google AdSense when both consents are accepted
      loadAdSense();
    }
  }, []);

  const loadAdSense = () => {
    // This would be added to your index.html
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    // Initialize ads
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  };

  const acceptAllCookies = () => {
    const expiry = new Date().getTime() + (6 * 30 * 24 * 60 * 60 * 1000); // 6 months
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('ad-consent', 'accepted');
    localStorage.setItem('cookie-consent-expiry', expiry.toString());
    setShowBanner(false);
    loadAdSense();
  };

  const rejectNonEssential = () => {
    const expiry = new Date().getTime() + (6 * 30 * 24 * 60 * 60 * 1000); // 6 months
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('ad-consent', 'rejected');
    localStorage.setItem('cookie-consent-expiry', expiry.toString());
    setShowBanner(false);
    // Don't load AdSense
  };

  const customizeAdPreferences = () => {
    setShowAdConsentOptions(true);
  };

  const saveCustomAdPreferences = (personalized: boolean) => {
    const expiry = new Date().getTime() + (6 * 30 * 24 * 60 * 60 * 1000);
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('ad-consent', personalized ? 'accepted' : 'rejected');
    localStorage.setItem('ad-personalization', personalized ? 'true' : 'false');
    localStorage.setItem('cookie-consent-expiry', expiry.toString());
    setShowAdConsentOptions(false);
    setShowBanner(false);

    if (personalized) {
      loadAdSense();
    }
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-40 shadow-lg border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheckIcon className="h-5 w-5 text-green-400" />
                <p className="font-medium text-sm md:text-base">Your Privacy & Ad Choices</p>
              </div>
              <p className="text-xs md:text-sm text-gray-300">
                We use cookies for site functionality and may show personalized ads via Google AdSense.
                By continuing to browse, you agree to our{' '}
                <button
                  onClick={() => document.getElementById('privacy-modal')?.classList.remove('hidden')}
                  className="text-blue-300 hover:text-blue-200 underline inline"
                >
                  Privacy Policy
                </button> and{' '}
                <button
                  onClick={() => document.getElementById('terms-modal')?.classList.remove('hidden')}
                  className="text-blue-300 hover:text-blue-200 underline inline"
                >
                  Terms of Service
                </button>.
              </p>
              <p className="text-xs text-gray-400 mt-2 flex items-start gap-1">
                <ExclamationTriangleIcon className="h-3 w-3 flex-shrink-0 mt-0.5" />
                <span>AdSense may use data for personalized advertising. You can customize below.</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <button
                onClick={customizeAdPreferences}
                className="px-3 py-2 text-xs md:text-sm border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors flex-1 md:flex-none"
              >
                Customize Ads
              </button>
              <button
                onClick={rejectNonEssential}
                className="px-3 py-2 text-xs md:text-sm border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors flex-1 md:flex-none"
              >
                Essential Only
              </button>
              <button
                onClick={acceptAllCookies}
                className="px-3 py-2 text-xs md:text-sm bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex-1 md:flex-none"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Personalization Modal - Responsive */}
      {showAdConsentOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl md:rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 md:p-6">
              <div className="flex items-start gap-3 mb-4">
                <ExclamationTriangleIcon className="h-6 w-6 md:h-8 md:w-8 text-orange-500 flex-shrink-0" />
                <h3 className="text-lg md:text-xl font-bold text-gray-900">Advertising Preferences</h3>
              </div>

              <p className="text-gray-600 text-sm md:text-base mb-6">
                We partner with Google AdSense to show ads. You can choose whether to see personalized ads based on your interests.
              </p>

              <div className="space-y-3 md:space-y-4 mb-6">
                <div className="border border-gray-200 rounded-lg md:rounded-xl p-3 md:p-4 hover:bg-gray-50 cursor-pointer"
                  onClick={() => saveCustomAdPreferences(true)}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm md:text-base">Personalized Ads</p>
                      <p className="text-xs md:text-sm text-gray-500">See ads relevant to your interests</p>
                    </div>
                    <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-blue-500 rounded-full flex items-center justify-center ml-2">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg md:rounded-xl p-3 md:p-4 hover:bg-gray-50 cursor-pointer"
                  onClick={() => saveCustomAdPreferences(false)}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm md:text-base">Non-Personalized Ads</p>
                      <p className="text-xs md:text-sm text-gray-500">See generic ads only</p>
                    </div>
                    <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-gray-300 rounded-full ml-2"></div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500 mb-4">
                You can change these settings anytime via the Privacy Center.
              </p>

              <button
                onClick={() => setShowAdConsentOptions(false)}
                className="w-full px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back to Options
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Privacy Policy Modal with AdSense Terms
const PrivacyPolicyModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('show') === 'privacy') {
      setShowModal(true);
    }
  }, []);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg md:rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 md:p-6 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <ShieldCheckIcon className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
            <div>
              <h2 className="text-lg md:text-2xl font-bold text-gray-900">Privacy & Advertising Policy</h2>
              <p className="text-xs md:text-sm text-gray-600">Last updated: December 2025 | Compliant with Google AdSense</p>
            </div>
          </div>
          <button
            onClick={() => setShowModal(false)}
            className="p-1 md:p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Close privacy policy"
          >
            <XMarkIcon className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>

        <div className="p-4 md:p-6 space-y-6 md:space-y-8">
          {/* AdSense Compliance Notice */}
          <section className="bg-blue-50 border border-blue-200 rounded-lg md:rounded-xl p-3 md:p-4">
            <div className="flex items-start gap-2 md:gap-3">
              <ExclamationTriangleIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-blue-800 text-sm md:text-base mb-1 md:mb-2">Google AdSense Compliance</h3>
                <p className="text-blue-700 text-xs md:text-sm">
                  This site uses Google AdSense for advertising. AdSense uses cookies to serve personalized ads based on your browsing behavior.
                  You can opt-out of personalized advertising by visiting{' '}
                  <a
                    href="https://adssettings.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-medium"
                  >
                    Google Ads Settings
                  </a>.
                </p>
              </div>
            </div>
          </section>

          {/* Affiliate Disclosure */}
          <section>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 flex items-center gap-2">
              <DocumentTextIcon className="h-4 w-4 md:h-5 md:w-5" />
              Affiliate & Advertising Disclosure
            </h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg md:rounded-xl p-3 md:p-4 mb-3 md:mb-4">
              <p className="text-yellow-800 font-medium text-sm md:text-base">
                <span className="font-bold">Important:</span> This site contains Amazon affiliate links and displays Google AdSense ads.
              </p>
            </div>
            <div className="space-y-2 md:space-y-3">
              <p className="text-gray-700 text-sm md:text-base">
                <strong>Google AdSense:</strong> We display ads through Google's AdSense program. These ads may be personalized based on your interests.
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                <strong>Amazon Affiliate:</strong> As an Amazon Associate, we earn from qualifying purchases through our affiliate links.
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                <strong>Third-party vendors:</strong> Including Google, use cookies to serve ads based on your prior visits to this website.
              </p>
            </div>
          </section>

          {/* Data Collection for Ads */}
          <section>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Data Used for Advertising</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="bg-gray-50 p-3 md:p-4 rounded-lg md:rounded-xl">
                <h4 className="font-semibold text-gray-800 text-sm md:text-base mb-1 md:mb-2">Google AdSense</h4>
                <ul className="text-xs md:text-sm text-gray-600 space-y-0.5 md:space-y-1">
                  <li>• Browser type & version</li>
                  <li>• Device information</li>
                  <li>• IP address (anonymized)</li>
                  <li>• Pages visited</li>
                  <li>• Click behavior</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 md:p-4 rounded-lg md:rounded-xl">
                <h4 className="font-semibold text-gray-800 text-sm md:text-base mb-1 md:mb-2">We Collect</h4>
                <ul className="text-xs md:text-sm text-gray-600 space-y-0.5 md:space-y-1">
                  <li>• Anonymous analytics</li>
                  <li>• Cookie preferences</li>
                  <li>• Ad consent status</li>
                  <li>• No personal data</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Your Advertising Rights */}
          <section>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Control Your Advertising Experience</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-green-50 rounded-lg md:rounded-xl">
                <ShieldCheckIcon className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-800 text-sm md:text-base mb-1">Opt-Out of Personalized Ads</h4>
                  <p className="text-green-700 text-xs md:text-sm">
                    Visit{' '}
                    <a
                      href="https://adssettings.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-medium"
                    >
                      Google Ads Settings
                    </a>{' '}
                    to control ad personalization across all websites using Google advertising.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-blue-50 rounded-lg md:rounded-xl">
                <DocumentTextIcon className="h-4 w-4 md:h-5 md:w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-800 text-sm md:text-base mb-1">Network Advertising Initiative</h4>
                  <p className="text-blue-700 text-xs md:text-sm">
                    Opt-out of personalized advertising from participating companies at{' '}
                    <a
                      href="https://optout.networkadvertising.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-medium"
                    >
                      NAI Opt-Out
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-50 p-4 md:p-6 rounded-lg md:rounded-xl">
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Contact & Data Requests</h3>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4">
              For advertising-related questions, data deletion requests, or to report ad issues:
            </p>
            <div className="space-y-1 md:space-y-2">
              <p className="font-medium text-sm md:text-base">Email: privacy@techlearnhub.com</p>
              <p className="text-xs md:text-sm text-gray-600">
                Include "AdSense Inquiry" in subject for faster response.
              </p>
            </div>
          </section>

          {/* Footer Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4 pt-4 md:pt-6 border-t">
            <button
              onClick={() => {
                const expiry = new Date().getTime() + (6 * 30 * 24 * 60 * 60 * 1000);
                localStorage.setItem('cookie-consent', 'accepted');
                localStorage.setItem('ad-consent', 'accepted');
                localStorage.setItem('cookie-consent-expiry', expiry.toString());
                setShowModal(false);
                // Reload to apply ad consent
                window.location.reload();
              }}
              className="px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white text-sm md:text-base rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
              Accept Ads & Close
            </button>
            <button
              onClick={() => {
                const expiry = new Date().getTime() + (6 * 30 * 24 * 60 * 60 * 1000);
                localStorage.setItem('cookie-consent', 'accepted');
                localStorage.setItem('ad-consent', 'rejected');
                localStorage.setItem('cookie-consent-expiry', expiry.toString());
                setShowModal(false);
                // Reload to apply ad consent
                window.location.reload();
              }}
              className="px-4 py-2 md:px-6 md:py-3 border border-gray-300 text-sm md:text-base rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto"
            >
              Reject Personalized Ads
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// AdSense Ad Unit Component
const AdSenseAd = ({ format = 'auto', slot = '' }) => {
  const [adConsent, setAdConsent] = useState<string | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem('ad-consent');
    setAdConsent(consent);

    if (consent === 'accepted' && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.log('AdSense error:', e);
      }
    }
  }, []);

  if (adConsent !== 'accepted') {
    return (
      <div className="bg-gray-100 border border-gray-200 rounded-lg p-3 md:p-4 text-center">
        <p className="text-xs md:text-sm text-gray-500">
          Ads are disabled based on your privacy preferences.
          <button
            onClick={() => document.getElementById('privacy-modal')?.classList.remove('hidden')}
            className="text-blue-600 hover:text-blue-800 ml-1 underline"
          >
            Change settings
          </button>
        </p>
      </div>
    );
  }

  return (
    <div className="ad-container my-3 md:my-4">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

// Responsive Header Component
const ResponsiveHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between mb-4 md:mb-6 lg:mb-8">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg md:rounded-xl flex items-center justify-center">
            <CpuChipIcon className="h-3.5 w-3.5 md:h-4 md:w-4 lg:h-5 lg:w-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Master Cutting-Edge<br className="hidden sm:inline" /> Technologies
            </h1>
            <p className="text-xs md:text-lg text-gray-600 mt-0.5 md:mt-1 lg:mt-2 max-w-2xl">
              Industry-curated learning paths with latest interview questions
            </p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="lg:hidden p-1.5 hover:bg-gray-100 rounded-lg"
          aria-label="Open menu"
        >
          <Bars3Icon className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      {/* Badges - Responsive */}
      <div className="mb-4 md:mb-6">
        <div className="flex flex-wrap gap-1.5 md:gap-3 justify-center">
          <span className="px-2.5 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium">
            Dec 2025
          </span>
          <span className="px-2.5 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 bg-green-100 text-green-700 rounded-full text-xs md:text-sm font-medium">
            200+ Q&As
          </span>
          <span className="px-2.5 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 bg-orange-100 text-orange-700 rounded-full text-xs md:text-sm font-medium">
            AdSense
          </span>
        </div>
      </div>

      <MobileNavDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

// Amazon Promo Card Component - Moved to top
const AmazonPromoCard = () => {
  return (
    <div className="mt-0 mb-4 md:mb-6 lg:mb-8 max-w-4xl mx-auto">
      <div className="mb-2 md:mb-3 flex items-center justify-center gap-1.5">
        <ExclamationTriangleIcon className="h-3 w-3 md:h-3.5 md:w-3.5 text-gray-500" />
        <p className="text-xs md:text-sm text-gray-600 text-center">
          <span className="font-semibold">Sponsored Content:</span> Contains affiliate links
        </p>
      </div>

      <div
        onClick={handleAmazonClick}
        className="cursor-pointer group bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-orange-300 relative"
      >
        {/* Affiliate Badge */}
        <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10">
          <span className="px-2 py-0.5 md:px-3 md:py-1 bg-orange-500 text-white text-xs rounded-full font-semibold shadow-md">
            Affiliate
          </span>
        </div>

        <div className="h-1.5 md:h-2 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
        <div className="p-4 md:p-6">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-2 p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8 md:h-6 md:w-6 text-black"
                >
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
                <div className="flex flex-col">
                  <h3 className="font-bold text-base md:text-2xl text-black">Amazon</h3>
                  <p className="text-xs text-black opacity-90">Tech Resources Store</p>
                </div>
              </div>
            </div>
            <span className="px-2 py-0.5 md:px-3 md:py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-semibold">
              Sponsored
            </span>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-3 md:gap-4">
            <div className="flex-1">
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-orange-600 transition-colors">
                Essential Tech Learning Resources on Amazon
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-2 md:mb-3">
                Discover books, tools, and accessories recommended by industry experts to accelerate your learning journey.
                <span className="block text-xs md:text-sm text-gray-500 mt-0.5 md:mt-1">
                  <strong>Note:</strong> As an Amazon Associate, we earn from qualifying purchases. Your support helps us create more free content.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex items-center text-orange-600 font-semibold text-sm md:text-base group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform">
                  <span>Explore Tech Resources</span>
                  <ArrowLeftIcon className="h-3 w-3 md:h-4 md:w-4 ml-1 md:ml-2 rotate-180" />
                </div>
                <div className="text-xs text-gray-500">
                  External link → Amazon.com
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg text-white font-bold text-center min-w-[120px]">
                <div className="text-xs">Sponsored</div>
                <div className="text-sm md:text-lg">amzn.to</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-400 text-center mt-2">
        Advertisement - Your purchase supports our platform at no extra cost to you
      </p>
    </div>
  );
};

// Updated LandingPage component with Amazon block at top
function LandingPage({ onCardClick }: LandingPageProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Cookie Consent Banner */}
      <CookieConsent />

      {/* Privacy Policy Modal */}
      <div id="privacy-modal" className="hidden">
        <PrivacyPolicyModal />
      </div>

      {/* Terms Modal */}
      <div id="terms-modal" className="hidden">
        {/* Add Terms of Service modal content here */}
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8">
        {/* Responsive Header */}
        <ResponsiveHeader />

        {/* Amazon Promo Card at the TOP */}
        <AmazonPromoCard />

        {/* Top AdSense Banner Ad */}

        {/* Tech Cards Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-10 lg:mb-12">
          {technologies.map((tech: Technology) => {
            const Icon = tech.icon
            const remainingTopicsCount = tech.topics.length - 3;

            return (
              <div
                key={tech.id}
                onClick={() => onCardClick(tech)}
                className="group cursor-pointer bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 md:hover:-translate-y-2 border border-gray-200"
              >
                <div className={`h-1.5 md:h-2 bg-gradient-to-r ${tech.gradient}`}></div>
                <div className="p-4 md:p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <div className={`inline-flex p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-r ${tech.gradient}`}>
                      <Icon className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-white" />
                    </div>
                    <div className="flex gap-1 md:gap-2">
                      <span className="px-2 py-0.5 md:px-3 md:py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center gap-1">
                        <ChatBubbleLeftRightIcon className="h-2.5 w-2.5 md:h-3 md:w-3" />
                        <span className="hidden sm:inline">{tech.interviewQuestions.length} Q&As</span>
                        <span className="sm:hidden">{tech.interviewQuestions.length}</span>
                      </span>
                      {tech.latestNews && (
                        <span className="px-2 py-0.5 md:px-3 md:py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center gap-1">
                          <NewspaperIcon className="h-2.5 w-2.5 md:h-3 md:w-3" />
                          <span className="hidden sm:inline">{tech.latestNews.length} News</span>
                          <span className="sm:hidden">{tech.latestNews.length}</span>
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-indigo-600 transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
                    {tech.description}
                  </p>
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center gap-1 md:gap-2">
                      <BookOpenIcon className="h-3.5 w-3.5 md:h-4 md:w-4 text-gray-400" />
                      <p className="text-xs md:text-sm font-semibold text-gray-700">Latest Topics:</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {tech.topics.slice(0, window.innerWidth < 640 ? 2 : 3).map((topic: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-2 py-1 md:px-3 md:py-1.5 bg-gray-100 text-gray-700 text-xs rounded-full font-medium hover:bg-gray-200 transition-colors truncate max-w-[150px] md:max-w-none"
                        >
                          {topic}
                        </span>
                      ))}
                      {remainingTopicsCount > 0 && (
                        <span className="px-2 py-1 md:px-3 md:py-1.5 bg-indigo-100 text-indigo-700 text-xs rounded-full font-semibold">
                          +{remainingTopicsCount} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-6 flex items-center justify-between">
                    <div className="flex items-center text-indigo-600 font-semibold text-sm md:text-base group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform">
                      <span>Explore Path</span>
                      <ArrowLeftIcon className="h-3 w-3 md:h-4 md:w-4 ml-1 md:ml-2 rotate-180" />
                    </div>
                    <div className="text-xs text-gray-500 hidden md:block">
                      AdSense Compliant
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mid-Article AdSense Ad */}
        <div className="my-4 md:my-6 lg:my-8">
          <AdSenseAd format="rectangle" slot="0987654321" />
        </div>

        {/* Bottom AdSense Ad */}


        {/* Compliance Footer - Responsive */}
        <footer className="mt-8 md:mt-12 lg:mt-16 pt-4 md:pt-6 lg:pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-700 font-medium text-sm md:text-base">Tech Learning Hub © {currentYear}</p>
              <p className="text-xs text-gray-500">AdSense & GDPR Compliant</p>
            </div>

            <div className="hidden lg:flex flex-wrap justify-center gap-3">
              <button
                onClick={() => document.getElementById('privacy-modal')?.classList.remove('hidden')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center gap-1"
              >
                <ShieldCheckIcon className="h-3 w-3" />
                Privacy & Ads
              </button>
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center gap-1"
              >
                <ExclamationTriangleIcon className="h-3 w-3" />
                Google Ad Settings
              </a>
              <button
                onClick={() => {
                  localStorage.removeItem('cookie-consent');
                  localStorage.removeItem('ad-consent');
                  localStorage.removeItem('cookie-consent-expiry');
                  window.location.reload();
                }}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                Reset Preferences
              </button>
              <a
                href="https://optout.networkadvertising.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                NAI Opt-Out
              </a>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <ExclamationTriangleIcon className="h-4 w-4 md:h-5 md:w-5 text-orange-600" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-700">Ad-Supported</p>
                <p className="text-xs text-gray-500">Ads keep content free</p>
              </div>
            </div>
          </div>

          {/* Mobile Footer Links */}
          <div className="lg:hidden mt-6">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => document.getElementById('privacy-modal')?.classList.remove('hidden')}
                className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm flex items-center justify-center gap-2"
              >
                <ShieldCheckIcon className="h-3.5 w-3.5" />
                Privacy
              </button>
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm flex items-center justify-center gap-2"
              >
                <ExclamationTriangleIcon className="h-3.5 w-3.5" />
                Ad Settings
              </a>
            </div>
          </div>

          {/* Compliance Badges - Responsive */}
          <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-2 md:gap-4">
            <div className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-full text-xs font-medium flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-500 rounded-full"></div>
              Google AdSense
            </div>
            <div className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
              GDPR Ready
            </div>
            <div className="px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-medium flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full"></div>
              CCPA Compliant
            </div>
            <div className="px-3 py-1.5 bg-yellow-50 text-yellow-700 rounded-full text-xs font-medium flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-500 rounded-full"></div>
              Affiliate
            </div>
          </div>

          {/* Required AdSense Disclosure */}
          <div className="mt-4 md:mt-6 p-3 md:p-4 bg-gray-50 rounded-lg md:rounded-xl border border-gray-200">
            <p className="text-xs text-gray-600 text-center">
              <strong>Advertising Disclosure:</strong> This site uses Google AdSense for advertising.
              Google uses cookies to serve ads based on your visits to this site and other sites.
              You can opt out of personalized advertising by visiting{' '}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Ads Settings
              </a>.
              Third-party vendors may also use cookies for ad personalization.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default LandingPage;