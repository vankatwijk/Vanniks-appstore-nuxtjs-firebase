<template>
  <div class="single-post-page">
    <section>
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
          <div class="post-detail">Last updated on {{ loadedPost.updatedDate}}</div>
          <div class="post-detail">Written by {{loadedPost.author}}</div>
      </div>
      <p>{{loadedPost.content}}</p>
    </section>
    <section class="post-feedback">
      <p>Let me know what you think about the post,send mail to<a href="mailto:feedback@someemail.com">feedback@someemail.com</a></p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null,{
        loadedPost:{
          id:'1',
          title:'first Post (ID: '+context.params.id+')',
          previewText:'this is our first post',
          author:'Hendrikus',
          updatedDate: new Date(),
          content: 'some dummy text as the content of this block post',
          thumbnail:'http://maltawinds.com/wp-content/uploads/2019/10/tech-skills-640x360.jpeg'
        }
      })
    })
  },
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
