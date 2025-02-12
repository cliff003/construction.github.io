document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    // 获取用户填写的数据
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // 构造 FormData 对象，并映射到 Google Form 对应的 entry 字段
    const formData = new FormData();
    // 将下面的 entry 数字替换为你实际 Google Form 中对应问题的 entry ID
    formData.append("entry.2005620554", name);    // 例如：姓名
    formData.append("entry.1045781291", email);   // 例如：邮箱
    formData.append("entry.1166974658", phone);   // 例如: 手机
    formData.append("entry.839337160", message); // 例如：留言

    // Google Form 的提交 URL（注意 URL 末尾是 formResponse）
    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLScJcV3kh7_5kDsVWbsWyLJDj4pdRAFzzc-2xJRoDv5hAjQIQg/formResponse";
    // 使用 fetch 提交数据
    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors", // 由于跨域限制，使用 no-cors 模式（这会使返回内容不可用，但可以成功提交）
      body: formData
    })
    .then(() => {
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
