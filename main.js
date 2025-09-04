// Переключение секций
document.getElementById('homeBtn').onclick = () => showSection('homeSection');
document.getElementById('calcBtn').onclick = () => showSection('calcSection');
document.getElementById('animBtn').onclick = () => showSection('animSection');

function showSection(id) {
  document.querySelectorAll('main section').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// Калькулятор
const atomicMasses = {
  H: 1.008, He: 4.003, Li: 6.94, Be: 9.012, B: 10.81, C: 12.01, N: 14.01, O: 16.00,
  F: 18.998, Ne: 20.18, Na: 22.99, Mg: 24.305, Al: 26.98, Si: 28.085, P: 30.974,
  S: 32.06, Cl: 35.45, K: 39.098, Ca: 40.078
  // можно добавить все элементы...
};

function calculate() {
  const input = document.getElementById("formulaInput").value;
  let i = 0, mass = 0;
  document.getElementById("error").textContent = "";
  document.getElementById("result").textContent = "";

  try {
    while (i < input.length) {
      let element = input[i];
      if (i + 1 < input.length && input[i + 1].match(/[a-z]/)) {
        element += input[i + 1];
        i++;
      }
      i++;

      let num = "";
      while (i < input.length && input[i].match(/[0-9]/)) {
        num += input[i];
        i++;
      }
      num = num === "" ? 1 : parseInt(num);

      if (!atomicMasses[element]) {
        document.getElementById("error").textContent = "Ошибка: неизвестный элемент " + element;
        return;
      }
      mass += atomicMasses[element] * num;
    }
    document.getElementById("result").textContent = "Молекулярная масса: " + mass.toFixed(3);
  } catch (e) {
    document.getElementById("error").textContent = "Ошибка в формуле";
  }
}

// Реакции
const reactions = {
  1: {name: "Горение водорода", video: "videos/reaction1.mp4", eq: "2H2 + O2 → 2H2O"},
  2: {name: "Гашение извести", video: "videos/reaction2.mp4", eq: "CaO + H2O → Ca(OH)2"},
  3: {name: "Горение магния", video: "videos/reaction3.mp4", eq: "2Mg + O2 → 2MgO"}
};

function showReaction(id) {
  const r = reactions[id];
  document.getElementById("reactionWindow").style.display = "block";
  document.getElementById("reactionName").textContent = r.name;
  document.getElementById("reactionVideo").src = r.video;
  document.getElementById("reactionEq").textContent = r.eq;
}

function closeReaction() {
  document.getElementById("reactionWindow").style.display = "none";
}
