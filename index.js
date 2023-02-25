
if (window.location.pathname == "/index.html" || window.location.pathname == "/"){
  gitpin("https://api.github.com/repos/Bryan6734/MyMilton-Map-Geocoder", "repo", document.getElementById("map-geocoder-ID"));
  gitpin("https://api.github.com/repos/Bryan6734/Milton-Faces-Quiz", "repo", document.getElementById("faces-quiz-ID"));
  gitpin("https://api.github.com/repos/Bryan6734/Personal-Website", "repo", document.getElementById("personal-website-ID"));
  gitpin("https://api.github.com/repos/Bryan6734/NY-Collisions-Clustering", "repo", document.getElementById("collision-clustering-ID"));
  gitpin("https://api.github.com/repos/Bryan6734/MyMilton-Calendar-Integration", "repo", document.getElementById("calendar-integration-ID"));
  gitpin("https://api.github.com/repos/Bryan6734/Graphing-Calculator", "repo", document.getElementById("graphing-ID"));
}
  
function playSound(noteId){
  let note = document.getElementById(noteId);
  note.currentTime = 0;
  note.play();
}


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
  rootMargin: "50% 0% -145% 0%",
  threshold: 0.01,
  delay: "100"
})

const timelineElements = document.querySelectorAll(".card-hidden");
timelineElements.forEach(el => timelineObserver.observe(el));
