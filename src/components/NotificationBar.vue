<template>
  <div class="notificationTypeClass">
    <p>{{ notification.message }}</p>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'NotificationBar',
  created() {
    this.timeout = setTimeout(() => {
      this.remove(this.notification)
    }, 5000)
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
  data() {
    return {
      timeout: null
    }
  },
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  computed: {
    notificationTypeClass() {
      return `-text-${this.notification.type}`
    }
  },
  methods: mapActions('notification', ['remove'])
}
</script>
<style scoped>
.notification-bar {
  margin: 1em 0 1em;
}
</style>
