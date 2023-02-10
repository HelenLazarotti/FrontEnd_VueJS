<template>
    <b-sidebar class="menu" v-show="isMenuVisible">
        <div class="menu-bar">
            <router-link to="/" id="link">
                <i class="fa fa-pagelines" id="icon2"></i>
            </router-link>
        </div>

        <div class="p-3" id="div-content">
          <h4 id="h4">Respire Fundo...</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sapiente molestiae accusamus. Neque tempora qui dolore ipsa voluptatibus voluptatum odio dolorum deserunt reprehenderit laboriosam recusandae?
          </p>
          <nav class="mb-3">
            <b-nav id="b-nav">
                
                    <b-nav-item active to="/auth"><i class="fa fa-link" aria-hidden="true"></i>Login</b-nav-item>

                    <b-nav-item href="#link-1"><i class="fa fa-link" aria-hidden="true"></i>Saiba mais...</b-nav-item>

                    <b-nav-item href="#link-2"><i class="fa fa-link" aria-hidden="true"></i>Fale conosco</b-nav-item>
              
            </b-nav> 
          </nav>
          <Gravatar alt="user" id="gravatar"/>
        </div>
    </b-sidebar>
</template>

<script>
import { mapState } from 'vuex';
import Gravatar from 'vue-gravatar'

export default {
    name: 'Menu',
    components: { Gravatar},
    computed: mapState(['isMenuVisible']),//pego os atributos que quero mapear pra dentro do meu componente, nesse caso só quero o 
}
</script>

<style>
    .menu {
        grid-area: menu;
        background: linear-gradient(to right, #1e4e5a, #472056);
        /*background-color: #232323;*/

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-top: 0.2em;
    }
    .menu-bar{
        text-align: center;
        margin-top: 2em;
    }
    .menu-bar i {
        font-size: 30px;
    }
    #link{
        color: #ffffff;
        text-decoration: none;
        font-size: 1.2em;
        display: flex;
        flex-direction: column;
    }
    #link:hover{
        opacity: 0.8;
    }
    #h4{
        color: #6cceff;
    }
    #div-content{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin-top: 2em;
    }
    #div-content p {
        color: #c0c0c0;
    }
    #b-nav{
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-top: 3em;
    }
    #b-nav a {
        color: #9be948;
    }
    #b-nav a:hover {
        color: #beff79;
        text-decoration: underline;
    }
    #b-nav i{
        font-size: 16px;
        margin-right: 0.5em;
        color: #9be948;
    }
    #gravatar {
        border-radius: 50%;
        margin-top: 5em;
    }
</style>