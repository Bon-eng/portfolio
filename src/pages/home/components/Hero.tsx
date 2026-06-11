import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Hero() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  const scrollToWorks = () => {
    const el = document.getElementById('works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Dark%20abstract%20minimalist%20geometric%20background%20with%20subtle%20emerald%20green%20and%20warm%20amber%20gradient%20accents%2C%20clean%20modern%20tech%20atmosphere%2C%20soft%20dramatic%20lighting%20on%20dark%20matte%20surface%2C%20professional%20developer%20portfolio%20aesthetic%2C%20subtle%20grid%20texture%2C%20editorial%20quality%2C%20minimal%20composition%2C%20no%20text%2C%20atmospheric%20depth&width=1600&height=900&seq=hero-portfolio-ky-001&orientation=landscape"
          alt="Dark tech abstract background"
          className="w-full h-full object-cover object-top"
          title="K.Y. Portfolio - ビジネスエンジニア"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background-50"></div>
      </div>

      <div
        ref={ref}
        className={`relative z-10 w-full max-w-4xl mx-auto px-4 md:px-6 text-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-accent-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-6">
          Business × Engineering × AI
        </p>

        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground-950 leading-tight mb-6">
          営業10年 × 情シス × AI実装。
          <br />
          <span className="text-primary-400">繰り返す課題を、繰り返さない仕組みへ</span>
        </h1>

        <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-body">
          折衝力と実装力で、誰も仕組み化していなかった課題を解決します。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToWorks}
            className="group inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-background-50 font-bold px-8 py-3 rounded-md text-sm transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            実績を見る
            <i className="ri-arrow-down-line group-hover:translate-y-0.5 transition-transform"></i>
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 border border-foreground-300/30 text-foreground-700 hover:text-foreground-950 hover:border-foreground-500/50 px-8 py-3 rounded-md text-sm transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            お問い合わせ
            <i className="ri-mail-line"></i>
          </button>
        </div>

        <p className="text-foreground-500 font-heading text-lg md:text-xl mt-12 tracking-wide">
          K.Y.
        </p>
      </div>
    </section>
  );
}