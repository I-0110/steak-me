import SteakLogo from "@/app/ui/steak-logo"
import QuizResults from "@/app/ui/quiz-result";
import { merriweather } from "@/app/ui/fonts";
import { Suspense } from 'react';

export default function Page() {
  return (
    <main className={`${merriweather.className}flex min-h-screen flex-col p-4`}>
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-[#8f250c] p-4 ">
        <SteakLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-transparent px-6 py-10">
          <Suspense>
            <QuizResults />
          </Suspense>
        </div>
      </div>
    </main>
  );
}