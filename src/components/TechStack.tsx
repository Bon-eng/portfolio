const categories = [
  {
    label: 'Automation',
    items: ['Make', 'Power Automate', 'Google Apps Script'],
  },
  {
    label: 'Cloud & Infra',
    items: ['Microsoft 365', 'Clomo', 'OCI'],
  },
  {
    label: 'Development',
    items: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vercel'],
  },
  {
    label: 'AI',
    items: ['Claude API', 'Gemini', 'RAG', 'Prompt Engineering'],
  },
  {
    label: 'Data',
    items: ['BigQuery', 'Looker Studio', 'dlt', 'GitHub Actions', 'Python'],
  },
  {
    label: 'Analytics',
    items: ['GA4', 'GTM', 'Meta Pixel', 'YouTube Analytics'],
  },
  {
    label: 'Other',
    items: ['LINE API', 'Resend', 'Cloudflare Turnstile', 'Notion'],
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-6 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sky-500 text-sm font-medium tracking-widest uppercase mb-3">Tech Stack</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">技術スタック</h2>
        </div>

        <div className="space-y-8">
          {categories.map((cat) => (
            <div key={cat.label} className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="sm:w-36 shrink-0">
                <span className="text-xs font-semibold text-slate-500 tracking-widest uppercase">
                  {cat.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-slate-300 bg-gray-900 border border-gray-800 px-3 py-1.5 rounded-lg hover:border-sky-500/40 hover:text-sky-300 transition-colors duration-200"
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
  )
}
