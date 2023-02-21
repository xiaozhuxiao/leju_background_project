<template>
  <div class="article-main">
    <el-card class="box-card margin-30">
      <div slot="header" class="clearfix">
        <span>条件查询</span>
      </div>
      <div>
        <el-form :inline="true" :model="searchArticleForm" class="demo-form-inline">
          <el-row>
            <el-col :span="6">
              <el-form-item label="作者">
                <el-input v-model="searchArticleForm.title" placeholder="作者"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="标题">
                <el-input v-model="searchArticleForm.author" placeholder="标题"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item label="编辑类型">
            <!-- editorType (integer, optional): 编辑器类型: 0 富文本; 1 markdown , -->
            <el-select v-model="searchArticleForm.editorType" placeholder="编辑类型">
              <el-option label="富文本" :value="0"></el-option>
              <el-option label="MarkDown" :value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchArticleForm: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss" scoped>
.article-main {
  .margin-30 {
    margin: 30px;
  }
}
</style>
