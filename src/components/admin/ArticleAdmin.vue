<template>
    <div class="article-admin">
        <h1>Suas contas cadastradas...</h1>

                <b-form-group label="E-mail" description="O uso de e-mail é obriatório para seguir adiante">

                    <b-form-input type="email" v-model="users.email" placeholder="seu@email.com" required ></b-form-input>

                </b-form-group>

                <b-form-group label="Nome">

                    <b-form-input type="text"  v-model="users.nome" placeholder="Digite seu nome completo" required></b-form-input>

                </b-form-group>

                <b-form-group label="Administrador?">

                    <b-form-checkbox-group required>
                        <b-form-checkbox value="sim" v-model="users.checked">Sim</b-form-checkbox>
                    </b-form-checkbox-group>

                </b-form-group>

                <b-form-group label="Objetivo de uso:">

                    <b-form-select
                    id="input-3"
                    :options="objetivos"
                    required v-model="users.objetivos"
                    ></b-form-select>

                </b-form-group>

        <b-button @click="salvar" class="btn-form-cadas">Cadastrar</b-button>

        <b-button type="reset" class="btn-form-cancela">Cancelar</b-button>

        <!--<b-table striped hover :items="users">{{ form }}</b-table>-->

        <b-card title="Usuários Cadastrados" class="header-card">
        <hr>    
            <b-button @click="mostrarUser" class="mostraUser">Mostrar Usuários</b-button>

           <b-list-group class="box-card">
                    <b-list-group-item v-for="(users, id) in user" :key="id" class="card-users">

                    <h2>{{ users.nome }}</h2>

                    <hr>
                    
                    <p><strong>E-mail: </strong>{{ users.email }}</p>
                    
                    <p><strong>Administrador: </strong>{{ users.checked }}</p>

                    <p><strong>Objetivo: </strong>{{ users.objetivos }}</p>

                    <div class="card-buttons">

                        <b-button id="pencil" @click="editar(id)">
                            <i class="fa fa-pencil"></i>
                        </b-button>

                        <b-button id="trash" @click="excluirUser(id)">
                            <i class="fa fa-trash-o"></i>
                        </b-button>

                    </div>
                    </b-list-group-item>
        </b-list-group>
       <!--  <b-table hover striped :items="user" v-for="users in user" :key="users">
            
        </b-table>-->
            
        </b-card>
    </div>
</template>

<script>

export default {
   name: 'ArticleAdmin',
   data(){
    return{
        objetivos: ['Empresarial', 'Pessoal', 'Familiar'],
        id: null,
        user: [],
        users: 
            {
                email: '',
                nome: '',
                checked: '',
                objetivos: null
                //acesso: '02/12/2022'
            },
    }
   },
   methods: {
    salvar(){
        const reqMetodo = this.id ? 'patch': 'post' //se já existe atualiza, se nao cria

        const finalUrl = this.id ? `/${this.id}.json` : '.json'

        //atribuo:
        this.$http[reqMetodo](`/user${finalUrl}`, this.users)
        
        this.mostrarUser()
        
    },
    mostrarUser(){
        this.$http.get('user.json').then(res => {
            this.user = res.data
        })
        // eslint-disable-next-line no-console
        console.log(this.user)
    }

   },
   editar(id){
    this.id = id
    this.users = {...this.user[id]}
   },
   excluir(id){
    this.$http.delete(`/user/${id}.json`)
   }
}
</script>

<style>
   .header-card{
    background-color: rgb(221, 221, 221);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.522);
   }
   h1{
        font-size: 25px;
        margin-top: 1em;
    }
    .btn-form-cadas, .btn-form-cancela{
        border: none;
        border-radius: 1em;
        padding: 0.5em;
        margin-bottom: 2em;
    }
    .btn-form-cadas {
        background-color: #008000;
        
    }
    .btn-form-cadas:hover{
        background-color: #00a000;
    }
    .btn-form-cancela:hover{
        background-color: #e60202;
    }
    .btn-form-cancela{
        margin-left: 1em;
        background-color: #c00000;
        
    }
    .mostraUser{
        background: linear-gradient(to right, #3a98af, #bd55e7);
    }
    .card-users{
        background-color: #f8f8f8;
        width: 20em;
        margin: 1em;
        border-top-right-radius: 1em;
        border-bottom-right-radius: 1em;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.838);
        
    }
    .card-users h2 {
        text-align: center;
        font-size: 25px;
        color: #3a98af;
    }
    .card-users span {
        opacity: 0.8;
    }
    .box-card{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    .card-buttons{
        text-align: right;
        margin-top: 1.5em;
        
    }
    #trash{
        background-color: #c00000;
        border: none;
        border-radius: 0.5em;
    }
    #trash:hover{
        background-color: #e60202;
    }
    #pencil{
        background-color: #2a84f1f9;
        border: none;
        border-radius: 0.5em;
        margin-right: 1em;
    }
    #pencil:hover{
        background-color: #529bf3f9;
    }
</style>