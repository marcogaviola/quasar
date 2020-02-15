<template>
  <q-page class="q-pa-md page-container q-mx-auto">
    <div class="q-pa-md" v-if="todos.length > 0">
      <div class="text-h4">Todo</div>
      <q-card flat class="q-mx-auto">
        <q-list color="orange-1">
          <template v-for="task in todos">
            <list :task="task" :key="task.id"/>
          </template>
        </q-list>
      </q-card>
    </div>
    <div v-else class="text-center">
      <span class="text-h1 absolute-center">
        Hello!
        <span class="text-h5">
            Create your todo list.
            <q-btn color="teal" size="lg" @click="dialog = !dialog">
              Click me!
            </q-btn>
        </span>
      </span>
    </div>
    <q-dialog v-model="dialog" transition-hide="slide-up" position="top">
      <q-card style="width:350px;">
        <q-card-section class="q-pa-md q-gutter-md">
          <add-todo @close="dialog = !dialog"/>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-page-sticky v-if="todos.length > 0" absolute style="z-index:9991" position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="teal" @click="dialog = !dialog" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import List from 'components/TodoList/List.vue'
import AddTodo from 'components/TodoList/AddTodo.vue'
export default {
  name: 'PageIndex',
  components: { List, AddTodo },
  data () {
    return {
      dialog: false
    }
  },
  created() {
    this.init()
  },
  computed: {
    ...mapGetters({
      todos: 'todo/allTodos'
    })
  },
  methods: {
    ...mapActions({
      fetchTodos: 'todo/fetchTodos'
    }),
    init() {
      this.fetchTodos()
      this.$q.notify.setDefaults({
        position: 'bottom',
        timeout: 2500,
        textColor: 'white',
        color: 'green',
        actions: [{ icon: 'close', color: 'white' }]
      })
    }
  }
}
</script>
<style scoped>
.page-container {
  max-width: 550px;
}
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
