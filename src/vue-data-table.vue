<template>
    <div >
        <VueDataTable :config="config" ></VueDataTable>
    </div>
</template>
<script>
    import VueDataTable from './index.vue'
    export default {
        name: 'vue-data-table',
        components: {VueDataTable},
        props: {

        },
        data() {
            return {
                config: {
                    select: {
                      // 是否支持选择项
                      status: true,
                      // 选中项改变 事件回调
                      rowSelectChangeHandle(selectedRow, row) {
                         console.log(selectedRow, row, '子组件来得数据')
                      },

                      // 全选事件回调
                      allSelectChangeHandle(selectedRow) {
                        console.log(selectedRow, '子组件来得数据')
                      }
                    },
                    tableData: [
                    {
                        name:'chen',
                        age: 12,
                        birthday: 1534956821,
                        rich: 3,
                        avtar: 'https://myitsky.com/eror.jpg'
                    },
                    {
                        name:'chen1',
                        age: 13,
                        birthday: 1534956934,
                        rich: 4,
                        avtar: 'https://myitsky.com/eror.jpg'
                    }
                    ],
                    tableFile: [
                        {
                            prop: 'name',
                            label: '姓名',
                            show: true,
                            showTips: true,
                            noneStr: '没有数据',
                            filter(value, rowData ){
                                return 'hello' +  rowData.age
                            }

                        },
                        {
                            prop: 'age',
                            label: '年龄',
                            show: true,
                            showTips: true,
                            noneStr: '没有数据',
                            sort: {
                              order: 'desc'
                            }

                        },
                        {
                            prop: 'birthday',
                            label: '生日',
                            show: true,
                            showTips: true,
                            noneStr: '没有数据',
                            time: {
                              formate: 'YYYY-MM-DD HH:mm'
                            },
                            sort: {
                                order: 'desc',
                                sortHandle(a, b){
                                  return -1
                                }
                             }

                        },
                        {
                            prop: 'rich',
                            label: '财富',
                            show: true,
                            price: true,
                            showTips: true,
                            noneStr: '没有数据'

                        },
                        {
                            prop: 'avtar',
                            label: '头像',
                            show: true,
                            showTips: true,
                            image: {
                                style: {
                                    border: '1px solid red',
                                    borderRadius: '4px',
                                    height: '100px',
                                    width: '100px'
                                }

                            },
                            noneStr: '没有数据'

                        }
                    ],
                    operationBtn: [
                        {
                            icon: 'el-icon-edit',
                            typeColor: 'primary',
                            value: '测试',
                            handler(rowData) {
                                console.log(rowData)
                            }
                        },
                        {
                            icon: 'el-icon-delete',
                            typeColor: 'danger',
                            value: '删除',
                            handler(rowData) {
                                console.log(rowData)
                            }
                        }
                    ],
                    searchConfig: {
                        searchplaceHolder: '请输入关键字',
                        icon: 'el-icon-search',
                        text: '搜索',
                        keyWords: '',
                        handle(keyWords, tableData){
                            console.log(keyWords, tableData)
                        }
                    },
                    pingation:{
                        handle(data){
                           console.log(data, '分页数据')
                        },
                        layout: ['total', 'sizes', 'prev', 'pager', 'next', 'jumper']
                    }
                  }
                }
       },
        methods: {

        }
    }
</script>
<style scoped >

</style>
