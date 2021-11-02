'use strict'
Vue.config.devtools = true;

window.addEventListener('DOMContentLoaded', function () {
  new Vue({
      el: '#root',
      data: {
        toDoList: [],
        toAddToDo: '',
      },
      methods: {
        onBtnAddClick () {
          if (this.toAddToDo.trim() === '') {
            return
          } else {
            this.toDoList.push(this.toAddToDo);
          }
        },
        deleteToDo (indexToDelete) {
          this.toDoList.splice(indexToDelete, 1)
        },
      },
  });
})