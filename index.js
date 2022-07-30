const speakersSect = document.getElementById('speakers');
const expandButton = document.getElementById('seeMore-mobile');
const languageCards = document.querySelectorAll('.card-mainProgram');
const speakers = [
  {
    image: 'icons&imgs/David-Malan.png',
    speakerName: 'David J. Malan',
    qualific: 'computer scientist and professor at Harverd Univsersity',
    descript:
      'He is the main instructor in CS50x. He will guide you smoothly into understanding of computation and teach you to think algorithmically.',
  },
  {
    image: 'icons&imgs/BrianYu.jpg',
    speakerName: 'Brian Yu',
    qualific: 'Software Engineer at Automattic & graduate from Harvard',
    descript:
      'He will Explain the problems in CS50x and He is the main instructor in CS50 web',
  },
  {
    image: 'icons&imgs/doug-lloyd110x110.jpg',
    speakerName: 'Doug Lloyd',
    qualific: "CS50's Head of Online Education Initiatives",
    descript:
      'He will Elaborate farther about some CS50X concepts when needed and will also give extra examples',
  },
];

for (let i = 0; i < speakers.length; i += 1) {
  speakersSect.innerHTML += `<div id= ${i} class="col-md-5 p-2 d-flex flex-row justify-content-between card text-start">
    <div class="col-3 d-flex justify-content-end align-items-end speaker-photo">
        <img class="speaker-photo-main" src= ${speakers[i].image} alt=>
    </div>
    <div class="col-7 gap-2">
        <h5 class="speaker-name mt-0 fw-bolder">${speakers[i].speakerName}</h5>
        <small class=" text-danger Qualific">${speakers[i].qualific}</small>
        <p class=" mt-2 speaker-descript">${speakers[i].descript}</p>
    </div>
</div>`;
}

const hiddenSpeaker = document.getElementById(`${speakers.length - 1}`);
if (window.innerWidth < 786) {
  hiddenSpeaker.classList.add('hidden');
}

expandButton.addEventListener('click', () => {
  if (
    hiddenSpeaker.className
    !== 'col-md-5 p-2 d-flex flex-row justify-content-between card text-start'
  ) {
    hiddenSpeaker.classList.remove('hidden');
    expandButton.style.display = 'none';
  }
});

languageCards.forEach((card) => card.addEventListener('mouseover', () => {
  card.style.borderColor = '#d3d3d3';
}));

languageCards.forEach((card) => card.addEventListener('mouseleave', () => {
  card.style.borderColor = 'black';
}));

window.addEventListener('resize', () => {
  if (window.innerWidth < 786) {
    hiddenSpeaker.classList.add('hidden');
  } else {
    hiddenSpeaker.classList.remove('hidden');
  }
});
