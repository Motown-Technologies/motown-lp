/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				paper: '#f5f2ea',
				'paper-2': '#ebe7dc',
				ink: '#0b0b0c',
				'ink-muted': '#4a4a4f',
				accent: '#1d4ed8',
				'accent-deep': '#0b2f8a',
			},
			fontFamily: {
				display: ['"Space Grotesk Variable"', '"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				sans: ['"Inter Variable"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono Variable"', '"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
			},
			fontSize: {
				display: ['clamp(3rem, 8vw, 7.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
				h2: ['clamp(2.25rem, 4vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
			},
			letterSpacing: {
				eyebrow: '0.18em',
				navlabel: '0.15em',
			},
			borderWidth: {
				1.5: '1.5px',
			},
		},
	},
	plugins: [],
}
