<template>
    <div class="admin-new-post-page">
        <section class="new-post-form"></section>
        <form @submit.prevent="onSave">
            <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
                    
            <AppControlInput v-model="editedPost.title">Title</AppControlInput>
                    
            <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>
                    
            <AppControlInput
                    control-type="textarea"
                    v-model="editedPost.content">Content</AppControlInput>
                    
            <AppButton type="submit">Save</AppButton>
                    
            <AppButton
                    type="button"
                    style="margin-left: 10px"
                    btn-style="cancel"
                    @click="onCancel">Cancel</AppButton>
        </form>
    </div>
</template>

<script>

export default {
    data(){
        return {
            editedPost:{
                author:'',
                title:'',
                thumbnailLink:'',
                content: ''
            }
        }
    },
    methods:{
        onSave(){
            //save the post
        },
        onCancel(){
            
        }
    }
}
</script>