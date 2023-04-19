<script setup>

import TopBar from '../components/TopBar.vue'
import NoteSidebar from '../components/NoteSidebar.vue'
import NoteFunction from '../components/NoteFunction.vue'
import Note from '../components/Note.vue'
import { useMainStore } from '../store'

const mainstore = useMainStore()

</script>
<template>
  <div>
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
}

.NoteShowbar {
  flex: 1;
}
</style>