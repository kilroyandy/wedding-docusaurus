// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Andrew and Rosie",
	tagline: "Our Wedding Reception",
	url: "https://andrewandrosie.com",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "A & R", // Usually your GitHub org/user name.
	projectName: "wedding-docusaurus", // Usually your repo name.

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "Andrew & Rosie",
				logo: {
					alt: "My Site Logo",
					src: "img/logo.svg",
				},
				items: [
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "Tutorial",
					},
					// { to: "/blog", label: "Blog", position: "left" },
					// {
					// 	href: "https://github.com/facebook/docusaurus",
					// 	label: "GitHub",
					// 	position: "right",
					// },
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Tutorial",
								to: "/docs/intro",
							},
						],
					},
					// {
					// 	title: "Community",
					// 	items: [
					// 		{
					// 			label: "Stack Overflow",
					// 			href: "https://stackoverflow.com/questions/tagged/docusaurus",
					// 		},
					// 		{
					// 			label: "Discord",
					// 			href: "https://discordapp.com/invite/docusaurus",
					// 		},
					// 		{
					// 			label: "Twitter",
					// 			href: "https://twitter.com/docusaurus",
					// 		},
					// 	],
					// },
					{
						title: "More",
						items: [
							{
								label: "Blog",
								to: "/blog",
							},
							{
								label: "GitHub",
								href: "https://github.com/facebook/docusaurus",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Andrew & Rosie`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			algolia: {
				// The application ID provided by Algolia
				appId: "B9BJ3C8ERK",

				// Public API key: it is safe to commit it
				apiKey: "2a4febcf3a5ea851ca81c244c76c9ac3",

				indexName: "wedding",

				// Optional: see doc section below
				contextualSearch: true,

				// Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
				externalUrlRegex: "external\\.com|domain\\.com",

				// Optional: Algolia search parameters
				searchParameters: {},

				// Optional: path for search page that enabled by default (`false` to disable it)
				searchPagePath: "search",

				//... other Algolia params
			},
		}),
};

module.exports = config;
