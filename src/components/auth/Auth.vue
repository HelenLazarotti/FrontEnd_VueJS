<template>
    <div class="auth-box">
        <b-form>
            <b-form-group label="E-mail">
                <b-form-input type="email" required placeholder="seu@email.com" v-model="users.email"></b-form-input>
            </b-form-group>

            <b-form-group label="Nome">
                <b-form-input type="text" required placeholder="Nome Completo" v-model="users.nome"></b-form-input>
            </b-form-group>

            <b-button @click="login" id="btn">
                <router-link to="/">Fazer Login</router-link>
            </b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    name: 'Auth',
   data(){
    return{
        user: [],
        users: 
            {
                email: '',
                nome: '',
               
            },
    }
   },
   methods: {
    login(){
        const userInfos = this.$http.get('user.json')

        if(userInfos === this.email && userInfos === this.name){
            // eslint-disable-next-line no-console
            console.log('oiiiii')
        } else {
            // eslint-disable-next-line no-console
            console.log('adeus')
        }
    },
   }
}
</script>

<style>
    .auth-box{
        width: 300px;
        margin: auto auto;
        margin-top: 10em;
        padding: 1em;
        box-shadow: 3px 3px 3px 2px #be55e771;
    }
    #btn{
        background: linear-gradient(to right, #3a98af, #bd55e7);
    }
    #btn a {
        color: #fff;
    }
</style>