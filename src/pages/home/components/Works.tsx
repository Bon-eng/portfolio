import { useScrollReveal } from '@/hooks/useScrollReveal';

const businessWorks = [
  {
    id: 1,
    challenge: '10社分の請求書処理が手作業で属人化',
    approach: 'Power Automate × Power Queryで自動化基盤を構築',
    result: '10社対応の処理フローを標準化・自動化',
    tags: ['Power Automate', 'Power Query'],
  },
  {
    id: 2,
    challenge: '外資系クラウド導入において法務・経理・社内調整が属人化しルール化されていなかった',
    approach: 'ベンダー・社内ステークホルダー間の調整を一元管理。租税条約に基づく免税手続き・請求照合・社内決裁フローを担当し、商流手続きをマニュアル化',
    result: 'スケジュール通りの導入を完遂。属人化を解消しガバナンスを強化',
    tags: ['ベンダーコントロール', 'プロジェクト管理'],
  },
  {
    id: 3,
    challenge: '老朽化したTV会議システムが保守切れ・Teams非対応で全国60拠点の業務継続リスクに',
    approach: '機器選定・ベンダー折衝・見積調整を単独主導。拠点向け案内・利用ドキュメントを整備しスケジュールを管理',
    result: '約60台をTeams端末へ全面リプレイス。全国展開をスケジュール通りに完遂',
    tags: ['Microsoft Teams', 'プロジェクト管理'],
  },
  {
    id: 4,
    challenge: '社内で最新技術に関する検証をしていなかった',
    approach: 'Gemini × OCI AI Database 26aiを組み合わせたRAG環境を構築・検証',
    result: 'Oracle社の目に留まり、技術書典『OCI推し100本ノック』への寄稿として採用',
    resultLink: { url: 'https://qiita.com/ilvck/private/cd9f4e0ede783666abb5', label: '（Qiita記事はこちら）' },
    tags: ['Gemini', 'OCI', 'RAG'],
  },
];

const personalWorks = [
  {
    id: 2,
    challenge: 'イベント運営管理が煩雑で工数過多',
    approach: 'Makeを活用したiPaaS自動化フローを構築（Google Workspace権限管理の自動化含む）',
    result: '月50〜60時間の運営工数を削減、ヒューマンエラーをゼロ化',
    tags: ['Make', 'iPaaS', 'Google Workspace'],
  },
  {
    id: 3,
    challenge: '経費精算の手間とミスが現場負担に',
    approach: 'LINE × GAS × Claude APIで精算ツールを内製',
    result: 'スマホ完結の精算フローを実現',
    tags: ['LINE API', 'GAS', 'Claude API'],
  },
  {
    id: 4,
    challenge: 'ウェブ発信基盤がない',
    approach: 'React 19 × Vite × TypeScript × Tailwind × Vercelで構築',
    result: 'GA4/GTM・Meta Pixel・問い合わせフォーム込みで本番運用中',
    tags: ['React 19', 'TypeScript', 'Vercel'],
  },
  {
    id: 5,
    challenge: 'SNSデータの分析基盤がない',
    approach: 'dlt × GitHub Actions × BigQuery × Looker Studioでパイプライン構築',
    result: 'SoundCloud / Instagram / YouTube Analytics APIからの自動収集・可視化を実現',
    tags: ['dlt', 'BigQuery', 'Looker Studio'],
  },
  {
    id: 6,
    challenge: '訪日外国人向け観光情報の収集・音声コンテンツ化が手作業で再現性がない',
    approach: 'Python × Claude API × ElevenLabs × HyperFrames × FFmpegで、スクレイピング→台本生成→音声合成→縦型動画生成までの自動パイプラインを構築',
    result: 'Podcast 3プラットフォーム（Spotify / Apple Podcasts / Amazon Music）配信済み、TikTok / Instagram Reels用縦型動画の自動生成を実現',
    tags: ['Python', 'Claude API', 'ElevenLabs', 'HyperFrames', 'FFmpeg'],
  },
];

