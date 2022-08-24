import{_ as s,c as a,o as n,a as l}from"./app.741f1ead.js";const p="/obsidian-plugin-docs-zh/images/command.png",d=JSON.parse('{"title":"\u6307\u4EE4","description":"","frontmatter":{"title":"\u6307\u4EE4"},"headers":[{"level":2,"title":"\u5E26\u6761\u4EF6\u7684\u6307\u4EE4","slug":"\u5E26\u6761\u4EF6\u7684\u6307\u4EE4"},{"level":2,"title":"\u7F16\u8F91\u5668\u6307\u4EE4","slug":"\u7F16\u8F91\u5668\u6307\u4EE4"},{"level":2,"title":"\u70ED\u952E","slug":"\u70ED\u952E"}],"relativePath":"zh/guides/commands.md","lastUpdated":1661305878000}'),o={name:"zh/guides/commands.md"},e=l('<h1 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-hidden="true">#</a></h1><p>Commands(\u6307\u4EE4) \u662F\u6307\u7528\u6237\u53EF\u4EE5\u901A\u8FC7 <a href="https://help.obsidian.md/Plugins/Command+palette" target="_blank" rel="noreferrer">Command Palette(\u547D\u4EE4\u9762\u677F)</a> \u6216\u8005\u70ED\u952E\u7684\u65B9\u5F0F\u6765\u6267\u884C\u7684\u64CD\u4F5C\u3002</p><p><img src="'+p+`" alt="Command"></p><p>\u8981\u60F3\u5728\u60A8\u7684\u63D2\u4EF6\u4E2D\u6DFB\u52A0\u6307\u4EE4\uFF0C\u53EF\u4EE5\u5728 <code>onload()</code> \u65B9\u6CD5\u4E2D\u8C03\u7528 <a href="./../api/classes/Plugin_2.html#addcommand"><code>addCommand()</code></a> \u65B9\u6CD5\uFF1A</p><p>:::: code-group ::: code-group-item tsconfig.json</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Plugin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">obsidian</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExamplePlugin</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Plugin</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">onload</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">addCommand</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">      id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">print-greeting-to-console</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#F07178;">      name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Print greeting to console</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">callback</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hey, you!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>::: ::::</p><h2 id="\u5E26\u6761\u4EF6\u7684\u6307\u4EE4" tabindex="-1">\u5E26\u6761\u4EF6\u7684\u6307\u4EE4 <a class="header-anchor" href="#\u5E26\u6761\u4EF6\u7684\u6307\u4EE4" aria-hidden="true">#</a></h2><p>\u5982\u679C\u60A8\u7684\u6307\u4EE4\u53EA\u80FD\u5728\u67D0\u4E9B\u6761\u4EF6\u4E0B\u8FD0\u884C\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 <a href="./../api/interfaces/Command.html#checkcallback"><code>checkCallback</code></a>\u3002</p><p><code>checkCallback</code> \u6267\u884C\u4E24\u6B21\u3002\u7B2C\u4E00\u6B21\u6267\u884C\u9884\u68C0\u4EE5\u786E\u5B9A\u6307\u4EE4\u662F\u5426\u53EF\u4EE5\u6267\u884C\uFF0C\u7B2C\u4E8C\u6B21\u6267\u884C\u64CD\u4F5C\u3002</p><p>\u7531\u4E8E\u4E24\u6B21\u6267\u884C\u9700\u8981\u65F6\u95F4\uFF0C\u60A8\u9700\u8981\u5728\u6BCF\u6B21\u8C03\u7528\u65F6\u8FDB\u884C\u6821\u9A8C\u3002</p><p>\u4E3A\u4E86\u786E\u5B9A\u56DE\u8C03\u51FD\u6570\u662F\u5426\u5E94\u8BE5\u6267\u884C\u9884\u68C0\u6216\u8005\u64CD\u4F5C\uFF0C\u56DE\u8C03\u51FD\u6570\u4E2D\u4F1A\u63A5\u6536 <code>checking</code> \u53C2\u6570\u3002</p><ul><li>\u5982\u679C <code>checking</code> \u662F <code>true</code>\uFF0C\u6267\u884C\u9884\u68C0\u3002</li><li>\u5982\u679C <code>checking</code> \u662F <code>false</code>\uFF0C\u6267\u884C\u64CD\u4F5C\u3002</li></ul><p>\u4E0B\u4F8B\u4E2D\u7684\u6307\u4EE4\u53D6\u51B3\u4E8E\u6240\u9700\u8981\u7684\u503C\u3002\u5728\u6BCF\u6B21\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u56DE\u8C03\u51FD\u6570\u4F1A\u68C0\u67E5\u8BE5\u503C\u662F\u5426\u5B58\u5728\uFF0C\u4F46\u4EC5\u5728\u68C0\u67E5\u4E3A\u5047\u65F6\u6267\u884C\u8BE5\u64CD\u4F5C\u3002</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">addCommand</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">example-command</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Example command</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">checkCallback</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">checking</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getRequiredValue</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">checking</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">doCommand</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7F16\u8F91\u5668\u6307\u4EE4" tabindex="-1">\u7F16\u8F91\u5668\u6307\u4EE4 <a class="header-anchor" href="#\u7F16\u8F91\u5668\u6307\u4EE4" aria-hidden="true">#</a></h2><p>\u5982\u679C\u60A8\u7684\u6307\u4EE4\u9700\u8981\u8BBF\u95EE\u7F16\u8F91\u5668\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u4F7F\u7528 <a href="./../api/interfaces/Command.html#editorcallback"><code>editorCallback</code></a> \u65B9\u6CD5\uFF0C\u5B83\u7684\u5165\u53C2\u662F\u5F53\u524D\u6D3B\u52A8\u7684\u7F16\u8F91\u5668\u5BF9\u8C61\u4EE5\u53CA\u5B83\u7684\u89C6\u56FE\u3002</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">addCommand</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">example-command</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Example command</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">editorCallback</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">editor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Editor</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MarkdownView</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sel</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">editor</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getSelection</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">You have selected: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">sel</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u7F16\u8F91\u5668\u6307\u4EE4\u4EC5\u5728\u5B58\u5728\u53EF\u7528\u7684\u6D3B\u52A8\u7F16\u8F91\u5668\u65F6\u624D\u4F1A\u51FA\u73B0\u5728\u547D\u4EE4\u9762\u677F\u4E2D\u3002</p></div><p>\u5982\u679C\u7F16\u8F91\u5668\u56DE\u8C03\u51FD\u6570\u4EC5\u5728\u7ED9\u5B9A\u7684\u786E\u5B9A\u6761\u4EF6\u4E0B\u8FD0\u884C\u7684\u8BDD\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 <a href="./../api/interfaces/Command.html#editorcheckcallback"><code>editorCheckCallback</code></a> \u65B9\u6CD5\u3002\u8981\u60F3\u83B7\u53D6\u66F4\u591A\u4FE1\u606F\uFF0C\u53EF\u4EE5\u53C2\u8003 <a href="#conditional-commands">conditional commands</a>\u3002</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">addCommand</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">example-command</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Example command</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">editorCheckCallback</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">checking</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">editor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Editor</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MarkdownView</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getRequiredValue</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">checking</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">doCommand</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u70ED\u952E" tabindex="-1">\u70ED\u952E <a class="header-anchor" href="#\u70ED\u952E" aria-hidden="true">#</a></h2><p>\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u5FEB\u6377\u65B9\u5F0F\u6216\u8005 <em>\u70ED\u952E</em> \u6765\u4F7F\u7528\u6307\u4EE4\u3002\u5C3D\u7BA1\u4ED6\u4EEC\u53EF\u4EE5\u81EA\u884C\u914D\u7F6E\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u7ED9\u4ED6\u4EEC\u63D0\u4F9B\u4E00\u4E2A\u9ED8\u8BA4\u7684\u70ED\u952E\u3002</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u8981\u907F\u514D\u4E3A\u6253\u7B97\u63D0\u4F9B\u7ED9\u5176\u4ED6\u4EBA\u4F7F\u7528\u7684\u63D2\u4EF6\u8BBE\u7F6E\u9ED8\u8BA4\u70ED\u952E\u3002\u56E0\u4E3A\u8FD9\u5F88\u6709\u53EF\u80FD\u8DDF\u5176\u4ED6\u63D2\u4EF6\u5B9A\u4E49\u7684\u70ED\u952E\u6216\u8005\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u70ED\u952E\u76F8\u51B2\u7A81\u3002</p></div><p>\u5728\u672C\u4F8B\u4E2D\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u540C\u65F6\u6309\u4F4F Ctrl\uFF08\u6216\u8005 Mac \u4E0A\u7684 Command\uFF09\u952E\u548C Shift \u952E\uFF0C\u7136\u540E\u6309\u952E\u76D8\u4E0A\u7684\u5B57\u6BCD a \u6765\u8FD0\u884C\u6307\u4EE4\u3002</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">addCommand</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">example-command</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Example command</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">hotkeys</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">modifiers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Mod</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Shift</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">callback</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hey, you!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Mod \u952E\u662F\u4E00\u4E2A\u7279\u6B8A\u7684\u4FEE\u9970\u952E\uFF0C\u5728 Windows \u548C Linux \u4E0A\u53D8\u4E3A Ctrl\uFF0C\u5728 macOS \u4E0A\u53D8\u4E3A Command\u3002</p></div>`,27),c=[e];function t(r,F,D,y,C,A){return n(),a("div",null,c)}const m=s(o,[["render",t]]);export{d as __pageData,m as default};
