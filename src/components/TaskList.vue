<template>
  <ul>
    <li
      v-for="(task, index) in tasks"
      :key="index"
      :class="{ completed: task.completed }"
      @click="markAsCompleted({ task })"
      @dblclick="deleteTask({ taskId: task.id })"
    >{{ task.title  }}</li>
    <input type="text" placeholder="Añade una nueva tarea"
    v-model="title"
    @keyup.enter="add()">
  </ul>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'task-list',
  props: {
    listId: String,
    tasks: Array
  },
  data () {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions([
      'addTask',
      'markAsCompleted',
      'deleteTask'
    ]),
    add () {
      this.addTask({ list: this.listId, title: this.title })
      this.title = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li{
    background-color: #fafafa;
    border-radius: 3px;
    border-bottom: 1px solid #ccc;
    margin: 0.25rem 0;
    padding: 1rem;

    &.completed{
      background-color: #cfd8dc;
      color: #98a4a2;
    }
  }

  input{
    box-sizing: border-box;
    background-color: #546e7A;
    border: 2px solid #546e7A;
    border-radius: 3px;
    font-size: 1.1rem;
    outline: 0;
    padding: 0.5rem;
    transition: all 600ms ease;

    &:focus,
    &:active {
      background-color: white;
      color: #546e7A;
    }

    &::placeholder {
      color: white;
    }
  }
</style>
