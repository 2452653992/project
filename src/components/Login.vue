<template>
    <div class="login">
        <div class="login_box">
            <div class="nav_head">
                云端笔记
            </div>
            <div class="input">
                <el-input v-model="state.account" placeholder="账号" :prefix-icon="UserFilled" />
            </div>
            <div class="input">
                <el-input v-model="state.password" placeholder="密码" show-password :prefix-icon="Key" />
            </div>
            <div class="input">
                <el-input v-model="state.verification" placeholder="输入验证码" >
                    <template #suffix>
                        <el-icon class="el-input__icon" id="verify">
                            <VueImageVerify ref="verifyRef"/>
                        </el-icon>
                    </template>
                </el-input>
            </div>
            <div class="skip">
                没有账号？ <router-link to="/register">立即注册</router-link>
            </div>

            <div class="login_button">
                <button @click="submit">登录</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import VueImageVerify from './VueImageVerify.vue';
import { UserFilled, Key } from '@element-plus/icons-vue'
import { login } from '../service/user'
import { setLocal } from '../common/js/utils'
// import md5 from 'js-md5'
const verifyRef = ref(null)
const state = reactive({
    verification: '',
    account: '',
    password: '',
    imgCode: '',
})

// 此部分未完工，请求报错，不知道原因，出现了新的跨域问题
const submit = async (values) => {
    state.imgCode = verifyRef.value.state.imgCode || ''
    if (state.verification.toLowerCase() != state.imgCode.toLowerCase()) {
    console.log('验证码有误')//调试（此功能目前正常）
    console.log('1',state.verification.toLowerCase())
    console.log('2',state.imgCode.toLowerCase())
    return
    }
    const { data } = await login({
      "loginName": values.account,
      "passwordMd5": values.password
    //   "passwordMd5": md5(values.password)
    
    })
    setLocal('token', data)
    // 需要刷新页面，否则 axios.js 文件里的 token 不会被重置
    window.location.href = '/'
}

</script>

<style scoped>
a {
    text-decoration: none;
}

.login_box {
    width: 400px;
    height: 315px;
    background-color: #fff;
    border-radius: 10px;

}

.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav_head {
    height: 100px;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    color: rgb(48, 49, 50);
}

.input {
    margin: 5px 5px;

}

.login_button {
    width: 100%;
    height: 15%;
    margin-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
}

.login_button button {
    width: 90%;
    height: 78%;
    margin: auto;
    color: #fff;
    font-size: 17px;
    background-color: skyblue;
    border: 0;
}

#verify {
    position: relative;
    left: -44px;
    top: 6px;
}

.skip {
    margin-left: 5px;
}



</style>