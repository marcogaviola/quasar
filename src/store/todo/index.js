export default {
  namespaced: true,
  state: {
    todoList: []
  },
  getters: {
    allTodos: (state) => {
      return state.todoList
    },
    completedTodos: (state) => state.todoList.filter(todo => todo.completed === 1)
  },
  actions: {
    addTodo({commit}, todo) {
      commit('addTodo', todo)
    },
    updateTodo({commit}, todo) {
      commit('updateTodo', todo)
    },
    deleteTodo({commit}, id) {
      commit('deleteTodo', id)
    }
  },
  mutations: {
    addTodo: (state, data) => state.todoList.push(data),
    updateTodo: (state, data) => {
      state.todoList = [
        ...state.todoList.map(todo =>
          todo.id !== data.id ? todo : data
        )
      ]
    },
    deleteTodo: (state, id) => state.todoList = state.todoList.filter(todo => todo.id !== id)
  }
}
