<template>
    <div class="admin-pages">
       <PageTitle icon="fa fa-cogs" main="Administração do Sistema" sub="Cadastros & Relatórios"/>

       <div class="admin-pages-tabs">
        <b-card card>
            <b-tabs>
                <b-tab title="Usuários" active>
                   <ArticleAdmin />
                </b-tab>

                    <b-tab title="Minhas frases" active>
                        <SloganAdmin />
                    </b-tab>

                    
            </b-tabs>
        </b-card>
       </div>
    </div>
</template>

<script>

import PageTitle from '../templete/PageTitle.vue';
import SloganAdmin from './SloganAdmin.vue';
import ArticleAdmin from './ArticleAdmin.vue';

export default {
    name: 'AdminPages',
    components: {PageTitle, SloganAdmin, ArticleAdmin}
}
</script>

<style>
    
</style>