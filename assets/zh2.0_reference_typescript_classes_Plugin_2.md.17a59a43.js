import{_ as s,c as a,o as e,a as n}from"./app.78a4bc39.js";const u=JSON.parse('{"title":"Plugin_2","description":"","frontmatter":{},"headers":[{"level":2,"title":"Constructor","slug":"constructor"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"app","slug":"app"},{"level":3,"title":"manifest","slug":"manifest"},{"level":2,"title":"Methods","slug":"methods"},{"level":3,"title":"addRibbonIcon","slug":"addribbonicon"},{"level":3,"title":"addStatusBarItem","slug":"addstatusbaritem"},{"level":3,"title":"addCommand","slug":"addcommand"},{"level":3,"title":"addSettingTab","slug":"addsettingtab"},{"level":3,"title":"registerView","slug":"registerview"},{"level":3,"title":"registerHoverLinkSource","slug":"registerhoverlinksource"},{"level":3,"title":"registerExtensions","slug":"registerextensions"},{"level":3,"title":"registerMarkdownPostProcessor","slug":"registermarkdownpostprocessor"},{"level":3,"title":"registerMarkdownCodeBlockProcessor","slug":"registermarkdowncodeblockprocessor"},{"level":3,"title":"registerCodeMirror","slug":"registercodemirror"},{"level":3,"title":"registerEditorExtension","slug":"registereditorextension"},{"level":3,"title":"registerObsidianProtocolHandler","slug":"registerobsidianprotocolhandler"},{"level":3,"title":"registerEditorSuggest","slug":"registereditorsuggest"},{"level":3,"title":"loadData","slug":"loaddata"},{"level":3,"title":"saveData","slug":"savedata"}],"relativePath":"zh2.0/reference/typescript/classes/Plugin_2.md","lastUpdated":1673577380000}'),o={name:"zh2.0/reference/typescript/classes/Plugin_2.md"},t=n(`<h1 id="plugin-2" tabindex="-1">Plugin_2 <a class="header-anchor" href="#plugin-2" aria-hidden="true">#</a></h1><p>Extends <code>Component</code></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">(app: App</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> manifest: PluginManifest)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="app" tabindex="-1">app <a class="header-anchor" href="#app" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">app</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> App</span></span>
<span class="line"></span></code></pre></div><h3 id="manifest" tabindex="-1">manifest <a class="header-anchor" href="#manifest" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">manifest</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> PluginManifest</span></span>
<span class="line"></span></code></pre></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="addribbonicon" tabindex="-1">addRibbonIcon <a class="header-anchor" href="#addribbonicon" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">addRibbonIcon</span><span style="color:#A6ACCD;">(icon: IconName</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> title: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callback: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">evt</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MouseEvent</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any): HTMLElement</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Adds a ribbon icon to the left bar.</p><h3 id="addstatusbaritem" tabindex="-1">addStatusBarItem <a class="header-anchor" href="#addstatusbaritem" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">addStatusBarItem</span><span style="color:#A6ACCD;">(): HTMLElement</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="addcommand" tabindex="-1">addCommand <a class="header-anchor" href="#addcommand" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">addCommand</span><span style="color:#A6ACCD;">(command: Command): Command</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Register a command globally. The command id and name will be automatically prefixed with this plugin&#39;s id and name.</p><h3 id="addsettingtab" tabindex="-1">addSettingTab <a class="header-anchor" href="#addsettingtab" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">addSettingTab</span><span style="color:#A6ACCD;">(settingTab: PluginSettingTab): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="registerview" tabindex="-1">registerView <a class="header-anchor" href="#registerview" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">registerView</span><span style="color:#A6ACCD;">(type: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> viewCreator: ViewCreator): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="registerhoverlinksource" tabindex="-1">registerHoverLinkSource <a class="header-anchor" href="#registerhoverlinksource" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">registerHoverLinkSource</span><span style="color:#A6ACCD;">(id: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> info: HoverLinkSource): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><p>Register your view with the &#39;Page preview&#39; core plugin as an emitter of the &#39;hover-link&#39; on the event.</p><h3 id="registerextensions" tabindex="-1">registerExtensions <a class="header-anchor" href="#registerextensions" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">registerExtensions</span><span style="color:#A6ACCD;">(extensions: string[]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> viewType: string): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="registermarkdownpostprocessor" tabindex="-1">registerMarkdownPostProcessor <a class="header-anchor" href="#registermarkdownpostprocessor" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">registerMarkdownPostProcessor</span><span style="color:#A6ACCD;">(postProcessor: MarkdownPostProcessor</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sortOrder</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> number): MarkdownPostProcessor</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="registermarkdowncodeblockprocessor" tabindex="-1">registerMarkdownCodeBlockProcessor <a class="header-anchor" href="#registermarkdowncodeblockprocessor" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">registerMarkdownCodeBlockProcessor</span><span style="color:#A6ACCD;">(language: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> handler: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">source</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HTMLElement</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MarkdownPostProcessorContext</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">any</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void,</span><span style="color:#A6ACCD;"> sortOrder</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> number): MarkdownPostProcessor</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Register a special post processor that handles fenced code given a language and a handler. This special post processor takes care of removing the &lt;pre&gt;&lt;code&gt; and create a &lt;div&gt; that will be passed to your handler, and is expected to be filled with your custom elements.</p><h3 id="registercodemirror" tabindex="-1">registerCodeMirror <a class="header-anchor" href="#registercodemirror" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">registerCodeMirror</span><span style="color:#A6ACCD;">(callback: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">cm</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CodeMirror</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Editor</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><p>Runs callback on all currently loaded instances of CodeMirror, then registers the callback for all future CodeMirror instances.</p><h3 id="registereditorextension" tabindex="-1">registerEditorExtension <a class="header-anchor" href="#registereditorextension" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">registerEditorExtension</span><span style="color:#A6ACCD;">(extension: Extension): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><p>Registers a CodeMirror 6 extension. To reconfigure cm6 extensions for your plugin on the fly, you can pass an array here and dynamically modify it. Once this array is modified, call <code>Workspace.updateOptions()</code> to have the changes applied.</p><h3 id="registerobsidianprotocolhandler" tabindex="-1">registerObsidianProtocolHandler <a class="header-anchor" href="#registerobsidianprotocolhandler" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">registerObsidianProtocolHandler</span><span style="color:#A6ACCD;">(action: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> handler: ObsidianProtocolHandler): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><p>Register a handler for obsidian:// URLs.</p><h3 id="registereditorsuggest" tabindex="-1">registerEditorSuggest <a class="header-anchor" href="#registereditorsuggest" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">registerEditorSuggest</span><span style="color:#A6ACCD;">(editorSuggest: EditorSuggest</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">any</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><p>Register an EditorSuggest which can provide live suggestions while the user is typing.</p><h3 id="loaddata" tabindex="-1">loadData <a class="header-anchor" href="#loaddata" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">loadData</span><span style="color:#A6ACCD;">(): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">any</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span></code></pre></div><h3 id="savedata" tabindex="-1">saveData <a class="header-anchor" href="#savedata" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">saveData</span><span style="color:#A6ACCD;">(data: any): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span>
<span class="line"></span></code></pre></div>`,48),l=[t];function r(p,c,i,d,g,y){return e(),a("div",null,l)}const D=s(o,[["render",r]]);export{u as __pageData,D as default};