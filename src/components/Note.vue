<template>
    <div class="note">
        <el-table ref="multipleTableRef" :data="store.notes" style="width: 100%" @selection-change="handleSelectionChange"
            :table-layout="tableLayout">
            <el-table-column type="selection" width="55" />
            <el-table-column prop="title" label="标题" width="180" />
            <el-table-column prop="classification" label="分类" width="180" />
            <el-table-column prop="createTime" label="创建时间" />
            <el-table-column prop="status" label="状态">
                <template #default="scope">
                    <el-switch v-model="scope.row.status" />
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button type="primary" :icon="Edit" size="small" plain text @click="handleEdit(scope.row.id)">修改</el-button>
                    <el-button type="primary" :icon="Delete" size="small" plain text
                        @click.prevent="deleteRow(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>

        </el-table>
    </div>
</template>

<style scoped></style>


<script setup>
import { ref, reactive, onMounted, toRaw} from 'vue'
import { Delete, Edit, } from '@element-plus/icons-vue'
import eventBus from '../utils/bus'
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
    // console.log(multipleSelection.value);
}
// const tableData = ref([

// ])
// 删掉一行
const deleteRow = (id) => {
    console.log(id)
    store.deleteNote(id)
}
// 删掉几行
const handleDelete = () => {
    const selections = toRaw(multipleSelection.value)
    // console.log(selections);
    selections.forEach(selection => {
        // console.log(selection);
        deleteRow(selection.id)
    });
}
// 处理修改
const handleEdit = (id) => {
    eventBus.emit('handleEdit',id)
}
// 处理批量修改
const handleEdit2 = () => {
    const selections = toRaw(multipleSelection.value)
    // console.log(selections);
    selections.forEach(selection => {
        // console.log(selection);
        handleEdit(selection.id)
        // const timer = setTimeout(()=>{},100)
        // while (store.dialogVisible == true) {
        //     timer
        // }
        // clearTimeout(timer)
    });
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
onMounted(() => {
    eventBus.on('handleEditButton',handleEdit2)
    eventBus.on('handleDeleteButton',handleDelete)
})
</script>

<style>
.note {
    margin: 0 4%;

}
</style>