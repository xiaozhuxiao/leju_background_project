<template>
  <div class="article-main">
    <el-card shadow="never" class="box-card margin-30">
      <div slot="header" class="clearfix">
        <span>条件查询</span>
      </div>
      <el-form :inline="true" :model="searchArticleForm" label-width="80px">
        <el-row :gutter="20">
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
          <el-col :span="6">
            <el-form-item label="编辑类型">
              <!-- editorType (integer, optional): 编辑器类型: 0 富文本; 1 markdown , -->
              <el-select v-model="searchArticleForm.editorType" placeholder="编辑类型">
                <el-option label="富文本" :value="0"></el-option>
                <el-option label="MarkDown" :value="1"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :offset="18">
            <el-form-item>
              <el-button @click="resetForm" size="mini">重置</el-button>
              <el-button type="primary" @click="searchArticle" size="mini">搜索</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <!-- 文章列表 -->
      <el-card shadow="neveralwys" class="margin-30">
        <div slot="header">
          <el-button type="primary" size="mini">新增</el-button>
        </div>
        <el-table :data="articleList" border style="width: 100%" stripe>
          <el-table-column fixed prop="date" label="#" width="80" align="center"> </el-table-column>
          <el-table-column prop="title" label="文章标题" width="300" align="center"> </el-table-column>
          <el-table-column prop="coverImg" label="展示图片" width="200" align="center"> </el-table-column>
          <el-table-column prop="createTime" label="添加时间" width="300" align="center"> </el-table-column>
          <el-table-column prop="author" label="文章作者" width="200" align="center"> </el-table-column>
          <el-table-column prop="zip" label="文章是否展示" width="120" align="center">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.isShow" :active-value="1" :inactive-value="0"> </el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="editortype" label="编辑器类型" width="120" align="center"> </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">编辑文章</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-card>
  </div>
</template>

<script>
import { findArticles } from '@/api/content/article.js'
export default {
  data() {
    return {
      searchArticleForm: {},
      articleList: []
    }
  },
  created() {
    this.getArticleList()
  },
  methods: {
    // 重置表单
    resetForm() {
      console.log('submit!')
    },
    // 搜索文章
    searchArticle() {
      console.log('submit!')
    },
    // 获取文章列表
    getArticleList() {
      findArticles(1, 10).then((res) => {
        console.log(res)
        const { success, data, message } = res
        if (success) {
          const { rows, total } = data
          this.articleList = rows
          console.log(total)
        } else {
          this.$message.error(message)
        }
      })
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
