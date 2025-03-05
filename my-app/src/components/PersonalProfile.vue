<template>
  <div>
    <div id="section1" class="menu-icon" @click="toggleNav">☰</div>

    <div class="sliding-nav" :class="{ open: isNavOpen }">
      <a href="#section2">ACADS</a>
      <a href="#section3">INTERESTS</a>
      <a href="javascript:void(0)" @click="toggleNav">Close</a>
    </div>

    <div class="socials">
      <p>Add me on my socials!</p>
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/jenine-dulay-b9988b284/" target="_blank">
          <img src="/images/linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/elneeeeee/" target="_blank">
          <img src="/images/ig-icon.png" alt="Instagram" />
        </a>
        <a href="https://open.spotify.com/user/parkjimin3389?si=17e0114fba8641b8" target="_blank">
          <img src="/images/spotify-icon.png" alt="Spotify" />
        </a>
      </div>
    </div>
  </div>

  <div id="section2">
    <div class="education-wrapper">
      <img src="/images/intro.png" alt="intro" class="education-image" />
      <div class="education-container">
        <h2>EDUCATION & ACHIEVEMENTS</h2>
        <div class="school">
          <h3>Immaculate Heart of Mary College (2018-2023)</h3>
          <ul>
            <li>Junior High - Senior High (STEM Strand)</li>
            <li>Graduated Junior High with Honors</li>
            <li>Graduated Senior High with Honors</li>
            <li>STEM SOCIETY Organization Member</li>
          </ul>
        </div>
        <div class="school">
          <h3>Asia Pacific College (2023-PRESENT)</h3>
          <ul>
            <li>BSIT-MI</li>
            <li>1st Year of College - Honors</li>
            <li>Cinemasoma Member</li>
            <li>Flickers Photo Society Member</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div id="section3" class="container">
    <div id="experience">
      <h2 class="center">IT EXPERIENCE</h2>
      <div class="two-columns">
        <ul>
          <li>☆ Basic Java</li>
          <li>☆ Basic Python</li>
          <li>☆ Basic HTML, CSS, JavaScript</li>
          <li>☆ UI/UX Experience (Website and mobile: RamQuest - Group Project)</li>
          <li>☆ Mobile Application (RESCUE app - Group Project)</li>
          <li>☆ MySQL</li>
        </ul>
        <img src="/images/it-exp.png" alt="IT Projects">
      </div>
    </div>
  </div>

  <div id="section4">
    <div class="carousel-container">
      <div class="carousel">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          :alt="'Image ' + (index + 1)"
          :class="{ active: index === currentIndex }"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "/images/gallery1.jpg",
        "/images/gallery2.jpg",
        "/images/gallery3.jpg",
        "/images/gallery4.jpg",
        "/images/gallery5.jpg",
        "/images/gallery6.jpg",
        "/images/gallery7.jpg",
        "/images/gallery8.jpg",
        "/images/gallery9.jpg"
      ],
      currentIndex: 0,
      isNavOpen: false
    };
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    }
  }
};
</script>

<style>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  text-align: center;
  overflow-x: hidden;
  padding-top: 80px;
}

/* Navigation */
.sliding-nav {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #562123;
  transition: 0.5s;
  padding-top: 60px;
}

.sliding-nav.open {
  left: 0;
}

.sliding-nav a {
  display: block;
  color: #f8f7f2;
  padding: 10px;
  text-decoration: none;
}

.sliding-nav a:hover {
  background: #774246;
}

.menu-icon {
  position: fixed;
  top: 10px;
  left: 10px;
  font-size: 30px;
  cursor: pointer;
  color: white;
  z-index: 1001;
}

/* Carousel */
.carousel-container {
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  margin-top: 80px;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel img {
  width: 100%;
  height: auto;
  display: none;
}

.carousel img.active {
  display: block;
}

/* Mobile View */
@media (max-width: 768px) {
  .education-container,
  #experience {
    width: 90%;
    margin: 10px auto;
  }

  .carousel-container {
    width: 90%;
  }
}
</style>
