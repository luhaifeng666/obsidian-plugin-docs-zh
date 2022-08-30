import{_ as s,c as a,o as n,a as l}from"./app.2f7f52ee.js";const D=JSON.parse('{"title":"Release your plugin with GitHub Actions","description":"","frontmatter":{"title":"Release your plugin with GitHub Actions"},"headers":[{"level":2,"title":"Use standard-version to automatically tag your release","slug":"use-standard-version-to-automatically-tag-your-release"}],"relativePath":"zh2.0/publishing/release-your-plugin-with-github-actions.md","lastUpdated":1661829227000}'),e={name:"zh2.0/publishing/release-your-plugin-with-github-actions.md"},p=l(`<h1 id="release-your-plugin-with-github-actions" tabindex="-1">Release your plugin with GitHub Actions <a class="header-anchor" href="#release-your-plugin-with-github-actions" aria-hidden="true">#</a></h1><p>Manually creating your plugin release can be time-consuming and error-prone. In this guide, you&#39;ll configure your plugin to use <a href="https://github.com/features/actions" target="_blank" rel="noreferrer">GitHub Actions</a> to automatically create a release when you create a new tag.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The GitHub Action workflow was originally created and shared by <a href="https://forum.obsidian.md/u/argentum" target="_blank" rel="noreferrer">argentum</a>. For more information and other variations, refer to the <a href="https://forum.obsidian.md/t/using-github-actions-to-release-plugins/7877/3" target="_blank" rel="noreferrer">forum announcement</a>.</p></div><ol><li><p>In the root directory of your plugin, create a file called <code>release.yml</code> under <code>.github/workflows</code> with the following content:</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">name: Release Obsidian plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">on:</span></span>
<span class="line"><span style="color:#A6ACCD;">  push:</span></span>
<span class="line"><span style="color:#A6ACCD;">    tags:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">env:</span></span>
<span class="line"><span style="color:#A6ACCD;">  PLUGIN_NAME: your-plugin-id </span><span style="color:#676E95;"># Change this to match the id of your plugin.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">jobs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  build:</span></span>
<span class="line"><span style="color:#A6ACCD;">    runs-on: ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    steps:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - uses: actions/checkout@v2</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Use Node.js</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: actions/setup-node@v1</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          node-version: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">14.x</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Build</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: build</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;">          npm install</span></span>
<span class="line"><span style="color:#A6ACCD;">          npm run build</span></span>
<span class="line"><span style="color:#A6ACCD;">          mkdir </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ env.PLUGIN_NAME </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          cp main.js manifest.json styles.css </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ env.PLUGIN_NAME </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          zip -r </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ env.PLUGIN_NAME </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}.zip </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ env.PLUGIN_NAME </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          ls</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">::set-output name=tag_name::</span><span style="color:#89DDFF;">$(</span><span style="color:#C3E88D;">git tag --sort version:refname </span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;"> tail -n 1</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Create Release</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: create_release</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: actions/create-release@v1</span></span>
<span class="line"><span style="color:#A6ACCD;">        env:</span></span>
<span class="line"><span style="color:#A6ACCD;">          GITHUB_TOKEN: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ secrets.GITHUB_TOKEN </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          VERSION: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ github.ref </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          tag_name: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ github.ref </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          release_name: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ github.ref </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          draft: </span><span style="color:#82AAFF;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">          prerelease: </span><span style="color:#82AAFF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Upload zip file</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: upload-zip</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: actions/upload-release-asset@v1</span></span>
<span class="line"><span style="color:#A6ACCD;">        env:</span></span>
<span class="line"><span style="color:#A6ACCD;">          GITHUB_TOKEN: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ secrets.GITHUB_TOKEN </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          upload_url: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ steps.create_release.outputs.upload_url </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          asset_path: ./</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ env.PLUGIN_NAME </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}.zip</span></span>
<span class="line"><span style="color:#A6ACCD;">          asset_name: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ env.PLUGIN_NAME </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}-</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ steps.build.outputs.tag_name </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}.zip</span></span>
<span class="line"><span style="color:#A6ACCD;">          asset_content_type: application/zip</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Upload main.js</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: upload-main</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: actions/upload-release-asset@v1</span></span>
<span class="line"><span style="color:#A6ACCD;">        env:</span></span>
<span class="line"><span style="color:#A6ACCD;">          GITHUB_TOKEN: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ secrets.GITHUB_TOKEN </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          upload_url: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ steps.create_release.outputs.upload_url </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          asset_path: ./main.js</span></span>
<span class="line"><span style="color:#A6ACCD;">          asset_name: main.js</span></span>
<span class="line"><span style="color:#A6ACCD;">          asset_content_type: text/javascript</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Upload manifest.json</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: upload-manifest</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: actions/upload-release-asset@v1</span></span>
<span class="line"><span style="color:#A6ACCD;">        env:</span></span>
<span class="line"><span style="color:#A6ACCD;">          GITHUB_TOKEN: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ secrets.GITHUB_TOKEN </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          upload_url: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ steps.create_release.outputs.upload_url </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          asset_path: ./manifest.json</span></span>
<span class="line"><span style="color:#A6ACCD;">          asset_name: manifest.json</span></span>
<span class="line"><span style="color:#A6ACCD;">          asset_content_type: application/json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Upload styles.css</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: upload-css</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: actions/upload-release-asset@v1</span></span>
<span class="line"><span style="color:#A6ACCD;">        env:</span></span>
<span class="line"><span style="color:#A6ACCD;">          GITHUB_TOKEN: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ secrets.GITHUB_TOKEN </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          upload_url: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">{ steps.create_release.outputs.upload_url </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          asset_path: ./styles.css</span></span>
<span class="line"><span style="color:#A6ACCD;">          asset_name: styles.css</span></span>
<span class="line"><span style="color:#A6ACCD;">          asset_content_type: text/css</span></span>
<span class="line"></span></code></pre></div></li><li><p>In your terminal, commit the workflow.</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">git add .github/workflows/release.yml</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Add release workflow</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin main</span></span>
<span class="line"></span></code></pre></div></li><li><p>Create a tag that matches the version in the <code>manifest.json</code> file.</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">git tag -a 1.0.1 -m </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0.1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin 1.0.1</span></span>
<span class="line"></span></code></pre></div><ul><li><code>-a</code> creates an <a href="https://git-scm.com/book/en/v2/Git-Basics-Tagging#_creating_tags" target="_blank" rel="noreferrer">annotated tag</a>.</li><li><code>-m</code> specifies the name of your release. For Obsidian plugins, this must be the same as the version.</li></ul></li><li><p>Browse to your repository on GitHub and click the <strong>Actions</strong> tab. Your workflow might still be running, or it might have finished already.</p></li><li><p>When the workflow finishes, go back to the main page for your repository and click <strong>Releases</strong> in the side bar on the right-hand side. The workflow has created a GitHub release and uploaded the required assets as binary attachments.</p></li></ol><p>You&#39;ve set up your plugin to automatically create a GitHub release whenever you create a new tag.</p><ul><li>If this is the first release for this plugin, you&#39;re now ready to <a href="./submit-your-plugin.html">submit your plugin</a>.</li><li>If this is an update to an already published plugin, your users can now update to the latest version.</li></ul><h2 id="use-standard-version-to-automatically-tag-your-release" tabindex="-1">Use standard-version to automatically tag your release <a class="header-anchor" href="#use-standard-version-to-automatically-tag-your-release" aria-hidden="true">#</a></h2><p>You can also use <a href="https://github.com/conventional-changelog/standard-version" target="_blank" rel="noreferrer">standard-version</a> to apply the tags automatically based on the commits you made.</p><p>standard-version uses <a href="https://www.conventionalcommits.org/" target="_blank" rel="noreferrer">Conventional Commits</a> to add consistency to your commits, and to generate a <code>CHANGELOG.md</code> file automatically from your commits. For example:</p><ul><li>If your commit message starts with <code>fix:</code>, it bumps the patch version.</li><li>If your commit message starts with <code>feat:</code>, it bumps the minor version.</li><li>If the third line of your commit message starts with <code>BREAKING CHANGE:</code>, it bumps the major version.</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you&#39;re using Visual Studio Code, the <a href="https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits" target="_blank" rel="noreferrer">Conventional Commits</a> extension helps you to create Conventional Commits.</p></div><p>To enable standard-version for your plugin:</p><ol><li><p>Install standard-version.</p><div class="language-bash npm"><button class="copy"></button><span class="lang">bash npm</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install --save-dev standard-version</span></span>
<span class="line"></span></code></pre></div><div class="language-bash yarn"><button class="copy"></button><span class="lang">bash yarn</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add --save-dev standard-version</span></span>
<span class="line"></span></code></pre></div></li><li><p>In <code>package.json</code>, add the following properties:</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">release</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">standard-version</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">standard-version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">t</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li><code>&quot;t&quot;: &quot;&quot;</code> configures standard-version to remove the default <code>v</code> prefix to adhere to Obsidian&#39;s guidelines.</li></ul></li></ol><p>To make a release:</p><ol><li><p>Commit your changes according to Conventional Commits.</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">git commit -m </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">feat: Add settings</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div></li><li><p>Create a release and update the changelog.</p><div class="language-bash npm"><button class="copy"></button><span class="lang">bash npm</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm run release</span></span>
<span class="line"></span></code></pre></div></li></ol><div class="language-bash yarn"><button class="copy"></button><span class="lang">bash yarn</span><pre><code><span class="line"><span style="color:#A6ACCD;"> yarn release</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>By default, if the major version is below <strong>1</strong>, for example in 0.3.4, <code>feat:</code> and <code>BREAKING CHANGE:</code> bump the patch and minor versions, respectively, rather than the minor and major versions. To bump the minor and major version:</p><div class="language-bash npm"><button class="copy"></button><span class="lang">bash npm</span><pre><code><span class="line"><span style="color:#676E95;"># Release as minor</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run release -- --release-as minor</span></span>
<span class="line"><span style="color:#676E95;"># Release as major</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run release -- --release-as major</span></span>
<span class="line"></span></code></pre></div><div class="language-bash yarn"><button class="copy"></button><span class="lang">bash yarn</span><pre><code><span class="line"><span style="color:#676E95;"># Release as minor</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn release -- --release-as minor</span></span>
<span class="line"><span style="color:#676E95;"># Release as major</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn release -- --release-as major</span></span>
<span class="line"></span></code></pre></div></div><ol><li><p>Push the new tag to GitHub.</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">git push --follow-tags origin main</span></span>
<span class="line"></span></code></pre></div><ul><li><code>main</code> is the name of the remote branch you want to push to.</li></ul></li></ol><p>GitHub builds and releases the plugin using GitHub Actions.</p>`,19),o=[p];function t(c,r,i,y,A,C){return n(),a("div",null,o)}const d=s(e,[["render",t]]);export{D as __pageData,d as default};
