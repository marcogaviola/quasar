const saveLocalStorage  = (data) => {
  localStorage.setItem('todoList', JSON.stringify(data))
}
export default {
  namespaced: true,
  state: {
    todoList: []
  },
  getters: {
    allTodos: (state) => {
      saveLocalStorage(state.todoList)
      return state.todoList
    },
    completedTodos: (state) => state.todoList.filter(todo => todo.completed === 1)
  },
  actions: {
    fetchTodos({commit}, todos) {
      const stored = localStorage.getItem('todoList')
      if (stored){
        commit('setTodos', todos)
      }
    },
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
    setTodos: (state, data) => state.todoList = JSON.parse(data),
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
