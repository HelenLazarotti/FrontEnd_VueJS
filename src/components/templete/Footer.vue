<template>
    <div class="footer">
        <span>Copyright <strong>Helen</strong> @2023</span>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    .footer {
        
        grid-area: footer;
        background: linear-gradient(to right, #3a98af, #bd55e7);
        color: #ffffff;
        
        
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 2em;
    }
</style>