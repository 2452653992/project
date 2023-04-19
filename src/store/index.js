import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'
export const useMainStore = defineStore('main',{
  state:()=>{
    return {
      // 存储分类
      MenuItems: [
      ],
      notes: [
        // {
        //   id: '0',
        //   title: "c++真牛",
        //   classification: "c++",
        //   description: "无",
        //   content: "无",
        //   status: true,
        //   createTime: "2010-1-1"
        // }
      ],
      filteredNotes: [],
    }
  },
  getters:{},
  actions:{
    // 增加笔记
    changeNote(form) {
      const note = {
          id : form.id,
          title : form.title,
          content : form.content,
          classification : form.classification,
          description : form.description,
          status : form.status,
          createTime : form.createTime
      }
      this.notes.unshift(note)
    },
    // 增加分类
    addMenu(form) {
      const menuitem = {
          id : nanoid(),
          name : form.name,
      }
      this.MenuItems.push(menuitem)
    }
  }
})
