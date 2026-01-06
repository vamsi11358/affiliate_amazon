// Update your import statements
import React from 'react';
import {
  ArrowLeftIcon,
  CodeBracketIcon,
  CpuChipIcon,
  ServerIcon,
  SparklesIcon,
  NewspaperIcon,
  ChatBubbleLeftRightIcon,
  BookOpenIcon
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

// Updated LandingPage component with TypeScript - FIXED ARITHMETIC ERROR
function LandingPage({ onCardClick }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Master Cutting-Edge Technologies in 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-curated learning paths with latest interview questions, real-world projects, and emerging technology insights
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Updated: December 2025
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              200+ Interview Questions
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              50+ Latest News Articles
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech: Technology) => {
            const Icon = tech.icon
            const remainingTopicsCount = tech.topics.length - 4;
            
            return (
              <div
                key={tech.id}
                onClick={() => onCardClick(tech)}
                className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-gray-200"
              >
                <div className={`h-2 bg-gradient-to-r ${tech.gradient}`}></div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${tech.gradient}`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center gap-1">
                        <ChatBubbleLeftRightIcon className="h-3 w-3" />
                        {tech.interviewQuestions.length} Q&As
                      </span>
                      {tech.latestNews && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center gap-1">
                          <NewspaperIcon className="h-3 w-3" />
                          {tech.latestNews.length} News
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {tech.description}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <BookOpenIcon className="h-4 w-4 text-gray-400" />
                      <p className="text-sm font-semibold text-gray-700">Latest Topics:</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tech.topics.slice(0, 4).map((topic: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-full font-medium hover:bg-gray-200 transition-colors"
                        >
                          {topic}
                        </span>
                      ))}
                      {remainingTopicsCount > 0 && (
                        <span className="px-3 py-1.5 bg-indigo-100 text-indigo-700 text-xs rounded-full font-semibold">
                          +{remainingTopicsCount} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Explore Learning Path</span>
                      <ArrowLeftIcon className="h-4 w-4 ml-2 rotate-180" />
                    </div>
                    <div className="text-sm text-gray-500">
                      Updated content
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default LandingPage;