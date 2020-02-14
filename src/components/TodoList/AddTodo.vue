<template>
  <q-form type="" @submit.prevent.stop="addTodo" ref="formTodo">
    <q-input
      outlined
      autofocus
      type="text"
      :rules="[val => !!val || 'Field is required']"
      v-model="text" required class="full-width"
      label="Todo Description"
      @keyup.enter="submit"
    />
    <q-btn color="primary" class="full-width" label="Add Todo" type="submit"/>
  </q-form>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddTodo',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    ...mapActions({
      addTodoList: 'todo/addTodo'
    }),
    addTodo () {
      this.$refs.formTodo.validate().then(success => {
        if (success) {
          this.addTodoList({
            id: this.$uuid.v1(),
            description: this.text,
            completed: 0,
            time_added: this.moment().format()
          })
          this.text = ''
          this.$q.notify('Success! Added to the list.')
          this.$emit('close')
        }
      })
    }
  }
}
</script>