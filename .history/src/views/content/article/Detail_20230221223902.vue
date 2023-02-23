<template>
  <div class="article-detail-main">
    <el-card shadow="never" class="margin-30">
      <div slot="header">
        <span>新增文章</span>
      </div>
      <el-form :model="article" ref="articleForm" :rules="rules" label-width="80px" size="normal">
        <el-row :gutter="20">
          <el-col :span="6" :offset="0">
            <el-form-item label="作者">
              <el-input v-model="article.author" placeholder="作者姓名"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6" :offset="0">
            <el-form-item label="标题">
              <el-input v-model="article.title" placeholder="文章标题"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="0">
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
              <el-upload action="https://jsonplaceholder.typicode.com/posts/"
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="13" :offset="0">
            <el-form-item label="切换富文本类型">
               <el-radio v-model="radio" label="1">备选项</el-radio>
  <el-radio v-model="radio" label="2">备选项</el-radio>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ArtileDetail',
  mixins: [],
  data() {
    return {
      article: [],
      rules: []
    }
  }
}
</script>

<style lang="scss" scoped>
.article-detail-main {
  .margin-30 {
    margin: 30px;
  }
}
</style>
