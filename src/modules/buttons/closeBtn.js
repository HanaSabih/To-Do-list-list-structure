const closeBtn = () => {
  const closeBtn = document.querySelectorAll(".closeBtn");
  closeBtn.forEach((myelem) => {
    myelem.addEventListener("click", (e) => {
      e.preventDefault();
      const menuchild = myelem.parentElement.parentElement.firstElementChild;
      menuchild.style.display = " block";
      const binchild = myelem.parentElement;
      binchild.style.display = "none";
    });
  });
};

export default closeBtn;
