import { useScrollReveal } from '@/hooks/useScrollReveal';

const cards = [
  {
    title: '業務自動化',
    icon: 'ri-settings-3-line',
    tools: 'Make / Power Automate / GAS / iPaaS',
    description: '繰り返し業務をゼロベースで仕組み化',
  },
  {
    title: 'IT基盤整備',
    icon: 'ri-shield-check-line',
    tools: 'Microsoft 365 / Clomo / MDM',
    description: '守りの基盤を整え、組織のITリスクを下げる',
  },
  {
    title: 'AI活用推進',
    icon: 'ri-robot-line',
    tools: 'Claude API / Gemini / RAG',
    description: '生成AIを実務に組み込み、現場の生産性を上げる',
  },
];

export default function WhatIDo() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="what-i-do" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="text-accent-400 font-mono text-xs tracking-widest uppercase mb-3">
            What I Do
          </p>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-950">
            できること
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-5 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="group bg-background-100/80 border border-background-200/40 rounded-lg p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-primary-500/10 text-primary-400 mb-5 group-hover:bg-primary-500/20 transition-colors">
                <i className={`${card.icon} text-xl`}></i>
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground-950 mb-3">
                {card.title}
              </h3>
              <p className="text-xs text-foreground-500 font-mono mb-4 leading-relaxed">
                {card.tools}
              </p>
              <p className="text-sm text-foreground-600 leading-relaxed font-body">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}