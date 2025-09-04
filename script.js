const atomicMasses = {
  H: 1.008, O: 16.00, C: 12.01, N: 14.01, Na: 22.99, Cl: 35.45, K: 39.10
  // сюда можно добавить все элементы таблицы Менделеева
};

function calcMass() {
  const formula = document.getElementById("formula").value;
  let totalMass = 0;

  const matches = formula.match(/([A-Z][a-z]?)(\d*)/g);
  if (!matches) {
    document.getElementById("result").innerText = "Неверная формула!";
    return;
  }

  matches.forEach(part => {
    const [, element, count] = part.match(/([A-Z][a-z]?)(\d*)/);
    const n = count ? parseInt(count) : 1;
    if (atomicMasses[element]) {
      totalMass += atomicMasses[element] * n;
    } else {
      document.getElementById("result").innerText = `Неизвестный элемент: ${element}`;
      return;
    }
  });

  document.getElementById("result").innerText = `Молекулярная масса: ${totalMass.toFixed(2)} г/моль`;
}