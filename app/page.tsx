import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const apps = [
    {
      title: "BMI Calculator",
      description: "身長と体重からBMI（体格指数）を計算します",
      href: "/bmi",
      icon: "📊",
    },
    {
      title: "Chat",
      description: "リアルタイムチャットアプリケーション",
      href: "/chat",
      icon: "💬",
    },
    {
      title: "Flashcards",
      description: "学習用フラッシュカードアプリ",
      href: "/flashcards",
      icon: "🎴",
    },
    {
      title: "おみくじ",
      description: "運勢を占うおみくじアプリ",
      href: "/omikuji",
      icon: "🎋",
    },
    {
      title: "Todo (Advanced)",
      description: "高機能なタスク管理アプリ",
      href: "/todo-advanced",
      icon: "✅",
    },
    {
      title: "Todo (Simple)",
      description: "シンプルなタスク管理アプリ",
      href: "/todo-simple",
      icon: "📝",
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center py-16 px-8 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-8 text-center mb-12">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={24}
            priority
          />
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50">
            Web App Sample Collection
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Next.jsで作成したサンプルアプリケーション集です。各アプリをクリックして試してみてください。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          {apps.map((app) => (
            <Link
              key={app.href}
              href={app.href}
              className="group flex flex-col gap-3 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-700"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{app.icon}</span>
                <h2 className="text-xl font-semibold text-black dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {app.title}
                </h2>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {app.description}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
