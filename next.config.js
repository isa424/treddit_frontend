module.exports = (phase, {defaultConfig}) => {
	return {
		/* config options here */
		...defaultConfig,
		images: {
			domains: ['avatars.githubusercontent.com'],
		},
	};
};
