<template>
  <div class="article-main">
    <el-card class="box-card margin-30">
      <div slot="header" class="clearfix">
        <span>条件查询</span>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{ '列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
