<template>
  <span>
    {{timeAgo}}
  </span>
</template>
<script>
export default {
  props: ['time'],
  data () {
    return {
      timeAgo: this.moment(this.time).fromNow()
    }
  },
  mounted() {
    setInterval(() => {
      this.timeAgo = this.moment(this.time).fromNow()
    },3600)
  }
}
</script>