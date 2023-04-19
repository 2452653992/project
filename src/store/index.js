import { defineStore } from 'pinia'

export const useMainStore = defineStore('main',{
  state:()=>{
    return {
      classifications: [],
      notes: [
        {
          id: '0',
          title: "c++真牛",
          classification: "c++",
          description: "无",
          content: "无",
          status: true,
          createTime: "2010-1-1"
        }
      ],
      filteredNotes: [],
    }
  },
  getters:{},
  actions:{
    changeNote(form) {
      // this.notes.forEach((note) => {
      //   if (note.id == form.id) {
      const note = {
          id : form.id,
          title : form.title,
          content : form.content,
          classification : form.classification,
          description : form.description,
          status : form.status,
          createTime : form.createTime
      }
      console.log(note)
      //   }
      // })
      this.notes.unshift(note)
      // 新增
      
    }
  }
})
