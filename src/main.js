import "./style.css";

const ICONS = {
  chevronRight: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 4l4 4-4 4"/></svg>`,
  chevronDown: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6l4 4 4-4"/></svg>`,
  redact: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>`,
  plus: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  send: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  thumbUp: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3m7-2V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14"/></svg>`,
  thumbDown: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2H20a2 2 0 012 2v7a2 2 0 01-2 2h-3m-7 2v4a3 3 0 003 3l4-9V2H6.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3H10"/></svg>`,
  task: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e67e22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12l2 2 4-4"/></svg>`,
  check: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#2ea043"/><path d="M8 12l3 3 5-5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  penSquare: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>`,
  sidebarRight: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18"/></svg>`,
  chat: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
  settings: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
  folder: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M2 6a2 2 0 012-2h5l2 2h9a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/></svg>`,
  fileDoc: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6zm7 1.5L18.5 9H14a1 1 0 01-1-1V3.5z"/></svg>`,
  filePage: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  globe: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
  grid: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,
  gridLarge: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,
  play: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  close: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
  refresh: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>`,
  tsIcon: `<span style="font-size:11px;font-weight:700;color:#3178c6;background:#e8f0fe;border-radius:3px;padding:1px 4px;font-family:monospace;">TS</span>`,
  playTriangle: `<span style="font-size:11px;color:#666;">&#9654;</span>`,
};

const sessions = [
  { title: "weather-app refactor", time: "10m ago", active: true },
  { title: "Conversation", time: "2h ago" },
  { title: "Add dark mode to dashboard", time: "1d ago" },
  { title: "Debug WebSocket reconnect", time: "3d ago" },
  { title: "Conversation", time: "5d ago" },
];

const files = [
  { name: "src", type: "folder", color: "folder" },
  { name: "components", type: "folder", color: "folder" },
  { name: "lib", type: "folder", color: "folder" },
  { name: "public", type: "folder", color: "folder" },
  { name: "tsconfig.json", type: "file", color: "file-blue" },
  { name: "package.json", type: "file", color: "file-green" },
  { name: "README.md", type: "file", color: "file-pink" },
];

const codeLines = [
  `<span class="kw">const</span> backend = <span class="obj">Bun</span>.<span class="fn">spawn</span>([<span class="str">"uv"</span>, <span class="str">"run"</span>, <span class="str">"python"</span>, <span class="str">"-m"</span>, <span class="str">"src.main"</span>], {`,
  `  cwd: <span class="str">"./backend"</span>,`,
  `  stdout: <span class="str">"inherit"</span>,`,
  `  stderr: <span class="str">"inherit"</span>,`,
  `});`,
  ``,
  `<span class="kw">await</span> <span class="obj">Bun</span>.<span class="fn">sleep</span>(<span class="num">1000</span>);`,
  ``,
  `<span class="kw">const</span> frontend = <span class="obj">Bun</span>.<span class="fn">spawn</span>([<span class="str">"bun"</span>, <span class="str">"run"</span>, <span class="str">"dev"</span>], {`,
  `  cwd: <span class="str">"./frontend"</span>,`,
  `  stdout: <span class="str">"inherit"</span>,`,
  `  stderr: <span class="str">"inherit"</span>,`,
  `});`,
  ``,
  `process.<span class="fn">on</span>(<span class="str">"SIGINT"</span>, () =&gt; {`,
  `  frontend.<span class="fn">kill</span>();`,
  `  backend.<span class="fn">kill</span>();`,
  `  process.<span class="fn">exit</span>();`,
  `});`,
  ``,
  `<span class="kw">await</span> <span class="obj">Promise</span>.<span class="fn">all</span>([frontend.exited, backend.exited]);`,
  `<span class="cursor">|</span>`,
];

const editorFileTree = files.map((f) => `
  <div class="file-item">
    <span class="file-icon ${f.color}">${f.type === "folder" ? ICONS.folder : ICONS.fileDoc}</span>
    <span class="file-name">${f.name}</span>
    ${f.type === "folder" ? `<span class="file-chevron">${ICONS.chevronRight}</span>` : ""}
  </div>
`).join("");

const editorHTML = `
<div class="editor-panel-content">
  <div class="editor-tabs">
    <div class="editor-tab active">
      ${ICONS.tsIcon}
      <span>dev.ts</span>
      <button class="editor-tab-close">${ICONS.close}</button>
    </div>
    <button class="editor-tab-add">${ICONS.plus}</button>
  </div>
  <div class="editor-body">
    <div class="editor-code">
      ${codeLines.map((line, i) => `<div class="code-line"><span class="line-num">${i + 1}</span><span class="line-content">${line || "&nbsp;"}</span></div>`).join("")}
    </div>
    <div class="editor-file-tree">
      <div class="editor-file-tree-header">
        <h3>Files</h3>
      </div>
      ${editorFileTree}
    </div>
  </div>
</div>`;

