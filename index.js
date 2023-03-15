
if (window.location.pathname == "/index.html" || window.location.pathname == "/") {

  function generateCard(cardObj) {

    const { repoName, repoLink, repoDescription, repoLanguage } = cardObj;

    const htmlCode = `
    <div class="repo card">
      <div class="card-title">
        <a href="${repoLink}"><h4><svg></svg>${repoName}</h4></a>
      </div>
  
      <div class="card-content">
        <p>${repoDescription}</p>
      </div>
  
      <div class="card-footer">
        <span class="stats">
          <span><svg></svg>${repoLanguage}</span>
        </span>
      </div>
    </div>
  `;

    return htmlCode;
  }

  const cards = [
    {
      repoName: "Milton Academy Globe Visualizer",
      repoLink: "https://bryan6734.github.io/Milton-Globe-Visualizer/",
      repoDescription: "🌎 A 3D Globe of Milton Academy students created with Three.js and data scraped from the MyMilton Directory.",
      repoLanguage: "HTML, CSS, Javascript (Three.js), Python",
    },
    {
      repoName: "New York Collisions Clustering",
      repoLink: "https://github.com/Bryan6734/NY-Collisions-Clustering",
      repoDescription: "🚦 A data analysis project on a CSV of New York accidents to identify the 10 densest collision spots using K-means clustering.",
      repoLanguage: "Python",
    },
    {
      repoName: "Milton Academy Faces Quiz",
      repoLink: "https://bryan6734.github.io/Milton-Faces-Quiz/",
      repoDescription: "👥 A fast-paced face guessing game written in HTML, CSS, & JS using student faces scraped from the directory.",
      repoLanguage: "HTML, CSS, Javascript, Python",
    },
    {
      repoName: "Bryan's Personal Website",
      repoLink: "https://bryansukidi.com",
      repoDescription: "🖥 A personal website coded in HTML, CSS, & JS to store information about me and a portfolio.",
      repoLanguage: "HTML, CSS, Javascript",
    },
    {
      repoName: "Precalculus Graphing Calculator",
      repoLink: "https://github.com/Bryan6734/Graphing-Calculator",
      repoDescription: "📈 A graphing calculator coded in Java for Advanced Functions w/ Computer Science at Milton.",
      repoLanguage: "Java (mxParser Expression Parsing)",
    },
    {
      repoName: "Milton Academy Calendar Integration",
      repoLink: "https://github.com/Bryan6734/MyMilton-Calendar-Integration",
      repoDescription: "📆 A program that parses a student's schedule and uses the Google Calendar API to upload courses.",
      repoLanguage: "Python",
    },
    
  ]

  const repoList = document.getElementById("repository-list");

  cards.forEach((cardJSON) => {

    let newCard = document.createElement("div");
    newCard.innerHTML = generateCard(cardJSON);
    repoList.appendChild(newCard);
    
  })

}

function playSound(noteId) {
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

  if (window.innerWidth < 900) {
    return
  }

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
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
