const optionsBtn = () => {
  const options = document.querySelectorAll(".optionsBtn");
  options.forEach((myelem) => {
    myelem.addEventListener("click", (e) => {
      e.preventDefault();

      myelem.style.display = "none";
      const binchild = myelem.nextElementSibling;
      binchild.style.display = "block";
    });
  });
};

export default optionsBtn;
