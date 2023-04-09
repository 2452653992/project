<template>
    <div class="increase">
        <div class="header">
            添加笔记
        </div>
        <div class="contain">
            <el-form :model="form" label-width="120px" inline="true">
                <el-form-item label="标题" :rules="[
                    { required: true, message: '必须有标题' }
                ]">
                    <el-input v-model="form.title" placeholder="请输入标题" />
                </el-form-item>
                <!-- 分类 -->
                <el-form-item label="分类" :rules="[
                    { required: true, message: '必须选择分类' }
                ]">
                    <el-select v-model="value" class="m-2" placeholder="请选择" size="default" >
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="状态">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="显示" />
                        <el-radio label="隐藏" />
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
                <el-form-item label="描述">
                    <el-input v-model="form.describe" maxlength="30" placeholder="请输入描述" show-word-limit type="textarea"
                        style="width: 600px; height: 50px;" />
                </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
                <el-form-item label="内容">
                    <el-input v-model="form.describe" placeholder="请输入内容" 
                        style="width: 1200px; height: 200px;" />
                </el-form-item>
            </el-form>
            <div class="confirm">
                
                <el-button style="float: right; margin-left: 25px;" size="large">取消</el-button>
                <el-button type="primary" @click="onSubmit" style="float: right;" size="large">上传</el-button>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
}
.increase {
    width: 100%;
    height: 100%;
    background-color: #fff;
}
.header {
    width: 100%;
    height: 15%;
    /* background-color: red; */
    font-size: 25px;
    font-weight: bold;
    margin-left: 5%;
    padding-top: 40px;
}
.contain {
    width: 100%;
    height: 85%;
    /* background-color: skyblue; */
    display: flex;
    margin-top: 20px;
    margin-left: 90px;
    flex-direction: column;
}
.confirm {
    width: 80%;
    height: 50px;
    /* background-color: red; */
}
</style>

<script setup>
import { reactive, ref } from 'vue'
// do not use same name with ref
const form = reactive({
    title: '',
    classify: '',
    resource: '',
    describe: ''
})
const value = ref('')
const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]
const onSubmit = () => {
    console.log('submit!')
}
</script>