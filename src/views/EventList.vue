<template>
  <div class="event-list">
    <h1>Events For {{ user.user.name }}</h1>
    <EventCard v-for="event in event.events" :event="event" :key="event.id" />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        >Previous Page</router-link
      >
      <span>&nbsp;||&nbsp;</span>
    </template>
    <template v-if="showNext">
      <router-link
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="prev"
        >Next Page</router-link
      >
    </template>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'
export default {
  name: 'EventList',
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('event/fetchEvents', {
      perPage: 3,
      page: this.page
    })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    showNext() {
      return this.event.totalEventCount > this.page * 3
    },
    ...mapState(['event', 'user'])
  }
}
</script>

<style></style>