function Badge({ label, variant }: { label: string; variant: 'challenge' | 'approach' | 'result' }) {
  const colors = {
    challenge: { bg: 'rgba(239,68,68,0.12)', text: '#dc2626', border: 'rgba(239,68,68,0.25)' },
    approach: { bg: 'rgba(245,158,11,0.12)', text: '#d97706', border: 'rgba(245,158,11,0.25)' },
    result: { bg: 'rgba(16,185,129,0.12)', text: '#059669', border: 'rgba(16,185,129,0.25)' },
  };

  const c = colors[variant];

  return (
    <span
      className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider border"
      style={{
        backgroundColor: c.bg,
        color: c.text,
        borderColor: c.border,
      }}
    >
      {label}
    </span>
  );
}

function WorkCard({ work }: { work: typeof businessWorks[number] }) {
  return (
    <div className="group bg-background-50 border border-background-200/40 rounded-lg p-6 hover:border-accent-500/20 transition-all duration-300 flex flex-col">
      <div className="flex items-center gap-2 mb-5">
        <span className="font-mono text-xs text-accent-400 font-bold">
          {String(work.id).padStart(2, '0')}
        </span>
        <div className="h-px flex-1 bg-background-200/50"></div>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 flex items-center justify-center rounded flex-shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(239,68,68,0.1)', color: '#ef4444' }}>
            <i className="ri-error-warning-line text-xs"></i>
          </div>
          <div className="flex-1 min-w-0">
            <Badge label="課題" variant="challenge" />
            <p className="text-sm text-foreground-800 leading-relaxed font-body mt-1.5">
              {work.challenge}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-6 h-6 flex items-center justify-center rounded flex-shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(245,158,11,0.1)', color: '#f59e0b' }}>
            <i className="ri-tools-line text-xs"></i>
          </div>
          <div className="flex-1 min-w-0">
            <Badge label="手段" variant="approach" />
            <p className="text-sm text-foreground-800 leading-relaxed font-body mt-1.5">
              {work.approach}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-6 h-6 flex items-center justify-center rounded flex-shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(16,185,129,0.1)', color: '#10b981' }}>
            <i className="ri-checkbox-circle-line text-xs"></i>
          </div>
          <div className="flex-1 min-w-0">
            <Badge label="結果" variant="result" />
            <p className="text-sm text-foreground-800 leading-relaxed font-body mt-1.5">
              {work.result}
              {work.resultLink && (
                <a
                  href={work.resultLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-accent-400 hover:text-accent-300 underline underline-offset-2 transition-colors"
                >
                  {work.resultLink.label}
                </a>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-background-200/40">
        <div className="flex flex-wrap gap-1.5">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-2 py-0.5 rounded text-[10px] font-mono text-foreground-500 bg-background-100 border border-background-200/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Works() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="works" className="py-20 md:py-28 bg-background-100/50">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="text-accent-400 font-mono text-xs tracking-widest uppercase mb-3">
            Works
          </p>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-950">
            実績
          </h2>
        </div>

        <div
          ref={ref}
          className={`space-y-14 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* 業務実績 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#ef4444' }}></span>
              <h3 className="font-heading text-lg md:text-xl font-bold text-foreground-950">
                業務実績
              </h3>
              <span className="font-mono text-xs text-foreground-400 ml-1">
                Business Works
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {businessWorks.map((work) => (
                <WorkCard key={work.id} work={work} />
              ))}
            </div>
          </div>

          {/* 個人開発 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#10b981' }}></span>
              <h3 className="font-heading text-lg md:text-xl font-bold text-foreground-950">
                個人開発
              </h3>
              <span className="font-mono text-xs text-foreground-400 ml-1">
                Personal Projects
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {personalWorks.map((work) => (
                <WorkCard key={work.id} work={work} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}