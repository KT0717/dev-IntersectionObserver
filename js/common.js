window.addEventListener("load", () => {

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('anime-show')
      }
    });
  }, options);

  observer.observe(document.querySelector('.text'));

}, false);