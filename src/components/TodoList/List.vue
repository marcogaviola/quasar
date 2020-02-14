<template>
  <q-card class="q-my-sm">
    <q-item class="q-pa-md" :class="isComplete ? 'bg-green-1' : 'bg-orange-1'" v-ripple>
      <q-item-section>
        <q-item-label lines="1" caption>Todo: </q-item-label>
        <q-item-label lines="2">{{item.description}}
          <q-popup-edit v-if="!isComplete" content-class="bg-teal text-white" v-model="item.description"
            :validate="val => val.length > 0"
          >
            <template>
              <q-input
                dark
                color="white"
                v-model="item.description"
                debounce="800"
                dense
                autofocus
                counter
                :rules="[val => !!val || 'Field is required']"
              >
                <template v-slot:append>
                  <q-icon name="edit" />
                </template>
              </q-input>
            </template>
          </q-popup-edit>
       </q-item-label>
      </q-item-section>
      <q-item-section side top>
         <q-item-label caption>
           <span v-if="isComplete">Completed</span>
           <time-ago v-else :time="item.time_added"/>
         </q-item-label>
        <div>
        <q-btn v-if="!isComplete" flat dense icon="check" @click="item.completed = 1" text-color="green-5"></q-btn>
        <q-btn flat dense icon="delete" @click="deleteTodo(item.id)" text-color="red-5"></q-btn>
        </div>
      </q-item-section>
    </q-item>
  </q-card>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import TimeAgo from 'components/TodoList/TimeAgo.vue'
export default {
  name: 'List',
  props: ['task'],
  components: { TimeAgo },
  data () {
    return {
      item: JSON.parse(JSON.stringify(this.task))
    }
  },
  computed: {
    isComplete () {
      return this.item.completed
    }
  },
  watch: {
    item: {
      handler (newVal) {
        console.log(newVal)
        this.updateTodo(newVal)
      },
      deep: true
    }
  },
  methods: {
    ...mapActions({
      updateTodo: 'todo/updateTodo',
      deleteTodo: 'todo/deleteTodo'
    })
  }
}
</script>