const atomicMasses = {
  H: 1.008, He: 4.003,
  Li: 6.941, Be: 9.012, B: 10.81, C: 12.01, N: 14.01, O: 16.00, F: 19.00, Ne: 20.18,
  Na: 22.99, Mg: 24.31, Al: 26.98, Si: 28.09, P: 30.97, S: 32.07, Cl: 35.45, Ar: 39.95,
  K: 39.10, Ca: 40.08, Sc: 44.96, Ti: 47.87, V: 50.94, Cr: 52.00, Mn: 54.94, Fe: 55.85,
  Co: 58.93, Ni: 58.69, Cu: 63.55, Zn: 65.38, Ga: 69.72, Ge: 72.63, As: 74.92, Se: 78.96,
  Br: 79.90, Kr: 83.80
  // можно добавить остальные элементы
};

function calcMass() {
  const formula = document.getElementById("formula").value.trim();
  if (!formula) {
    document.getElementById("result").innerHTML = "Введите формулу вещества!";
    return;
  }

  try {
    const totalMass = parseFormula(formula);
    document.getElementById("result").innerHTML =
      `Молекулярная масса <b>${formula}</b>: <b>${totalMass.toFixed(2)}</b> г/моль`;
  } catch (err) {
    document.getElementById("result").innerHTML = "Ошибка: " + err.message;
  }
}

// Рекурсивная функция для расчета массы
function parseFormula(formula) {
  let total = 0;
  let regex = /(\([^\(\)]+\)\d*)|([A-Z][a-z]?)(\d*)/g;
  let match;

  while ((match = regex.exec(formula)) !== null) {
    if (match[2]) {
      // Элемент (без скобок)
      const element = match[2];
      const count = match[3] ? parseInt(match[3]) : 1;
      if (!(element in atomicMasses)) throw new Error(`Неизвестный элемент: ${element}`);
      total += atomicMasses[element] * count;
    } else if (match[1]) {
      // Скобки
      const groupMatch = match[1].match(/\(([^\(\)]+)\)(\d*)/);
      if (!groupMatch) continue;
      const group = groupMatch[1];
      const multiplier = groupMatch[2] ? parseInt(groupMatch[2]) : 1;
      total += parseFormula(group) * multiplier;
    }
  }

  if (total === 0) throw new Error("Формула не распознана!");
  return total;
}
