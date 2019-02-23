<template>
  <div class="user">
    <h1>This is {{ username }}'s page</h1>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: ['username']
}
</script>

<style></style>
