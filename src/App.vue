<template>
  <div id="app">
    <textarea name="Enter todoapp" id="todotext" cols="30" rows="10"></textarea>

    <h3 class="title">Todo</h3>
    <div class="todos">
       <p class="todolist"></p>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Todos from './components/DisplayTodos'


export default {
  name: 'app',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Todos
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
        }
      ]
    }
  }
}
</script>

<style>
</style>
