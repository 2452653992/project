<template>
  <div class="header">
        <div class="logo">
            <span>
                <el-icon style="width: 36px; height: 36px; margin-right: 8px" size="36"><MostlyCloudy /></el-icon>
                <p>云端笔记</p>
            </span>
        </div>
        <div class="login_status">
            <el-icon style="width: 36px; height: 36px; margin-right: 8px" size="33"><User /></el-icon>
            <el-icon style="width: 36px; height: 36px; margin-right: 8px" size="33"><ArrowDown /></el-icon>
        </div>
  </div>
</template>


<style>
    .header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 83px;
        
        border: 1px solid rgb(205,205,205);
    }
    .logo {
        width: 285px;
        height: 100%;
        padding: 20px 40px;
        background-color: rgb(48,65,86);
    }
    .logo span {
        display: flex;
        align-items: center;
        height: 36px;
        line-height: 20px;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
    }
    .login_status {
        display: flex;
        align-items: center;
        height: 100%;


    }
</style>