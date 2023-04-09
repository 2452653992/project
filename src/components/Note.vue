<template>
    <div class="note">
        <div class="note-in">
            <div class="note-header">
                <el-checkbox v-model="checkAll" 
                :indeterminate="isIndeterminate" 
                @change="handleCheckAllChange"
                style="zoom:180%"></el-checkbox>
                <div class="header-title" id="title">标题</div>
                <div class="header-title" id="classify">分类</div>
                <div class="header-title" id="creation-time">创建时间</div>
                <div class="header-title" id="state">状态</div>
                <div class="header-title" id="operation">操作</div>
            </div>
            <el-divider style="margin:5px 0"/>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <div class="note-item">
                    <el-checkbox>
                        <div class="label">
                            <div class="list" id="title">title1</div>
                            <div class="list" id="classify">Java</div>
                            <div class="list" id="creation-time">2022-01-01</div>
                            <div class="list" id="state"><el-switch v-model="value1" size="default"/></div>
                            <div class="list" id="operation">
                                <el-button type="primary" :icon="Edit" style="width:60px; font-size:20px;" plain text>修改</el-button>
                                <el-button type="primary" :icon="Delete" style="width:60px; font-size:20px;" plain text>删除</el-button>
                            </div>
                        </div>
                        
                    </el-checkbox>

                </div>
                <!-- <el-divider style="margin:5px 0"/>
                <div class="note-item">
                    <el-checkbox style="zoom:180%;">
                        <div class="list" id="title-l">title1</div>
                        <div class="list" id="classify-l">Java</div>
                        <div class="list" id="creation-time-l">2022-01-01</div>
                        <div class="list" id="button"><el-switch v-model="value1" size="small"/></div>
                        <div class="list" id="operation-l">
                            <el-button type="primary" :icon="Edit" size="small" plain text>修改</el-button>
                            <el-button type="primary" :icon="Delete" size="small" plain text>删除</el-button>
                            
                        </div>
                    </el-checkbox>

                </div>
                <el-divider style="margin:5px 0"/>
                <div class="note-item">
                    <el-checkbox style="zoom:180%;">
                        <div class="list" id="title-l">title1</div>
                        <div class="list" id="classify-l">Java</div>
                        <div class="list" id="creation-time-l">2022-01-01</div>
                        <div class="list" id="button"><el-switch v-model="value1" size="small"/></div>
                        <div class="list" id="operation-l">
                            <el-button type="primary" :icon="Edit" size="small" plain text>修改</el-button>
                            <el-button type="primary" :icon="Delete" size="small" plain text>删除</el-button>
                        </div>
                    </el-checkbox>
                </div>
                <el-divider style="margin:5px 0"/> -->
            </el-checkbox-group>
            <!-- 空状态 -->
            <div v-show="notestate.showEmpty">
                <el-empty description="description" />
            </div>
        </div>

    </div>
</template>

<style scoped>
.note {
    /* width: 1691px;
    height: 994px; */
    height: 100%;
    background-color: #fff;
}
.note-in {
    height: 593px;
    /* background-color: skyblue; */
    padding-left: 62px;
    padding-right: 62px;
}

.note-header {
    display: flex;
    width: 100%;
    height: 68px;
    line-height: 62px;
    background-color: #fff;
    

}

.header-title {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
}

#title {
    width: 230px;
}

#classify {
    width: 170px;
}

#creation-time {
    width: 160px;
}
#state {
    width: 160px;
}
#operation {
    width: 240px;
}

.note-item {
    display: flex;
    width: 100%;
    height: 68px;
    line-height: 68px;
    background-color: #fff;
}

#button {
    font-size: 30px;
}

.list {
    margin-top: 8px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
}
.label {
    display: flex;
}
#operation button{
    width: 43px;
    height: 17px;
}

</style>


<script setup>
import { ref, reactive } from 'vue'
import { Delete, Edit, } from '@element-plus/icons-vue'
const notestate = reactive({
    showEmpty: false,//这个到时候用计算属性，不然不会刷新

})
const value1 = ref(false)
const checkAll = ref(false)
const isIndeterminate = ref(true)
const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

const handleCheckAllChange = (val) => {
    checkedCities.value = val ? cities : []
    isIndeterminate.value = false
}
const handleCheckedCitiesChange = (value) => {
    const checkedCount = value.length
    checkAll.value = checkedCount === cities.length
    isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
}

</script>