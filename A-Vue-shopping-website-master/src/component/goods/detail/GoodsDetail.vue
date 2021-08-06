<template>
    <div class="detail">

        <!-- 导航栏 -->
        <app-breadcumb></app-breadcumb>

        <!-- 商品详情 -->
        <div class="section">
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <!--页面左边-->
                    <div class="left-925">
                        <div class="goods-box clearfix">
                            <!--商品图片-->
                            <div class="pic-box">

                                <app-left-img :imglist="goodsDetail.imglist"></app-left-img>

                            </div>
                            <!--/商品图片-->

                            <!--商品信息-->
                            <app-left-info :goodsinfo="goodsDetail.goodsinfo"></app-left-info>
                            <!--/商品信息-->
                        </div>

                        <div id="goodsTabs" class="goods-tab bg-wrap">
                            <!--选项卡-->

                            <el-tabs type="border-card">
                                <el-tab-pane label="商品介绍">
                                    <!--选项内容-->
                                    <div class="tab-content entry" style="display:block;"
                                    v-html="goodsDetail.goodsinfo.content"></div>
                                </el-tab-pane>

                                <el-tab-pane label="商品评论">
                                    <div class="tab-content" style="display: block;">
                                        <!--网友评论    调用端口，具体参数看文档-->
                                        <app-comment a="goods" :b="id"></app-comment>
                                        <!--/网友评论-->
                                    </div>
                                </el-tab-pane>
                            </el-tabs>

                            <!--/选项卡-->

                        </div>

                    </div>
                    <!--/页面左边-->

                    <!--页面右边-->
                    <div class="left-220">
                        <div class="bg-wrap nobg">
                            <!-- 右边组件 -->
                            <app-right :hotgoodslist="goodsDetail.hotgoodslist"></app-right>

                        </div>
                    </div>
                    <!--/页面右边-->
                </div>
            </div>
        </div>

    </div>
</template>

<script>

import CommentComponent from '../../common/Comment.vue';
import BreadCumbComponent from './frame/BreadCumb.vue';
import LeftImgConponent from './frame/LeftImg.vue';
import LeftInfoComponent from './frame/LeftInfo.vue';
import RightComopnent from './frame/Right.vue';

export default {
    data() {
        return {
            id: this.$route.params.id,
            goodsDetail: {
                goodsinfo: {},
                hotgoodslist: [],
                imglist: []
            }
        }
    },
    methods: {
        getGoodsDetail() {
            this.$http.get(this.$api.goodsDetail + this.id).then(res => {
        // console.log(this.$route);
                this.goodsDetail = res.data.message;
            });
        }
    },
    created() {
        this.getGoodsDetail();
    },
    /* this is copy from DaFei...try to understand... */
    watch: {
        $route() {
            this.id = this.$route.params.id;  // 修改为最新的id
            this.getGoodsDetail();            // 重新请求数据更新页面内容
        }
    },
    components: {
        appBreadcumb: BreadCumbComponent,
        appLeftImg: LeftImgConponent,
        appLeftInfo: LeftInfoComponent,
        appRight: RightComopnent,
        appComment: CommentComponent
    },
}
</script>

<style scoped lang="less">

</style>