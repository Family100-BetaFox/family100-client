import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3000')

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    questions: [],
    answer: '',
    score: 0,
    trueAnswer: []
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
    }
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
