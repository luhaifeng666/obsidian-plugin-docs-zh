import{_ as s,c as a,o as n,a as e}from"./app.741f1ead.js";const C=JSON.parse('{"title":"State management","description":"","frontmatter":{"sidebar_position":1},"headers":[{"level":2,"title":"State changes","slug":"state-changes"},{"level":2,"title":"Transactions","slug":"transactions"},{"level":2,"title":"Next steps","slug":"next-steps"}],"relativePath":"zh2.0/editor/extensions/state-management.md","lastUpdated":1661305878000}'),o={name:"zh2.0/editor/extensions/state-management.md"},t=e(`<h1 id="state-management" tabindex="-1">State management <a class="header-anchor" href="#state-management" aria-hidden="true">#</a></h1><p>This page aims to give an introduction to state management for <a href="./">editor extensions</a>.</p><p>:::note This page aims to distill the official CodeMirror 6 documentation for Obsidian plugin developers. For more detailed information on state management, refer to <a href="https://codemirror.net/docs/guide/#state-and-updates" target="_blank" rel="noreferrer">State and Updates</a>. :::</p><h2 id="state-changes" tabindex="-1">State changes <a class="header-anchor" href="#state-changes" aria-hidden="true">#</a></h2><p>In most applications, you would update state by assigning a new value to a property or variable. As a consequence, the old value is lost forever.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> note </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">note </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Heading</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">note </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"># Heading</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">note </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">## Heading</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// How to undo this?</span></span>
<span class="line"></span></code></pre></div><p>To support features like undoing and redoing changes to a user&#39;s workspace, applications like Obsidian instead keep a history of all changes that have been made. To undo a change, you can then go back to a point in time before the change was made.</p><table><thead><tr><th></th><th>State</th></tr></thead><tbody><tr><td>0</td><td></td></tr><tr><td>1</td><td>Heading</td></tr><tr><td>2</td><td># Heading</td></tr><tr><td>3</td><td>## Heading</td></tr></tbody></table><p>In TypeScript, you&#39;d then end up with something like this:</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> changes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ChangeSpec</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">changes</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">from</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">insert</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Heading</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">changes</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">from</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">insert</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"># </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">changes</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">from</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">insert</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="transactions" tabindex="-1">Transactions <a class="header-anchor" href="#transactions" aria-hidden="true">#</a></h2><p>Imagine a feature where you select some text and press the double quote, <code>&quot;</code> to surround the selection with quotes on both sides. One way to implement the feature would be to:</p><ol><li>Insert <code>&quot;</code> at the start of the selection.</li><li>Insert <code>&quot;</code> at the end of the selection.</li></ol><p>Notice that the implementation consists of <em>two</em> state changes. If you added these to the undo history, the user would need to undo <em>twice</em>, once for each double quote. To avoid this, what if you could group these changes so that they appear as one?</p><p>For editor extensions, a group of state changes that happen together is called a <em>transaction</em>.</p><p>If you combine what you&#39;ve learned so far\u2014and if you allow transactions that contain only a single state change\u2014then you can consider state as a <em>history of transactions</em>.</p><p>Bringing it all together to implement the surround feature from before in an editor extension, here&#39;s how you&#39;d add, or <em>dispatch</em>, a transaction to the editor view:</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispatch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">changes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">from</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> selectionStart</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">insert</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">&quot;</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">from</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> selectionEnd</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">insert</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">&quot;</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-hidden="true">#</a></h2><p>On this page, you&#39;ve learned about modeling state as a series of state changes, and how to group them into transactions.</p><p>To learn how to manage custom state in your editor, refer to <a href="./state-fields.html">State fields</a>.</p>`,21),l=[t];function p(r,c,D,i,y,d){return n(),a("div",null,l)}const A=s(o,[["render",p]]);export{C as __pageData,A as default};
