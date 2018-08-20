<template>
  <div :style="{'textAlign': position}">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="limit"
      :layout="layout.join(',')"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: ['total', 'currentPageNumber'],
    props: {
        total: {
            type: Number,
            default: function () {
                return 0
            }
        },
        currentPageNumber:{
            type: Number,
            default: function () {
                return 0
            }
        },
        layout: {
            type: Array,
            default: function () {
                return ['total', 'sizes', 'prev', 'pager', 'next', 'jumper']
            }
        },
        pageSizes: {
            type: Array,
            default: function () {
                return [10, 20, 30]
            }
        },
        position: {
            type: String,
            default: function () {
                return 'left'
            }
        }
    },
  data() {
    return {
      start: 0,
      currentPage: this.currentPageNumber,
      limit: this.pageSizes[0],
    }
  },
  created() {

  },
  methods: {
    handleSizeChange(pageSize) {
        //当前页重置到第一页,避免分页混乱
        this.limit = pageSize;
        this.start = 0
        this.currentPage = 1;
        this.$emit('pingationChange', {
            start: this.start,
            limit: pageSize,
            currentPageNumber: 1
        })
    },
    handleCurrentChange(currentPage) {
        this.currentPage = currentPage;
        this.start = this.limit * (this.currentPage - 1)
        this.$emit('pingationChange', {
            start: this.start,
            limit: this.limit,
            currentPageNumber: currentPage
        })
    }
  }
}
</script>
