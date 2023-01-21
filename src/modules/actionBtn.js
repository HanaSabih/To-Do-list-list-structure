export const optionsBtn = () => {
  const options = document.querySelectorAll('.optionsBtn');
  options.forEach((myelem) => {
    myelem.addEventListener('click', (e) => {
      e.preventDefault();

      myelem.style.display = 'none';
      const binchild = myelem.nextElementSibling;
      binchild.style.display = 'block';
    });
  });
};

export const closeBtn = () => {
  const closeBtn = document.querySelectorAll('.closeBtn');
  closeBtn.forEach((myelem) => {
    myelem.addEventListener('click', (e) => {
      e.preventDefault();
      const menuchild = myelem.parentElement.parentElement.firstElementChild;
      menuchild.style.display = ' block';
      const binchild = myelem.parentElement;
      binchild.style.display = 'none';
    });
  });
};
