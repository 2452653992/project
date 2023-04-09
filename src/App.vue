<script setup>

import Header from "./components/Header.vue";
import NoteSidebar from './components/NoteSidebar.vue'
import NoteFunction from './components/NoteFunction.vue'
import Note from './components/Note.vue'
import Increase from './components/Increase.vue'


</script>


<template>
  <div>
    <Header></Header>
    
    <div class="body">
      <NoteSidebar style="margin-top: 100px;"></NoteSidebar>
      <div class="NoteShowbar">
        <NoteFunction></NoteFunction>
        <Note></Note>
      </div>
    </div>
    <!-- <div class="login">
      <router-view></router-view>
    </div> -->
  </div>
</template>



<style>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../116.jpg) no-repeat center;
}
.body {
  display: flex;
  flex-direction: row;
  padding: 40px;
}
.NoteShowbar {
  flex: 1;
}
</style>