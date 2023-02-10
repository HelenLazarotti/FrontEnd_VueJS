<template>
    <div class="user-dropdown">

        <div class="user-button">

            <span class="d-none d-sm-block">{{ user.name }}</span>

            <div class="user-dropdown-img">
                <Gravatar :email="user.email" alt="user" />
            </div>
            <i class="fa fa-caret-down"></i>
        </div>

        <div class="user-dropdown-content">

            <router-link to="/admin">
                <i class="fa fa-cogs"></i> Administração
            </router-link>

            <router-link to="/auth">
                <i class="fa fa-sign-out"></i> Sair
            </router-link>

        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';
import Gravatar from 'vue-gravatar'
import Auth from '../auth/Auth.vue';

export default {
    name: 'Dora',
    components: { Gravatar, Auth},
    computed: mapState(['user'])
}
</script>

<style>
    .user-dropdown {
        height: 100%;
        position: relative;
    }
    .user-button {
        display: flex;
        align-items: center;
        color: #fff;
        font-weight: 200;
        height: 100%;
        padding: 0px 20px;
    }
    .user-dropdown:hover{
        background-color: #a500fe39;
    }
    .user-dropdown-img{
        margin: 0 1em;
    }
    .user-dropdown-img > img{
        max-height: 35px;
        border-radius: 50%;
    }
    .user-dropdown-content{
        right: 0px;
        background-color: #f4f4f4;
        border-radius: 0.5em;
        min-width: 5em;
        box-shadow: 0px 8px 16px 0px rgba(29, 0, 62, 0.275);
        padding: 1em;
        z-index: 1;
        margin-top: 1.5em;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        visibility: hidden;
        opacity: 0;
        transition: visibility 3s, opacity 0.5s linear;
    }
    .user-dropdown:hover  .user-dropdown-content{
        visibility: visible;
        opacity: 1;
    }
    .user-dropdown-content a{
        color: #7c3299;
        margin: 0.5em;
    }
    .user-dropdown-content a:hover{
        text-decoration: none;
    }
</style>