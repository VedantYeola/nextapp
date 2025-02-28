import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-3xl font-bold text-center sm:text-left">
          Welcome to Next.js
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center sm:text-left max-w-2xl">
          Build fast, modern web applications with Next.js. This starter
          template helps you get up and running quickly.
        </p>

        <div className="flex flex-col gap-6 sm:flex-row">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md text-center sm:text-left">
            <h2 className="text-xl font-semibold">⚡ Fast Performance</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Next.js is optimized for speed and efficiency.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md text-center sm:text-left">
            <h2 className="text-xl font-semibold">🌍 SEO Optimized</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Improve your site's visibility with built-in SEO features.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md text-center sm:text-left">
            <h2 className="text-xl font-semibold">📦 API Routes</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Create API endpoints directly within your Next.js app.
            </p>
          </div>
        </div>

        <a
          className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-full text-lg hover:bg-blue-700 transition-all"
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </a>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
