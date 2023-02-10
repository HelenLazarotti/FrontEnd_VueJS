<template>
    <header class="header">
        <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
            <i class="fa da-lg" :class="icon"></i>
        </a>

            
        <h1 class="title">
            <router-link to="/">
                <i class="fa fa-pagelines"></i>
                    {{ title }}
                <i class="fa fa-pagelines" id="icon2"></i>
            </router-link>
        </h1>

        <UserDropdown v-if="!hideUserDropDown"/>

    </header>
</template>

<script>

import UserDropdown from './UserDropdown.vue';


export default {
    name: 'Header',
    components: { UserDropdown },
    props: {
        title: String,
        hideToggle: Boolean, //mostra esconde menu, btn
        hideUserDropDown: Boolean
    },
    computed: {
        icon(){
            return this.$store.state.isMenuVisible ?'fa fa-caret-left' : 'fa fa-align-justify' //icon do menu, ai no html coloco :class"icon"
        }
    },
    methods: {
        toggleMenu(){
            //aqui vou chamar a função criei no store.js e atribui no main.js, que é p ocultar/mostrar menu:
            this.$store.commit('toggleMenu')
        }
    }
}
</script>

<style>
    .header {
        grid-area: header;
        background: linear-gradient(to right, #3a98af, #bd55e7);
        padding: 2em;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .title{
        color: #fff;
        font-weight: 100;
        font-size: 25px;
        flex-grow: 1;
        text-align: center;
    }
    .title a {
        text-decoration: none;
        color: #fff;
    }
    .title a:hover{
        color: #e2e2e2;
        text-decoration: none;
        cursor: pointer;
    }
    .title i {
        color: #fff;
        margin: 1em;
    }
    #icon2{
        transform: scaleX(-1);
    }
    header.header > a.toggle {
        color: #fff;
        justify-self: flex-start;
        text-decoration: none;
        font-size: 1.3em;
    }
    header.header > a.toggle:hover {
       color: #cecececf;
    }
</style>