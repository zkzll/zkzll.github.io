const translations = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.lang": "中文",

    // Hero
    "hero.greeting": "Hello, I'm",
    "hero.name": "Zhang Kaizhi",
    "hero.title": "Software Engineer @ Cainiao Network",
    "hero.desc": "Building AI-powered logistics systems. Focused on cross-border supply chain, intelligent quality control, and Agent-based automation.",
    "hero.btn1": "View Projects",
    "hero.btn2": "Get in Touch",
    "hero.codefile": "engineer.java",

    // About
    "about.title": "About Me",
    "about.card1.title": "Backend Development",
    "about.card1.desc": "Java / Spring Boot 3.x / Pandora Boot, building high-throughput distributed systems for cross-border logistics at Cainiao (Alibaba Group).",
    "about.card2.title": "AI Agent Development",
    "about.card2.desc": "Designing and implementing LLM-powered agents with Spring AI, featuring ReAct reasoning, tool calling, RAG retrieval, and structured output for quality control automation.",
    "about.card3.title": "Data Engineering",
    "about.card3.desc": "MaxCompute/ODPS for large-scale data processing, OpenSearch for full-text and vector search, building data pipelines that power intelligent decision-making.",
    "about.stack": "Tech Stack",

    // Contact
    "contact.title": "Contact",

    // Footer
    "footer.text": "\u00a9 2026 Zhang Kaizhi. Built with passion.",
  },
  zh: {
    // Nav
    "nav.home": "\u9996\u9875",
    "nav.projects": "\u9879\u76ee",
    "nav.about": "\u5173\u4e8e",
    "nav.contact": "\u8054\u7cfb",
    "nav.lang": "EN",

    // Hero
    "hero.greeting": "\u4f60\u597d\uff0c\u6211\u662f",
    "hero.name": "\u5f20\u51ef\u6cbb",
    "hero.title": "\u83dc\u9e1f\u7f51\u7edc \u00b7 \u8f6f\u4ef6\u5f00\u53d1\u5de5\u7a0b\u5e08",
    "hero.desc": "\u4e13\u6ce8\u4e8e AI \u9a71\u52a8\u7684\u7269\u6d41\u7cfb\u7edf\u5efa\u8bbe\uff0c\u8d1f\u8d23\u83dc\u9e1f\u8de8\u5883\u7269\u6d41\u5f02\u5e38\u534f\u540c\u3001AI \u8d28\u63a7 Agent\u3001\u5173\u52a1\u63a5\u5165\u4e0e\u667a\u80fd\u7a3d\u67e5\u7c7b\u9879\u76ee\u3002",
    "hero.btn1": "\u67e5\u770b\u9879\u76ee",
    "hero.btn2": "\u8054\u7cfb\u6211",
    "hero.codefile": "engineer.java",

    // About
    "about.title": "\u5173\u4e8e\u6211",
    "about.card1.title": "\u540e\u7aef\u5f00\u53d1",
    "about.card1.desc": "Java / Spring Boot 3.x / Pandora Boot\uff0c\u5728\u83dc\u9e1f\uff08\u963f\u91cc\u5df4\u5df4\u96c6\u56e2\uff09\u6784\u5efa\u8de8\u5883\u7269\u6d41\u9ad8\u541e\u5410\u5206\u5e03\u5f0f\u7cfb\u7edf\u3002",
    "about.card2.title": "AI Agent \u5f00\u53d1",
    "about.card2.desc": "\u57fa\u4e8e Spring AI \u8bbe\u8ba1\u548c\u5b9e\u73b0 LLM \u9a71\u52a8\u7684\u667a\u80fd Agent\uff0c\u6db5\u76d6 ReAct \u63a8\u7406\u3001Tool Calling\u3001RAG \u68c0\u7d22\u589e\u5f3a\u548c\u7ed3\u6784\u5316\u8f93\u51fa\uff0c\u5e94\u7528\u4e8e\u8d28\u63a7\u81ea\u52a8\u5316\u3002",
    "about.card3.title": "\u6570\u636e\u5de5\u7a0b",
    "about.card3.desc": "MaxCompute/ODPS \u5927\u89c4\u6a21\u6570\u636e\u5904\u7406\uff0cOpenSearch \u5168\u6587\u68c0\u7d22\u4e0e\u5411\u91cf\u641c\u7d22\uff0c\u6784\u5efa\u6570\u636e\u7ba1\u9053\u652f\u6491\u667a\u80fd\u51b3\u7b56\u3002",
    "about.stack": "\u6280\u672f\u6808",

    // Contact
    "contact.title": "\u8054\u7cfb\u65b9\u5f0f",

    // Footer
    "footer.text": "\u00a9 2026 \u5f20\u51ef\u6cbb\u3002\u7528\u5fc3\u6784\u5efa\u3002",
  }
};

