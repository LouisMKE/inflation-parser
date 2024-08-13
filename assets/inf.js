// parse info from input
const todayDollar = document.getElementById("today-dollar");
const yesterdayDollar = document.getElementById("yesterday-dollar");
const wheneverDollar = document.getElementById("whenever-dollar");

// year must be a number between 1792-2023
const isValidYear = function (year) {
  const parsedYear = parseInt(year);
  if (isNaN(parsedYear)) {
    return false;
  }

  if (parsedYear < 1792 || parsedYear > 2023) {
    return false;
  }

  return true;
};

const getInflationData = function (year) {
  const inflationMap = getInflationMap();
  return inflationMap.find((x) => `${x.year}` === `${year}`);
};

const getInflationResult = function (amount, fromData, toData) {
  console.info(amount);
  console.info(fromData);
  console.info(toData);
  const inflationRatio = toData.amount / fromData.amount;
  return {
    start: {
      amount: amount,
      year: fromData.year,
    },
    end: {
      amount: (amount * inflationRatio).toFixed(2),
      year: toData.year,
    },
  };
};











todayDollar.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = todayDollar.elements;
  const year = inputs.todayYearSelect.value;
  if (!isValidYear(year)) {
    alert(
      "👵\n That's not how this works.\n Thats not how ANY of this works\n👵"
    );
    return;
  }

  const amount = inputs.todayAmount.value;
  const fromInflationData = getInflationData(2024);
  const toInflationData = getInflationData(year);
  const resultData = getInflationResult(
    amount,
    fromInflationData,
    toInflationData
  );

  showResultModal(resultData);
});

yesterdayDollar.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = yesterdayDollar.elements;
  console.log(inputs);
  const year = inputs.yesterdayYearSelect.value;
  if (!isValidYear(year)) {
    alert(
      "👵\n That's not how this works.\n Thats not how ANY of this works\n👵"
    );
    return;
  }

  const fromInflationData = getInflationData(year);
  const toInflationData = getInflationData(2024);
  const resultData = getInflationResult(1, fromInflationData, toInflationData);
  showResultModal(resultData);
});

wheneverDollar.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = wheneverDollar.elements;
  const year = Math.floor(Math.random() * (2023 - 1792) + 1792);
  console.log(year);
  const amount = inputs.wheneverAmount.value;
  const fromInflationData = getInflationData(2024);
  const toInflationData = getInflationData(year);
  const resultData = getInflationResult(
    amount,
    fromInflationData,
    toInflationData
  );
  showResultModal(resultData);
});

// map to year from data array
