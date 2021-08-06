<template>
    <div class="comment-box">
        <!--取得评论总数-->
        <form id="commentForm" name="commentForm" class="form-box" @submit.prevent="subComment">
            <div class="avatar-box">
                <i class="iconfont icon-user-full"></i>
            </div>
            <div class="conn-box">
                <div class="editor">
                    <textarea v-model="commentContent" id="txtContent" name="txtContent" sucmsg=" " datatype="*10-1000" nullmsg="请填写评论内容！"></textarea>
                    <span class="Validform_checktip"></span>
                </div>
                <div class="subcon">
                    <!-- <input id="btnSubmit" name="submit" type="submit" value="提交评论" class="submit"> -->
                    <button id="btnSubmit" name="submit" type="submit" class="submit">提交评论</button>
                    <span class="Validform_checktip"></span>
                </div>
            </div>
        </form>
        <ul id="commentList" class="list-box">
            <p v-if="!commentList.length" style="margin:5px 0 15px 69px;line-height:42px;text-align:center;border:1px solid #f7f7f7;">暂无评论，快来抢沙发吧！</p>
            <li v-for="(item,i) in commentList" :key="i">
                <div class="avatar-box">
                    <i class="iconfont icon-user-full"></i>
                </div>
                <div class="inner-box">
                    <div class="info">
                        <span>{{item.user_name}}</span>
                        <span>{{item.add_time | date}}</span>
                    </div>
                    <p>{{item.content}}</p>
                </div>
            </li>
        </ul>
        <!--放置页码-->
        <div class="page-box" style="margin:5px 0 0 62px">
            <!-- 分页 -->
            <el-pagination layout="prev, pager, next" :total="10*this.totalcount" @current-change="handleCurrentChange"></el-pagination>

        </div>
        <!--/放置页码-->
    </div>
</template>

<script>
export default {
    props: ['a', 'b'],
    data() {
        return {
            /* 评论框内容 */
            commentContent: '',
            /* 评论列表 */
            commentList: [],
            query: {
                pageIndex: 1,
                pageSize: 5
            },
            totalcount: 0
        }
    },
    methods: {
        getCommentList() {
            this.$http.get(
                this.$api.commentList + this.a + '/' + this.b,
                { params: this.query }
            ).then(res => {
                this.commentList = res.data.message;
                this.totalcount = res.data.totalcount;
                console.log(this.totalcount);
            });
        },
        /* 更改当前页 */
        handleCurrentChange(page) {
            this.query.pageIndex = page;
            this.getCommentList();
        },
        subComment() {
            this.$http.post(
                this.$api.comment + this.a + '/' + this.b,
                { commenttxt: this.commentContent }
            ).then(res => {
                // 评论成功的提示
                this.$message({
                    message: '恭喜你，发表成功',
                    type: 'success'
                });
                /* 假刷新一下评论 */
                this.commentList.unshift({
                    user_name: '前端大神',
                    user_ip: '127.0.0.1',
                    add_time: new Date(),
                    content: this.commentContent
                });
                this.commentContent = '';
            });
        },

    },
    watch: {
        b() {
            this.getCommentList();
        }
    },
    created() {
        this.getCommentList();
    }
}
</script>

<style scoped>

</style>