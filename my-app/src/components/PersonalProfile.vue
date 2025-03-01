<template>
  <div id="section1" class="section">
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

  <div id="section2" class="section">
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

  <div id="section3" class="section">
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
import bg1 from 'https://raw.githubusercontent.com/jenenerz/personal-website-finals/main/home/images/bg1.png';
import bg2 from 'https://raw.githubusercontent.com/jenenerz/personal-website-finals/main/home/images/bg2.png';
import bg4 from 'https://raw.githubusercontent.com/jenenerz/personal-website-finals/main/home/images/bg4.png';
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.section {
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
}

#section1 {
  background-image: url(bg1);
}

#section2 {
  background-image: url(bg2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
}

#section3 {
  background-color: #f8f7f2;
}

#section4 {
  background-image: url(bg4);
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
  border-radius: 10px;
}

.education-container {
  background-color: #f8f7f2;
  color: black;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  margin-top: 7px;
}
</style>
