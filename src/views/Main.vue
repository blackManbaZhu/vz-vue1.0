<template>
	<div>main
		<el-button type="primary" @click="testData">获取</el-button>
		<div>
			<button>获取测试数据</button>
		</div>
		 <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media
          src="/static/sunshine.jpg"
          height="200px"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">西部公路旅行</div>
            <span class="grey--text">1,000 英里的奇迹</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat>分享</v-btn>
          <v-btn flat class="purple--text">探索</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
	           我是一件事 但是，像大多数政治家一样，他答应了比他所能提供的更多的东西。你不会有时间睡觉，士兵，不是
	           所有的床，你会做的。然后我们将使用该数据文件！嘿，你添加一个和两个零，或者我们走！你要去洗衣服吗？我必须找到一种逃脱的方式。
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
	</div>
</template>

<script>
   import { msgData } from '../api/api';

export default {
	components: {
	},
	data: () => ({
      show: false
    }),
	methods: {
    testData(){
		msgData().then(function (response) {
			console.log(response);
		}).catch(function (error) {
			console.log(error);
		})
		}
	}
}

</script>

<style>

</style>
