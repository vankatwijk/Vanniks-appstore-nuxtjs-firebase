<template>
    <div class="admin-new-post-page">
        <section class="new-post-form"></section>
        <AdminPostForm />
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
    components:{
        AdminPostForm
    }
}
</script>