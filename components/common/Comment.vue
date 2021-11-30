<!--评论模块-->
<template>
  <div>
    <p style="text-align:center;color: #ad6598;font-size: 18px;margin-bottom: 16px;">
      -----------------------------------------------------&nbsp;精彩评论------------------------------------------------------------------------</p>
    <div class="comment-box">
      <!-- 评论输入框-->
      <div class="comment-input-box">
        <el-input class="comment-input"
                  v-model="inputComment"
                  type="textarea"
                  :rows="3"
                  autofocus
                  placeholder="写下你的评论...."
                  style="margin-top: 20px;margin-bottom: 20px;">
        </el-input>

        <div class="btn-control">

        </div>

      </div>

      <div class="comment" v-for="item in comments">
        <!-- 用户信息-->
        <div class="info">
          <img class="avatar" :src="item.userAvatar" width="36" height="36"/>
          <div class="right">
            <div class="name">{{item.userId}}</div>
            <div class="date">{{item.createTime}}</div>
          </div>
        </div>
        <!-- 评论内容-->
        <div class="content">{{item.content}}</div>
        <!-- 点赞回复-->
        <div class="control">
        <span class="like" :class="{active: item.isLike}" @click="likeClick(item)">
          <i class="iconfont icon-like"></i>
          <span class="like-num">{{item.likeNum > 0 ? item.likeNum + '人赞' : '赞'}}</span>
        </span>
          <span class="comment-reply" @click="showCommentInput(item)">
          <i class="iconfont icon-comment"></i>
          <span>回复</span>
        </span>
        </div>

        <!-- 子评论-->
        <div class="reply" v-if="item.commentReplayList">
          <div class="item" v-for="reply in item.commentReplayList">
            <div class="reply-content">
              <span class="from-name">{{reply.fromName}}</span><span>&nbsp;:&nbsp;</span>
              <span class="to-name">@{{reply.toName}}</span>
              <span>{{reply.content}}</span>
            </div>
            <div class="reply-bottom">
              <span>{{reply.createTime}}</span>
              <span class="reply-text" @click="showCommentInput(item, reply)">
                      <i class="iconfont icon-comment"></i>
                      <span>回复</span>
              </span>
            </div>
          </div>
          <transition name="fade">
            <div class="input-wrapper" v-if="showItemId === item.id">
              <el-input class="gray-bg-input"
                        v-model="inputReplay"
                        type="textarea"
                        :rows="3"
                        autofocus
                        placeholder="写下你的评论">
              </el-input>
              <div class="btn-control">
                <el-button class="btn" type="goon" round @click="commitComment" size="medium">确定</el-button>
                <el-button class="btn" type="canel" round @click="cancel" size="medium">取消</el-button>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Vue from 'vue'

  export default {
    components: {},
    props: {
      comments: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        inputReplay: '',
        inputComment: '',
        showItemId: ''
      }
    },
    computed: {},
    methods: {
      /**
       * 点赞
       */
      likeClick(item) {
        if (item.isLike === null) {
          Vue.$set(item, "isLike", true);
          item.likeNum++
        } else {
          if (item.isLike) {
            item.likeNum--
          } else {
            item.likeNum++
          }
          item.isLike = !item.isLike;
        }
      },

      /**
       * 点击取消按钮
       */
      cancel() {
        this.showItemId = ''
      },

      /**
       * 提交评论
       */
      commitComment() {
        console.log(this.inputReplay);
      },

      /**
       * 点击评论按钮显示输入框
       * item: 当前的评论
       * reply: 当前回复的评论
       */
      showCommentInput(item, reply) {
        if (reply) {
          this.inputReplay = "@" + reply.fromName + " "
        } else {
          this.inputReplay = ''
        }
        this.showItemId = item.id
      }
    },
    created() {
      console.log(this.comments)
    }
  }
</script>

<style scoped lang="scss">

  .comment-box {
    width: 1050px;
    margin: auto;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 0 10px;
    box-sizing: border-box;

    .comment-input-box {
      width: 1008px;
      margin: auto;
    }

    .comment {
      display: flex;
      flex-direction: column;
      padding: 10px;
      border-bottom: 1px solid #F2F6FC;

      .info {
        display: flex;
        align-items: center;

        .avatar {
          border-radius: 50%;
        }

        .right {
          display: flex;
          flex-direction: column;
          margin-left: 10px;

          .name {
            font-size: 16px;
            color: #303133;
            margin-bottom: 5px;
            font-weight: 500;
          }

          .date {
            font-size: 12px;
            color: #909399;
          }
        }
      }

      .content {
        font-size: 16px;
        color: #303133;
        line-height: 20px;
        padding: 10px 0;
      }

      .control {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #909399;

        .like {
          display: flex;
          align-items: center;
          margin-right: 20px;
          cursor: pointer;

          &.active, &:hover {
            color: #ad6598;
          }

          .iconfont {
            font-size: 14px;
            margin-right: 5px;
          }
        }

        .comment-reply {
          display: flex;
          align-items: center;
          cursor: pointer;

          &:hover {
            color: #333;
          }

          .iconfont {
            font-size: 16px;
            margin-right: 5px;
          }
        }

      }

      .reply {
        margin: 10px 0;
        border-left: 2px solid #DCDFE6;

        .item {
          margin: 0 10px;
          padding: 10px 0;
          border-bottom: 1px dashed #EBEEF5;

          .reply-content {
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #303133;

            .from-name {
              color: #ad6598;
            }

            .to-name {
              color: #ad6598;
              margin-left: 5px;
              margin-right: 5px;
            }
          }

          .reply-bottom {
            display: flex;
            align-items: center;
            margin-top: 6px;
            font-size: 12px;
            color: #909399;

            .reply-text {
              display: flex;
              align-items: center;
              margin-left: 10px;
              cursor: pointer;

              &:hover {
                color: #333;
              }

              .icon-comment {
                margin-right: 5px;
              }
            }
          }
        }

        .write-reply {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: #909399;
          padding: 10px;
          cursor: pointer;

          &:hover {
            color: #303133;
          }

          .el-icon-edit {
            margin-right: 5px;
          }
        }

        .fade-enter-active, fade-leave-active {
          transition: opacity 0.5s;
        }

        .fade-enter, .fade-leave-to {
          opacity: 0;
        }

        .input-wrapper {
          padding: 10px;

          .gray-bg-input, .el-input__inner {
            //background-color: #67C23A;
          }

          .btn-control {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-top: 10px;


            .el-button--goon {
              background: #ad6598;
              border-color: #ad6598;
              color: #fff;
            }

            .el-button--goon:hover {
              background: #fff;
              border-color: #eee;
              color: #000000;
            }

            .el-button--canel:hover {
              background: #fff;
              border-color: #DCDFE6;
              color: #606266;
            }

            .cancel {
              font-size: 16px;
              color: #606266;
              margin-right: 20px;
              cursor: pointer;

              &:hover {
                color: #333;
              }
            }

            .confirm {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
</style>
