import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
        <div className='bg-zinc-900'>
      <main className='flex min-h-screen flex-col items-center justify-start p-12'>
        <Image
          src='/Banner.png'
          alt='Digital Alchemyst Studios'
          width={1200}
          height={350}
        />
        <Image src='/labs.png' alt='Alchemy Labs' width={1200} height={350} />
        <h4 className='mt-8 w-4/5 text-center text-lg font-bold text-stone-300'>
          Welcome to Next Alchemy 14.1 Boilerplate Base with: TypeScript
          + Tailwind CSS + ESLint + Prettier + Jest + React
          Testing Library + Husky + Lint-Staged 
          <br />
          <br />
          Testing Husky & Lint-Stage not yet added, but coming soon.
          <br />
          If you wish to contribute, please open a pull request with additional features
          <br />
          <br />
          Boilerplate by Digitl Alchemyst @ Digital Alchemyst Studios / Alchemy
          Labs
        </h4>
        <Link href='https://github.com/Digitl-Alchemyst/next-alchemy-14.1'>
          <button className='my-5 cursor-pointer rounded-lg border border-zinc-700 bg-zinc-300 p-3 neon-amber'>
            Visit the Github
          </button>
        </Link>
      </main>
    </div>
  );
}
