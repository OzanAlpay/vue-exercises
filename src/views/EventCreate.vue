<template>
  <form @submit.prevent="createEvent">
    <BaseSelect
      label="Select a Category"
      v-model="event.category"
      :options="categories"
      :selected="option === value"
      :class="{ error: $v.event.category.$error }"
      @blur="$v.event.category.$touch()"
    />
    <template v-if="$v.event.category.$error">
      <p v-if="!$v.event.category.required">Category is required</p>
    </template>
    <h3>Name & describe your event</h3>
    <BaseInput label="Title" v-model="event.title" type="text" placeholder="Title" class="field"/>
    <BaseInput
      label="Description"
      v-model="event.description"
      type="text"
      placeholder="Description"
      class="field"
    />
    <h3>Where is your event?</h3>
    <BaseInput
      label="Location"
      v-model="event.location"
      type="text"
      placeholder="Location"
      class="field"
    />
    <h3>When is your event?</h3>
    <div class="field">
      <label>Date</label>
      <DatePicker v-model="event.date" placeholder="Select a date"/>
    </div>
    <BaseSelect
      label="Select Time"
      v-model="event.time"
      :options="times"
      :selected="option === value"
    />
    <BaseButton type="submit" buttonClass="-fill-gradient">Submit</BaseButton>
  </form>
</template>

<script>
import DatePicker from 'vuejs-datepicker'
import NProgress from 'nprogress'
import { required } from 'vuelidate/lib/validators'
export default {
  name: 'EventCreate',
  components: {
    DatePicker
  },
  data() {
    const times = []
    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createFreshEventObject()
    }
  },
  validations: {
    event: {
      category: { required },
      title: { required },
      description: { required },
      location: { required },
      date: { required },
      time: { required }
    }
  },
  methods: {
    createFreshEventObject() {
      const user = this.$store.state.user.user
      const id = Math.floor(Math.random() * 100000)
      return {
        id: id,
        user: user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      }
    },
    createEvent() {
      NProgress.start()
      this.$store
        .dispatch('event/createEvent', this.event)
        .then(() => {
          this.$router.push({
            name: 'event-show',
            params: { id: this.event.id }
          })
          this.event = this.createFreshEventObject
        })
        .catch(() => {
          NProgress.done()
        })
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
