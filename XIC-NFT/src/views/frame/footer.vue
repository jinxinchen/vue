<template>
    <div>
        <div class="footer">
            <div class="container">
                <div class="row">
                   <p class="footer-pp">
                     <router-link to="">常见问题</router-link>|
                     <router-link to="">商城首页</router-link>|
                     <router-link to="">联系电话</router-link>|
                     <router-link to="">合作平台</router-link>|
                     <router-link to="">帮助中心</router-link>|
                     <router-link to="">法律声明</router-link>|
                     <router-link to="">隐私政策</router-link>
                   </p>
                   <p class="footer-p2">休闲娱乐来一口，健康活力我们有。--悠品屋  @86234234  网站版权所有</p>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style lang="css">
	.footer{
		width: 100%;
		/* position: absolute;
		bottom: 0; */
		height: 100px;
		background-color: #fafafa;
		color: gray;
	}
    .row .footer-pp {
        margin-top: 2%;
        height: 40px;
        line-height: 40px;
    }
    .row .footer-pp a {
        color: gray;
        text-decoration: none;
        display: inline-block;
        padding: 0 5px 0 5px;
        text-align: center;
        
    }
    .row .footer-p2 {
        margin-left: 5px;
        color: gray;
        height: 40px;
        line-height: 40px;
    }
    .row .footer-pp a:hover {
        color: #ece46e;
    }
    .row .code {
        position: relative;
    }
    .row .code .code-img {
        width: 11%;
        position: absolute;
        right: 8%;
        top: -155px;
        
    }
</style>

<script>
export default {
	
}
</script>