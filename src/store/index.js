import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3000')

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    rooms: [],
    readyRooms: [],
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
      console.log(state.gameStart, state.readyRooms)
    }
  },
  actions: {
    fetchRoomsAsync (context) {
      socket.emit('fetchRooms')
      socket.on('showRooms', (rooms) => {
        this.commit('setRooms', rooms)
      })
    },
    compareAnswerAsync (context) {
      console.log(context.state.answer)
      // socket.emit('sendAnswer', (answer) => {

      // })
    },
    generatePlayground (context, roomId) {
      socket.emit('joinRoom', roomId)
    }
  }
})

export default store
