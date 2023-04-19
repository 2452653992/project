<template>
    <div class="note">
        <el-table ref="multipleTableRef" 
        :data="store.notes" 
        style="width: 100%" 
        @selection-change="handleSelectionChange" 
        :table-layout="tableLayout"
        >
            <el-table-column type="selection" width="55" />
            <el-table-column prop="title" label="标题" width="180" />
            <el-table-column prop="classification" label="分类" width="180" />
            <el-table-column prop="createTime" label="创建时间" />
            <el-table-column prop="status" label="状态">
                <el-switch v-model="value1" />
            </el-table-column>
            <el-table-column  label="操作">
                <template #default="scope">
                    <el-button type="primary" :icon="Edit" size="small" plain text>修改</el-button>
                    <el-button type="primary" :icon="Delete" size="small" plain text @click.prevent="deleteRow(scope.$index)">删除</el-button>
                </template>
            </el-table-column>

        </el-table>
    </div>
</template>

<style scoped></style>


<script setup>
import { ref, reactive } from 'vue'
import { Delete, Edit, } from '@element-plus/icons-vue'
import { useMainStore } from '../store/index'
import dayjs from 'dayjs'
const now = new Date()
const tableLayout = ref('auto')
const value1 = ref(true)

const store = useMainStore()



const multipleTableRef = ref()
const multipleSelection = ref([])
const handleSelectionChange = (val) => {
    multipleSelection.value = val
}
// const tableData = ref([
    
// ])

const deleteRow = (index) => {
    tableData.value.splice(index, 1)
}

// const onAddItem = () => {
//     now.setDate(now.getDate() + 1)
//     tableData.value.push({
//         title: 'tnew',
//         classification: 'go',
//         creationTime: dayjs(now).format('YYYY-MM-DD'),
//         status: 'unfinished',
//     })
// }

</script>

<style>
.note {
    margin: 0 4%;

}

</style>