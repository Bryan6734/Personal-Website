const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } 
  })
}, {
  rootMargin: '50% 50% 10% 50%',
  threshold: 0.2,
  delay: "100"
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));