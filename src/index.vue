<template>
    <div >
        <div style="margin: 10px;">
            <div style="display: flex;">
                <div style="width: 75%;">

                </div>
                <div  style="width:25%;">
                    <el-input clearable :placeholder="searchConfig.searchplaceHolder" v-model="searchConfig.keyWords" class="input-with-select">
                        <el-button @click.enter="searchConfig.handle(searchConfig.keyWords,tableData )" slot="append" :icon="searchConfig.icon">{{searchConfig.text}}</el-button>
                    </el-input>
                </div>
            </div>
        </div>
        <TableArea
                :tableData="tableData"
                :tableFile="tableFile"
                :select="select"
                :operationCloumnWidth="350"
        >
            <template slot="operation" slot-scope="operation" >
                <el-button
                        :key="index"
                        v-for="(item, index) in operationBtn"
                        :class="item.className"
                        :plain="item.shape === 'plain'"
                        :round="item.shape === 'round'"
                        :circle="item.shape === 'circle'"
                        :size="item.size"
                        :icon="item.icon"
                        :type="item.typeColor"
                        @click="item.handler(operation.item)"
                >{{item.value}}</el-button>
            </template>
        </TableArea>
        <Pingination
                ref="pingination"
                style="margin-top: 20px;"
                :total="tableData.length"
                :currentPageNumber="1"
                :position="'right'"
                :layout="pingation.layout"
                @pingationChange="pingationChangeHandle"
        ></Pingination>
    </div>
</template>
<script>
    import TableArea from './content/mainTable.vue'
    import Pingination from './content/pingination.vue'
    export default {
        name: 'vue-data-table',
        components: {TableArea,  Pingination},
        props: {
            config: {
                type: Object,
                default: function() {
                   return  {
                       tableData: [],
                       tableFile: [],
                       operationBtn: [ ],
                       total:0,
                       keyWords: '',
                       searchConfig: {
                         searchplaceHolder: '请输入关键字',
                         icon: 'el-icon-search',
                         text: '搜搜',
                         handle(keyWords, tableData){
                            console.log(keyWords, tableData)
                         }
                       }
                    }
                }
            }
        },
        data() {
            return this.config
        },
        mounted() {

        },
        methods: {
            pingationChangeHandle(data) {
                this.pingation.handle(data)
            }
        }
    }
</script>
<style scoped >
    .success{
        background-color: red;
    }
</style>
