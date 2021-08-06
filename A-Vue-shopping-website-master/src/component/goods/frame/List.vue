<template>
    <div class="section">
        <div v-for="item in listData" :key="item.id">

            <!--子类-->
            <div class="main-tit">
                <!-- <h2>手机数码</h2> -->
                <h2>{{item.catetitle}}</h2>
                <p>

                    <span v-for="level2catelist in item.level2catelist" :key="level2catelist.subcateid">

                        <a href="/goods/43.html">{{level2catelist.subcatetitle}}</a>

                    </span>

                    <!-- <a href="/goods/44.html">摄影摄像</a>

                                <a href="/goods/45.html">存储设备</a> -->

                    <a href="/goods/40.html">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
            <!--/子类-->
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">

                        <li v-for="datas in item.datas" :key="datas.artID">
                            <!-- <a href="#/goods/detail/datas.artID"> -->
                            <router-link :to="{name:'gd',params: { id: datas.artID }}">
                                <div class="img-box">
                                    <img :src="datas.img_url">
                                </div>
                                <div class="info">
                                    <!-- <h3>尼康(Nikon)D3300套机（18-55mm f/3.5-5.6G VRII）（黑色）</h3> -->
                                    <h3>{{datas.artTitle}}</h3>
                                    <p class="price">
                                        <!-- <b>¥3180.00</b>元</p> -->
                                        <b>¥{{datas.sell_price}}</b>元</p>
                                    <p>
                                        <strong>库存 {{datas.stock_quantity}}</strong>
                                        <span>市场价：
                                            <s>{{datas.market_price}}</s>
                                        </span>
                                    </p>
                                </div>
                            </router-link>
                            <!-- </a> -->
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listData: {
                level1cateid: [],
                catetitle: [],
                level2catelist: [],
                datas: []
            }
        }
    },
    methods: {
        getListData() {
            this.$http.get(this.$api.goodsContent).then(res => {
                this.listData = res.data.message;
                // console.log(res.data.message);
                // console.log(this.listData);
            });
        }
    },
    created() {
        this.getListData();
    }
}
</script>

<style scoped>

</style>