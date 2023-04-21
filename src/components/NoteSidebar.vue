<template>
    <div>
        <!-- default-active="2" -->
        <el-menu active-text-color="blue" class="el-menu-vertical-demo menu" text-color="#333" :default-openeds="openeds"
        background-color="transparent">
            <el-sub-menu index="1">
                <template #title>
                    
                            <el-icon>
                                <location />
                            </el-icon>
                            <span style="marginLeft:35px;fontSize:20px;fontWeight:500">笔记分类</span>
                            
                            <el-button text @click="addMenuItem()">
                                <el-icon>
                                    <Plus />
                                </el-icon>
                            </el-button>
                      
                        
                    <el-dialog v-model="dialogFormVisible" title="新建分类">
                        <el-form :model="form">
                            <el-form-item label="分类名称" :label-width="formLabelWidth">
                                
                                <el-input v-model="form.name" autocomplete="off" autofocus />
                            </el-form-item>
                        </el-form>

                        <template #footer>
                            <span class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">取消</el-button>
                                
                                <el-button type="primary" @click="subMenuItem()">
                                    创建
                                </el-button>
                            </span>
                        </template>
                    </el-dialog>

                </template>
                
                <!-- <el-menu-item v-for="menuItem in store.MenuItems" :key="menuItem.id"
                    @click="changeFilterType(menuItem.name)" class="a">
                    <span style="width:170px;textAlign:left">{{ menuItem.name }} </span>
                    <el-icon @click="handleDelMenu(menuItem.id)">
                        <Delete />
                    </el-icon>
                </el-menu-item> -->
                <li class="a">无分类</li>
                <el-menu-item v-for="menuItem in store.MenuItems" :key="menuItem.id"
                    @click="changeFilterType(menuItem.name)" class="a">
                    <span style="width:170px;textAlign:left">{{ menuItem.name }} </span>
                    <el-icon @click="handleDelMenu(menuItem.id)">
                        <Delete />
                    </el-icon>
                </el-menu-item>
            </el-sub-menu>

        </el-menu>
    </div>
</template>

<script setup>

import { nanoid } from 'nanoid'
import { reactive, ref, inject, onMounted } from 'vue'
import { useMainStore } from '../store/index'
import { useRouter } from 'vue-router'
import eventBus from '../utils/bus'

const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const $router = useRouter()
const store = useMainStore()
const openeds = ['1']
const form = reactive({
    name: '',
    id: ''
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
    form.name = ''
}
const handleDelMenu = (Id) => {
    if (confirm('将永久删除此分类，你将无法撤销此操作')) {
        store.MenuItems = store.MenuItems.filter((menuItem) => {
            return Id !== menuItem.id
        })
    }

}

//改变分类
const changeFilterType = (FilterType) => {
    console.log(FilterType)
    store.changeFilters(FilterType)
}
//清除分类
const clearFilterType = () => {
    store.clearFilters()
}


</script>

<style scoped>
/* .sidebar {
        display: flex;
        flex-direction: column;
        width: 250px;
        height: 100%;
        border-right: 1px #eff1f4 solid;
        background-color: #ffffff;
        color: #333;
        text-align: center;
    } */
.menu {
    padding: 10px;
    width: 320px;
    background: rgb(225 225 225 / 24%);
    box-shadow: 0 8px 32px 0 rgb(0 0 0/37%);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(225, 225, 225, 0.18);
    display: grid;
    text-align: center;

}
.a {
    text-decoration: none;
    margin-top: 2px;
    margin-bottom: 10px;
    color: black;
    width: 100%;
    background: rgba(255,255,255,0.2);
    transition: 0.2s;
}
.div {
    margin: 0.2em;
}

.a:hover{
    background: rgba(225,225,225,0.5);
    transform: scale(1.1);
    box-shadow: 0 8px 32px 0 rgb(0 0 0/37%);
    color: #fff;
}
.el-menu ul{
    background-color: transparent;
}
</style>