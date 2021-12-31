<!--评论模块-->
<template>
  <div>
    <p style="text-align:center;color: #ad6598;font-size: 18px;margin-bottom: 16px;">
      -----------------------------------------------------&nbsp;精彩评论------------------------------------------------------------------------</p>
    <div class="comment-box">
      <!-- 评论输入框-->
      <div class="comment-input-box">

        <el-form ref="commentForm"
                 :model="comment"
                 :rules="commentRules">
          <el-form-item label="" prop="content" style="margin-bottom: 0;">
            <el-input class="comment-input"
                      v-model="comment.content"
                      type="textarea"
                      :rows="3"
                      placeholder="写下你的评论...."
                      style="margin-top: 20px;">
            </el-input>
          </el-form-item>

          <el-row :gutter="20">
            <el-col :span="12" style="margin-top: 10px;">
              <el-form-item label="姓名：" prop="nickName">
                <el-input
                  placeholder="姓名或昵称"
                  v-model="comment.nickName">
                </el-input>
              </el-form-item>
            </el-col>

            <el-col :span="12" style="margin-top: 10px;">
              <el-form-item label="邮箱：" prop="mail">
                <el-input
                  placeholder="邮箱（必填，将保密）"
                  v-model="comment.mail">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>

        <div class="btn-control">
          <el-button style="background: #ad6598;border-color: #ad6598;color: #fff;" type="primary" icon="el-icon-mouse"
                     @click="commitComment('commentForm')">发表评论
          </el-button>
        </div>

      </div>

      <div class="comment" v-for="(item,index) in comments">
        <!-- 用户信息-->
        <div class="info">
          <img class="avatar" :src="item.userAvatar" width="36" height="36"/>
          <div class="right">
            <div class="name">{{item.nickName}}</div>
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

          <!-- 回复框-->
          <transition name="fade">
            <div class="input-wrapper" v-if="showItemId === item.id">

              <el-form :ref="'replayForm'+index"
                       :model="replay"
                       :rules="replayRules">
                <el-form-item label="" prop="content" style="margin-bottom: 0;">
                  <el-input class="comment-input"
                            v-model="replay.content"
                            type="textarea"
                            :rows="3"
                            :placeholder="subCommentPlaceholder"
                            style="margin-top: 20px;">
                  </el-input>
                </el-form-item>

                <el-row :gutter="20">
                  <el-col :span="12" style="margin-top: 10px;">
                    <el-form-item label="姓名：" prop="fromName">
                      <el-input
                        placeholder="姓名或昵称"
                        v-model="replay.fromName">
                      </el-input>
                    </el-form-item>
                  </el-col>

                  <el-col :span="12" style="margin-top: 10px;">
                    <el-form-item label="邮箱：" prop="mail">
                      <el-input
                        placeholder="邮箱（必填，将保密）"
                        v-model="replay.mail">
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>

              <div class="btn-control">
                <el-button class="btn" type="goon" @click="commitReplay(index)" size="medium">发布回复</el-button>
                <el-button class="btn" type="canel" @click="cancel" size="medium">取消</el-button>
              </div>
            </div>
          </transition>

        </div>
      </div>

      <el-pagination
        layout="total, sizes,prev, pager, next,jumper"
        :current-page.sync="pageNum"
        :page-size="pageSize"
        :page-sizes="[1,5,10]"
        :total="comments.length"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        class="article-pagination"
      />
    </div>
  </div>
</template>

