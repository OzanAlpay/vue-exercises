import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: '123', name: 'Ozan Alpay' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: []
  },
  mutations: {
    CREATE_EVENT(state, event) {
      state.events.push(event)
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('CREATE_EVENT', event)
      })
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
