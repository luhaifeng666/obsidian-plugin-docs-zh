import{_ as s,c as n,o as a,a as p}from"./app.741f1ead.js";const d=JSON.parse('{"title":"\u4E0E\u7F16\u8F91\u5668\u6269\u5C55\u901A\u4FE1","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u89C6\u56FE\u63D2\u4EF6","slug":"\u89C6\u56FE\u63D2\u4EF6"},{"level":2,"title":"\u72B6\u6001\u5B57\u6BB5","slug":"\u72B6\u6001\u5B57\u6BB5"}],"relativePath":"zh2.0/editor/extensions/communicating-with-editor-extensions.md","lastUpdated":1661305878000}'),l={name:"zh2.0/editor/extensions/communicating-with-editor-extensions.md"},o=p(`<h1 id="\u4E0E\u7F16\u8F91\u5668\u6269\u5C55\u901A\u4FE1" tabindex="-1">\u4E0E\u7F16\u8F91\u5668\u6269\u5C55\u901A\u4FE1 <a class="header-anchor" href="#\u4E0E\u7F16\u8F91\u5668\u6269\u5C55\u901A\u4FE1" aria-hidden="true">#</a></h1><p>\u5F53\u60A8\u521B\u5EFA\u4E86\u7F16\u8F91\u5668\u7684\u6269\u5C55\u540E\uFF0C\u60A8\u53EF\u80FD\u60F3\u8981\u8BA9\u5916\u90E8\u7F16\u8F91\u5668\u4E0E\u4E4B\u901A\u4FE1\u3002\u6BD4\u5982\u901A\u8FC7<a href="./../../user-interface/commands.html">\u6307\u4EE4</a>\u6216\u8005<a href="./../../user-interface/ribbon-actions.html">\u529F\u80FD\u680F\u64CD\u4F5C</a></p><p>You can access the CodeMirror 6 editor from a <a href="./../../reference/typescript/classes/MarkdownView.html">MarkdownView</a>. However, since the Obsidian API doesn&#39;t actually expose the editor, you need to tell TypeScript to trust that it&#39;s there, using <code>@ts-expect-error</code>.</p><p>\u60A8\u53EF\u4EE5\u4ECE <a href="./../../reference/typescript/classes/MarkdownView.html">Markdown \u89C6\u56FE</a>\u4E2D\u8BBF\u95EE CodeMirror 6 \u7F16\u8F91\u5668\u3002\u4F46\u662F\uFF0C\u7531\u4E8E Obsidian API \u5B9E\u9645\u4E0A\u5E76\u672A\u516C\u5F00\u7F16\u8F91\u5668\uFF0C\u56E0\u6B64\u60A8\u9700\u8981\u4F7F\u7528 <code>@ts-expect-error</code> \u7ED5\u8FC7 Typescript \u7684\u9A8C\u8BC1\u3002</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">EditorView</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@codemirror/view</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// @ts-expect-error, not typed</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> editorView </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> view</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cm </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EditorView</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u89C6\u56FE\u63D2\u4EF6" tabindex="-1">\u89C6\u56FE\u63D2\u4EF6 <a class="header-anchor" href="#\u89C6\u56FE\u63D2\u4EF6" aria-hidden="true">#</a></h2><p>\u60A8\u53EF\u4EE5\u901A\u8FC7 <code>EditorView.plugin()</code> \u65B9\u6CD5\u8BBF\u95EE<a href="./view-plugins.html">\u89C6\u56FE\u63D2\u4EF6</a>\u5B9E\u4F8B\u3002</p><p>:::: code-group :::code-group-item main.ts</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">addCommand</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">example-editor-command</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Example editor command</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">editorCallback</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">editor</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// @ts-expect-error, not typed</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">editorView</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cm</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">as</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">EditorView</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">plugin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">editorView</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">plugin</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">examplePlugin</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">plugin</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">plugin</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addPointerToSelection</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">editorView</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>::: ::::</p><h2 id="\u72B6\u6001\u5B57\u6BB5" tabindex="-1">\u72B6\u6001\u5B57\u6BB5 <a class="header-anchor" href="#\u72B6\u6001\u5B57\u6BB5" aria-hidden="true">#</a></h2><p>\u60A8\u53EF\u4EE5\u5728\u7F16\u8F91\u5668\u89C6\u56FE\u5185\u76F4\u63A5\u6D3E\u53D1\u53D8\u52A8\u4EE5\u53CA<a href="./state-fields.html#dispatching-state-effects">state effects</a>\u3002</p><p>:::: code-group :::code-group-item main.ts</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">addCommand</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">example-editor-command</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Example editor command</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">editorCallback</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">editor</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// @ts-expect-error, not typed</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">editorView</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cm</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">as</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">EditorView</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">editorView</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispatch</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">      effects</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// ...</span></span>
<span class="line highlighted"><span style="color:#F07178;">      ]</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>::: ::::</p>`,15),e=[o];function t(c,r,F,D,y,i){return a(),n("div",null,e)}const C=s(l,[["render",t]]);export{d as __pageData,C as default};