<script>
  import {commitComment, commitReplay} from '~/api/comment'
  import {getCommentByArticleId} from "~/api/blog";

  const defaultComment = {
    content: null,
    nickName: null,
    mail: null,
    articleId: null
  }

  const defaultReplay = {
    content: null,
    commentId: null,
    fromName: null,
    toId: null,
    toName: null,
    mail: null
  }

  export default {
    components: {},
    props: {
      comments: {
        type: Array,
        required: true
      },
      articleId: {
        type: String,
        required: true
      }
    },
    data() {
      const checkEmail = (rule, value, callback) => {
        const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
        if (!value) {
          return callback(new Error('邮箱不能为空'))
        }
        setTimeout(() => {
          if (mailReg.test(value)) {
            callback()
          } else {
            callback(new Error('请输入正确的邮箱格式'))
          }
        }, 100)
      }
      return {
        comment: Object.assign({}, defaultComment),
        replay: Object.assign({}, defaultReplay),
        showItemId: '',
        pageNum: 1,
        pageSize: 10,
        subCommentPlaceholder: '',
        commentRules: {
          mail: [
            {required: true, validator: checkEmail, trigger: 'change'}
          ],
          content: [
            {required: true, message: '请输入评论内容', trigger: 'change'}
          ],
          nickName: [
            {required: true, message: '请输入昵称', trigger: 'change'}
          ]
        },
        replayRules: {
          mail: [
            {required: true, validator: checkEmail, trigger: 'change'}
          ],
          content: [
            {required: true, message: '请输入回复内容', trigger: 'change'}
          ],
          fromName: [
            {required: true, message: '请输入昵称', trigger: 'change'}
          ]
        }
      }
    },
    methods: {
      /**
       * 提交评论
       */
      commitComment(commentForm) {
        this.$refs[commentForm].validate((valid) => {
          if (valid) {
            this.comment.articleId = this.articleId
            commitComment(this.comment).then(response => {
              this.$message({
                message: response.message,
                type: 'success'
              })
              // 刷新评论列表
              this.getArticleCommentByPage();
              // 清空评论表格
              this.comment = Object.assign({}, defaultComment)
              // 清除表单校验
              this.$nextTick(()=>{
                this.$refs[commentForm].clearValidate()
              })
            })
          } else {
            this.$message({
              message: '请填写正确的信息！',
              type: 'error',
              duration: 1000
            })
          }
        })
      },

      commitReplay(index) {
        this.$refs['replayForm' + index][0].validate((valid) => {
          if (valid) {
            commitReplay(this.replay).then(response => {
              this.$message({
                message: response.message,
                type: 'success'
              })
              // 刷新评论列表
              this.getArticleCommentByPage();
              // 清空评论表格
              this.replay = Object.assign({}, defaultReplay)
              // 清除表单校验
              this.$nextTick(()=>{
                this.$refs['replayForm' + index][0].clearValidate()
                this.showItemId = ''
              })
            })
          } else {
            this.$message({
              message: '请填写正确的信息！',
              type: 'error',
              duration: 1000
            })
          }
        })
      },

      /**
       * 点击取消按钮
       */
      cancel() {
        this.showItemId = ''
      },

      /**
       * 点击评论按钮显示输入框
       * item: 当前的评论
       * reply: 当前回复的评论
       */
      showCommentInput(item, reply) {
        if (reply) {
          //  子评论（回复的回复）
          this.subCommentPlaceholder = "@" + reply.fromName + " "
          this.replay.toId = reply.fromId;
          this.replay.toName = reply.fromName;
          this.replay.commentId = item.id;
        } else {
          //  评论回复
          this.subCommentPlaceholder = "@" + item.nickName + " "
          this.replay.toId = item.userId;
          this.replay.toName = item.nickName;
          this.replay.commentId = item.id;
        }
        this.showItemId = item.id
      },
      getArticleCommentByPage() {
        getCommentByArticleId({id: this.articleId, pageSize: this.pageSize, pageNum: this.pageNum}).then(response => {
          this.comments = response.data.list
        })
      },
      handleSizeChange(val) {
        this.pageNum = 1
        this.pageSize = val
        this.getArticleCommentByPage()
      },
      handleCurrentChange(val) {
        this.pageNum = val
        this.getArticleCommentByPage()
      }
    }
  }
</script>

<style scoped lang="scss">
  .article-pagination {
    text-align: center;
    padding-bottom: 10px;
  }

  .comment-box {
    width: 1050px;
    margin: auto;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 0 10px;
    box-sizing: border-box;

    .comment-input-box {
      width: 1008px;
      margin: 0 auto 20px;
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


            .el-button--canel {
              background: #fff;
              border-color: #DCDFE6;
              color: #ad6598;
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
