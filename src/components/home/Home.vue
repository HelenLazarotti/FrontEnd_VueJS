<template>
    <div class="home">
       <PageTitle icon="fa fa-home" main="Dashboard" sub="Base do conhecimento"/>

       <!--Crio uma div pra involver as estatísticas/stats
    
        :value="stat.categories"
        :value="stat.file"
        :value="stat.users"-->
       <div class="stats">
            <Stat title="Motivação" :value="21" icon="fa fa-rocket" color="#f88e1c"/>

            <Stat title="Pensamentos" :value="'+1000'" icon="fa fa-umbrella" color="#da006d	"/>

            <Stat title="Usuários" :value="39" icon="fa fa-user" color="#189918"/>
       </div>
    </div>
</template>

<script>

import PageTitle from '../templete/PageTitle.vue';
import Stat from './Stat.vue';
import axios from 'axios'
import { baseApiUrl } from '@/global'//onde vou fazer minhas requisições

export default {
    name: 'Home',
    components: {PageTitle, Stat},
    data: function () {//dentro de componente é objeto
        return {
            stat: {}//p quando eu fazer uma requisiçao pro meu backend ele vai setar quantidademde usuários, categorias, etc...
        }
    },
    methods: {
        getStats() {//aqui de fato faço a requisição backend

            axios.get(`${baseApiUrl}/stats`).then(res => this.stat = res.data)//os dados vem a partir da resposta, e seta os dados (res.data) no stat.
        }
    },
    //assim que o componente for montado, ele vai lá e faz a requisição:
    mounted(){
        this.getStats()
    }
}
</script>

<style>
    .stats {
        display: flex;
        justify-content: space-between;
        margin: 1em;
        flex-wrap: wrap;
    }
</style>