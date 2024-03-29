/*
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-23 13:54:33
 * @LastEditors: luhaifeng666 youzui@hotmail.com
 * @LastEditTime: 2023-08-21 09:38:45
 * @Description:
 */
import fg from "fast-glob";
import matter from "gray-matter";
import { defineConfig } from "vitepress";

interface SidebarConfig {
	text: string;
	path: string;
	leaves?: Array<SidebarConfig>;
}

interface Items {
	text: string;
	collapsible?: boolean;
	link?: string;
	items?: Items[];
}

// 侧边栏
const sidebar = {};

/**
 * 获取目标目录下的所有 markdown 文件
 * @param link
 * @returns
 */
function getFiles(link: string): string[] {
	return fg.sync([`docs/${link}/*.md`]);
}

function getText(path: string): string {
	const { data } = matter.read(path);
	return data.title || path.replace(/^.{0,}(?=\/)\/|\.md/g, "");
}

/**
 * 获取 sidebar 菜单列表
 * @param type
 * @param path
 * @param leaves
 * @returns
 */
function getItems(
	type: string,
	path: string,
	leaves: Array<SidebarConfig>
): Array<Items> {
	const linkPre = "docs/";
	const link = `${type}${path}`;
	const items: Array<Items> = [];
	// 单文件直接插入
	if (path.includes(".md")) {
		items.push({ text: getText(`${linkPre}${link}`), link });
	} else {
		if (leaves.length) {
			// 有子目录的情况
			leaves.forEach((leaf: SidebarConfig) => {
				items.push({
					text: leaf.text,
					collapsible: true,
					items: getItems(type, `${path}/${leaf.path}`, leaf.leaves || []),
				});
			});
		}
		// 没有字目录的情况
		const files = getFiles(link);
		items.push(
			...files.map((file) => ({
				text: getText(file),
				link: file.replace("docs", ""),
			}))
		);
	}
	return items;
}

const SIDEBAR_CONFIG: {
	[key: string]: Array<SidebarConfig>;
} = {
	"zh2.0/": [
		{ text: "快速开始", path: "getting-started" },
		{ text: "示例", path: "examples" },
		{
			text: "编辑器",
			path: "editor",
			leaves: [{ text: "扩展", path: "extensions" }],
		},
		{ text: "用户界面", path: "user-interface" },
		{ text: "教程", path: "tutorials" },
		{
			text: "参考文档",
			path: "reference",
			leaves: [
				{
					text: "Typescript",
					path: "typescript",
					leaves: [
						{ text: "类", path: "classes" },
						{ text: "枚举", path: "enums" },
						{ text: "方法", path: "functions" },
						{ text: "接口", path: "interfaces" },
						{ text: "类型", path: "types" },
					],
				},
			],
		},
		{ text: "发布", path: "publishing" },
		{ text: "开发者工具", path: "developer-tools.md" },
		{ text: "事件", path: "events.md" },
		{ text: "测试", path: "testing" },
		{ text: "库", path: "vault.md" },
	],
};

Object.keys(SIDEBAR_CONFIG).forEach((key) => {
	const config = SIDEBAR_CONFIG[key];
	sidebar[key] = [];
	config.forEach((cfg) => {
		const { text, path, leaves = [] } = cfg;
		const items: Items[] = getItems(key, path, leaves);
		sidebar[key].push({ text, items, collapsed: true });
	});
});

export default defineConfig({
	title: "Obsidian 插件开发文档",
	base: "/obsidian-plugin-docs-zh/",
	description: " ",
	lastUpdated: true,
	markdown: {
		lineNumbers: true,
	},
	head: [
		["link", { rel: "icon", type: "image/x-icon", href: "images/favicon.ico" }],
	],
	themeConfig: {
		siteTitle: "Obsidian 插件开发文档",
		logo: "/images/img/logo.svg",
		nav: [
			{ text: "首页", link: "/" },
			{ text: "文档", link: "/zh2.0/" },
		],
		editLink: {
			pattern:
				"https://github.com/luhaifeng666/obsidian-plugin-docs-zh/tree/test/docs/:path",
			text: "Edit this page on GitHub",
		},
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/luhaifeng666/obsidian-plugin-docs-zh",
			},
		],
		sidebar,
		search: {
			provider: "local",
		},
	},
});
