let currentLang = "ru";

const translations = {
  ru: {
    home: "Главная",
    animations: "Анимации",
    reaction1_title: "Горение водорода",
    reaction1_eq: "2 H2 + O2 = 2 H2O",
    reaction2_title: "Горение магния",
    reaction2_eq: "2 Mg + O2 = 2 MgO",
    reaction3_title: "Ржавление железа",
    reaction3_eq: "4 Fe + 3 O2 + 6 H2O = 4 Fe(OH)3",
    reaction4_title: "Нейтрализация кислоты",
    reaction4_eq: "HCl + NaOH = NaCl + H2O",
    reaction5_title: "Растворение соли",
    reaction5_eq: "NaCl(s) → Na+(aq) + Cl-(aq)",
    reaction6_title: "Горение углерода",
    reaction6_eq: "C + O2 = CO2",
    reaction7_title: "Взрыв аммония",
    reaction7_eq: "2 NH4NO3 → 2 N2 + O2 + 4 H2O",
    reaction8_title: "Горение натрия",
    reaction8_eq: "2 Na + 2 H2O = 2 NaOH + H2",
    reaction9_title: "Окисление меди",
    reaction9_eq: "2 Cu + O2 → 2 CuO",
    reaction10_title: "Гидролиз воды",
    reaction10_eq: "H2O → H+ + OH-"
  },
  kz: {
    home: "Басты бет",
    animations: "Анимациялар",
    reaction1_title: "Сутегі жануы",
    reaction1_eq: "2 H2 + O2 = 2 H2O",
    reaction2_title: "Магний жануы",
    reaction2_eq: "2 Mg + O2 = 2 MgO",
    reaction3_title: "Темірдің тоттануы",
    reaction3_eq: "4 Fe + 3 O2 + 6 H2O = 4 Fe(OH)3",
    reaction4_title: "Қышқылды бейтараптау",
    reaction4_eq: "HCl + NaOH = NaCl + H2O",
    reaction5_title: "Тұз еріту",
    reaction5_eq: "NaCl(s) → Na+(aq) + Cl-(aq)",
    reaction6_title: "Көміртек жануы",
    reaction6_eq: "C + O2 = CO2",
    reaction7_title: "Аммонийдің жарылысы",
    reaction7_eq: "2 NH4NO3 → 2 N2 + O2 + 4 H2O",
    reaction8_title: "Натрий жануы",
    reaction8_eq: "2 Na + 2 H2O = 2 NaOH + H2",
    reaction9_title: "Мыс тотығуы",
    reaction9_eq: "2 Cu + O2 → 2 CuO",
    reaction10_title: "Судың гидролизі",
    reaction10_eq: "H2O → H+ + OH-"
  }
};

// Привязка кнопок
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const lang = btn.getAttribute("data-lang");
    currentLang = lang;
    setLanguage(lang);
  });
});

function setLanguage(lang) {
  // Вкладки
  document.querySelectorAll("nav a[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) el.innerText = translations[lang][key];
  });

  // Модалка реакций
  const modal = document.getElementById("reaction-modal");
  if (modal && modal.style.display === "block") {
    const id = modal.getAttribute("data-current-reaction");
    if (id) {
      document.getElementById("reaction-title").innerText = translations[lang][id+"_title"];
      document.getElementById("reaction-equation").innerText = translations[lang][id+"_eq"];
    }
  }
}
