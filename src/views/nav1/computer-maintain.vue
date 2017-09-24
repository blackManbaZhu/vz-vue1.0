<template>
	<div>
		<v-card class="grey lighten-4 elevation-0">
			<v-card-text>
				<v-container fluid>
					<v-layout row wrap>
						<v-flex xs12 sm6>
							<v-subheader v-text="'遇到什么问题了？'"></v-subheader>
						</v-flex>
						<v-flex xs12 sm6>
							<v-select v-bind:items="states" v-model="a1" label="请选择" autocomplete></v-select>
						</v-flex>
					</v-layout>
				</v-container>
			</v-card-text>
		</v-card>
		<v-card class="grey lighten-4 elevation-0">
			<v-card-text>
				<v-container fluid>
					<v-layout row>
						<v-flex xs4>
							<v-subheader>详细描述</v-subheader>
						</v-flex>
						<v-flex xs8>
							<v-text-field name="input-7-1" label="请输入" multi-line></v-text-field>
						</v-flex>
					</v-layout>
				</v-container>
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				a1: null,
				states: [
					'开机有显示',
					'开机无显示',
					'重装系统',
				]
			}
		}
	}
</script>

<style lang="css">

</style>