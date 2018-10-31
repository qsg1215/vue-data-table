#这个是一个基于ElementUI 2.4.2 和Vue 2.0 的table组件

## contact me at weichat qsg1215

##  Introduction





##  DEMO 做了一些更爱 测试暂存区域


##  NPM

```html
    npm install vue-el-table
```

##  ES6

```html

//局部注册
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
        }
</script>

//全局注册
new Vue({
  components: {
    VueElTable
  }
})


```

```配置对象
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
                     // 表格数据
                    tableData: [
                    {
                        name:'chen',
                        age: 12,
                        birthday: 1534956821,
                        rich: 3,
                        avtar: 'https://myitsky.com/eror.jpg',
                        address: {
                          lat: '123456'
                        }
                    },
                    {
                        name:'chen1',
                        age: 13,
                        birthday: 1534956934,
                        rich: 4,
                        avtar: 'https://myitsky.com/eror.jpg',
                        address: {
                           lat: '123456'
                        }
                    }
                    ],
                      // 表格字段配置
                    tableFile: [
                        {
                            prop: 'name',  //字段名称,
                            label: '姓名', //表格标题
                            show: true,  // 是否展示
                            showTips: true,  // 超出列宽时是否show tips
                            noneStr: '没有数据',  //子段不存在填充的内容
                            filter(value, rowData ){  // 自定义填充内容, 支持返回HTML结构
                                return 'hello' +  rowData.age
                            }

                        },
                        {
                            prop: 'address.lat', // 多级属性支持
                            label: '纬度',
                            show: true,
                            price: true,
                            showTips: true,
                            noneStr: '没有数据'

                        },
                        {
                            prop: 'age',
                            label: '年龄',
                            show: true,
                            showTips: true,
                            noneStr: '没有数据',
                            sort: {
                              order: 'desc'  // 排序
                            }

                        },
                        {
                            prop: 'birthday',
                            label: '生日',
                            show: true,
                            showTips: true,
                            noneStr: '没有数据',
                            time: {
                              formate: 'YYYY-MM-DD HH:mm' //时间个话可以配置格式,不设格式时,设置value 为true { time: true }
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
                                },
                                //图片个话可以配置行内样式,不设格式时,设置value 为true { image: true }

                            },
                            noneStr: '没有数据'

                        }
                    ],
                    operationBtn: [
                        {
                            icon: 'el-icon-edit',  //图标 ,支持iconfont
                            typeColor: 'primary',  //button 类型
                            value: '测试',  //button 文案
                            handler(rowData) {
                                console.log(rowData)  //事件回调
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
                        searchplaceHolder: '请输入关键字', //搜索栏的placeholder
                        icon: 'el-icon-search', //搜索栏图标
                        text: '搜索', //搜索文案
                        keyWords: '',
                        handle(keyWords, tableData){
                            console.log(keyWords, tableData)  //搜索点击事件回调
                        }
                    },
                    pingation:{
                        handle(data){
                           console.log(data, '分页数据') //分页事件回调
                        },
                        layout: ['total', 'sizes', 'prev', 'pager', 'next', 'jumper']   //分页样式
                    }
                  }
                }
```


**scope** be replaced in the **vue@2.5.0+** , over **vue@2.5.0+** use **slot-scope**

## License

Licensed under the [MIT license](https://opensource.org/licenses/mit-license.php).
