<template>
  <div class="event-list">
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :event="event" :key="event.id"/>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data
      })
      .error(error => {
        console.log(error)
      })
  }
}
</script>

<style></style>
