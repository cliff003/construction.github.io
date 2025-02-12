document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) {
    console.error("找不到 id 为 contactForm 的表单元素！");
    return;
  }

  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // 获取用户填写的数据
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // 输出调试信息
    console.log("提交的数据：", { name, email, phone, message });

    // 构造 FormData 对象，并映射到 Google Form 对应的 entry 字段
    const formData = new FormData();
    // 请确保下面的 entry ID 与你 Google Form 中对应问题一致
    formData.append("entry.2005620554", name);    // 姓名
    formData.append("entry.1045781291", email);     // 邮箱
    formData.append("entry.1166974658", phone);     // 手机
    formData.append("entry.839337160", message);    // 留言

    // Google Form 的提交 URL（末尾必须是 formResponse）
    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLScJcV3kh7_5kDsVWbsWyLJDj4pdRAFzzc-2xJRoDv5hAjQIQg/formResponse";
    
    // 使用 fetch 提交数据（使用 no-cors 模式以避免跨域问题）
    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors",
      body: formData
    })
    .then(() => {
      // 根据页面语言显示提示信息
      var lang = document.documentElement.lang;
      if (lang === "en") {
        alert("Thank you for your message, we will contact you as soon as possible!");
      } else {
        alert("感谢您的留言，我们将尽快与您联系！");
      }
      contactForm.reset();
    })
    .catch((error) => {
      console.error("提交表单时出错:", error);
      // 根据页面语言显示错误提示信息
      var lang = document.documentElement.lang;
      if (lang === "en") {
        alert("Submission failed, please try again later!");
      } else {
        alert("提交失败，请稍后重试！");
      }
    });
  });
});
