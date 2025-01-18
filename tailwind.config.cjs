/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  'primary-content': 'hsl(var(--pc))',
		  'secondary-content': 'hsl(var(--sc))',
		},
		typography: {
		  DEFAULT: {
			css: {
			  maxWidth: '100ch',
			},
		  },
		},
	  },
	},
	plugins: [
	  require("@tailwindcss/typography"),
	  require("daisyui")
	],
	daisyui: {
	  themes: [{
		modern: {
		  "primary": "#2A3036",
		  "primary-content": "#ffffff",
		  "secondary": "#4B5563",
		  "accent": "#374151",
		  "neutral": "#1F2937",
		  "base-100": "#ffffff",
		  "base-200": "#F9FAFB",
		  "base-300": "#F3F4F6",
		  "info": "#3B82F6",
		  "success": "#10B981",
		  "warning": "#F59E0B",
		  "error": "#EF4444",
		}
	  }, "light", "dark"],
	  darkTheme: "dark",
	  logs: false,
	}
  }