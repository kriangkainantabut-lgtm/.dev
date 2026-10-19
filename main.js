(function () {
  "use strict";
  var T = {
    th: {
      nav_proj: "ผลงาน", nav_work: "ประสบการณ์", nav_contact: "ติดต่อ",
      h1: "IT Support & Backend API", hero_p: "ดูแลระบบเครือข่ายและเซิร์ฟเวอร์ พร้อมพัฒนา REST API ให้แอปมือถือ",
      btn_proj: "ดูผลงาน", btn_contact: "ติดต่อฉัน",
      sec_proj: "ผลงาน", sec_proj_s: "ตัวอย่างงาน Backend และแอปพลิเคชัน",
      p1_s: "แอปโภชนาการและสุขภาพ", p1_d: "แอปบันทึกอาหาร วางแผนมื้ออาหาร และ AI Insights พร้อมแดชบอร์ดสำหรับนักโภชนาการ",
      p1_c1: "แดชบอร์ดนักโภชนาการ", p1_c2: "หน้าจอแอปผู้ใช้",
      p2_s: "Backend แอปซื้อขายทองคำ", p2_d: "พัฒนา Backend API ให้แอปซื้อขายทองคำ ทดสอบผ่าน TestFlight",
      p2_c1: "หน้า Splash", p2_c2: "แอปที่อยู่ระหว่างทดสอบ", p2_c3: "ตัวอย่างใบเสร็จ",
      p3_s: "Backend แอปสุขภาพ", p3_d: "ดูแล Backend ของแอป Sukjai บน iOS และ Android",
      p3_c0: "หน้าเข้าสู่ระบบ", p3_c1: "ดาวน์โหลดแอป", p3_c2: "เว็บไซต์ทางการ", p3_site: "เยี่ยมชมเว็บไซต์",
      sec_work: "ประสบการณ์ทำงาน", sec_work_s: "ตำแหน่งและหน้าที่ความรับผิดชอบ",
      w1t: "ระบบเครือข่าย", w1d: "ตั้งค่าเครือข่าย MikroTik และ TP-Link Omada",
      w2t: "จัดการ Wi-Fi", w2d: "วางแผนและดูแลสัญญาณ Wi-Fi ในออฟฟิศ",
      w3t: "ดูแลเซิร์ฟเวอร์", w3d: "ตรวจสอบและบำรุงรักษาเซิร์ฟเวอร์",
      w4t: "Backend API", w4d: "พัฒนา REST API และทำเอกสารด้วย Scalar",
      w5t: "ซัพพอร์ตผู้ใช้", w5d: "แก้ปัญหาฮาร์ดแวร์ ซอฟต์แวร์ และบัญชีผู้ใช้",
      w6t: "Helpdesk", w6d: "รับแจ้งปัญหาและซัพพอร์ตเบื้องต้น",
      w7t: "อุปกรณ์", w7d: "เตรียมและดูแลอุปกรณ์ของพนักงาน",
      sec_tools: "เครื่องมือและทักษะ", s_role: "นักศึกษาฝึกงาน Backend",
      s1t: "REST API", s1d: "พัฒนา Endpoint และเอกสาร API",
      s2t: "ฐานข้อมูล", s2d: "ออกแบบและเขียนคิวรีฐานข้อมูล",
      sec_contact: "ติดต่อ", c_sub: "พร้อมร่วมงาน ติดต่อได้เลย", c_name: "ชื่อ", c_mail: "อีเมล", c_tel: "โทร"
    },
    en: {
      nav_proj: "Projects", nav_work: "Experience", nav_contact: "Contact",
      h1: "IT Support & Backend API", hero_p: "I keep networks and servers running and build REST APIs for mobile apps.",
      btn_proj: "View projects", btn_contact: "Contact me",
      sec_proj: "Projects", sec_proj_s: "Selected backend and app work",
      p1_s: "Nutrition & health mobile app", p1_d: "Food logging, meal plans and AI insights, with a nutritionist dashboard.",
      p1_c1: "Nutritionist dashboard", p1_c2: "User app screens",
      p2_s: "Gold trading app backend", p2_d: "Backend API for a gold trading app, tested through TestFlight.",
      p2_c1: "Splash screen", p2_c2: "Apps in testing", p2_c3: "Sample receipt",
      p3_s: "Health app backend", p3_d: "Backend for the Sukjai app on iOS and Android.",
      p3_c0: "Login screen", p3_c1: "Download the app", p3_c2: "Official website", p3_site: "Visit website",
      sec_work: "Experience", sec_work_s: "Roles and responsibilities",
      w1t: "Networking", w1d: "Configure MikroTik and TP-Link Omada networks.",
      w2t: "Wi-Fi management", w2d: "Plan and maintain office Wi-Fi coverage.",
      w3t: "Server care", w3d: "Monitor and maintain servers.",
      w4t: "Backend API", w4d: "Build REST APIs and document them with Scalar.",
      w5t: "User support", w5d: "Resolve hardware, software and account issues.",
      w6t: "Helpdesk", w6d: "Handle tickets and first-line support.",
      w7t: "Equipment", w7d: "Set up and maintain staff devices.",
      sec_tools: "Tools & skills", s_role: "Backend Intern",
      s1t: "REST API", s1d: "Developed endpoints and API documentation.",
      s2t: "Database", s2d: "Designed and queried database tables.",
      sec_contact: "Contact", c_sub: "Open to work. Get in touch.", c_name: "Name", c_mail: "Email", c_tel: "Phone"
    },
    zh: {
      nav_proj: "项目", nav_work: "工作经历", nav_contact: "联系",
      h1: "IT 支持 & 后端 API", hero_p: "负责网络与服务器运维，并为移动应用开发 REST API。",
      btn_proj: "查看项目", btn_contact: "联系我",
      sec_proj: "项目", sec_proj_s: "后端与应用开发精选",
      p1_s: "营养健康移动应用", p1_d: "饮食记录、膳食计划与 AI 洞察，并提供营养师后台。",
      p1_c1: "营养师后台", p1_c2: "用户应用界面",
      p2_s: "黄金交易应用后端", p2_d: "为黄金交易应用开发后端 API，通过 TestFlight 测试。",
      p2_c1: "启动页", p2_c2: "测试中的应用", p2_c3: "示例收据",
      p3_s: "健康应用后端", p3_d: "负责 Sukjai 应用在 iOS 和 Android 上的后端。",
      p3_c0: "登录页面", p3_c1: "下载应用", p3_c2: "官方网站", p3_site: "访问网站",
      sec_work: "工作经历", sec_work_s: "职位与职责",
      w1t: "网络", w1d: "配置 MikroTik 与 TP-Link Omada 网络。",
      w2t: "Wi-Fi 管理", w2d: "规划并维护办公室 Wi-Fi 覆盖。",
      w3t: "服务器维护", w3d: "监控并维护服务器。",
      w4t: "后端 API", w4d: "开发 REST API，并用 Scalar 编写文档。",
      w5t: "用户支持", w5d: "解决硬件、软件和账号问题。",
      w6t: "服务台", w6d: "处理工单与一线支持。",
      w7t: "设备", w7d: "配置并维护员工设备。",
      sec_tools: "工具与技能", s_role: "后端实习生",
      s1t: "REST API", s1d: "开发接口并编写 API 文档。",
      s2t: "数据库", s2d: "设计数据库表并编写查询。",
      sec_contact: "联系", c_sub: "欢迎联系，期待合作。", c_name: "姓名", c_mail: "邮箱", c_tel: "电话"
    }
  };
  var root = document.documentElement;
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  function setLang(l) {
    if (!T[l]) l = "th";
    root.lang = l;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = T[l][el.getAttribute("data-i18n")];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.l === l));
    });
    store("lang", l);
  }
  var btn = document.getElementById("theme");
  function setTheme(t) {
    root.dataset.theme = t;
    btn.textContent = t === "dark" ? "☀" : "☾";
    store("theme", t);
  }
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.l); });
  });
  btn.addEventListener("click", function () { setTheme(root.dataset.theme === "dark" ? "light" : "dark"); });
  setLang(read("lang") || "th");
  setTheme(root.dataset.theme || "dark");

  // image zoom + missing image fallback
  var zoom = document.getElementById("zoom"), zi = zoom.querySelector("img");
  document.querySelectorAll(".frame img").forEach(function (img) {
    img.addEventListener("error", function () { img.parentNode.classList.add("noimg"); });
    img.addEventListener("click", function () { zi.src = img.src; zi.alt = img.alt; zoom.classList.add("on"); });
  });
  zoom.addEventListener("click", function () { zoom.classList.remove("on"); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") zoom.classList.remove("on"); });
})();
