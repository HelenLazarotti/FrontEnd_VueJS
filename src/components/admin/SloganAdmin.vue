<template>
    <div class="user-admin">
        <h1>Suas frases cadastradas</h1>

        <b-table hover striped :items="words">
        </b-table>

    </div>
</template>

<script>

export default {
   name: 'UserAdmin',
   data() {
    return {
        /*,
        id: null,
        word: {
            frase: '',
            dia: ''
        }*/
        words: [{
                ID: '01',
                Dia: '01/02/2023',
                Frase: 'A vida e uma caixa preta nunca saberemos o seu real significado.⁠',
                _rowVariant: 'warning'
                
            },
            {
                ID: '02',
                Dia: '02/02/2023',
                Frase: 'Seja estranho. Seja aleatório. Seja quem você é. Porque você nunca sabe quem amaria a pessoa que você esconde.',
                
            },{
                ID: '03',
                Dia: '03/02/2023',
                Frase: 'O aleatório não existe, nosso cérebro sempre toma decisões mesmo que ocultas.',
                _rowVariant: 'warning'
                
            },
            {
                ID: '04',
                Dia: '04/02/2023',
                Frase: 'As vezes me sinto como não fosse deste mundo, acho que a maioria se sente assim desse modo.',
                
            }
        ]
    }
   }
    
}
</script>

<style>
   h1{
    margin-bottom: 1em;
   }
</style>