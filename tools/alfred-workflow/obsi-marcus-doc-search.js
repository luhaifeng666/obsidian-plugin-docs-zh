#!/usr/bin/env osascript -l JavaScript

/*
 * @Date: 2022-08-07 11:00:59
 * @LastEditors: haifeng.lu
 * @LastEditTime: 2022-09-26 11:00:36
 * @Description: 
 */
ObjC.import("stdlib");
const app = Application.currentApplication();
app.includeStandardAdditions = true;
const alfredMatcher = (str) => str.replace (/[-()_/.]/g, " ") + " " + str + " ";

String.prototype.capitalizeWords = function () {
	return this.replace(/\w+/g, word => word.charAt(0).toUpperCase() + word.slice(1));
};

//------------------------------------------------------------------------------

const workArray = JSON.parse(app.doShellScript('curl -s "https://api.github.com/repos/luhaifeng666/obsidian-plugin-docs-zh/git/trees/master?recursive=1"'))
	.tree
	.filter(file => file.path.startsWith("docs/zh2.0"))
	.filter(file => file.path.endsWith(".md"))
	.map(file => {
		const subsitePath = file.path.slice(5, -3);

		const displayTitle = subsitePath
			.replace(/.*\//, "") // show only file name
			.capitalizeWords()
			.replaceAll("-", " ");

		const category = subsitePath
			.replace(/(.*)\/.*/, "$1") // only parent
			.replaceAll ("/", " → ") // nicer tree
			.capitalizeWords()
			.replaceAll("-", " ");

		return {
			"title": displayTitle,
			"subtitle": category,
			"match": alfredMatcher (subsitePath),
			"arg": `https://luhaifeng666.github.io/obsidian-plugin-docs-zh/${subsitePath}`,
			"uid": subsitePath,
		};
	});

JSON.stringify({ items: workArray });
