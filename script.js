const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);

const data = {
  gym: [
    "02-01",
    "02-02",
    "02-03",
    "02-03",
    "02-04",
    "02-05",
    "02-06",
    "02-07",
    "02-08",
  ],
};

nlwSetup.setData(data);
nlwSetup.load();