const browserHTML = `
<div class="browser-panel-content">
  <div class="browser-tabs">
    <div class="browser-tab active">
      ${ICONS.playTriangle}
      <span>Google</span>
      <button class="editor-tab-close">${ICONS.close}</button>
    </div>
    <button class="editor-tab-add">${ICONS.plus}</button>
    <div class="browser-toolbar-right">
      <span class="browser-dims">983×745</span>
      <button class="browser-toolbar-btn">${ICONS.refresh}</button>
      <button class="browser-disconnect-btn">Disconnect</button>
    </div>
  </div>
  <div class="browser-viewport">
    <div class="browser-topbar"></div>
    <div class="browser-google">
      <div class="browser-google-nav">
        <span>About</span>
        <span>Store</span>
        <div class="browser-google-nav-right">
          <span>Gmail</span>
          <span>Images</span>
          <button class="browser-signin">Sign in</button>
        </div>
      </div>
      <div class="browser-google-center">
        <div class="browser-google-logo">
          <span style="color:#4285f4">G</span><span style="color:#ea4335">o</span><span style="color:#fbbc05">o</span><span style="color:#4285f4">g</span><span style="color:#34a853">l</span><span style="color:#ea4335">e</span>
        </div>
        <div class="browser-google-search">
          <span class="browser-search-plus">+</span>
          <span class="browser-search-cursor">|</span>
          <div class="browser-search-right">
            <span class="browser-ai-mode">&#10024; AI Mode</span>
          </div>
        </div>
        <div class="browser-google-buttons">
          <button>Google Search</button>
          <button>I'm Feeling Lucky</button>
        </div>
        <div class="browser-google-lang">Google offered in: <a href="#">Fran&ccedil;ais</a></div>
      </div>
      <div class="browser-google-footer">
        <div class="browser-footer-top">Canada</div>
        <div class="browser-footer-bottom">
          <div class="browser-footer-left"><span>Advertising</span><span>Business</span><span>How Search works</span></div>
          <div class="browser-footer-right"><span>Privacy</span><span>Terms</span><span>Settings</span></div>
        </div>
      </div>
    </div>
  </div>
</div>`;

const videoEditorHTML = `
<div class="video-editor-panel-content">
  <div class="video-editor-center">
    ${ICONS.gridLarge}
    <span class="video-editor-title">Video Editor</span>
    <span class="video-editor-config">Config: remotion.config.ts</span>
    <button class="video-editor-btn">${ICONS.play} Start Preview</button>
  </div>
</div>`;

const resultHTML = `
<div class="bug-list">
  <p>Here's a summary of the performance issues I found:</p>
  <ol>
    <li><code class="bug-file">src/hooks/useWeather.ts:42-68</code> — the <code>fetchForecast</code> call runs on every render because the dependency array includes an unstable object reference. Wrapping the config in <code>useMemo</code> would prevent redundant API calls.</li>
    <li><code class="bug-file">components/ForecastCard.tsx:15</code> — each card creates a new <code>Intl.DateTimeFormat</code> instance on every render. Moving it outside the component or memoizing it cuts ~12ms per mount.</li>
    <li><code class="bug-file">src/utils/tempConvert.ts:9</code> — <code>formatTemperature</code> calls <code>toFixed(1)</code> then immediately parses it back with <code>Number()</code>. The round-trip is unnecessary; just use <code>Math.round</code>.</li>
    <li><code class="bug-file">components/WeatherMap.tsx:88-102</code> — the Mapbox layer re-initializes on each city switch because the <code>key</code> prop is set to <code>Date.now()</code>. Using the city ID as the key preserves the GL context and avoids a full teardown.</li>
  </ol>
  <p class="summary">None of these are correctness bugs, but fixing them should noticeably improve responsiveness — especially the useWeather hook which fires ~3x more requests than needed.</p>
</div>`;

