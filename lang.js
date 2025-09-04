const langData = {
  ru: {
    title: "Виртуальная химическая лаборатория",
    welcome: "Добро пожаловать! Выберите раздел в меню.",
    calc_title: "Калькулятор молекулярной массы",
    anim_title: "Анимации реакций"
  },
  kz: {
    title: "Виртуалды химиялық зертхана",
    welcome: "Қош келдіңіз! Мәзірден бөлімді таңдаңыз.",
    calc_title: "Молекулалық масса калькуляторы",
    anim_title: "Реакциялар анимациясы"
  }
};

document.getElementById("langSwitcher").addEventListener("change", function() {
  const lang = this.value;
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    el.textContent = langData[lang][key];
  });
});
