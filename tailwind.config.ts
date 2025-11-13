import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'media',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                steak: {
                    50: '#fbba72', // light - peachy orange
                    100: '#ca5310', // burnt orange
                    200: '#bb4d00', // deep orange
                    300: '#8f250c', // dark red-brown
                    400: '#691e06', // darkest - deep brown
                },
            },
        },
    },
    plugins: [],
}

export default config