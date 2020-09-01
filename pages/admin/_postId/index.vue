<template>
    <div class="admin-post-page">
        <AdminPostForm :post="loadedPost" class="update-form"/>

    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
    components:{
        AdminPostForm
    },
    data(){
        return {
            loadedPost:{
                author:'hendrikus',
                title:'my awesome post',
                content: 'super awesome post created for making milk',
                thumbnailLink: 'http://maltawinds.com/wp-content/uploads/2019/10/tech-skills-640x360.jpeg'
            }
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