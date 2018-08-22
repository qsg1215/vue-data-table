<template>
  <div>
    <el-table
      fit
      :data="newTableData"
      stripe
      border
      @select="selectHandle"
      @select-all="selectAllHandle"
      v-loading="loading"
      :row-class-name="tableRowClassName"
      :element-loading-text="tips"
      style="width: 100%">
        <el-table-column
                v-if="selectConfig.status"
                type="selection"
                label="全选"
                width="55">
        </el-table-column>
      <el-table-column
        align="center"
        v-for="(item,index) in tableFile"
        v-if="item.show"
        :key="index"
        :sortable="Boolean(item.sort)"
        :sort-method="sortFunc"
        :label="item.label"
        :show-overflow-tooltip="item.showTips"
        :width="item.width|| 'auto' ">
        <template slot-scope="scope">
          <img v-if="item.image" :src="dealFile(item.prop,scope.row)" alt="图片挂了" @error="replaceImg()" :style="item.image.style">
           <div v-else v-html="dealTableCloum(item,scope.row)" ></div>
        </template>
      </el-table-column>

      <el-table-column
        v-if="hasOpertion"
        align="center"
        label="操作"
        :width="operationCloumnWidth + 'px'"
      >
        <template slot-scope="scope">
          <slot name="operation"  :item="scope.row"></slot>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>
<script>
  import moment from 'moment'
  export default {
      props: {
          tabType: String,
          tableData: Array,
          tableFile: Array,
          loading:Boolean,
          operationCloumnWidth: Number,
          hasOpertion: {
              type: Boolean,
              default: function () {
                  return true
              }
          } ,
          tips: {
              type: String,
              default: function () {
                  return '努力加载中'
              }
          },
        selectConfig: Object
      },
    data() {
      return {
      }
    },
    created() {

    },
    methods: {
      // 处理字段
      dealFile(prop, row, noneStr) {
        var propArr = prop.split('.');
        var result = row
        for (var i = 0; i < propArr.length; i++) {
          if (result[propArr[i]] || result[propArr[i]] === 0) {
            result = result[propArr[i]]
          } else {
            result = noneStr
            break
          }
        }
        return result;
      },
      replaceImg() {
        var img = event.srcElement;
        img.src = 'https://myitsky.com/eror.jpg';
        img.onerror = null;
      },

      // 处理表格的字段处理
     dealTableCloum(tableCloumConfig, rowData){
          let noneStr = tableCloumConfig.noneStr || '-';
          let dealTableCloumResult = this.dealFile(tableCloumConfig.prop,rowData, noneStr )
          // 属性不存在 直接返回
          if (noneStr ===  dealTableCloumResult) {
              return dealTableCloumResult
          }

          // 时间格式化
          if (tableCloumConfig.time) {
              let format = tableCloumConfig.time.formate ? tableCloumConfig.time.formate: 'YYYY-MM-DD HH:mm:ss'
              return  moment(dealTableCloumResult * 1000).format(format)
          }

          // 价格格式化
         if (tableCloumConfig.price) {
             return Number(dealTableCloumResult).toFixed(2)

         }

         if (tableCloumConfig.filter) {
             return tableCloumConfig.filter(dealTableCloumResult,  rowData)
         }
         return dealTableCloumResult
     },

      tableRowClassName({ row, rowIndex }) {
        if (row.isOverTime === 1) {
          return 'success-row';
        } else {
          return '';
        }
      },

      selectHandle(selection, row) {
        this.selectConfig.rowSelectChangeHandle(selection, row)
      },
      selectAllHandle(selection) {
        this.selectConfig.allSelectChangeHandle(selection)
      },
      sortFunc(a, b) {

        //TODO 还没有写完每一列的排序函数如何暴露在外面
        console.log(a, b, '哈哈哈')
      }
    },
    computed: {
          newTableData: function () {
              return this.tableData.map(item => { item.checked = false; return item;})
          }
    }
  }
</script>
<style>
  .el-table .success-row {
    background: #ff7c68;
  }
</style>

