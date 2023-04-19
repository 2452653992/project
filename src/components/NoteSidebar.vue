<template>
    <div class="sidebar">
        <div class="sidebar-header">
            <el-icon><Location /></el-icon>
            <span>笔记分类</span>
            <div class="two-icon-header">
                <el-button link class="sidebar-icon" >
                    <el-icon><Plus /></el-icon>
                </el-button>
                <el-button link class="sidebar-icon">
                    <el-icon><ArrowDown /></el-icon>
                </el-button></div>
            </div>
        <ul class="sidebar-content">
            <li>
                <span> JavaScript </span>
                <el-button link class="sidebar-icon">
                    <el-icon ><Delete /></el-icon>
                </el-button>
            </li>
            <li>
                <span> JavaScript </span>
                <el-button link class="sidebar-icon">
                    <el-icon ><Delete /></el-icon>
                </el-button>
            </li>
        </ul>
    </div>

</template>

<script setup>
    
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
    }

    .sidebar-header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 50px;
        font-size: 16px ;
        font-weight: 550;
        border-bottom: 1px solid #ccc;
    }

    .sidebar-content {
        display: flex;
        flex-direction: column;
        margin-right: 10px;
    }

    .sidebar-content li {
        display: flex;
        justify-content: space-around;
        height: 36px;
        line-height: 36px;
        font-size: 16px;
        font-weight: 550;
        color: #333;
        padding:5 0px;
    }

</style>