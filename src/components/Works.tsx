const works = [
  {
    number: '01',
    challenge: '10社分の請求書処理が手作業で属人化',
    approach: 'Power Automate × Power Queryで自動化基盤を構築',
    result: '10社対応の処理フローを標準化・自動化',
    tags: ['Power Automate', 'Power Query'],
  },
  {
    number: '02',
    challenge: '音楽コミュニティのイベント運営管理が煩雑で工数過多',
    approach: 'Makeを活用したiPaaS自動化フローを構築',
    result: '月間運営工数を大幅削減、ヒューマンエラーをゼロ化',
    tags: ['Make', 'iPaaS'],
  },
  {
    number: '03',
    challenge: '経費精算の手間とミスが現場負担に',
    approach: 'LINE × GAS × Claude APIで精算ツールを内製',
    result: 'スマホ完結の精算フローを実現',
    tags: ['LINE API', 'GAS', 'Claude API'],
  },
  {
    number: '04',
    challenge: '音楽コミュニティのウェブ発信基盤がない',
    approach: 'React 19 × Vite × TypeScript × Tailwind × Vercelで構築',
    result: 'GA4/GTM・Meta Pixel・問い合わせフォーム込みで本番運用中',
    tags: ['React 19', 'TypeScript', 'Vercel'],
  },
  {
    number: '05',
    challenge: 'SNSデータの分析基盤がない',
    approach: 'dlt × GitHub Actions × BigQuery × Looker Studioでパイプライン構築',
    result: 'SoundCloud / Instagram / YouTube Analytics APIからの自動収集・可視化を実現',
    tags: ['BigQuery', 'dlt', 'GitHub Actions'],
  },
]

export default function Works() {
  return (
    <section id="works" className="py-24 px-6 bg-gray-950/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sky-500 text-sm font-medium tracking-widest uppercase mb-3">Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">実績</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {works.map((w) => (
            <div
              key={w.number}
              className="bg-gray-900 border border-gray-800 rounded-xl p-7 hover:border-sky-500/30 transition-all duration-300"
            >
              <span className="text-sky-500/60 font-mono text-sm font-medium mb-4 block">
                {w.number}
              </span>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-xs font-semibold text-red-400/80 bg-red-400/10 px-2 py-0.5 rounded shrink-0 h-fit mt-0.5">
                    課題
                  </span>
                  <p className="text-slate-300 text-sm leading-relaxed">{w.challenge}</p>
                </div>

                <div className="flex gap-3">
                  <span className="text-xs font-semibold text-yellow-400/80 bg-yellow-400/10 px-2 py-0.5 rounded shrink-0 h-fit mt-0.5">
                    手段
                  </span>
                  <p className="text-slate-300 text-sm leading-relaxed">{w.approach}</p>
                </div>

                <div className="flex gap-3">
                  <span className="text-xs font-semibold text-green-400/80 bg-green-400/10 px-2 py-0.5 rounded shrink-0 h-fit mt-0.5">
                    結果
                  </span>
                  <p className="text-slate-300 text-sm leading-relaxed">{w.result}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {w.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-sky-400/70 bg-sky-400/10 px-2.5 py-1 rounded-full"
                  >
                    {tag}
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
