import { Inter, Rye, Merriweather } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const rye = Rye({
    weight: ['400'],
    subsets: ['latin'],
});

export const merriweather = Merriweather({
    weight: ['400', '700'],
    subsets: ['latin'],
})