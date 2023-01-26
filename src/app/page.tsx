import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <h1 className={`text-3xl font-bold underline ${inter.className}`}>
        Hello Next Js With Tailwind css!
      </h1>
    </main>
  );
}
