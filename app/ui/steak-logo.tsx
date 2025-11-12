import { rye } from '@/app/ui/fonts';
import Image from "next/image";

export default function SteakLogo() {
    return (
        <div
        className={`${rye.className} flex flex-row items-center leading-none text-white`}
        >
            <Image
                className="h-12 w-12 dark:invert"
                src="/steak.svg"
                alt="Steak logo"
                width={100}
                height={20}
                priority
            />
            <p className="text-[44px]">Steak Me</p>
        </div>
    )
}
