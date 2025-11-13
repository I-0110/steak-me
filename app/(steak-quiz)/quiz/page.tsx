import SteakLogo from "@/app/ui/steak-logo"
import SteakQuizForm from '@/app/ui/quiz-form';
import { Suspense } from 'react';
import { merriweather } from "@/app/ui/fonts";

export default function Page() {
  return (
    <main className={`${merriweather.className}flex min-h-screen flex-col p-4`}>
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-steak-300 p-4 ">
        <SteakLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-steak-50 px-6 py-10">
          <Suspense>
            <SteakQuizForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}