<template>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

    <div id="section1">
        <div class="navbar">
            <a href="#section2">ACADS</a>
            <a href="#section3">INTERESTS</a>
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

        <div id="hobbies" class="hobbies-container">
            <div class="hobbies-text">
                <h2>Hobbies & Interests</h2>
                <ul>
                    <li><strong>Music:</strong> 1D, Chappell Roan, Olivia Rodrigo, SZA</li>
                    <li><strong>Films:</strong> Beautiful Boy, Challengers, Pitch Perfect Trilogy</li>
                    <li><strong>Shows:</strong> Bojack Horseman, Grey’s Anatomy, The Bear</li>
                    <li><strong>Video Games:</strong> Life is Strange, The Last of Us, Valorant</li>
                    <li><strong>Photography</strong></li>
                    <li><strong>Froyo!!</strong></li>
                </ul>
            </div>
    </div>

    </div>

    <div id="section4">
        <div class="container two-columns">
            <div class="goals-text">
                <h2>Goals & Dreams</h2>
                <ul>
                    <li>☆ To live on my own and give back to my siblings</li>
                    <li>☆ To meet my favorite artists</li>
                    <li>☆ Graduate college with Honors</li>
                    <li>☆ Learn to play the piano</li>
                    <li>☆ Find a stable job that I enjoy</li>
                    <li>☆ Travel to Europe (and around the world)</li>
                    <li>☆ To live near a beach</li>
                </ul>
            </div>
        </div>
    </div>

    <div id="section5" class="picture-gallery">
        <img src="/images/gallery.png" alt="Picture Gallery">
    </div>
</template>

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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow-x: hidden;
    padding-top: 80px;
    justify-content: flex-start;
}


/* Navigation Bar */
.navbar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px 50px;
    font-size: 28px;
    font-weight: bold;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background: #562123;
    padding: 20px;
}



.navbar a {
    color: #f8f7f2;
    text-decoration: none;
}


/* Sections */
#section1 {
    background: url('https://raw.githubusercontent.com/jenenerz/personal-website-finals/main/my-app/public/images/bg1.png') 
        no-repeat center center/cover;
    height: 100vh;
    width: 100%;
    display: block;
}

#section2 {
    background: url('https://raw.githubusercontent.com/jenenerz/personal-website-finals/main/my-app/public/images/bg2.png') 
        no-repeat center center/cover;
    height: 100vh;
    width: 100%;
    display: block;
    background-color: #f8f7f2;
    margin-bottom: 0;
    padding-bottom: 0;
}

#section3 {
    background: url('https://raw.githubusercontent.com/jenenerz/personal-website-finals/main/my-app/public/images/bg3.png') 
        no-repeat center center/cover;
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#section4 {
    background: url('https://raw.githubusercontent.com/jenenerz/personal-website-finals/main/my-app/public/images/bg4.png') 
        no-repeat center center/cover;
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

/* Containers */
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
    padding: 20px;
}

.goals-text h2 {
    text-align: center;
    width: 70%;
    color: #f8f7f2;
    margin-top:80px;
    margin-left: -75px;
    font-size: 30px;
}



.goals-text ul {
    list-style-type: none;
    padding: 0;
    width: 60%; /* Adjust width for readability */
    margin-top:30px;
    text-align: left; /* Align text to the left */
    margin-left: 80px; /* Ensure it starts from the left */
}

.goals-text ul li {
    font-size: 17px; /* Adjust font size */
    margin-bottom: 10px; /* Add spacing between list items */
    color: #f8f7f2;
    
}

/* Social Media */
.socials {
    position: absolute;
    bottom: 20px;
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
    filter: brightness(0) invert(1);
}

/* Education */
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

/* Experience */
.experience-container {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
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

/* Hobbies & Interests Section */
.hobbies-container {
    background-color: #562123;
    color: white;
    padding: 20px;
    border-radius: 10px;
    width: 50%;
    margin: 40px auto;
    text-align: center;
}

@media (max-width: 768px) {
    .hobbies-container {
        width: 80%;
    }
}

.hobbies-text h2 {
    font-size: 28px;
    margin-bottom: 15px;
    text-transform: uppercase;
    font-weight: bold;
}

.hobbies-content ul {
    list-style-type: none;
    padding: 0;
    text-align: left;
    margin: 0 auto;
    width: fit-content; /* Keeps content centered */
}

.hobbies-content ul li {
    font-size: 18px;
    margin-bottom: 10px;
    line-height: 1.6;
}

/* Highlighting certain hobbies */
.hobbies-content ul li strong {
    color: #ffcc00; /* Gold color for emphasis */
}

/* Responsive Design */
@media (max-width: 768px) {
    .hobbies-container {
        width: 80%;
    }
    
    .hobbies-text h2 {
        font-size: 24px;
    }

    .hobbies-content ul li {
        font-size: 16px;
    }
}



</style>

