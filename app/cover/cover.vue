<template>
	<div 
		id="cover"
		:style="{'width': '100%', 'height': screenHeight + 'px'}"
	>
		<div class="cover-logo">
			<span>provide by zealtec</span>
		</div>

		<div class="cover-title">
			<span>{{stationName}}</span><br>
			<span>{{stationType}}</span>
		</div>

		<div class="cover-subtitle">
			<span>{{chartType}}</span><br>
			<div :style="{margin: '22px 10px', 'border-top': '2px solid #000', width: '20px'}"></div>
			<span>{{chartDate}}</span>
		</div>

		<div 
			style="position: absolute;top: 10%;bottom: 10%;left: 50%;display: block;width: 1px;border-left: 2px dashed #707070;" 
		></div>

		<div :style="{position: 'absolute', bottom: '10%', left: '50%', 'margin-left': '10px', display: 'block', width:'1px', height: '100px', 'border-left': '5px solid #000'}"></div>
	</div>
</template>

<script>
import util from '../util'
import testdata from '../testdata.json'

export default{
	data () {
		return {
			screenHeight: util.getWindowHeight(),
			stationName: '',
			stationType: '',
			chartDate: '',
			chartType: ''
		}
	},
	methods: {
		init () {
			try {
				this.stationName = testdata.data.station.name
				this.stationType = testdata.data.station.scope ? '区域' : '中转站'
				this.chartDate = testdata.data.station.date
				this.chartType = testdata.data.station.type === 'day' ? '日数据统计' : '月数据统计'
			} catch (e) {
				this.stationName = '中国xxxxxx'
				this.stationType = 'xxx'
				this.chartDate = '2017-xx-xx'
				this.chartType = 'xxxxx'
			}
		}
	},
	mounted () {
		this.init()
	}
}
</script>

<style>
#cover {
	background: #EAEAEC;
	color: #000;
}
.cover-logo {
	position: absolute;
	top: 10%;
	left: 50%;
	margin-left: 10px;
	font-size: 24px;
	border-top: 5px solid #000;
}
.cover-title {
	position: absolute;
	top: 35%;
	right: 50%;
	text-align: right;
	margin-right: 10px;
	font-size: 60px;
	border-top: 5px solid #000;
}
.cover-subtitle {
	position: absolute;
  padding-top: 10px;
	top: 35%;
	left: 50%;
	margin-left: 10px;
	font-size: 40px;
	border-top: 2px dashed #707070;
}
</style>