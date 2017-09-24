<template>
	<v-app id="e3" toolbar footer >
		<!--导航-->
		<v-navigation-drawer fixed  persistent v-model="drawer" light enable-resize-watcher>
			<v-list dense>
				<template v-for="(item,index) in $router.options.routes">
					<v-layout row v-if="item.heading" align-center></v-layout>
					<!--如果没有子菜单-->
					<v-list-tile v-else-if="item.leaf" :index="item.children[0].path" :key="item.children[0].path" @click="$router.push(item.children[0].path)">
						<v-list-tile-action>
							<v-icon>{{item.icon}}</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>
								{{ item.children[0].name}}
							</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<!--如果有子菜单-->
					<v-list-group v-else no-action >
						<v-list-tile slot="item" >
							<v-list-tile-action>
								<v-icon>{{item.icon}}</v-icon>
							</v-list-tile-action>
							<v-list-tile-content>
								<v-list-tile-title>
									{{ item.name }}
								</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
						<v-list-tile v-for="(child, i) in item.children" @click="$router.push(child.path)" :index="child.path" :key="i">
							<v-list-tile-action v-if="child.icon">
								<v-icon>{{ child.name }}</v-icon>
							</v-list-tile-action>
							<v-list-tile-action>
								<v-icon></v-icon>
							</v-list-tile-action>
							<v-list-tile-content>
								<v-list-tile-title>
									{{ child.name}}
								</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
					</v-list-group>
				</template>
			</v-list>
		</v-navigation-drawer>

		<!--内容-->
		<v-toolbar class="indigo grey darken-3" dark fixed>
			<v-toolbar-title @click="collapse">
				<i class="fa fa-navicon"></i>
			</v-toolbar-title>
		</v-toolbar>
		<main>
			<v-container fluid>
				<!--v-router-->
				<router-view></router-view>
			</v-container>
		</main>
		<v-footer class="indigo grey darken-3">
			<span class="white--text">© 2017 微众科技工作室</span>
		</v-footer>
	</v-app>
</template>

<script>
	export default {
		data() {
			return {
				sysName: '菜单',
				drawer: false,
			}
		},
		methods: {
			//折叠导航栏
			collapse: function() {
				this.drawer = !this.drawer;
			}
		},
	}
</script>

<style>
	
</style>