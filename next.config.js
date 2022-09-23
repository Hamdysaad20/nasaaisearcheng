module.exports = {
	images: {
		domains: ["earthengine.googleapis.com"],
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