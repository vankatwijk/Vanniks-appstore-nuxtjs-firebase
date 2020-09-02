<template>
      <nuxt-link :to="postLink" class="post-preview">
        <div>
          <div
          class="post-thumbnail"
          :style="{backgroundImage:'url('+thumbnail+')'}"></div>
          <div class="post-content">
            <h1>{{ title }}</h1>
            <p>{{previewText}}</p>
          </div>
        </div>
      </nuxt-link>

</template>

<script>
export default {
  name:'PostPreview',
  props:{
    id:{
      type:String,
      required:true
    },
    title:{
      type:String,
      required:true
    },
    previewText:{
      type:String,
      required:true
    },
    thumbnail:{
      type:String,
      required:true
    },
    isAdmin:{
      type:Boolean,
      required:true
    }
  },
  computed:{
    postLink(){
      return this.isAdmin? '/admin/' + this.id :'/posts/'+this.id
    }
  }
}
</script>


<style scoped>

.post-preview {
  margin: 2rem 1rem;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  border-radius: 8px;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 10px 20px 1px rgba(0,0,0,.2);
  transition: all .3s ease-in-out;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 320px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 20px;
  text-align: left;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
