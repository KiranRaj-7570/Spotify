const swiperShadowTrend = document.querySelector(".trending-swipe");
const swiperTrend = new Swiper(".trending-swipe", {
  slidesPerView: 5,
  slidesPerGroup: 5,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    600: { slidesPerView: 3 },
    900: { slidesPerView: 4 },
    1200: { slidesPerView: 5.2 },
  },
});
function updateShadowTrend() {
  if (swiperTrend.isBeginning && swiperTrend.isEnd) {
    swiperShadowTrend.classList.remove('shadow-left', 'shadow-right');
  } else if (swiperTrend.isBeginning) {
    swiperShadowTrend.classList.remove('shadow-left');
    swiperShadowTrend.classList.add('shadow-right');
  } else if (swiperTrend.isEnd) {
    swiperShadowTrend.classList.add('shadow-left');
    swiperShadowTrend.classList.remove('shadow-right');
  } else {
    swiperShadowTrend.classList.add('shadow-left', 'shadow-right');
  }
}
updateShadowTrend();
swiperTrend.on('slideChange', updateShadowTrend);

//artist swiper

const swiperShadowArtist = document.querySelector(".artist-swipe");
const swiperArtist = new Swiper(".artist-swipe", {
  slidesPerView: 5,
  slidesPerGroup: 5,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    600: { slidesPerView: 3 },
    900: { slidesPerView: 4 },
    1200: { slidesPerView: 5.2 },
  },
});
function updateShadowArtist() {
  if (swiperArtist.isBeginning && swiperArtist.isEnd) {
    swiperShadowArtist.classList.remove('shadow-left', 'shadow-right');
  } else if (swiperArtist.isBeginning) {
    swiperShadowArtist.classList.remove('shadow-left');
    swiperShadowArtist.classList.add('shadow-right');
  } else if (swiperArtist.isEnd) {
    swiperShadowArtist.classList.add('shadow-left');
    swiperShadowArtist.classList.remove('shadow-right');
  } else {
    swiperShadowArtist.classList.add('shadow-left', 'shadow-right');
  }
}
updateShadowArtist();
swiperArtist.on('slideChange', updateShadowArtist);

//album swiper

const swiperShadowAlbum = document.querySelector(".album-swipe");
const swiperAlbum = new Swiper(".album-swipe", {
  slidesPerView: 5,
  slidesPerGroup: 5,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    600: { slidesPerView: 3 },
    900: { slidesPerView: 4 },
    1200: { slidesPerView: 5.2 },
  },
});
function updateShadowAlbum() {
  if (swiperAlbum.isBeginning && swiperAlbum.isEnd) {
    swiperShadowAlbum.classList.remove('shadow-left', 'shadow-right');
  } else if (swiperAlbum.isBeginning) {
    swiperShadowAlbum.classList.remove('shadow-left');
    swiperShadowAlbum.classList.add('shadow-right');
  } else if (swiperAlbum.isEnd) {
    swiperShadowAlbum.classList.add('shadow-left');
    swiperShadowAlbum.classList.remove('shadow-right');
  } else {
    swiperShadowAlbum.classList.add('shadow-left', 'shadow-right');
  }
}
updateShadowAlbum();
swiperAlbum.on('slideChange', updateShadowAlbum);


//radio swiper

const swiperShadowRadio = document.querySelector(".radio-swipe");
const swiperRadio = new Swiper(".radio-swipe", {
  slidesPerView: 5,
  slidesPerGroup: 5,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    600: { slidesPerView: 3 },
    900: { slidesPerView: 4 },
    1200: { slidesPerView: 5.2 },
  },
});
function updateShadowRadio() {
  if (swiperRadio.isBeginning && swiperRadio.isEnd) {
    swiperShadowRadio.classList.remove('shadow-left', 'shadow-right');
  } else if (swiperRadio.isBeginning) {
    swiperShadowRadio.classList.remove('shadow-left');
    swiperShadowRadio.classList.add('shadow-right');
  } else if (swiperRadio.isEnd) {
    swiperShadowRadio.classList.add('shadow-left');
    swiperShadowRadio.classList.remove('shadow-right');
  } else {
    swiperShadowRadio.classList.add('shadow-left', 'shadow-right');
  }
}
updateShadowRadio();
swiperRadio.on('slideChange', updateShadowRadio);


//featured charts

const swiperShadowCharts = document.querySelector(".charts-swipe");
const swiperCharts = new Swiper(".charts-swipe", {
  slidesPerView: 5,
  slidesPerGroup: 5,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    600: { slidesPerView: 3 },
    900: { slidesPerView: 4 },
    1200: { slidesPerView: 5.2 },
  },
});
function updateShadowCharts() {
  if (swiperCharts.isBeginning && swiperCharts.isEnd) {
    swiperShadowCharts.classList.remove('shadow-left', 'shadow-right');
  } else if (swiperCharts.isBeginning) {
    swiperShadowCharts.classList.remove('shadow-left');
    swiperShadowCharts.classList.add('shadow-right');
  } else if (swiperCharts.isEnd) {
    swiperShadowCharts.classList.add('shadow-left');
    swiperShadowCharts.classList.remove('shadow-right');
  } else {
    swiperShadowCharts.classList.add('shadow-left', 'shadow-right');
  }
}
updateShadowCharts();
swiperCharts.on('slideChange', updateShadowCharts);
