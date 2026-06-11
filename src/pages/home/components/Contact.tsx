import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const urlEncoded = new URLSearchParams(
      formData as unknown as Record<string, string>
    ).toString();

    try {
      const res = await fetch(
        'https://formspree.io/f/YOUR_FORM_ID',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: urlEncoded,
        }
      );
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError('送信に失敗しました。恐れ入りますがメールにて直接ご連絡ください。');
      }
    } catch {
      setError('送信に失敗しました。恐れ入りますがメールにて直接ご連絡ください。');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background-100/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="text-accent-400 font-mono text-xs tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-950">
            お問い合わせ
          </h2>
          <p className="text-foreground-600 text-sm mt-4 font-body">
            お問い合わせはメールにてお気軽にどうぞ。
          </p>
        </div>

        <div
          ref={ref}
          className={`max-w-lg mx-auto transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {submitted ? (
            <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-8 text-center">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-primary-500/20 text-primary-400 mb-4">
                <i className="ri-check-line text-2xl"></i>
              </div>
              <p className="text-foreground-950 font-heading text-lg font-bold mb-2">
                送信完了
              </p>
              <p className="text-foreground-600 text-sm font-body">
                お問い合わせありがとうございます。内容を確認の上、追ってご連絡いたします。
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-background-50 border border-background-200/40 rounded-lg p-6 md:p-8 space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs text-foreground-400 uppercase tracking-wider font-mono mb-2"
                >
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-background-100 border border-background-200/50 rounded-md px-4 py-2.5 text-sm text-foreground-950 placeholder:text-foreground-500 focus:outline-none focus:border-primary-500/50 transition-colors font-body"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs text-foreground-400 uppercase tracking-wider font-mono mb-2"
                >
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-background-100 border border-background-200/50 rounded-md px-4 py-2.5 text-sm text-foreground-950 placeholder:text-foreground-500 focus:outline-none focus:border-primary-500/50 transition-colors font-body"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs text-foreground-400 uppercase tracking-wider font-mono mb-2"
                >
                  メッセージ
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={500}
                  rows={5}
                  className="w-full bg-background-100 border border-background-200/50 rounded-md px-4 py-2.5 text-sm text-foreground-950 placeholder:text-foreground-500 focus:outline-none focus:border-primary-500/50 transition-colors resize-none font-body"
                  placeholder="お問い合わせ内容をご記入ください（500文字以内）"
                ></textarea>
                <p className="text-[10px] text-foreground-500 mt-1 font-mono text-right">
                  最大500文字
                </p>
              </div>

              {error && (
                <p className="text-accent-500 text-xs font-body">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary-500 hover:bg-primary-400 disabled:opacity-50 disabled:cursor-not-allowed text-background-50 font-bold py-3 rounded-md text-sm transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <i className="ri-loader-4-line animate-spin"></i>
                    送信中...
                  </span>
                ) : (
                  '送信する'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}