<template>
  <div id="app" >
<div class="body">   <Todos v-bind:todos="todos" v-on:delete-todo="deleteTodo" />
   <AddTodo v-on:add-todo="addTodo" />
   </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Todos from './components/DisplayTodos';
import AddTodo from './components/AddTodo';
import * as utils from "../server/utils";


export default {
  name: 'app',
  components: {
    Todos,
    AddTodo
  },
  data(){
    return {
      todos: [
        {
        id: 1,
        title: 'todo1',
        complete: false
        },

        {
          id: 2,
          title:'todo2',
          complete: false
        },

        {
          id: 3,
          title: 'todo3',
          complete: false
        },

        {
          id: 4,
          title: 'todo4',
          complete: false
        },
      ]
    }
  },
  methods: {
    addTodo(newTodoObj){
      this.todos = [...this.todos, newTodoObj];
    },
    // eslint-disable-next-line no-unused-vars
    deleteTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    }
  },
  mounted(){
    fetch('http://localhost:5553',{
      method: utils.METHODS.post,
      mode: 'cors',
      body: "send to DB",
    })
  }
}
</script>

<style>
 #app {
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding-top: 15px;
    padding-left: 150px;
    
  }



</style>
