<template>
    <div class="header-function">
        
        <div class="search">
            <label for="" class="label">标题</label>
            <input type="text" placeholder="请输入标题">
            <el-button type="primary" :icon="Search">搜索</el-button>
        </div>
        <div class="main-function">
            <div class="four-function">
                <div class="left-function"><Increase></Increase></div>
                
                <el-button type="info" plain :icon="Edit">修改</el-button>
                <el-button type="danger" plain :icon="Delete">删除</el-button>
                <el-button type="success" plain :icon="SetUp">导出</el-button>
            </div>
            <div class="two-function">

                <el-tooltip
                    class="box-item"
                    effect="light"
                    content="隐藏搜索"
                    placement="top"
                >
                    <el-button :icon="Search" circle />
                </el-tooltip>
                <el-tooltip
                    class="box-item"
                    effect="light"
                    content="刷新列表"
                    placement="top"
                >
                    <el-button :icon="RefreshRight" circle />
                </el-tooltip>
                
                
            </div>
        </div>
    </div>
</template>

<script setup>
    import Increase from './Increase.vue'
    import { Plus, Edit,Delete,SetUp,Search,RefreshRight} from '@element-plus/icons-vue'
    import eventBus from '../utils/bus'
    import { nanoid } from 'nanoid'
    import {reactive, inject, ref} from 'vue'
    import { useRouter } from 'vue-router'
    import {useMainStore} from '../store/index.js'
    const store = useMainStore()

</script>

<style scoped>
    .header-function {
        margin: 30px 50px 30px 50px;
    }
    .search .label {
        font-size: 20px;
        font-weight: 600;
        color: black;
    }
    .search input {
        outline: none;
        height: 44px;
        margin: 0 20px;
        padding-left: 10px;
        border: 2px solid rgb(248,249,250);
    }
    .four-function {
        display: flex;
        justify-content: space-between;
    }
    .left-function {
        margin-right: 12px;
    }
    .main-function {
        margin: 50px 0;
        display: flex;
        justify-content: space-between;
    }
</style>