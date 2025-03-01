<template>
  <div id="section1" :style="section1Style">
    <div class="navbar">
      <a href="#acads">ACADS</a>
      <a href="#interests">INTERESTS</a>
    </div>

    <div class="socials">
      <p>Add me on my socials!</p>
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/jenine-dulay-b9988b284/" target="_blank">
          <img :src="linkedinIcon" alt="LinkedIn">
        </a>
        <a href="https://www.instagram.com/elneeeeee/" target="_blank">
          <img :src="igIcon" alt="Instagram">
        </a>
        <a href="https://open.spotify.com/user/parkjimin3389?si=006834ded65044f9" target="_blank">
          <img :src="spotifyIcon" alt="Spotify">
        </a>
      </div>
    </div>
  </div>

  <div id="section2" :style="section2Style">
    <div class="education-wrapper">
      <img :src="introImage" alt="intro" class="education-image">
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

  <div id="section3">
    <div class="experience-container">
      <div class="experience-text">
        <h2>IT EXPERIENCE</h2>
        <ul>
          <li>Basic Java</li>
          <li>Basic Python</li>
          <li>Had HTML during grade school</li>
          <li>UI/UX Experience (Website and mobile: RamQuest – Group Project)</li>
          <li>Mobile Application (RESCUE app – Group Project)</li>
          <li>mySQL</li>
        </ul>
      </div>
      <div class="experience-image">
        <img :src="itExpImage" alt="RamQuest and RESCUE apps">
      </div>
    </div>
  </div>
</template>

<script setup>
import linkedinIcon from '/images/linkedin-icon.png';
import igIcon from '/images/ig-icon.png';
import spotifyIcon from '/images/spotify-icon.png';
import introImage from '/images/intro.png';
import itExpImage from '/images/it-exp.png';
import hobby1Image from '/images/hobby.png';

import bg1 from '/images/bg1.png';
import bg2 from '/images/bg2.png';
import bg4 from '/images/bg4.png';

const section1Style = {
  background: `url(${bg1}) no-repeat center center/cover`,
  height: '100vh',
  width: '100%',
};

const section2Style = {
  background: `url(${bg2}) no-repeat center center/cover`,
  height: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '12px',
};

const section4Style = {
  background: `url(${bg4}) no-repeat center center/cover`,
  height: '100vh',
  width: '100%',
};
</script>

<style scoped>
#section3 {
  background-color: #f8f7f2;
  height: 100vh;
  width: 100%;
}

#section5 {
  background-color: #f8f7f2;
  height: 100vh;
  width: 100%;
}

.navbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 50px;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  top: 0;
}

.navbar a {
  color: #222121;
  text-decoration: none;
}

.socials {
  margin-top: 700px;
}

.socials p {
  font-style: italic;
  margin-bottom: 10px;
  color: white;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-icons a img {
  width: 40px;
  height: 40px;
}

.education-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
  margin: 0 auto;
}

.education-image {
  width: 60%;
  max-width: 500px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

#section2 img {
  max-width: 80%;
  max-height: 500px;
  height: auto;
  object-fit: contain;
}

.education-container {
  background-color: #f8f7f2;
  color: black;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  margin-top: 7px;
}

.education-container .school {
  margin-bottom: 20px;
}

.education-container .school h2 {
  color: #562123;
}

.education-container .school h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.education-container .school ul {
  list-style-type: none;
  padding-left: 0;
}

.education-container .school ul li {
  margin-bottom: 5px;
}

.experience-container {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 20px 0 20px 50px;
}

.experience-text {
  background-color: #562123;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 60%;
}

.experience-text h2 {
  margin-bottom: 20px;
  font-size: 24px;
}

.experience-text ul {
  list-style-type: none;
  padding-left: 0;
}

.experience-text ul li {
  margin-bottom: 5px;
}

.experience-image img {
  width: 100%;
  max-width: 200px;
  border-radius: 10px;
}

.hobbies-container {
  background-color: #562123;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  margin: 20px 0 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.hobbies-container h2 {
  margin-bottom: 20px;
  font-size: 24px;
}

.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.carousel img {
  width: 100px;
  height: 100px;
  margin-right: 10px;
  border-radius: 10px;
  scroll-snap-align: start;
}
</style>