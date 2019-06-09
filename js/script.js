var searchForm = document.querySelector(".search-form");
var buttonVisible = document.querySelector(".button-form-visible");
var dateIn = searchForm.querySelector("[name = date-out]");
var dateOut = searchForm.querySelector("[name = date-in]");
var adults = searchForm.querySelector("[name = adults]");

searchForm.classList.add("form-hidden");

buttonVisible.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle("form-hidden");
  if (searchForm.classList.contains("form-mistake")) {
    searchForm.classList.remove("form-mistake");
  }
});

searchForm.addEventListener("submit", function (evt) {
  if (searchForm.classList.contains("form-mistake")) {
    searchForm.classList.remove("form-mistake");
    console.log("Удалили");
  };
  if (!dateIn.value || !dateOut.value || !adults.value || adults.value==0) {
    evt.preventDefault();
    searchForm.classList.add("form-mistake");
    console.log("Добавили");
  }
});
