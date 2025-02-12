document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    // 根据页面语言自动显示提示信息
    var lang = document.documentElement.lang;
    if (lang === "en") {
      alert("Thank you for your message, we will contact you as soon as possible!");
    } else {
      alert("感谢您的留言，我们将尽快与您联系！");
    }
    contactForm.reset();
  });
});
