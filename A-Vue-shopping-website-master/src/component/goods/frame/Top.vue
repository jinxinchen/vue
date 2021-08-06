<template>
    <!-- 商品顶部 -->
    <div class="section">
        <div class="wrapper">
            <div class="wrap-box">
                <!--类别菜单-->
                <div class="left-220" style="margin:0;">
                    <div class="banner-nav">
                        <ul>
                            <!--此处声明下面可重复循环-->

                            <li v-for="item in topData.catelist" :key="item.id">
                                <h3>
                                    <i class="iconfont icon-arrow-right"></i>
                                    <span>{{item.title}}</span>
                                    <p>
                                        <span v-for="subitem in item.subitem" :key="subitem.id">
                                            {{subitem.title}}
                                        </span>
                                    </p>
                                </h3>

                                <!-- 鼠标悬停   展示盒子    组件中递归写法 -->
                                <div class="item-box">
                                    <!--如有三级分类，此处可循环-->
                                    <dl>
                                        <dt>
                                            <!-- <a href="/goods/40.html">手机数码</a> -->
                                            <router-link :to="{ name: 'gd', params: { id: item.id } }">{{item.title}}</router-link>
                                        </dt>
                                        <dd>
                                            <!-- 向子组件传递参数 -->
                                            <app-menu :menu="item.subcates"></app-menu>
                                            
                                        </dd>
                                    </dl>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                <!--/类别菜单-->

                <!--幻灯片-->
                <div class="left-705">
                    <div class="banner-img">
                        <!-- 这里用饿了么轮播图 -->

                        <el-carousel indicator-position="outside">
                            <el-carousel-item v-for="item in topData.sliderlist" :key="item.id">
                                <!-- <h3>{{ item }}</h3> -->
                                <img :src="item.img_url" alt="">
                            </el-carousel-item>
                        </el-carousel>

                    </div>
                </div>
                <!--/幻灯片-->

                <!--推荐商品-->
                <div class="left-220">
                    <ul class="side-img-list">

                        <li v-for="item in topData.toplist" :key="item.id">
                            <div class="img-box">
                                <label>1</label>
                                <img :src="item.img_url">
                            </div>
                            <div class="txt-box">
                                <!-- <a href="/goods/show-98.html">奔腾（BNTN） 380功放+纽约至尊 套装家庭影院</a> -->
                                <router-link :to="{ name: 'gd', params: { id: item.id } }">{{item.title}}</router-link>
                                <span>{{item.add_time | date }}</span>
                            </div>
                        </li>

                    </ul>
                </div>
                <!--/推荐商品-->
            </div>
        </div>
    </div>
</template>

<script>
/* 导入组件 */
import MenuComponent from './Menu.vue';

export default {
    data() {
        return {
            topData: {
                /* 分类列表 */
                catelist: [],
                /* 轮播图数据 */
                sliderlist: [],
                /* 置顶数据 */
                toplist: []
            }
        }
    },
    methods: {
        getTopData() {
            this.$http.get(this.$api.goodsTop).then(res => {
                // console.log(res);
                this.topData = res.data.message;
            });
        }
    },
    created() {
        this.getTopData();
    },
    /* 注册组件 */
    components: {
        appMenu:MenuComponent
    }
};
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.banner-img img {
    width: 100%;
    height: 100%;
}
</style>