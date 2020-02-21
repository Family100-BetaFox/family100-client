import Vue from 'vue'
import Vuex from 'vuex'
// import io from 'socket.io-client'
import socket from '../config/socket'
// const socket = io.connect('http://localhost:3000')

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    questions: [],
    answer: '',
    score: 0,
    trueAnswer: [],
    gameStart: false,
    isWaitingOtherPlayer: false,
    logicRoom: [],
    generalRoom: [],
    player: {},
    riddleRoom: []
  },
  mutations: {
    setQuestions (state, params) {
      state.questions = params
    },
    setAnswer (state, params) {
      state.answer = params
    },
    setScore (state, params) {
      state.score += params
    },
    trueAnswer (state, params) {
      state.trueAnswer.push(params)
    }
  },
  actions: {
    fetchQuestionsAsync (context) {
      socket.emit('fetchQuestions')
      socket.on('showQuestions', (questions) => {
        context.commit('setQuestions', questions)
      })
    },
    setPlayground (state, params) {
      state.readyRooms = params.obj
      if (params.playerEnough) state.gameStart = params.playerEnough
      console.log(state.gameStart, state.readyRooms)
    },
    SET_LOGIC_ROOM (state, payload) {
      state.logicRoom = payload
    },
    SET_GENERAL_ROOM (state, payload) {
      state.generalRoom = payload
    },
    SET_RIDDLE_ROOM (state, payload) {
      state.riddleRoom = payload
    },
    SET_GAME_START (state, payload) {
      state.gameStart = payload
    },
    SET_WAITING_OTHER_PLAYER (state, payload) {
      state.isWaitingOtherPlayer = payload
    },
    SET_PLAYER (state, payload) {
      state.player = payload
    },
    SET_ROOM (state, payload) {
      const filtered = state.rooms.filter((room) => room.id === payload.room_id)
      const room = filtered[0]
      switch (room.name) {
        case 'General Topic':
          state.generalRoom.push(payload)
          break
        case 'Logic Topic':
          state.logicRoom.push(payload)
          break
        case 'Riddle Topic':
          state.riddleRoom.push(payload)
          break
      }
    }
  },
  actions: {
    joinRoom ({ commit, state }, payload) {
      socket.emit('joinRoom', payload)
    },
    joinedRoom ({ commit, state }) {
      socket.on('joinedUser', (payload) => {
        commit('SET_ROOM', payload)
      })
    },
    preparingGame ({ commit }, payload) {
      commit('SET_GAME_START', payload)
      socket.emit('gameStart', payload)
    },
    // startGame ({ commit }, payload) {
    //   socket.on('startingGame', () => {

    //   })
    // },
    fetchPlayers ({ commit }, payload) {
      socket.emit('fetchPlayers', payload)
    },
    fetchRoomsAsync (context) {
      socket.emit('fetchRooms')
      socket.on('showRooms', (rooms) => {
        this.commit('setRooms', rooms)
      })
    },
    getPlayers ({ commit }) {
      socket.on('getPlayers', (payload) => {
        const { players, room } = payload
        switch (room.name) {
          case 'General Topic':
            commit('SET_GENERAL_ROOM', players)
            break
          case 'Logic Topic':
            commit('SET_LOGIC_ROOM', players)
            break
          case 'Riddle Topic':
            commit('SET_RIDDLE_ROOM', players)
            break
        }
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
