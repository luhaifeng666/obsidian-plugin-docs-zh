import{_ as e,c as s,o as a,a as n}from"./app.d1f61182.js";const F=JSON.parse('{"title":"FileManager","description":"","frontmatter":{},"headers":[{"level":2,"title":"Constructor","slug":"constructor","link":"#constructor","children":[]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"getNewFileParent","slug":"getnewfileparent","link":"#getnewfileparent","children":[]},{"level":3,"title":"renameFile","slug":"renamefile","link":"#renamefile","children":[]},{"level":3,"title":"generateMarkdownLink","slug":"generatemarkdownlink","link":"#generatemarkdownlink","children":[]},{"level":3,"title":"processFrontMatter","slug":"processfrontmatter","link":"#processfrontmatter","children":[]}]}],"relativePath":"zh2.0/reference/typescript/classes/FileManager.md","lastUpdated":1675003003000}'),t={name:"zh2.0/reference/typescript/classes/FileManager.md"},l=n(`<h1 id="filemanager" tabindex="-1">FileManager <a class="header-anchor" href="#filemanager" aria-hidden="true">#</a></h1><p>Manage the creation, deletion and renaming of files from the UI.</p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="getnewfileparent" tabindex="-1">getNewFileParent <a class="header-anchor" href="#getnewfileparent" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">getNewFileParent</span><span style="color:#A6ACCD;">(sourcePath: string): TFolder</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Gets the folder that new files should be saved to, given the user&#39;s preferences.</p><h3 id="renamefile" tabindex="-1">renameFile <a class="header-anchor" href="#renamefile" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">renameFile</span><span style="color:#A6ACCD;">(file: TAbstractFile</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> newPath: string): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Rename or move a file safely, and update all links to it depending on the user&#39;s preferences.</p><h3 id="generatemarkdownlink" tabindex="-1">generateMarkdownLink <a class="header-anchor" href="#generatemarkdownlink" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">generateMarkdownLink</span><span style="color:#A6ACCD;">(file: TFile</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sourcePath: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> subpath</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> alias</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> string): string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Generate a markdown link based on the user&#39;s preferences.</p><h3 id="processfrontmatter" tabindex="-1">processFrontMatter <a class="header-anchor" href="#processfrontmatter" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">processFrontMatter</span><span style="color:#A6ACCD;">(file: TFile</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> fn: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">frontMatter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;">): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Atomically read, modify, and save the frontmatter of a note. The frontmatter is passed in as a JS object, and should be mutated directly to achieve the desired result.</p><p>Remember to handle errors thrown by this method.</p>`,18),r=[l];function o(i,p,c,d,h,m){return a(),s("div",null,r)}const g=e(t,[["render",o]]);export{F as __pageData,g as default};