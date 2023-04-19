<template>
    <div class="sidebar">
        <!-- default-active="2" -->
        <el-menu
            active-text-color="blue"
            class="el-menu-vertical-demo"
            text-color="#333"
            :default-openeds="openeds"
        >
            <el-sub-menu index="1">
                <template #title >
                    <el-icon><location /></el-icon>
                    <span style="marginLeft:35px;fontSize:20px;fontWeight:500">笔记分类</span>
                    <!-- 增加按钮 -->
                    <el-button text @click="addMenuItem()">
                        <el-icon><Plus /></el-icon> 
                    </el-button>
                    <!-- 弹出对话框 -->
                    <!-- v-model="" -->
                    <el-dialog  v-model="dialogFormVisible" title="新建分类">
                        <el-form :model="form">
                        <el-form-item label="分类名称" :label-width="formLabelWidth">
                            <!-- 绑定name值 -->
                            <el-input v-model="form.name" autocomplete="off" autofocus />
                        </el-form-item>
                        </el-form>

                        <template #footer>
                        <span class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取消</el-button>
                            <!-- 提交表单 -->
                            <el-button type="primary" @click="subMenuItem()">
                            创建
                            </el-button>
                        </span>
                        </template>
                    </el-dialog>

                </template>
                <!-- 使用的数据是store的 -->
                <el-menu-item index="2" v-for="menuItem in store.MenuItems" :key="menuItem.id">
                    <span style="width:170px;textAlign:left">{{menuItem.name}} </span>
                    <el-icon @click="handleDelMenu(menuItem.id)"><Delete /></el-icon>
                </el-menu-item>
                <!-- <el-menu-item index="3">
                    <span style="width:170px;textAlign:left">vue </span>
                    <el-icon><Delete /></el-icon>
                </el-menu-item> -->
            </el-sub-menu>
            
        </el-menu>
    </div>

</template>

<script setup>

import { nanoid } from 'nanoid'
import { reactive, ref, inject,onMounted} from 'vue'
import {useMainStore} from '../store/index'
import { useRouter } from 'vue-router'
import eventBus from '../utils/bus'

const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const $router = useRouter()
const store = useMainStore()

const form = reactive({
    name: '',
    id:''
})


const addMenuItem = () => {
    dialogFormVisible.value = true;
}
const subMenuItem = () => {
    console.log('submitmenu!')
    store.addMenu(form)
    // 关闭对话框
    dialogFormVisible.value = false;
    // 清空下一次内容
    form.name=''
}
const handleDelMenu = (Id)=> {
    if(confirm('将永久删除此分类，你将无法撤销此操作')){
            store.MenuItems = store.MenuItems.filter((menuItem)=>{
            return Id !== menuItem.id
        })
    }
    
}

</script>

<style scoped>
    .sidebar {
        display: flex;
        flex-direction: column;
        width: 250px;
        height: 100%;
        border-right: 1px #eff1f4 solid;
        background-color: #ffffff;
        color: #333;
        text-align: center;
    }
    .el-menu-item {
        /* display: flex; */
        justify-content: space-around;
    }
    
    
</style>