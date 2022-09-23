module.exports = {
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