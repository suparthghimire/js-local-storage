let form = document.querySelector("form");

loadData();
function loadData() {
  let data = JSON.parse(localStorage.getItem("form_data_demo"));
  if (data != null) {
    form.name.value = data.name;
    form.email.value = data.email;
  }
}

function saveData(data) {
  localStorage.setItem("form_data_demo", JSON.stringify(data));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = {};
  data.name = form.name.value;
  data.email = form.email.value;

  saveData(data);

  let annotation = document.querySelector(".message");
  annotation.classList = "message";
  annotation.classList.add("entry");

  setTimeout(() => {
    annotation.classList.remove("entry");
    annotation.classList.add("exit");
  }, 4000);

  form.reset();
});
