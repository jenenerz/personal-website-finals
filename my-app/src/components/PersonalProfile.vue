<template>
    <div id="section1">
        <div class="navbar">
            <a href="#section2">ACADS</a>
            <a href="#hobbies">INTERESTS</a>
        </div>
   
        <div class="socials">
            <p>Add me on my socials!</p>
            <div class="social-icons">
                <a href="https://www.linkedin.com/in/jenine-dulay-b9988b284/" target="_blank">
                    <img src="/images/linkedin-icon.png" alt="LinkedIn">
                </a>
                <a href="https://www.instagram.com/elneeeeee/" target="_blank">
                    <img src="/images/ig-icon.png" alt="Instagram">
                </a>
                <a href="https://open.spotify.com/user/parkjimin3389?si=17e0114fba8641b8" target="_blank">
                    <img src="/images/spotify-icon.png" alt="Spotify">
                </a>
            </div>
        </div>
    </div>

    <div id="section2">
        <div class="education-wrapper">
            <img src="/images/intro.png" alt="intro" class="education-image">
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
                <img src="/images/it-exp.png" alt="RamQuest and RESCUE apps">
            </div>
        </div>


        <div id= "hobbies" class="hobbies-container">
            <h2>Hobbies & Interests</h2>
            <div class="carousel">
                <img src="/images/games.png" alt="Hobby 1">
                <img src="/images/music.png" alt="Hobby 2">
                <img src="/images/shows.png" alt="Hobby 3">
                <img src="/images/photography.png" alt="Hobby 4">
            </div>
        </div>
    </div>

    <div id="section4">
        <div class="container two-columns">
            <div class="goals-text">
                <h2>Goals & Dreams</h2>
                <ul>
                    <li>To live on my own and give back to my siblings</li>
                    <li>To meet my favorite artists</li>
                    <li>Graduate college with Honors</li>
                    <li>Learn to play the piano</li>
                    <li>Find a stable job that I enjoy</li>
                    <li>Travel to Europe (and around the world)</li>
                    <li>To live near a beach</li>
                </ul>
            </div>
        </div>
    </div>

    <div id="section5" class="picture-gallery">
        <img src="/images/gallery.png" alt="Picture Gallery">
    </div>
            <footer>
                <p>References</p>
            </footer>
        </template>

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


#section1 {
            background: url('https://raw.githubusercontent.com/jenenerz/personal-website-finals/main/my-app/public/images/bg1.png') no-repeat center center/cover;
            height: 100vh;
            width: 100%;
        }

        #section2 {
            background: url('https://raw.githubusercontent.com/jenenerz/personal-website-finals/main/my-app/public/images/bg2.png') no-repeat center center/cover; 
            height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 12px;
        }

        #section3 {
            background-color: #f8f7f2;
            height: 100vh;
            width: 100%;
        }

        #section4 {
            background: url('https://raw.githubusercontent.com/jenenerz/personal-website-finals/main/my-app/public/images/bg4.png') no-repeat center center/cover;
            height: 100vh;
            width: 100%;
        }
        
#section4 .container {
    background-color: transparent;
}

        #section5 {
            background-color: #f8f7f2;
            height: 100vh;
            width: 100%;
        }
        
.container.two-columns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
}

.goals-text {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.goals-text h2 {
    text-align: left;
    width: 70%;
}

.goals-text ul {
    list-style-type: none;
    padding: 0;
    width: 55%;
    text-align: left;
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
    position: absolute;
    bottom: 20px;  /* Adjust as needed */
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    padding: 10px;
    border-radius: 10px;
}

.socials p {
    font-style: italic;
    margin-bottom: 10px;
    color: white;
}

.social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;
}

.social-icons a img {
    width: 40px;
    height: 40px;
    filter: brightness(0) invert(1); /* Makes icons white for visibility */
}



.education-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 55%; /* Match the education-container width */
    margin: 0 auto; /* Center align */
}


.education-image {
    width: 60%; /* Adjust this to make it smaller (try 70%, 60%, etc.) */
    max-width: 500px; /* Set a max width to prevent it from getting too big */
    height: auto; /* Maintain aspect ratio */
    object-fit: cover;
    border-radius: 10px; /* Optional: Rounds the image corners */
}


#section2 img {
    max-width: 80%; /* Limits the width relative to the container */
    max-height: 500px; /* Prevents it from being too tall */
    height: auto; /* Maintains aspect ratio */
    object-fit: contain; /* Ensures the whole image is visible */
}




.education-container {
    background-color: #f8f7f2;
    color: black;
    padding: 20px;
    border-radius: 10px;
    width: 100%; /* Match the width of education-wrapper */
    margin-top: 7px; /* Space between image and container */
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
    background-color:#562123;
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
    margin: 20px auto; /* Center horizontally */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center; /* Ensures text is centered */
}
</style>

