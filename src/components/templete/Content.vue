<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Content'
}
</script>

<style>
    .content {
        margin-top: 0.2em;
        grid-area: content;
        background-color: #d6d6d6ee;
    }
</style>