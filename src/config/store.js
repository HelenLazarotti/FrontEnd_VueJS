import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isMenuVisible: true, //indico que o menu está vizível
        user: {
            name: 'Helen',
            email: 'helen@email.com'
        }
    },
    mutations: {
        //p fazer a alternacia do estado do menu
        toggleMenu(state, isVisible) {

            //se menu é = undefines
            if(isVisible === undefined){
                state.isMenuVisible = !state.isMenuVisible
                //pega e coloca ao contrário do que ta, ouseja, ta falso? coloca true e vise-versa
            } else {
                state.isMenuVisible = isVisible
            }

            // eslint-disable-next-line no-console
            console.log('togglemenu =' + state.isMenuVisible)
        }
    }
})