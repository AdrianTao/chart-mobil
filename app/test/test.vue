<template>
	<div 
		id="test"
		:style="{'width': '100%', 'height': screenHeight + 'px'}"
	></div>
</template>

<script>
import echarts from 'echarts'
import util from '../util'

export default{
	data () {
		return {
			chart:null,
			screenHeight: util.getWindowHeight()
		}
	},
	mounted () {
		let myChart = echarts.init(document.getElementById('test'))

		// 绘制图表
		myChart.setOption({
			title: { text: 'ECharts 入门示例' },
			tooltip: {},
			xAxis: {
				data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
			},
			yAxis: {},
			series: [{
				name: '销量',
				type: 'bar',
				data: [5, 20, 36, 10, 10, 20]
			}],
			backgroundColor: '#1A1929'
		})
	}
}
</script>

<style>
#test {
	width: 600px;
	height: 500px;
}
</style>