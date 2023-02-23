<template>
  <div class="article-detail-main">
    <el-card class="margin-30">
      <div slot="header">
        <span>新增文章</span>
      </div>
      <el-form :model="article" ref="articleForm" :rules="rules" label-width="80px" size="normal">
        <el-row :gutter="20">
          <el-col :span="6" :offset="0">
            <el-form-item label="作者">
              <el-input v-model="article.author"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6" :offset="0">
            <el-form-item label="标题">
              <el-input v-model="article.title"></el-input>
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
              <el-input type="textarea" v-model="article.summary"></el-input>
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
  data() {
    return {
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
