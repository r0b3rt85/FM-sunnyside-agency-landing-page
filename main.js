const navOpen = () => {
  const navButton = document.getElementById('nav-button');
  const nav = document.getElementById('nav-items')

  navButton.addEventListener("click", () => {
    nav.classList.toggle('show');
  });
};

navOpen();

