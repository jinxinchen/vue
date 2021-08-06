<template>
	<div>
		<Header></Header>
		<!-- <el-carousel indicator-position="outside" height="200px">
				<el-carousel-item v-for="item in info" :key="item.title" type="card">
					<a :href="item.url"><img :src="item.image" height="200" /></a>
				</el-carousel-item>
		</el-carousel> -->
		<div style="height: 100px; background-color: #827f31;">
			
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from './frame/header.vue'
	import Footer from './frame/footer.vue'
	export default{
		data(){
			return {
				info : null
			} 
		},
		methods: {
		    getBannersDetail() {
		        this.$http.get(this.$api.banners ).then(res => {
					console.log(res.data);
					this.info =  res.data.data
		            // this.goodsDetail = res.data.message;
		        });
		    }
		},
		created() {
			this.getBannersDetail();
		},
		components:{
			Header,
			Footer,
		},
	}
</script>

<style>
	#main{
		/* min-height:800px; */
		height:auto !important;
		height:100%;
	}
</style>
