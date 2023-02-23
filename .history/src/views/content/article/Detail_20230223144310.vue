<template>
  <div class="article-detail-main">
    <el-card shadow="never" class="margin-30">
      <div slot="header">
        <span>新增文章</span>
      </div>
      <el-form :model="article" ref="articleForm" :rules="rules" label-width="120px" size="mini">
        <el-row :gutter="20">
          <el-col :span="6" :offset="0">
            <el-form-item label="作者" prop="author">
              <el-input v-model="article.author" placeholder="作者姓名"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6" :offset="0">
            <el-form-item label="标题" prop="title">
              <el-input v-model="article.title" placeholder="文章标题"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="0" prop="isShow">
            <el-form-item label="是否显示">
              <el-switch v-model="article.isShow" :active-value="1" :inactive-value="0"> </el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="13" :offset="0">
            <el-form-item label="摘要">
              <el-input type="textarea" v-model="article.summary" rows="3" placeholder="摘要"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="13" :offset="0">
            <el-form-item label="封面图片">
              <el-upload ref="uploadCom" :action="uploadFileOss" :headers="token" :on-success="coverImgUplaodSucc" :before-upload="beforeCoverImgUpload">
                <img width="100" height="100" v-if="article.coverImg" :src="article.coverImg" alt="" />
                <el-button v-else size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过1.5MB</div>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="13" :offset="0">
            <el-form-item label="切换富文本类型">
              <!-- editorType (integer, optional): 编辑器类型: 0 富文本; 1 markdown , -->
              <el-radio v-model="article.editorType" :label="0" @change="editorChange">富文本</el-radio>
              <el-radio v-model="article.editorType" :label="1" @change="editorChange">markdown</el-radio>
              <span style="color: #e6a23c"> <i class="el-icon-warning"></i> 注意！切换编辑器会清空编辑内容</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24" :offset="0">
            <Tinymce v-if="article.editorType == '0'" v-model="article.content1" />
            <mavon-editor @imgAdd="$imgAdd" v-if="article.editorType == '1'" v-model="article.content1" />
          </el-col>
        </el-row>

        <el-form-item label-width="0px" style="margin: 20px 0">
          <el-button type="primary" @click="addArticle">立即新增</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import { addArticle as addArticleApi } from '@/api/content/article'
import mix from '@/mixins/index'
export default {
  name: 'ArtileDetail',
  mixins: [mix],
  components: {
    Tinymce
  },
  data() {
    return {
      article: {
        editorType: 0,
        coverImg: '',
        isShow: 1
      },
      rules: {
        author: [{ required: true, message: '请输入作者姓名', trigger: 'blur' }],
        title: [{ required: true, message: '请输入文章标题', trigger: 'blur' }]
      }
    }
  },
  created() {},
  methods: {
    // 绑定@imgAdd event
    $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData()
      formdata.append('image', $file)
      axios({
        url: 'server url',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then((url) => {
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        /**
         * $vm 指为mavonEditor实例，可以通过如下两种方式获取
         * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
         * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
         */
        $vm.$img2Url(pos, url)
      })
    },
    // 编辑器类型发生改变
    editorChange() {
      this.article.content1 = ''
    },
    // 封面图片上传前的校验
    beforeCoverImgUpload(file) {
      // const isJPG = file.type === 'image/jpeg' || file.type === 'image/png' ||file.type === 'image/gif'
      const reg = /^image\/(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif)$/
      const isImg = reg.test(file.type)
      const isLt1dot5M = file.size / 1024 / 1024 < 1.5

      if (!isImg) {
        this.$message.error('上传头像图片只能是 gif|png|jpg|jpeg|webp|svg|psd|bmp|tif 格式!')
      }
      if (!isLt1dot5M) {
        this.$message.error('上传头像图片大小不能超过 1.5MB!')
      }
      return isImg && isLt1dot5M
    },
    // 封面图片上传成功
    coverImgUplaodSucc(response) {
      const { success, data, message } = response
      if (success) {
        this.article.coverImg = data.fileUrl
        // 清除文件列表
        this.$refs.uploadCom.clearFiles()
      } else {
        this.$message.error(message)
      }
    },
    addArticle() {
      this.$refs.articleForm.validate((valid) => {
        if (valid) {
          // 富文本转换后的 HTML 和原文一样
          this.article.content = this.article.content1
          // 校验成功
          addArticleApi(this.article).then((res) => {
            const { success, message } = res
            if (success) {
              // 跳转文章列表页面
              this.$router.push({ name: 'Article' })
            } else {
              this.$message.error(message)
            }
          })
        } else {
          this.$message.error('请注意表单验证！！！')
          return false
        }
      })
    }
  },
  method() {}
}
</script>

<style lang="scss" scoped>
.article-detail-main {
  .margin-30 {
    margin: 30px;
  }
}
</style>
