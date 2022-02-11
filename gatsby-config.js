module.exports = {
	siteMetadata: {
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		{
			resolve: 'churchsuite-events-gatsby-plugin',
			options: {
				domain: 'thec3.churchsuite.co.uk',
				date_start: '2019-10-20',
				date_end: '2019-12-20',
				account: 'thec3',
				application: 'zapier.api',
				authkey: 'keyyzyy5l9uqicjacdtm',
			},
		},
	],
};
