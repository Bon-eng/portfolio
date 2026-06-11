import { useScrollReveal } from '@/hooks/useScrollReveal';

const categories = [
  {
    name: 'Automation',
    items: ['Make', 'Power Automate', 'Google Apps Script'],
  },
  {
    name: 'Cloud & Infra',
    items: ['Microsoft 365', 'Clomo', 'OCI'],
  },
  {
    name: 'Development',
    items: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vercel'],
  },
  {
    name: 'AI',
    items: ['Claude API', 'Gemini', 'RAG', 'Prompt Engineering', 'ElevenLabs'],
  },
  {
    name: 'Data',
    items: ['BigQuery', 'Looker Studio', 'dlt', 'GitHub Actions', 'Python'],
  },
  {
    name: 'Analytics',
    items: ['GA4', 'GTM', 'Meta Pixel', 'YouTube Analytics'],
  },
  {
    name: 'Other',
    items: ['LINE API', 'Resend', 'Cloudflare Turnstile', 'Notion', 'FFmpeg', 'HyperFrames'],
  },
];

export default function TechStack() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="tech-stack" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="text-accent-400 font-mono text-xs tracking-widest uppercase mb-3">
            Tech Stack
          </p>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-950">
            技術スタック
          </h2>
        </div>

        <div
          ref={ref}
          className={`space-y-3 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-5 py-3.5 px-4 rounded-md border border-transparent hover:border-background-200/60 hover:bg-background-50/80 transition-all duration-200"
            >
              <h4 className="font-mono text-xs text-foreground-500 uppercase tracking-wider sm:w-32 sm:flex-shrink-0 sm:pt-1.5 whitespace-nowrap">
                {cat.name}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="inline-block px-3 py-1.5 rounded-md bg-secondary-200/50 border border-secondary-300/50 text-xs text-foreground-800 font-mono hover:border-accent-500/40 hover:text-accent-500 transition-all duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}