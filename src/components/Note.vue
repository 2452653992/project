<template>
    <div class="note">
        <div class="note-in">
            <div class="note-header">
                <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange"
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
                <el-divider style="margin:5px 0"/>
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
    width: 100%;
    height: 100%;
    background-color: #fff;
}

.note-list {
    width: 100%;
    height: 100%;
}

li {
    list-style: none;
}

.note-in {
    width: 1456px;
    height: 593px;
    /* background-color: skyblue; */
    padding-left: 62px;
    padding-right: 62px;
}

.note-header {
    width: 100%;
    height: 62px;
    line-height: 62px;
    background-color: #fff;
    display: flex;

}

.header-title {
    font-weight: bold;
}

#title {
    margin: 0 230px;
}

#classify {
    margin: 0 16px;
}

#creation-time {
    margin: 0 128px;
}

#operation {
    margin: 0 222px 0 197px;
}

.note-item {
    margin-left: 18px;
    display: flex;
    flex-direction: column;
    
}

#title-l {
    
    float: left;
    font-size: 12px;
    height: 100%;
    color: black;
    margin-left: 105px;
    margin-right: 126px;    
}


#classify-l {
    float: left;
    font-size: 12px;
    color: black;
}

#creation-time-l {
    float: left;
    font-size: 12px;
    color: black;
    margin-left: 64px;
}

#button {
    float: left;
    margin-left: 48px;
    margin-top: 5px;
}

.list {
    margin-top: 8px;
}

#operation-l button{
    width: 43px;
    height: 17px;
}

#operation-l {
    float: left;
    margin-left: 63px;
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