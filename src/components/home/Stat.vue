<template>
    <div class="stat">

        <div class="stat-icon">
            <i :class="icon" :style="style"></i>
        </div>

        <div class="stat-info">
            <span class="stat-title">{{ title }}</span>
            <span class="stat-value">{{ value }}</span>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Stat',
    props: ['title', 'icon', 'color', 'value'],
    computed: {
        style(){
            return 'color: ' + (this.color || '#000')//ou seja, se nao definir uma cor, vai ser preto
        }
    }
    
}
</script>

<style>
   .stat{
    background-color: #ffffff;
    padding: 1em;
    width: 300px;
    height: 100px;
    margin: 1em;
    border-radius: 2em;

    display: flex;
    align-items: center;
    box-shadow: 0.2em 0.2em 0.2em #000000c0;
   }
   .stat:hover{
    opacity: 0.6;
   }
   .stat-icon {
    display: flex;
    align-items: center;
   }
   .stat-icon i {
    font-size: 3em;
    margin-right: 1em;
   }
   .stat-info{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
   }
   .stat-title{
    font-size: 16px;
    color: #808080;
   }
   .stat-value{
    font-size: 30px;
   }

</style>