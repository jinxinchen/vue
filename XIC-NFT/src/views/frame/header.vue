<template>
	<div id="header" class="header">
		<div id="logo" class="logo-div">
			<a href="/"><img  class="logo" src="../../assets/logo.png" /> </a>
		</div>
		<div id="menu" class="menu-div">
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				<el-menu-item  v-for="item in menuItems" :key="item.itemIndex" :index="item.itemIndex" :route="item.itemUrl">
					{{ item.itemName }}
				</el-menu-item>
			</el-menu>
		</div>
	</div>
</template>

<script>
export default {
    data() {
		return {
			menuItems:[
				{itemIndex: 1, itemName: "首页", itemUrl : "/home"},
				{itemIndex: 2, itemName: "市场", itemUrl : "/market"},
				{itemIndex: 3, itemName: "艺术家", itemUrl : "/artist"},
				{itemIndex: 4, itemName: "藏家榜", itemUrl : "/collector"},
				{itemIndex: 5, itemName: "常见问题", itemUrl : "/about"},
				{itemIndex: 6, itemName: "个人中心", itemUrl : "/person"},
			],
			activeIndex: 1,
		};
    },
    methods: {
		handleSelect(key, keyPath, index) {
			console.log(key, keyPath);
			this.$router.push({
				path: index.route,
				query: {
					t: key
				}

			})
		}
    },
	created() {
		console.log(this.$route.query.t)
		if(this.$route.query.t) {
			this.activeIndex = this.$route.query.t
		}
	}
}
</script>

<style scoped>
.header {
	height: 156px;
	background-color: #ffffff;
	position:relative;
}

#header .logo-div {
	width: 30%;
	/* float: left; */
	position: absolute;
	bottom: 0;
	left: 5%;
}

.logo {
	height:138px;
}

#header .menu-div {
	width: 40%;
	float: right;
	position: absolute;
	bottom: 0;
	right: 0;
}
</style>