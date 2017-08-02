<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	components: {

	},
	data () {
		return {
	  
	  }
	},
  methods: {
		init () {

    },
  },
	mounted () {
		this.init()
	},
  watch: {
  	$route (to, from) {
    
    }
  }
}
</script>

<style>
* {
	padding: 0; margin: 0;
}
</style>