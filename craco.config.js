const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@core': path.resolve(__dirname, './src/components/core/'),
			'@page': path.resolve(__dirname, './src/components/page/'),
			'@part': path.resolve(__dirname, './src/components/part/'),
			'@config': path.resolve(__dirname, './src/config/'),
			'@context': path.resolve(__dirname, './src/context/'),
			'@theme': path.resolve(__dirname, './src/theme/'),
			'@helper': path.resolve(__dirname, './src/helper/'),
		},
	},
};
