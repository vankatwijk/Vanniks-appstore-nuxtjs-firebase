<template>
    <div class="admin-post-page">
        <AdminPostForm :post="loadedPost"
        class="update-form" @submit="onSubmitted" />

    </div>
</template>

<script>
import axios from 'axios';
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
    layout:'admin',
    components:{
        AdminPostForm
    },
    asyncData(context) {
      return axios.get('https://nuxt-blog-9ce7f.firebaseio.com/posts/'
      + context.params.postId + '.json')
      .then(res => {
        return {
          loadedPost : {...res.data,id:context.params.postId}
        }
      })
      .catch(e => CanvasRenderingContext2D.error(e));
    },
    methods: {
      onSubmitted(editedPost){
        this.$store.dispatch('editPost',editedPost)
        .then(()=>{
          this.$router.push("/admin")
        });
      }
    }
}
</script>


<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
