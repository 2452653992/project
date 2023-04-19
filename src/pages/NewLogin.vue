<template>
  <div class="login">
    <img src="../assets/bac.jpg" alt="login image" class="login__img">
    <form action="" class="login__form">
      <h1 class="login__title">云端笔记</h1>

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
            <input :type="passwordStyle" required class="login__input" id="login-pass" placeholder=" " v-model="state.password">
            <label for="" class="login__label">密码</label>
            <i class="login__eye" :class="{ 'ri-eye-off-line': isShow, 'ri-eye-line': !isShow }" id="login-eye" @click="ChangeEye"></i>
          </div>
        </div>
      </div>
      <div class="login__check">
        <div class="login__check-group">
          <input type="checkbox" class="login__check-input">
          <label for="" class="login__check-label">记住密码</label>
        </div>
        <a href="#" class="login__forgot">忘记密码?</a>

      </div>

      <button class="login__button" @click="submit">登录</button>
      <p class="login__register">
        没有账号? 立即注册  <router-link to="/NewRegister"> 注册 </router-link>
      </p>


    </form>
  </div>
</template>

<style>
/*=============== LOGIN ===============*/
.login {
  position: relative;
  height: 100vh;
  display: grid;
  align-items: center;
}

.login__img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.login__form {
  position: relative;
  background-color: hsla(0, 0%, 10%, .1);
  border: 2px solid var(--white-color);
  margin-inline: 1.5rem;
  padding: 2.5rem 1.5rem;
  border-radius: 1rem;
  backdrop-filter: blur(8px);


}

.login__title {
  text-align: center;
  font-size: var(--h1-font-size);
  font-weight: var(--font-medium);
  margin-bottom: 2rem;

}

.login__content,
.login__box {
  display: grid;
}

.login__content {
  row-gap: 1.75rem;
  margin-bottom: 1.5rem;
}

.login__box {
  grid-template-columns: max-content 1fr;
  align-items: center;
  column-gap: .75rem;
  border-bottom: 2px solid var(--white-color);

}

.login__icon,
.login__eye {
  font-size: 1.25rem;
}

.login__input {
  width: 100%;
  padding-block: .8rem;
  background: none;
  color: var(--white-color);
  position: relative;
  z-index: 1;

}

.login__box-input {
  position: relative;
}

.login__label {
  position: absolute;
  left: 0;
  top: 13px;
  font-weight: var(--font-medium);
  transition: top .3s, font-size .3s;

}

.login__eye {
  position: absolute;
  right: 0;
  top: 18px;
  z-index: 10;
  cursor: pointer;
}

.login__box:nth-child(2) input {
  padding-right: 1.8rem;
}

.login__check,
.login__check-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.login__check {
  margin-bottom: 1.5rem;
}

.login__check-label,
.login__forgot,
.login__register {
  font-size: var(--small-font-size);
}

.login__check-group {
  column-gap: .5rem;
}

.login__check-input {
  width: 16px;
  height: 16px;
}

.login__forgot {
  color: var(--white-color);
}

.login__forgot:hover {
  text-decoration: underline;
}

.login__button {
  width: 100%;
  padding: 1rem;
  border-radius: .5rem;
  background-color: var(--white-color);
  font-weight: var(--font-medium);
  cursor: pointer;
  margin-bottom: 2rem;


}

.login__register {
  text-align: center;

}

.login__register a {
  color: var(--white-color);
  font-weight: var(--font-medium);

}

.login__register a:hover {
  text-decoration: underline;
}







/* Input focus move up label */

.login__input:focus+.login__label {
  top: -12px;
  font-size: var(--small-font-size);
}




/* Input focus sticky top label */
.login__input:not(:placeholder-shown).login__input:not(:focus)+.login__label {
  top: -12px;
  font-size: var(--small-font-size);
}

/*=============== BREAKPOINTS ===============*/
/* For medium devices */
@media screen and (min-width: 576px) {
  .login {
    justify-content: center;
  }

  .login__form {
    width: 432px;
    padding: 4rem 3rem 3.5rem;
    border-radius: 1.5rem;

  }

  .login__title {
    font-size: 2rem;
  }
}
</style>

<script setup>
import { ref, reactive } from 'vue'
import { login } from '../service/user'//登录逻辑
import { setLocal } from '../common/js/utils'//设置本地token

const isShow = ref(true)//密码处眼睛的样式
const passwordStyle = ref('password')//密码文本的样式
const state = reactive({
    email: '',
    password: '',

})
//点击眼睛改变密码显示的函数
const ChangeEye = () => {
    if(isShow.value===true)
    {
      isShow.value=false
      passwordStyle.value='text'
    }
    else {
      isShow.value=true
      passwordStyle.value='password'
    }
}
//登录提交逻辑，此部分未完工
const submit = async (values) => {
    const { data } = await login({
        "loginName": values.email,
        "passwordMd5": values.password//md5加密为实现
    })
    setLocal('token', data)
    // 需要刷新页面，否则 axios.js 文件里的 token 不会被重置
    window.location.href = '/'
}
</script>