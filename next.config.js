module.exports = {
	images: {
		domains: 
		['apod.nasa.gov'], 
		
		formats: ["image/avif", "image/webp" ],

	  },
	
	theme: {
		extend: {
		  zIndex: {
			'60': '60',
		  }
		}
	  },
	reactStrictMode: true,
};
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
	reactStrictMode: true,
})