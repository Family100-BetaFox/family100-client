import Vue from 'vue'
import Vuex from 'vuex'
// import io from 'socket.io-client'
// const socket = io.connect('http://localhost:3000')

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // room1: {
    //   id: '',
    //   name: '',
    //   players: 0
    // },
    // room2: {
    //   id: '',
    //   name: '',
    //   players: 0
    // },
    // room3: {
    //   id: '',
    //   name: '',
    //   players: 0
    // },
    // answer: '',
    // gameStart: false
  },
  mutations: {
    // setRooms (state, params) {
    //   state.rooms = params
    //   for (var room of params) {
    //     if (room.id === 1) {
    //       state.room1.id = room.id
    //       state.room1.name = room.name
    //     }
    //     if (room.id === 2) {
    //       state.room2.id = room.id
    //       state.room2.name = room.name
    //     }
    //     if (room.id === 3) {
    //       state.room3.id = room.id
    //       state.room3.name = room.name
    //     }
    //   }
    // },
    // setAnswer (state, params) {
    //   state.answer = params
    // },
    // setPlayer (state, params) {
    //   if (params === 1) {
    //     state.room1.players++
    //   }
    //   if (params === 2) {
    //     state.room2.players++
    //   }
    //   if (params === 3) {
    //     state.room3.players++
    //   }
    // }
  },
  actions: {
    // fetchRoomsAsync (context) {
    //   socket.emit('fetchRooms')
    //   socket.on('showRooms', (rooms) => {
    //     this.commit('setRooms', rooms)
    //   })
    // },
    // compareAnswerAsync (context) {
    //   console.log(context.state.answer)
    //   // socket.emit('sendAnswer', (answer) => {

    //   // })
    // },
    // generatePlayground (context, roomId) {
    //   socket.emit('joinRoom', roomId)
    //   socket.on('someoneJoined', (roomId) => {
    //     this.commit('setPlayer', roomId)
    //   })
    // }
  }
})

export default store
