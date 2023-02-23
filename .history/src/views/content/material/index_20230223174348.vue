<template>
  <div class="material-main">
    <el-card shadow="always" class="box-card margin-30">
      <div slot="header">
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
      <!-- card body -->
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.material-main {
  .margin-30 {
    margin: 30px;
  }
}
</style>
