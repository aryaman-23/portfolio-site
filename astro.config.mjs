import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Aryaman Agarwal',
			description: "", 
			tagline: "Life of Aryaman", 
			social: {
				github: 'https://github.com/aryaman-23',
			},
			topNav: 
				{ text: 'About', link: '/' },
				// { text: 'Blog', link: '/blog' },
			customCss: ['./src/styles/global.css']
		}),

	],
});
