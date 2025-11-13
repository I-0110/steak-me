import SteakLogo from '@/app/ui/steak-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { merriweather } from './ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-4">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-steak-300 p-4 ">
        <SteakLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-steak-50 px-6 py-10">
          <p className={`${merriweather.className}text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Steak Me!</strong> Not sure what steak to pick? Within two questions, we will tell you what is your steak appetite and more.
          </p>
          <Link
            href="/quiz"
            className="flex items-center gap-5 self-start rounded-lg bg-steak-300 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-steak-100 md:text-base"
          >
            <span>Start Quiz Here</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex justify-center">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.jpg"
            width={1000}
            height={760}
            className='hidden md:block rounded-lg'
            alt='Screenshot of some steak from my photos desktop version'
          />
          <Image
            src="/hero-mobile.jpg"
            width={560}
            height={620}
            className='block md:hidden rounded-lg w-full h-auto'
            alt='Screenshot of some steak from my photos mobile version'
          />
        </div>
      </div>
    </main>
  );
}