function render() {
  const circumference = 2 * Math.PI * 7;
  const progress = 0.54;
  const offset = circumference * (1 - progress);

  document.querySelector("#app").innerHTML = `
    <div class="window">
      <!-- Title bar -->
      <div class="titlebar">
        <div class="titlebar-actions">
          <button class="titlebar-btn">${ICONS.plus}</button>
          <button class="titlebar-btn">${ICONS.chat}</button>
          <button class="titlebar-btn">${ICONS.settings}</button>
        </div>
      </div>

      <!-- Main layout -->
      <div class="main-layout">
        <!-- Sidebar -->
        <div class="sidebar">
          <div class="sidebar-rail">
            <button class="sidebar-collapse-btn">${ICONS.sidebarRight}</button>
          </div>
          <div class="sidebar-inner">
            <div class="sidebar-header">
              <h2>Sessions</h2>
              <button class="sidebar-collapse-btn">${ICONS.sidebarRight}</button>
            </div>

            <div class="sessions-list">
              <button class="session-create">
                <span class="session-create-icon">${ICONS.penSquare}</span>
                <span>Create Session</span>
              </button>

              ${sessions
                .map(
                  (s) => `
                <div class="session-item ${s.active ? "active" : ""}">
                  <span class="session-title">${s.title}</span>
                  <span class="session-time">${s.time}</span>
                </div>
              `
                )
                .join("")}
            </div>

            <div class="files-section">
              <div class="files-header">
                <h3>Files</h3>
                <span class="chevron">${ICONS.chevronDown}</span>
              </div>
              <div class="files-list">
                ${files
                  .map(
                    (f) => `
                  <div class="file-item">
                    <span class="file-icon ${f.color}">${f.type === "folder" ? ICONS.folder : ICONS.fileDoc}</span>
                    <span class="file-name">${f.name}</span>
                    ${f.type === "folder" ? `<span class="file-chevron">${ICONS.chevronRight}</span>` : ""}
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </div>

        <!-- Chat panel -->
        <div class="chat-panel">

          <div class="chat-messages">
            <!-- User message 1 -->
            <div class="message user">
              <div class="message-bubble">the weather app feels kinda sluggish, can you take a look?</div>
            </div>

            <!-- Assistant message 1 -->
            <div class="message assistant">
              <div class="message-content">
                Sure — do you want me to focus on the frontend rendering or also look at the API layer?
              </div>
              <div class="message-feedback">
                <button class="feedback-btn">${ICONS.thumbUp}</button>
                <button class="feedback-btn">${ICONS.thumbDown}</button>
              </div>
            </div>

            <!-- User message 2 -->
            <div class="message user">
              <div class="message-bubble">mostly the frontend, the API responses are fast</div>
            </div>

            <!-- Task component -->
            <div class="message assistant">
              <div class="message-content">
                <div class="task-component">
                  <span class="task-expand">${ICONS.chevronRight}</span>
                  <span class="task-icon">${ICONS.task}</span>
                  <span class="task-label">Task</span>
                  <span class="task-badge">General</span>
                  <span class="task-title">Profile frontend rendering performance</span>
                  <span class="task-status">${ICONS.check}</span>
                </div>

                ${resultHTML}
              </div>
              <div class="message-feedback">
                <button class="feedback-btn">${ICONS.thumbUp}</button>
                <button class="feedback-btn">${ICONS.thumbDown}</button>
              </div>
            </div>
          </div>

          <!-- Input area -->
          <div class="chat-input-container">
            <div class="chat-input-wrapper">
              <textarea class="chat-input" rows="1" placeholder="@ for file, / for skill"></textarea>
              <div class="chat-input-toolbar">
                <button class="input-btn add-btn">${ICONS.plus}</button>
                <div class="progress-indicator">
                  <svg class="progress-ring" viewBox="0 0 16 16">
                    <circle class="bg" cx="8" cy="8" r="7"/>
                    <circle class="fg" cx="8" cy="8" r="7"
                      stroke-dasharray="${circumference}"
                      stroke-dashoffset="${offset}"/>
                  </svg>
                  <span>54%</span>
                </div>
                <button class="input-btn send-btn">${ICONS.send}</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Resize handle + Right panel content -->
        <div class="resize-handle" id="resize-handle"></div>
        <div class="right-panel-content" id="panel-editor">${editorHTML}</div>
        <div class="right-panel-content hidden" id="panel-browser">${browserHTML}</div>
        <div class="right-panel-content hidden" id="panel-video">${videoEditorHTML}</div>

        <!-- Icon rail (always visible) -->
        <div class="icon-rail">
          <button class="icon-rail-btn active" data-panel="panel-editor">${ICONS.filePage}</button>
          <button class="icon-rail-btn" data-panel="panel-browser">${ICONS.globe}</button>
          <button class="icon-rail-btn" data-panel="panel-video">${ICONS.grid}</button>
        </div>
      </div>
    </div>
  `;

  // Auto-resize textarea
  const textarea = document.querySelector(".chat-input");
  textarea.addEventListener("input", () => {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  });

  // Scroll chat to bottom
  const chatMessages = document.querySelector(".chat-messages");
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Sidebar helpers
  const sidebar = document.querySelector(".sidebar");

  function closeSidebar() {
    if (sidebar.classList.contains("collapsed") || sidebar.classList.contains("closing")) return;
    sidebar.querySelector(".sidebar-inner").style.display = "none";
    sidebar.querySelector(".sidebar-rail").style.display = "flex";
    sidebar.classList.add("closing");
    document.querySelectorAll(".right-panel-content").forEach((p) => p.classList.remove("sidebar-open"));
    sidebar.addEventListener("animationend", () => {
      sidebar.classList.remove("closing");
      sidebar.classList.add("collapsed");
      sidebar.querySelector(".sidebar-inner").style.display = "";
      sidebar.querySelector(".sidebar-rail").style.display = "";
    }, { once: true });
  }

  function openSidebar() {
    if (!sidebar.classList.contains("collapsed") || sidebar.classList.contains("opening")) return;
    sidebar.classList.remove("collapsed");
    sidebar.classList.add("opening");
    document.querySelectorAll(".right-panel-content").forEach((p) => p.classList.add("sidebar-open"));
    sidebar.addEventListener("animationend", () => {
      sidebar.classList.remove("opening");
    }, { once: true });
  }

  // Sidebar collapse buttons (one in header, one in rail)
  document.querySelectorAll(".sidebar-collapse-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (sidebar.classList.contains("collapsed")) {
        openSidebar();
      } else {
        closeSidebar();
      }
    });
  });

  // Right panel helpers
  function closePanel(panel) {
    return new Promise((resolve) => {
      panel.classList.add("closing");
      panel.addEventListener("animationend", () => {
        panel.classList.remove("closing");
        panel.classList.add("hidden");
        resolve();
      }, { once: true });
    });
  }

  const resizeHandle = document.getElementById("resize-handle");
  let customWidth = null;

  function showResizeHandle() { resizeHandle.classList.add("visible"); }
  function hideResizeHandle() { resizeHandle.classList.remove("visible"); }

  function openRightPanel(panelId) {
    const openPanel = document.querySelector(".right-panel-content:not(.hidden)");
    const btn = document.querySelector(`.icon-rail-btn[data-panel="${panelId}"]`);
    document.querySelectorAll(".icon-rail-btn").forEach((b) => b.classList.remove("active"));
    if (btn) btn.classList.add("active");
    const target = document.getElementById(panelId);
    const wasCollapsed = !openPanel;
    if (openPanel && openPanel !== target) {
      openPanel.classList.add("hidden");
      openPanel.classList.remove("closing", "opening");
      openPanel.style.width = "";
    }
    target.classList.remove("hidden", "closing", "opening");
    if (customWidth && !wasCollapsed) {
      target.style.width = customWidth;
    } else {
      target.style.width = "";
    }
    if (wasCollapsed) {
      closeSidebar();
      target.classList.add("opening");
      target.addEventListener("animationend", () => {
        target.classList.remove("opening");
        showResizeHandle();
      }, { once: true });
    } else {
      showResizeHandle();
    }
  }

  function closeRightPanel() {
    const openPanel = document.querySelector(".right-panel-content:not(.hidden)");
    document.querySelectorAll(".icon-rail-btn").forEach((b) => b.classList.remove("active"));
    hideResizeHandle();
    customWidth = null;
    if (openPanel) {
      openPanel.style.width = "";
      closePanel(openPanel).then(() => openSidebar());
    }
  }

  document.querySelectorAll(".icon-rail-btn[data-panel]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("active")) {
        closeRightPanel();
      } else {
        openRightPanel(btn.dataset.panel);
      }
    });
  });

  // Clicking files section in sidebar opens the editor panel
  document.querySelector(".files-header").addEventListener("click", () => {
    openRightPanel("panel-editor");
  });
  document.querySelectorAll(".sidebar-inner .file-item").forEach((item) => {
    item.addEventListener("click", () => {
      openRightPanel("panel-editor");
    });
  });

  // Resize drag logic
  resizeHandle.addEventListener("mousedown", (e) => {
    e.preventDefault();
    const panel = document.querySelector(".right-panel-content:not(.hidden)");
    if (!panel) return;

    resizeHandle.classList.add("dragging");
    panel.style.transition = "none";

    const onMouseMove = (e) => {
      const mainLayout = document.querySelector(".main-layout");
      const iconRail = document.querySelector(".icon-rail");
      const rightEdge = mainLayout.getBoundingClientRect().right - iconRail.offsetWidth - 8;
      const newWidth = rightEdge - e.clientX;
      const clamped = Math.max(200, Math.min(newWidth, mainLayout.offsetWidth - 350));
      panel.style.width = clamped + "px";
      customWidth = clamped + "px";
    };

    const onMouseUp = () => {
      resizeHandle.classList.remove("dragging");
      panel.style.transition = "";
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });
}

render();
