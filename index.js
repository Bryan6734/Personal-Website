const headerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } 
  })
}, {
  rootMargin: '50% 50% 10% 50%',
  threshold: 0.01,
  delay: "100"
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => headerObserver.observe(el));



const timelineObserver = new IntersectionObserver((entries) => {

  if (window.innerWidth < 900){
    return
  }

  entries.forEach((entry) => {

    if (entry.isIntersecting){
      entry.target.classList.add("card-show");
    } else {
      entry.target.classList.remove("card-show");
    }
  })
}, {
  rootMargin: "50% 0% -130% 0%",
  threshold: 0.01,
  delay: "100"
})

const timelineElements = document.querySelectorAll(".card-hidden");
timelineElements.forEach(el => timelineObserver.observe(el));
