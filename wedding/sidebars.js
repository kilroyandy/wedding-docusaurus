/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

	// But you can create a sidebar manually

	// tutorialSidebar: [
	// 	{
	// 		type: "category",
	// 		label: "The Reception",
	// 		link: {
	// 			type: "generated-index",
	// 			title: "The Reception",
	// 			description: "Learn about the most important Docusaurus concepts!",
	// 			slug: "/category/reception",
	// 			keywords: ["reception"],
	// 			image: "/img/docusaurus.png",
	// 		},
	// 		items: ["intro", "venue"],
	// 	},
	// ],
};

module.exports = sidebars;
