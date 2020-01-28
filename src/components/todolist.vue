<template>
    <div v-bind:class="{ 'completed': todo.completed }" class="inputform">
        <p v-on:click="markComplete">{{todo.title}}</p>
        <button @click="$emit('delete-todo', todo.id)">Delete</button>
    </div>
</template>

<script>
export default {
    name: 'Todo',
    props: [
        'todo'
    ],
    methods: {
        markComplete(){
            this.todo .completed = !this.todo.completed
        }
    }
}
</script>

<style scoped>
.completed {
    display: none
}
.inputform {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
    width: 200px;
    
}


</style>