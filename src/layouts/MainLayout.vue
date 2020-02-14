<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="text-center">
          Todo List - Quasar - Vue - Vuex - Router
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>

export default {
  name: 'MainLayout',
  data () {
    return {}
  }
}
</script>
