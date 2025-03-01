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
</template>

<script>
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL'; // Replace with your Supabase URL
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'; // Replace with your Supabase Anon Key

const supabase = createClient(supabaseUrl, supabaseKey);

export default {
  data() {
    return {
      guestName: '',
      guestComment: '',
      comments: [],
    };
  },
  async mounted() {
    await this.fetchComments();
  },
  methods: {
    async fetchComments() {
      const { data, error } = await supabase.from('comments').select('*').order('created_at', { ascending: false });
      if (error) {
        console.error('Error fetching comments:', error);
      } else {
        this.comments = data;
      }
    },
    async addComment() {
      const { guestName, guestComment } = this;
      const { error } = await supabase.from('comments').insert([{ name: guestName, message: guestComment }]);

      if (error) {
        console.error('Error adding comment:', error);
      } else {
        this.guestName = '';
        this.guestComment = '';
        await this.fetchComments(); // Refresh comments after adding
      }
    },
  },
};
</script>

<style scoped>
.comment-section {
margin-top: 20px;
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
</style>
