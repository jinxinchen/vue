<template>
    <div class="shopcart">
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="/index.html">首页</a> &gt;
                <a href="/cart.html">购物车</a>
            </div>
        </div>

        <div class="section">
            <div class="wrapper">
                <div class="bg-wrap">
                    <!--购物车头部-->
                    <div class="cart-head clearfix">
                        <h2>
                            <i class="iconfont icon-cart"></i>我的购物车</h2>
                        <div class="cart-setp">
                            <ul>
                                <li class="first active">
                                    <div class="progress">
                                        <span>1</span>
                                        放进购物车
                                    </div>
                                </li>
                                <li>
                                    <div class="progress">
                                        <span>2</span>
                                        填写订单信息
                                    </div>
                                </li>
                                <li class="last">
                                    <div class="progress">
                                        <span>3</span>
                                        支付/确认订单
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--购物车头部-->
                    <!--商品列表-->
                    <div class="cart-box">
                        <input id="jsondata" name="jsondata" type="hidden">
                        <table width="100%" align="center" class="cart-table" border="0" cellspacing="0" cellpadding="8">
                            <tbody>
                                <tr>
                                    <th width="48" align="center">
                                        <!-- 全选 -->
                                        <el-switch :value="allSelected" @change="allSelectedSwitch" active-color="#13ce66" inactive-color="#ff4949">
                                        </el-switch>
                                    </th>
                                    <th align="left" colspan="2">商品信息</th>
                                    <th width="84" align="left">单价</th>
                                    <th width="104" align="center">数量</th>
                                    <th width="104" align="left">金额(元)</th>
                                    <th width="54" align="center">操作</th>
                                </tr>

                                <!-- 卧槽。。居然不写商品列表 -->
                                <!-- 商品列表在这里啊。。我日 -->
                                <tr v-for="item in goodsList" :key="item.id">
                                    <td width="48" align="center">
                                        <el-switch v-model="item.selected" active-color="#13ce66" inactive-color="#ff4949">
                                        </el-switch>
                                    </td>
                                    <td align="left" colspan="2">
                                        <img :src="item.img_url" width="50" height="50">
                                        <span>{{item.title}}</span>
                                    </td>
                                    <td width="84" align="left">
                                        ￥{{item.sell_price}}
                                    </td>
                                    <!-- 数量加减 -->
                                    <td width="104" align="center">
                                        <el-input-number size="mini" v-model="item.buycount" @change="countChange(item.id,$event)" :min="1"></el-input-number>
                                    </td>
                                    <!--  -->
                                    <td width="104" align="left">
                                        ￥{{item.sell_price*item.buycount}}
                                    </td>
                                    <td width="54" align="center">
                                        <!-- native是原生事件的意思，要添加才能触发事件，不然会跳转 -->
                                        <el-button size="mini" @click.native="delGoods(item.id)">删除</el-button>
                                    </td>
                                </tr>

                                <tr v-if="!goodsList.length">
                                    <td colspan="10">
                                        <div class="msg-tips">
                                            <div class="icon warning">
                                                <i class="iconfont icon-tip"></i>
                                            </div>
                                            <div class="info">
                                                <strong>购物车没有商品！</strong>
                                                <p>您的购物车为空，
                                                    <a href="/index.html">马上去购物</a>吧！</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <th align="right" colspan="8">
                                        已选择商品
                                        <b class="red" id="totalQuantity">{{selectedCount}}</b> 件 &nbsp;&nbsp;&nbsp; 商品总金额（不含运费）：
                                        <span class="red">￥</span>
                                        <b class="red" id="totalAmount">{{selectedTotalPrice}}</b>元
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>,
                    <!--/商品列表-->
                    <!--购物车底部-->
                    <div class="cart-foot clearfix">
                        <div class="right-box">
                            <button class="button" onclick="javascript:location.href='/index.html';">继续购物</button>
                            <button class="submit" onclick="formSubmit(this, '/', '/shopping.html');">立即结算</button>
                        </div>
                    </div>
                    <!--购物车底部-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // key: value
            goodsList: []
        }
    },
    computed: {
        /* 选中的商品 */
        selectedCount() {
            return this.goodsList.reduce((s, v) => v.selected ? s + v.buycount : s, 0);
        },
        /* 计算商品总价 */
        selectedTotalPrice() {
            return this.goodsList.reduce((s, v) => v.selected ? s + v.buycount * v.sell_price : s, 0);
        },
        /* 购物列表全选的状态 */
        allSelected() {
            return this.goodsList.every(v => v.selected);
        }
    },
    methods: {
        /* 全选开关 */
        allSelectedSwitch(bol) {
            this.goodsList.forEach(v => v.selected = bol);
        },
        /* 获取已购买的商品列表 */
        getGoodsList() {
            if (!this.$store.getters.getShopcartIDS) {
                console.log('no data');
            } else {
                /* 通过IDS获取商品列表 */
                this.$http.get(this.$api.shopcarGoods + this.$store.getters.getShopcartIDS)
                    // .then(res => this.goodsList = res.data.message)
                    .then(res => {
                        res.data.message.forEach(goods => {
                            /* 修正一下返回数据的成员，添加selected用于控制开关 */
                            goods.selected = true;
                            /* 因为返回值的购买数量buycount不正确，手动添加buycount购买数量 */
                            goods.buycount = this.$store.getters.getShopcartData[goods.id];
                        });
                        /* 重置填充数据列表 */
                        this.goodsList = res.data.message;
                    });
            }

        },
        /* 数量加减框发生变化触发，传入参数id和val */
        countChange(id, val) {
            /* 下面的id和val从哪来?? */
            this.$store.commit('upShopCartData', { id: id, val: val })
        },
        /* 删除操作 */
        delGoods(id) {
            this.$store.commit('delShopcartData', { id: id });
            // this.getGoodsList();
            this.goodsList = this.goodsList.filter(v => v.id != id); // 留下不删除的商品
        }

    },
    created() {
        this.getGoodsList();
    }
}
</script>

<style scoped>

</style>