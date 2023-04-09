<template>
    <div class="login_box">
        <div class="nav_head">
            用户注册
        </div>
        <div class="input">
            <el-input v-model="account" placeholder="账号" :prefix-icon="UserFilled" />
        </div>
        <div class="input">
            <el-input v-model="password" placeholder="密码" show-password :prefix-icon="Key" />
        </div>
        <div class="input">
            <el-input v-model="passwordconfirmed" placeholder="确认密码" show-password :prefix-icon="Key" />
        </div>
        <div class="input">
            <el-input v-model="verification" placeholder="输入验证码">
                <template #suffix>
                    <el-icon class="el-input__icon" id="verify">
                        <VueImageVerify />
                    </el-icon>
                </template>
            </el-input>
        </div>
        <div class="skip">
            已有账号 <router-link to="/login">立即登录</router-link>
        </div>
        <div class="login_button">
            <button>注册</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import VueImageVerify from './VueImageVerify.vue'
import { UserFilled, Key } from '@element-plus/icons-vue'
const account = ref('')
const password = ref('')
const passwordconfirmed = ref('')
const verification = ref('')
</script>

<style scoped>
a {
    text-decoration: none;
}

.login_box {
    width: 400px;
    height: 360px;
    background-color: #fff;
    border-radius: 10px;

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

.password {
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
    border: 0;
    background-color: skyblue;
}

#verify {
    position: relative;
    left: -44px;
    top: 6px;
}

.skip {
    margin-left: 5px;
}</style>