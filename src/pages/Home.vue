<script setup>

import TopBar from '../components/TopBar.vue'
import NoteSidebar from '../components/NoteSidebar.vue'
import NoteFunction from '../components/NoteFunction.vue'
import Note from '../components/Note.vue'
import { useMainStore } from '../store'

const mainstore = useMainStore()

</script>
<template>
  <div class="section">
    <TopBar></TopBar>
    <div class="body">
      <NoteSidebar></NoteSidebar>
      <div class="NoteShowbar">
        <NoteFunction></NoteFunction>
        <Note></Note>
      </div>
    </div>
  </div>
</template>


<style>
.body {
  display: flex;
  flex-direction: row;
  padding: 40px;
  padding-left: 0;
}

.NoteShowbar {
  flex: 1;
}

.section {
  background: url(117.jpg) no-repeat center;
    /* 拓展图片来填满元素（保持像素的长宽比），是图片宽高最短的那个边覆盖元素一边即可 */
    background-size: cover;
    /* 铺满屏幕的高度 */
    min-height: 100vh;
}
</style>