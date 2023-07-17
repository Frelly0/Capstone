const menuBox = document.getElementById('menuBox');
const menuIcon = document.getElementById('menuIcon');

menuIcon.onclick = () => {
  menuBox.classList.toggle('open-menu');

  if (menuBox.classList.contains('open-menu')) {
    menuIcon.src = 'Image/close.png';
  } else {
    menuIcon.src = 'Image/menu.png';
  }
};

const speakersDetail = [
  {
    photo: './Image/speakers/miller-c.jpg',
    name: 'Gisa frelly',
    profession: 'Lorem ipsum dolor sit amet.',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum reprehenderit neque',
  },
  {
    photo: './Image/speakers/speaker-4.png',
    name: 'Mike peter',
    profession: 'Lorem ipsum dolor sit amet.',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum reprehenderit neque',
  },
  {
    photo: './Image/speakers/British-scientist-Tim-Berners-Lee.webp',
    name: 'eric cubi',
    profession: 'ELorem ipsum dolor sit amet.',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum reprehenderit neque',
  },
  {
    photo: './Image/speakers/greg.jpg',
    name: 'Ali Ckitesa',
    profession: 'Lorem ipsum dolor sit amet.',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum reprehenderit neque',
  },
  {
    photo: './Image/speakers/kevin2.jpg',
    name: 'Junior petir',
    profession: 'Lorem ipsum dolor sit amet.',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum reprehenderit neque',
  },
  {
    photo: './Image/speakers/Tsutomu-Shimomura.jpg',
    name: 'fiston pam',
    profession: 'Lorem ipsum dolor sit amet.',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum reprehenderit neque',
  },
];

const speakers = document.querySelector('.speakers-wrapper .activiti');

window.onload = () => {
  speakersDetail.forEach((speaker, index) => {
    speakers.innerHTML += `
    <div class="speaker-container">
      <div class='speaker-photo'>
      <img src="${speaker.photo}" alt="speaker photo here" />
      </div>
      <article class="speaker-intro">
        <h3 class="speaker-name">${speaker.name}</h3>
        <p class="speaker-profession">
        ${speaker.profession}
        </p>
        <hr class="title-underline" />
        <p class="speaker-bio">
        ${speaker.bio}
        </p>
      </article>
    </div>
    `;
    speakers.innerHTML += index === 1 ? '<div id="see-more" class="see-more">MORE</div>' : '';
  });
  const seeMore = document.querySelector('.activiti #see-more');

  seeMore.addEventListener('click', () => {
    speakers.querySelectorAll(':scope > div')
      .forEach((speaker) => {
        speaker.style.display = 'flex';
      });
    seeMore.style.display = 'none';
  });
};
