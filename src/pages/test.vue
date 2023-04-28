<template>
    <div style="width: 100px; height: 100px; color: black;">

    <el-button type="primary" @click="get()">GET请求</el-button>
    <el-button type="success" @click="post()">POST</el-button>
    <el-button type="info" @click="put()">PUT</el-button>
    <el-button type="warning" @click="deleteitem()">DELETE</el-button>
    <el-button type="danger">Danger</el-button>
    </div>
</template>

<script setup>
import axios from 'axios';

const get=function()
{
    axios({
        method: 'GET',
        url: 'http://localhost:3000/MenuItems'

    }).then(Response => {
        console.log(Response);
        console.log(Response.data);
    })
}

const post=function()
{
    axios({
        method: 'POST',
        url: 'http://localhost:3000/posts',
        //设置请求体
        data: {
            title: "天气真好",
            author: "我"
        }
    }).then(Response => {
        console.log(Response);
    })
}
//put用于更新数据,张三改李四
const put=function()
{
    axios({
        method: 'PUT',
        url: 'http://localhost:3000/posts/3',
        data: {
            title: "天气真好",
            author: "李四"
        }
    }).then(Response => {
        console.log(Response);
    })
}
//删除数据
const deleteitem=function()
{
    axios({
        method: 'DELETE',
        url: 'http://localhost:3000/posts/3',
    }).then(Response => {
        console.log(Response);
    })
}
</script>