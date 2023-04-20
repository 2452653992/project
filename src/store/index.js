import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'
export const useMainStore = defineStore('main',{
  state:()=>{
    return {
      // 存储分类
      dialogVisible: false,
      MenuItems: [
        {
          id : '114514',
          name: 'c++',
          
        },
        {
          id: 'he',
          name: 'python'
        },
        {
          id: 'she',
          name: 'JAVA'
        }
        
      ],
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
    // 增加笔记 + 编辑笔记
    changeNote(form) {
      var flag = false
      var noteIndex = 0
      this.notes.forEach((note,index) => {
        if (form.id == note.id) {
          noteIndex = index
          flag = true
        }
      })

      if (flag == false) {
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
      } else {
        this.notes[noteIndex] = form
      }
    },
    // 增加分类
    addMenu(form) {
      const menuitem = {
          id : nanoid(),
          name : form.name,
      }
      this.MenuItems.push(menuitem)
    },
    // 删除笔记
    deleteNote(id) {
      this.notes = this.notes.filter(note=>note.id !== id)
      // this.notes.splice(id, 1)
    }
  }
})
