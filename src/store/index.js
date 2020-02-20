import Vue from 'vue'
import Vuex from 'vuex'
// import io from 'socket.io-client'
// const socket = io.connect('http://localhost:3000')

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    rooms: [],
    readyRooms: {},
    answer: '',
    gameStart: false
  },
  mutations: {
    setRooms (state, params) {
      state.rooms = params
    },
    setAnswer (state, params) {
      state.answer = params
    },
    setPlayground (state, params) {
      state.readyRooms = params.obj
      if (params.playerEnough) state.gameStart = params.playerEnough
      console.log(state.readyRooms, state.gameStart)
    }
  },
  actions: {
    fetchRoomsAsync (context) {
      const rooms = [{ id: 1, name: 'ipa' }, { id: 2, name: 'matematika' }]
      this.commit('setRooms', rooms)
      // socket.on('roomCreated', (room) => {

      // })
    },
    compareAnswerAsync (context) {
      console.log(context.state.answer)
      // socket.emit('sendAnswer', (answer) => {

      // })
    },
    generatePlayground (context, roomId) {
      const obj = context.state.readyRooms
      var playerEnough = false
      if (!obj[roomId]) {
        obj[roomId] = 1
      } else {
        for (const key in obj) {
          if (!obj[roomId]) obj[roomId] = 1
          if (+key === roomId) obj[key]++
        }
      }
      this.commit('setPlayground', { obj, playerEnough })
    }
  }
})

export default store
