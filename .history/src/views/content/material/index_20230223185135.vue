<template>
  <div class="material-main">
    <el-card shadow="always" class="box-card margin-30">
      <div slot="header">
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>

      
        <el-row>
          <div slot="header" class="clearfix">
          <span>创建时间</span>
          <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
        </div>
          <el-col>
            <el-card :body-style="{ padding: '0px' }">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" />
              <div style="padding: 14px">
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="danger" style="float: right; padding: 10px 30px" size="mini">删除</el-button>
                </div>
              </div>

          </el-col>
        </el-row>
      </el-card>
    </el-card>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="400" class="pagination"> </el-pagination>
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
  .pagination {
    margin: 30px;
  }
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}
</style>
