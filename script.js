// 页面加载完毕后绑定表单提交事件和语言切换逻辑
document.addEventListener("DOMContentLoaded", function() {
  // 表单提交处理
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    // 此处可接入 AJAX 请求或其他后端处理逻辑
    alert("感谢您的留言，我们将尽快与您联系！");
    contactForm.reset();
  });

  // 语言切换逻辑
  const langSwitchers = document.querySelectorAll('.lang-switch');
  langSwitchers.forEach(function(switcher) {
    switcher.addEventListener('click', function(e) {
      e.preventDefault();
      const selectedLang = this.getAttribute('data-lang');
      setLanguage(selectedLang);
    });
  });

  // 默认显示中文（可根据需要改为英语）
  setLanguage('cn');
});

// 设置语言：传入 'cn' 或 'en'
function setLanguage(lang) {
  // 所有中文元素
  const cnElements = document.querySelectorAll('.lang-cn');
  // 所有英文元素
  const enElements = document.querySelectorAll('.lang-en');

  if(lang === 'cn') {
    cnElements.forEach(el => el.classList.remove('d-none'));
    enElements.forEach(el => el.classList.add('d-none'));
  } else if(lang === 'en') {
    cnElements.forEach(el => el.classList.add('d-none'));
    enElements.forEach(el => el.classList.remove('d-none'));
  }
}
