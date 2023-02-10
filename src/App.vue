<template>
	<div id="app" :class="{'hide-menu': !isMenuVisible}">
		<Header title="Lazarotti Planning" :hideToggle="false" 
		:hideUserDropDown="false"/>
		<Menu />
		<Content/>
		<Footer />
	</div>
</template>

<script>

import { mapState } from 'vuex';
import Header from './components/templete/Header.vue';
import Menu from './components/templete/Menu.vue';
import Content from './components/templete/Content.vue';
import Footer from './components/templete/Footer.vue';

export default {
	name: "App",
	components: {Header, Menu, Content, Footer},
	computed: mapState(['isMenuVisible'])
}
</script>

<style>
	* {
		font-family: "Lato", sans-serif;
	}
	body {
		margin: 0
	}
	#app {
		-webkit-font-smoothing: antialised;
		-moz-osx-font-smoothing: grayscale;

		height: 100vh;
		display: grid;
		grid-template-rows: 60px 1fr 40px;
		grid-template-columns: 300px 1fr;
		
		/*como se fosse uma tablea:*/
		grid-template-areas:  
			"header header"
			"menu content"
			"menu footer";
	}
	#app.hide-menu {
		grid-template-areas: 
			'header header'
			'content content'
			'footer footer';
	}
</style>