<template>
  <div>
    <h1>Ooops!</h1>
    <h3>The {{ resource }} you're looking for not found in here</h3>
    <router-link :to="{ name: 'event-list' }">Back to Homge Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  props: {
    resource: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>
