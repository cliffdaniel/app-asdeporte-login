import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
    	extend: {
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			brand: {
    				'1': '#fff5e8',
    				'2': '#ffeee3',
    				'3': '#ffdec6',
    				'4': '#ffcdaa',
    				'5': '#ffbd8e',
    				'6': '#ffac71',
    				'7': '#ff5255',
    				'8': '#ff6a00',
    				'9': '#ff6a00',
    				'10': '#d25100'
    			},
    			warning: {
    				'1': '#fef3e6',
    				'2': '#f9e0c7',
    				'3': '#f7c797',
    				'4': '#f2995f',
    				'5': '#ed7b2f',
    				'6': '#d35a21',
    				'7': '#ba431b',
    				'8': '#9e3610',
    				'9': '#842b0b',
    				'10': '#5a1907'
    			},
    			error: {
    				'1': '#fdecee',
    				'2': '#f9d7d9',
    				'3': '#f8b9be',
    				'4': '#f78d94',
    				'5': '#f36d78',
    				'6': '#e34d59',
    				'7': '#c9353f',
    				'8': '#b11f26',
    				'9': '#951114',
    				'10': '#680506'
    			},
    			success: {
    				'1': '#e8f8f2',
    				'2': '#bcebdc',
    				'3': '#85dbbe',
    				'4': '#48c79c',
    				'5': '#00a870',
    				'6': '#078d5c',
    				'7': '#067945',
    				'8': '#056334',
    				'9': '#044f2a',
    				'10': '#033017'
    			},
    			gray: {
    				'1': '#f3f3f3',
    				'2': '#eee',
    				'3': '#e7e7e7',
    				'4': '#dcdcdc',
    				'5': '#c5c5c5',
    				'6': '#a6a6a6',
    				'7': '#8b8b8b',
    				'8': '#777',
    				'9': '#5e5e5e',
    				'10': '#4b4b4b'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
