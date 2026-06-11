export default function Hero() {
  const scrollToWorks = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-950/20 via-gray-950 to-gray-950 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        <p className="text-sky-500 text-sm font-medium tracking-widest uppercase mb-6">
          Portfolio
        </p>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
          営業10年 × 情シス × AI実装。
          <br />
          <span className="text-sky-400">現場の課題を、仕組みで終わらせる。</span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
          折衝力と実装力で、誰も手をつけていなかった課題を解決します。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#works"
            onClick={scrollToWorks}
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200"
          >
            実績を見る
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200"
          >
            お問い合わせ
          </a>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
