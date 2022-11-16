const listItens = document.querySelectorAll('.question_container');

listItens.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      listItens.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
    }
  });
});

