<!-- 车次图表 日结 -->
<template>
	<div 
		id="trucks"
		:style="{'width': '100%', 'height': screenHeight + 'px'}"
	></div>
</template>

<script>
import echarts from 'echarts'
import util from '../util'
import testdata from '../testdata.json'

// 背景
let waterMarkText = 'TRUCKS'
let canvas = document.createElement('canvas')
let ctx = canvas.getContext('2d')
canvas.width = canvas.height = 1000
ctx.textAlign = 'center'
ctx.textBaseline = 'middle'
ctx.globalAlpha = 0.08
ctx.font = '200px Microsoft Yahei'
ctx.translate(500, 500)
ctx.rotate(-Math.PI / 4)
ctx.fillText(waterMarkText, 0, 0)

export default{
	data () {
		return {
			screenHeight: util.getWindowHeight(),
			total: ''
		}
	},
	mounted () {
		let myChart = echarts.init(document.getElementById('trucks'))

		// 绘制图表
		myChart.setOption({
			backgroundColor: {
				type: 'pattern',
				image: canvas,
				repeat: 'repeat'
			},
			tooltip: {},
			// 标题
			title: {
				text: '车次明细',
				subtext: '总计 ' + this.total + '次',
				x: '50%',
				top: 30,
				textAlign: 'center',
				textStyle: {
					fontSize: 45
				},
				subtextStyle: {
					fontSize: 40
				}
			},
			// 图表格子
			grid: {
				top: 140,
				bottom: 100,
				left: 20,
				right: 50,
				containLabel: true
			},
			xAxis: {
				type: 'value',
				splitLine: {
					show: false
				}
			},
			yAxis: {
			  type: 'category',
			  axisLabel: {
					interval: 0,
					rotate: 30
			  },
			  splitLine: {
					show: false
			  }
			},
		})
	}
}
</script>

<style>

</style>