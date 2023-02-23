export default {
  data() {
    return {
      paginationParams: {
        start: 1,
        limit: 10,
        totalNum: 0,
        pageSizes: [10, 20, 30, 40]
      },
      uploadFileOss: '/lejuAdmin/material/uploadFileOss'
    }
  }
}
