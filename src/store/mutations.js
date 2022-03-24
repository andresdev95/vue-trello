import Vue from 'vue'
import * as types from './mutations-types'

export default {
  // fetch de los paneles creados por el usuario
  [types.FETCH_BOARDS_REQUEST] (state) {
    state.fetchingData = true
    state.error = null
  },

  [types.FETCH_BOARDS_SUCCESS] (state, {boards}) {
    state.fetchingData = false
    state.error = null
    state.boards = { ...boards }
  },

  [types.FETCH_BOARDS_FAILURE] (state, {error}) {
    state.fetchingData = false
    state.error = error
  },

  // fecth de las listas de un determinado panel

  [types.FETCH_LISTS_REQUEST] (state) {
    state.fetchingData = true
    state.error = null
  },

  [types.FETCH_LISTS_SUCCESS] (state, {lists}) {
    state.fetchingData = false
    state.error = null
    state.lists = { ...lists }
  },

  [types.FETCH_LISTS_FAILURE] (state, {error}) {
    state.fetchingData = false
    state.error = error
  },

  // fecth de las tareas correspondiente a una lista
  [types.FETCH_TASKS_REQUEST] (state) {
    state.fetchingData = true
    state.error = null
  },

  [types.FETCH_TASKS_SUCCESS] (state, {tasks}) {
    state.fetchingData = false
    state.error = null
    state.tasks = Object.assign({}, state.tasks, tasks)
  },

  [types.FETCH_TASKS_FAILURE] (state, {error}) {
    state.fetchingData = false
    state.error = error
  },

  // Crear un nuevo panel
  [types.ADD_BOARD] (state, { board }) {
    Vue.set(state.boards, board.id, board)
  },

  // Crear una nueva lista
  [types.ADD_COLUMN] (state, { column }) {
    Vue.set(state.lists, column.id, column)
  },

  // Añadir una nueva tarea a una lista
  [types.ADD_TASK] (state, { task }) {
    Vue.set(state.tasks, task.id, task)
  },

  // Borrar una tarea de una lista de tareas
  [types.DELETE_TASK] (state, { taskId }) {
    state.tasks = Object.values(state.tasks)
      .filter(task => task.id !== taskId)
  },

  // Marca como completada un tarea
  [types.MARK_AS_COMPLETED] (state, { task }) {
    task.completed = !task.completed
  }
}
