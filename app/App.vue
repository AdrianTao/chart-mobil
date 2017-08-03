<template>
	<div id="app">
		<cover></cover>
		<test></test>
		<trucks></trucks>
	</div>
</template>

<script>
import cover from './cover/cover.vue'
import test from './test/test.vue'
import trucks from './trucks/trucks.vue'

export default {
	components: {
		'cover': cover,
		'test': test,
		'trucks': trucks,
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