<template>
  <div v-loading="pageLoading" :element-loading-text="loadingOption.text" :element-loading-spinner="loadingOption.spinner" :element-loading-background="loadingOption.background" class="category_main">
    <el-card shadow="never" class="card">
      <div slot="header">
        <el-upload ref="materialUpload" class="upload-demo" action="/lejuAdmin/material/uploadFileOssSave" :headers="headers" :on-success="handleUploadSucc">
          <el-button size="small" type="primary">点击上传素材</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
      <el-row :gutter="20">
        <el-col v-for="item in materialList" :key="item.id" style="margin-bottom: 20px; width: 20%">
          <el-card shadow="always">
            <div slot="header">
              <!-- <span class="materil_text">{{ item.ossFile }}</span> -->
              <span class="materil_text"> 创建时间:{{ item.createTime }}</span>
            </div>
            <el-image :preview-src-list="imgList" style="width: 100%; height: 250px" :src="item.ossUrl" alt="" />
            <!-- <img :preview-src-list="imgList" style="width: 100%; height: 250px" :src="item.ossUrl" alt=""> -->
            <div class="flexRight">
              <el-button type="danger" size="mini" style="width: 90px; margin-top: 20px" @click="goDel(item.id)">刪除</el-button>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
    <el-pagination :current-page="page.currentPage" :page-sizes="page.pageSizes" :page-size="page.size" layout="total, sizes, prev, pager, next, jumper" :total="page.total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
  </div>
</template>

<script>
import { uploadFileOssSave } from '@/api/content/material'
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.category_main {
  min-height: 1000px;
  .card {
    margin: 30px;
  }
  .materil_text {
    font-size: 14px;
  }
  .flexRight {
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
