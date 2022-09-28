module.exports = {
	reactStrictMode: true,
	images : {
		domains : ['apod.nasa.gov', 'nasa.gov' ]
	  }
	,
	
	theme: {
		extend: {
		  zIndex: {
			'60': '60',
		  }
		}
	  },
};
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
	reactStrictMode: true,
	images : {
		domains : ['apod.nasa.gov', 'localhost', ]
	  }
})