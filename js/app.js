function $(sel, root = document) { return root.querySelector(sel); }
function $$(sel, root = document) { return [...root.querySelectorAll(sel)]; }

function getParam(name) {
  return new URLSearchParams(location.search).get(name);
}

function setActiveNav() {
  const page = location.pathname.split("/").pop() || "index.html";
  $$(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === page || (page === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}

function toast(msg, type = "info") {
  let el = $("#toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "toast";
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.className = `toast toast-${type} show`;
  clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.remove("show"), 3200);
}

function renderHeader() {
  const header = document.querySelector("[data-header]");
  if (!header) return;
  header.innerHTML = `
    <a href="index.html" class="logo">
      <span class="logo-icon">🎪</span>
      <span class="logo-text">潮偶工坊</span>
      <span class="logo-sub">NeoToy Studio</span>
    </a>
    <nav class="nav">
      <a href="index.html" class="nav-link">首页</a>
      <a href="catalog.html" class="nav-link">挑选玩具</a>
      <a href="orders.html" class="nav-link">我的订单</a>
    </nav>
    <a href="catalog.html" class="btn btn-primary btn-sm">开始定制</a>
  `;
  setActiveNav();
}

function renderFooter() {
  const footer = document.querySelector("[data-footer]");
  if (!footer) return;
  footer.innerHTML = `
    <div class="footer-grid">
      <div>
        <div class="footer-brand">🎪 潮偶工坊 NeoToy</div>
        <p>AI 驱动的玩具个性化定制平台。选款 → 传图 → 设计师确认 → 付费 → 交付，全程透明可追踪。</p>
      </div>
      <div>
        <h4>服务流程</h4>
        <ul>
          <li>在线挑选玩具款式</li>
          <li>上传参考图与定制说明</li>
          <li>设计师出样稿确认</li>
          <li>支付后生产并发货</li>
        </ul>
      </div>
      <div>
        <h4>联系我们</h4>
        <ul>
          <li>设计师热线：400-888-潮偶</li>
          <li>微信：NeoToyStudio</li>
          <li>服务时间 9:00–21:00</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">© 2026 潮偶工坊 · 演示站点（本地数据存储）</div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
});
