import{_ as s,c as e,o as a,U as n}from"./chunks/framework.064ffc6f.js";const C=JSON.parse('{"title":"MetadataCache","description":"","frontmatter":{},"headers":[],"relativePath":"zh2.0/reference/typescript/classes/MetadataCache.md","lastUpdated":1678847704000}'),l={name:"zh2.0/reference/typescript/classes/MetadataCache.md"},o=n(`<h1 id="metadatacache" tabindex="-1">MetadataCache <a class="header-anchor" href="#metadatacache" aria-label="Permalink to &quot;MetadataCache&quot;">​</a></h1><p>Extends <code>Events</code></p><p>Linktext is any internal link that is composed of a path and a subpath, such as &quot;My note#Heading&quot; Linkpath (or path) is the path part of a linktext Subpath is the heading/block ID part of a linktext.</p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="resolvedlinks" tabindex="-1">resolvedLinks <a class="header-anchor" href="#resolvedlinks" aria-label="Permalink to &quot;resolvedLinks&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">resolvedLinks</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Record</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Record</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> number</span><span style="color:#89DDFF;">&gt;&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Contains all resolved links. This object maps each source file&#39;s path to an object of destination file paths with the link count. Source and destination paths are all vault absolute paths that comes from <code>TFile.path</code> and can be used with <code>Vault.getAbstractFileByPath(path)</code>.</p><h3 id="unresolvedlinks" tabindex="-1">unresolvedLinks <a class="header-anchor" href="#unresolvedlinks" aria-label="Permalink to &quot;unresolvedLinks&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">unresolvedLinks</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Record</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Record</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> number</span><span style="color:#89DDFF;">&gt;&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Contains all unresolved links. This object maps each source file to an object of unknown destinations with count. Source paths are all vault absolute paths, similar to <code>resolvedLinks</code>.</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="getfirstlinkpathdest" tabindex="-1">getFirstLinkpathDest <a class="header-anchor" href="#getfirstlinkpathdest" aria-label="Permalink to &quot;getFirstLinkpathDest&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">getFirstLinkpathDest</span><span style="color:#A6ACCD;">(linkpath: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sourcePath: string): TFile </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Get the best match for a linkpath.</p><h3 id="getfilecache" tabindex="-1">getFileCache <a class="header-anchor" href="#getfilecache" aria-label="Permalink to &quot;getFileCache&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">getFileCache</span><span style="color:#A6ACCD;">(file: TFile): CachedMetadata </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="getcache" tabindex="-1">getCache <a class="header-anchor" href="#getcache" aria-label="Permalink to &quot;getCache&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">getCache</span><span style="color:#A6ACCD;">(path: string): CachedMetadata </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="filetolinktext" tabindex="-1">fileToLinktext <a class="header-anchor" href="#filetolinktext" aria-label="Permalink to &quot;fileToLinktext&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">fileToLinktext</span><span style="color:#A6ACCD;">(file: TFile</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sourcePath: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> omitMdExtension</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> boolean): string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Generates a linktext for a file.</p><p>If file name is unique, use the filename. If not unique, use full path.</p><h3 id="on" tabindex="-1">on <a class="header-anchor" href="#on" aria-label="Permalink to &quot;on&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(name: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">changed</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callback: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TFile</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">cache</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CachedMetadata</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> any): EventRef</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Called when a file has been indexed, and its (updated) cache is now available.</p><p>Note: This is not called when a file is renamed for performance reasons. You must hook the vault rename event for those. (Details: <a href="https://github.com/obsidianmd/obsidian-api/issues/77" target="_blank" rel="noreferrer">https://github.com/obsidianmd/obsidian-api/issues/77</a>) Called when a file has been deleted. A best-effort previous version of the cached metadata is presented, but it could be null in case the file was not successfully cached previously. Called when a file has been resolved for <code>resolvedLinks</code> and <code>unresolvedLinks</code>. This happens sometimes after a file has been indexed. Called when all files has been resolved. This will be fired each time files get modified after the initial load.</p><h3 id="on-1" tabindex="-1">on <a class="header-anchor" href="#on-1" aria-label="Permalink to &quot;on&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(name: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">deleted</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callback: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TFile</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">prevCache</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CachedMetadata</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> any): EventRef</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Called when a file has been indexed, and its (updated) cache is now available.</p><p>Note: This is not called when a file is renamed for performance reasons. You must hook the vault rename event for those. (Details: <a href="https://github.com/obsidianmd/obsidian-api/issues/77" target="_blank" rel="noreferrer">https://github.com/obsidianmd/obsidian-api/issues/77</a>) Called when a file has been deleted. A best-effort previous version of the cached metadata is presented, but it could be null in case the file was not successfully cached previously. Called when a file has been resolved for <code>resolvedLinks</code> and <code>unresolvedLinks</code>. This happens sometimes after a file has been indexed. Called when all files has been resolved. This will be fired each time files get modified after the initial load.</p><h3 id="on-2" tabindex="-1">on <a class="header-anchor" href="#on-2" aria-label="Permalink to &quot;on&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(name: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">resolve</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callback: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TFile</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> any): EventRef</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Called when a file has been indexed, and its (updated) cache is now available.</p><p>Note: This is not called when a file is renamed for performance reasons. You must hook the vault rename event for those. (Details: <a href="https://github.com/obsidianmd/obsidian-api/issues/77" target="_blank" rel="noreferrer">https://github.com/obsidianmd/obsidian-api/issues/77</a>) Called when a file has been deleted. A best-effort previous version of the cached metadata is presented, but it could be null in case the file was not successfully cached previously. Called when a file has been resolved for <code>resolvedLinks</code> and <code>unresolvedLinks</code>. This happens sometimes after a file has been indexed. Called when all files has been resolved. This will be fired each time files get modified after the initial load.</p><h3 id="on-3" tabindex="-1">on <a class="header-anchor" href="#on-3" aria-label="Permalink to &quot;on&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(name: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">resolved</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callback: </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> any): EventRef</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Called when a file has been indexed, and its (updated) cache is now available.</p><p>Note: This is not called when a file is renamed for performance reasons. You must hook the vault rename event for those. (Details: <a href="https://github.com/obsidianmd/obsidian-api/issues/77" target="_blank" rel="noreferrer">https://github.com/obsidianmd/obsidian-api/issues/77</a>) Called when a file has been deleted. A best-effort previous version of the cached metadata is presented, but it could be null in case the file was not successfully cached previously. Called when a file has been resolved for <code>resolvedLinks</code> and <code>unresolvedLinks</code>. This happens sometimes after a file has been indexed. Called when all files has been resolved. This will be fired each time files get modified after the initial load.</p>`,40),t=[o];function p(i,r,c,d,h,u){return a(),e("div",null,t)}const y=s(l,[["render",p]]);export{C as __pageData,y as default};
