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
              <el-input v-model="searchArticleForm.author" placeholder="作者"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="标题">
              <el-input v-model="searchArticleForm.title" placeholder="标题" clearable></el-input>
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
    </el-card>

    <!-- 文章列表 -->
    <el-card shadow="neveralwys" class="margin-30">
      <div slot="header">
        <el-button type="primary" size="mini">新增</el-button>
      </div>
      <el-table v-loading="loading" :data="articleList" border style="width: 100%" stripe>
        <el-table-column fixed type="index" label="#" width="80" align="center"> </el-table-column>
        <el-table-column prop="title" label="文章标题" width="200" align="center"> </el-table-column>
        <el-table-column label="展示图片" width="200" align="center">
          <template slot-scope="scope">
            <img width="100" height="100" :src="scope.row.coverImg" alt="" />
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="添加时间" width="300" align="center"> </el-table-column>
        <el-table-column prop="author" label="文章作者" width="200" align="center"> </el-table-column>
        <el-table-column prop="zip" label="文章是否展示" width="200" align="center">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.isShow" :active-value="1" :inactive-value="0"> </el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="editorType" label="编辑器类型" width="200" align="center">
          <template slot-scope="scope">
            <el-button v-if="scope.row.editorType == 0" type="primary" plain size="small">富文本</el-button>
            <el-button v-if="scope.row.editorType == 1" type="success" plain size="small">markdown</el-button>
          </template>
        </el-table-column>
        <el-table-column fixed="right" width="200" label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" icon="el-icon-view" type="text" size="small">编辑文章</el-button>
            <el-button type="text" size="small" style="color: red">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="paginationParams.start"
        :page-sizes="paginationParams.pageSizes"
        :page-size="paginationParams.limit"
        layout="total, sizes, prev, pager, next, jumper"
        :total="paginationParams.totalNum"
        style="margin-top: 30px; text-align: right"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import { findArticles as findArticlesApi } from '@/api/content/article'
export default {
  data() {
    return {
      searchArticleForm: {},
      articleList: [],
      loading: false,
      clearable: true
    }
  },
  created() {
    this.getArticleList()
  },
  methods: {
    // 重置表单
    resetForm() {
      this.start = 1
      this.searchArticleForm = {}
      this.getArticleList()
    },
    // 搜索文章
    searchArticle() {
      // 重置页码
      this.start = 1
      // console.log(this.searchArticleForm)
      this.getArticleList()
    },
    // 获取文章列表
    getArticleList() {
      this.loading = true
      let searchObj = {}
      for (const key in this.searchArticleForm) {
        if (this.searchArticleForm[key] !== '') {
          searchObj[key] = this.searchArticleForm[key]
        }
      }
      findArticlesApi(this.start, this.limit, searchObj).then((res) => {
        console.log(res)
        const { success, data, message } = res
        if (success) {
          const { rows, total } = data
          this.articleList = rows
          this.paginationParams.totalNum = total
        } else {
          this.$message.error(message)
        }
        this.loading = false
      })
    },
    handleSizeChange(e) {
      this.start = 1
      this.limit = e
      this.getArticleList()
    },
    // 当前页码发生改变触发
    handleCurrentChange(e) {
      this.start = e
      this.getArticleList()
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
