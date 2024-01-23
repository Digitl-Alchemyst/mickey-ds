import Ads from '@/c/home/Ads';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start p-12'>
      <Ads />
    </main>
  );
}
