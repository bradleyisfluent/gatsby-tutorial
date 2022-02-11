module.exports = {
	siteMetadata: {
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		{
			// resolve: 'churchsuite-events-gatsby-plugin',
			resolve: require.resolve(`../churchsuite-events-gatsby-plugin`),
			options: {
				domain: 'thec3.churchsuite.co.uk',
				date_start: '2019-10-20',
				date_end: '2019-12-20',
			},
		},
	],
};
