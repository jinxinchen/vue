import Vue from 'vue';

export default {
    state: {
        /* 初始值从localstorage取出 */
        shopcartData: JSON.parse(localStorage.getItem('shopcartData')) || {}
    },
    /* 定义获取状态的方式 */
    getters: {
        /* 取出购物车原始数据 */
        getShopcartData(state) {
            return state.shopcartData;
        },
        /* 取出购物车商品总数 */
        getShopcartTotal(state) {
            return Object.values(state.shopcartData).reduce((s, v) => s + v, 0);
        },
        /* 取出购物车所有商品ID拼成字符串 */
        getShopcartIDS(state) {
            return Object.keys(state.shopcartData).join(',');
        }
    },
    /* 修改状态，用commit的 */
    mutations: {
        /* 添加数据 */
        upShopCartData(state, params) {
            // state.shopcartData[params.id] = params.val;
            Vue.set(state.shopcartData, params.id, params.val);
            localStorage.setItem('shopcartData', JSON.stringify(state.shopcartData));
        },
        /* 累加 */
        addShopcartData(state, params) {
            if (state.shopcartData[params.id]) {
                state.shopcartData[params.id] += params.val;
            } else {
                // state.shopcartData[params.id] = params.val;
                Vue.set(state.shopcartData, params.id, params.val);
            }
            localStorage.setItem('shopcartData', JSON.stringify(state.shopcartData));
        },
        /* 删除数据---删除商品购买数据 */
        delShopcartData(state, params) {
            Vue.delete(state.shopcartData, params.id);
            localStorage.setItem('shopcartData', JSON.stringify(state.shopcartData));
        }
    }
}