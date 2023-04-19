<template>
  <div class="login">
    <img src="../assets/bac.jpg" alt="login image" class="login__img">
    <form action="" class="login__form">
      <h1 class="login__title">注册</h1>

      <div class="login__content">
        <div class="login__box">
          <i class="ri-user-3-line login__icon"></i>
          <div class="login__box-input">
            <input type="email" required class="login__input" placeholder=" " v-model="state.email">
            <label for="" class="login__label">邮箱</label>
          </div>
        </div>

        <div class="login__box">
          <i class="ri-lock-2-line login__icon"></i>
          <div class="login__box-input">
            <input :type="passwordStyle" required class="login__input" placeholder=" " v-model="state.password">
            <label for="" class="login__label">密码</label>
            <i class="login__eye" :class="{ 'ri-eye-off-line': isShowOne, 'ri-eye-line': !isShowOne }" id="login-eye" @click="ChangeEyeOne"></i>
          </div>
        </div>

        <div class="login__box">
          <i class="ri-lock-2-line login__icon"></i>
          <div class="login__box-input">
            <input :type="passwordStyle_v" required class="login__input" placeholder=" " v-model="state.password_v">
            <label for="" class="login__label">确认密码</label>
            <i class="login__eye" :class="{ 'ri-eye-off-line': isShowTwo, 'ri-eye-line': !isShowTwo }" id="login-eye" @click="ChangeEyeTwo"></i>
          </div>
        </div>
      </div>
      <div class="login__check">
        <div class="login__check-group">
          <!-- <input type="checkbox" class="login__check-input">
          <label for="" class="login__check-label">记住密码</label> -->
        </div>
        <a href="#" class="login__forgot">忘记密码?</a>

      </div>
      
      <button class="login__button" @click="submit">注册</button>
      <p class="login__register">
        已有账号? 立即登录  <router-link to="/NewLogin"> 登录 </router-link>
      </p>


    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { login } from '../service/user'//登录逻辑
import { setLocal } from '../common/js/utils'//设置本地token


const isShowOne = ref(true)//密码处眼睛的样式
const isShowTwo = ref(true)//确认密码处眼睛的样式
const passwordStyle = ref('password')//密码文本的样式
const passwordStyle_v = ref('password')//确认密码文本的样式

const state = reactive({
    email: '',
    password: '',//密码
    password_v: '',//确认密码

})
//点击眼睛改变密码显示的函数
const ChangeEyeOne = () => {
    if(isShowOne.value===true)
    {
      isShowOne.value=false
      passwordStyle.value='text'
    }
    else {
      isShowOne.value=true
      passwordStyle.value='password'
    }
}
//点击眼睛改变确认密码显示的函数
const ChangeEyeTwo = () => {
    if(isShowTwo.value===true)
    {
      isShowTwo.value=false
      passwordStyle_v.value='text'
    }
    else {
      isShowTwo.value=true
      passwordStyle_v.value='password'
    }
}
//注册提交逻辑，此部分未完工，用的是登录逻辑，但是密码一致性验证有
const submit = async (values) => {
  if (state.password!= state.password_v) {
    console.log('两次密码不同')//验证两次输入的密码是否相同
    console.log('1',state.password)
    console.log('2',state.password_v)
    return
    }
    const { data } = await login({
        "loginName": values.email,
        "passwordMd5": values.password//md5加密为实现
    })
    setLocal('token', data)
    // 需要刷新页面，否则 axios.js 文件里的 token 不会被重置
    window.location.href = '/'
}
</script>