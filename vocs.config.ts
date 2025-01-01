import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Aryaman Agarwal',
  description: "",
  sidebar: undefined,
  font: {
    google: "Roboto"
  },
  socials: [ 
    { 
      icon: 'github', 
      link: 'https://github.com/aryaman-23', 
    }
  ],
  topNav: [ 
    { text: 'About', link: '/' },
    { text: 'Experience', link: '/experience' },
    { text: 'Blog', link: '/blog' },
  ],
})