const projectTranslations = {
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.lang": "\u4e2d\u6587",
    "page.title": "Projects",
    "page.desc": "Selected works in AI, logistics, and data engineering.",
    "p1.badge": "Featured",
    "p1.title": "Cross-Border Logistics AI Quality Control Agent",
    "p1.meta": "2025 - Present \u00b7 Cainiao Network",
    "p1.desc": "An LLM-powered autonomous agent for quality control in cross-border logistics. The agent automatically inspects 100K+ daily tickets using ReAct reasoning, tool calling, and RAG-based knowledge retrieval, reducing manual QC workload by 80% and improving standard consistency from 75% to 95%.",
    "p1.h4": "Key Achievements",
    "p1.li1": "QC coverage rate: 15% \u2192 92%",
    "p1.li2": "Intervention time: 48h \u2192 2h",
    "p1.li3": "RAG-assisted suggestion adoption rate: 79%",
    "p1.li4": "Annual cost saving: ~1.2M RMB",
    "p2.title": "OpenSearch Ticket Search Service",
    "p2.meta": "2025 - Present \u00b7 Cainiao Network",
    "p2.desc": "Full-text and vector search service for logistics ticket data. Built on Alibaba OpenSearch with multi-condition filtering, time-range queries, and hybrid search capabilities. Supports both keyword-based and semantic search for the quality control platform.",
    "p3.title": "Operation Audit Log System",
    "p3.meta": "2025 \u00b7 Cainiao Network",
    "p3.desc": "AOP-based operation audit logging system with Spring AOP @Around advice. Captures traceId, operator, service/method info, and request snapshots for full traceability and compliance tracking across the quality control platform.",
    "footer.text": "\u00a9 2026 Zhang Kaizhi. Built with passion.",
  },
  zh: {
    "nav.home": "\u9996\u9875",
    "nav.projects": "\u9879\u76ee",
    "nav.about": "\u5173\u4e8e",
    "nav.contact": "\u8054\u7cfb",
    "nav.lang": "EN",
    "page.title": "\u9879\u76ee\u5c55\u793a",
    "page.desc": "AI\u3001\u7269\u6d41\u4e0e\u6570\u636e\u5de5\u7a0b\u65b9\u5411\u7684\u7cbe\u9009\u9879\u76ee\u3002",
    "p1.badge": "\u91cd\u70b9\u9879\u76ee",
    "p1.title": "\u8de8\u5883\u7269\u6d41 AI \u8d28\u63a7 Agent",
    "p1.meta": "2025 - \u81f3\u4eca \u00b7 \u83dc\u9e1f\u7f51\u7edc",
    "p1.desc": "\u57fa\u4e8e\u5927\u6a21\u578b\u7684\u81ea\u4e3b Agent\uff0c\u7528\u4e8e\u8de8\u5883\u7269\u6d41\u5de5\u5355\u8d28\u91cf\u63a7\u5236\u3002Agent \u901a\u8fc7 ReAct \u63a8\u7406\u3001\u5de5\u5177\u8c03\u7528\u548c RAG \u77e5\u8bc6\u68c0\u7d22\u81ea\u52a8\u8d28\u68c0\u65e5\u5747 10 \u4e07+ \u5de5\u5355\uff0c\u4eba\u5de5\u8d28\u63a7\u5de5\u4f5c\u91cf\u51cf\u5c11 80%\uff0c\u5224\u5b9a\u6807\u51c6\u4e00\u81f4\u6027\u4ece 75% \u63d0\u5347\u81f3 95%\u3002",
    "p1.h4": "\u6838\u5fc3\u6210\u679c",
    "p1.li1": "\u8d28\u63a7\u8986\u76d6\u7387\uff1a15% \u2192 92%",
    "p1.li2": "\u4ecb\u5165\u65f6\u6548\uff1a48\u5c0f\u65f6 \u2192 2\u5c0f\u65f6",
    "p1.li3": "RAG \u8f85\u52a9\u5efa\u8bae\u91c7\u7eb3\u7387\uff1a79%",
    "p1.li4": "\u5e74\u5316\u8282\u7ea6\u4eba\u529b\u6210\u672c\uff1a\u7ea6120\u4e07\u5143",
    "p2.title": "OpenSearch \u5de5\u5355\u641c\u7d22\u670d\u52a1",
    "p2.meta": "2025 - \u81f3\u4eca \u00b7 \u83dc\u9e1f\u7f51\u7edc",
    "p2.desc": "\u7269\u6d41\u5de5\u5355\u6570\u636e\u7684\u5168\u6587\u68c0\u7d22\u4e0e\u5411\u91cf\u641c\u7d22\u670d\u52a1\u3002\u57fa\u4e8e\u963f\u91cc OpenSearch\uff0c\u652f\u6301\u591a\u6761\u4ef6\u7ec4\u5408\u8fc7\u6ee4\u3001\u65f6\u95f4\u8303\u56f4\u67e5\u8be2\u548c\u6df7\u5408\u641c\u7d22\uff0c\u540c\u65f6\u652f\u6301\u5173\u952e\u8bcd\u641c\u7d22\u548c\u8bed\u4e49\u641c\u7d22\u3002",
    "p3.title": "\u64cd\u4f5c\u5ba1\u8ba1\u65e5\u5fd7\u7cfb\u7edf",
    "p3.meta": "2025 \u00b7 \u83dc\u9e1f\u7f51\u7edc",
    "p3.desc": "\u57fa\u4e8e Spring AOP @Around \u7684\u64cd\u4f5c\u5ba1\u8ba1\u65e5\u5fd7\u7cfb\u7edf\uff0c\u81ea\u52a8\u91c7\u96c6 traceId\u3001\u64cd\u4f5c\u4eba\u3001\u670d\u52a1/\u65b9\u6cd5\u4fe1\u606f\u548c\u8bf7\u6c42\u5feb\u7167\uff0c\u5b9e\u73b0\u8d28\u63a7\u5e73\u53f0\u5168\u94fe\u8def\u53ef\u8ffd\u8e2a\u4e0e\u5408\u89c4\u5ba1\u8ba1\u3002",
    "footer.text": "\u00a9 2026 \u5f20\u51ef\u6cbb\u3002\u7528\u5fc3\u6784\u5efa\u3002",
  }
};

function getLang() {
  return localStorage.getItem("site-lang") || "zh";
}

function setLang(lang) {
  localStorage.setItem("site-lang", lang);
}

function applyTranslations(dict) {
  document.querySelectorAll("[data-i18n]").forEach(function(el) {
    var key = el.getAttribute("data-i18n");
    if (dict[key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });
  document.querySelectorAll("[data-i18n-html]").forEach(function(el) {
    var key = el.getAttribute("data-i18n-html");
    if (dict[key]) el.innerHTML = dict[key];
  });
  document.documentElement.lang = getLang() === "zh" ? "zh-CN" : "en";
}

function toggleLang() {
  var current = getLang();
  var next = current === "en" ? "zh" : "en";
  setLang(next);
  var dict = (document.body.classList.contains("page-projects"))
    ? projectTranslations[next] : translations[next];
  applyTranslations(dict);
}

// Auto-apply on load
document.addEventListener("DOMContentLoaded", function() {
  var lang = getLang();
  var dict = (document.body.classList.contains("page-projects"))
    ? projectTranslations[lang] : translations[lang];
  applyTranslations(dict);
});
