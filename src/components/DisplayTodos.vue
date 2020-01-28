/* eslint-disable no-unused-vars */
<template>
    <div>
        <h2>My todo list</h2>
        <ul class="todolist">
            <li v-bind:key="todo.id" v-for="todo in todos">
                <Todo v-bind:todo="todo" v-on:delete-todo="$emit('delete-todo', todo.id)" />
            </li>
        </ul>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Todo from './todolist';

export default {
    name: 'Todos',
    components: {
        Todo
    },
    props: [
        "todos"
    ]
}
</script>

<style scoped>
h2 {
    text-align: center;
}

.todolist {
    list-style: none;
}
</style>