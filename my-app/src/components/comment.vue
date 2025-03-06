<template>
  <div id="comments" class="container guestbook-container">
    <div class="header">
      <div class="title-container">Comments</div>
    </div>
    <form @submit.prevent="addComment">
      <div>
        <p>
          Name: <br />
          <input type="text" v-model="guestName" placeholder="Enter your name" required />
        </p>
        <p>
          Comment: <br />
          <textarea v-model="guestComment" placeholder="Write your comment" rows="4" required></textarea>
        </p>
        <button type="submit">Submit</button>
      </div>
    </form>
    <div class="comment-section">
      <div v-for="comment in comments" :key="comment.id" class="comment">
        <p><strong>{{ comment.name }}</strong></p>
        <p>{{ comment.message }}</p>
      </div>
    </div>
  </div> 

  <!-- References Section -->
  <div class="references-container">
    <h3>References:</h3>
    <div class="references">
      <a href="https://copilot.microsoft.com" target="_blank">Copilot</a>
      <a href="https://chat.openai.com" target="_blank">ChatGPT</a>
      <a href="https://www.w3schools.com" target="_blank">W3Schools</a>
    </div>
  </div>

  <!-- FOOTER Section -->
  <div class="container">
      <footer class="footer">
          <div class="footer-logo">
              <img src="/images/website-logo.png" alt="Logo" width="180">
          </div> 

          <div class="footer-links">
              <a href="#section1">HOME</a>
              <a href="#section2">ACADS</a>
              <a href="#hobbies">INTERESTS & DREAMS</a>
              <a href="#section4">GALLERY</a>
              <a href="#comments">GUESTBOOK</a>
          </div>
      </footer>
  </div>
</template>

<style>

body {
  background-color: #f8f7f2; 
}

.comment-section {
  margin-top: 20px;
  text-align: left;
}

.comment {
  border-top: 1px solid #ddd;
  padding: 10px 0;
}

.comment p {
  margin: 5px 0;
}

.guestbook-container {
  background-color: #f8f7f2;
  border: 2px solid #562123;
  padding: 20px;
  border-radius: 10px;
  max-width: 800px; 
  margin: 0 auto;
}

.guestbook-container .header {
  text-align: center;
  margin-bottom: 20px;
}

.guestbook-container .header .title-container {
  font-size: 24px;
  font-weight: bold;
  color: #562123;
}

.guestbook-container form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.guestbook-container input, .guestbook-container textarea {
  padding: 10px;
  border: 1px solid #562123;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
}

.guestbook-container button {
  background-color: #562123;
  color: #f8f7f2;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.guestbook-container button:hover {
  background-color: #6c3a32;
}

.container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-top: 50px; 
}

.guestbook-container form p {
  text-align: left; 
  font-weight: bold;
  color: #562123;
  margin-bottom: 20px;
}

.guestbook-container input,
.guestbook-container textarea {
  display: block;  
  text-align: left; 
}

.guestbook-container input {
  margin-bottom: 15px; 
}

.references-container {
  text-align: center;
  margin-top: 30px;
  padding: 10px;
}

.references {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
}

.references a {
  color: #562123;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
}

.references a:hover {
  text-decoration: underline;
}

.footer {
    background-color: #562123;
    color: #f5f3f5;
    padding: 50px 60px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
}

.footer-logo {
    max-width: 300px;
}

.footer-logo img {
    max-width: 100%;
}


.footer-links {
    display: flex;
    flex-direction: column;
}

.footer-links a {
    color: #f5f3f5;
    text-decoration: none;
    margin-bottom: 10px;
    font-size: 14px;
}

.footer-links a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-logo {
    margin-bottom: 20px;
  }

  .footer-links {
    align-items: center;
  }

  .footer-links a {
    text-align: center;
  }
}

</style>

<script setup>
import { ref, onMounted } from 'vue';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://jmfmnoxehtzhzvofgglp.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZm1ub3hlaHR6aHp2b2ZnZ2xwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4MTUzMjYsImV4cCI6MjA1NjM5MTMyNn0.6Yl0_kpA3Ghoh2bDeEVccuVAr1QgiZ12SpYTei_K_MQ";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const guestName = ref('');
const guestComment = ref('');
const comments = ref([]);

const fetchComments = async () => {
  const { data, error } = await supabase.from('comments').select('*').order('created_at', { ascending: false });
  if (error) console.error(error);
  else comments.value = data;
};

onMounted(fetchComments);

const addComment = async () => {
  if (!guestName.value || !guestComment.value) return;

  const { error } = await supabase.from('comments').insert([
    { name: guestName.value, message: guestComment.value }
  ]);

  if (error) {
    console.error(error);
  } else {
    fetchComments();
    guestName.value = '';
    guestComment.value = '';
  }
};
</script>
