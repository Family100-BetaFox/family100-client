<template>
  <div class="playground">
    <Navbar/>
    <div class="category-selection">
      <h1>Please select category</h1>
      <div class="form-input">
        <label>Username</label>
        <input class="input-username" type="text" name="username" v-model="username">
      </div>
      <div class="question-category">
        <QuestionCategory @sendRoom="getRoom" @joinRoom="joinRoom" :room="room" v-for="room in rooms" :key="room.id" />
      </div>
      <Loader message="Waiting for other players" v-if="isWaitingOtherPlayer"/>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import QuestionCategory from '../components/QuestionCategory'
import Loader from '../components/Loader'
import socket from '../config/socket'
export default {
  name: 'Playground',
  data: () => ({
    username: ''
  }),
  components: {
    Navbar,
    QuestionCategory,
    Loader
  },
  methods: {
    joinRoom (room) {
      const payload = {
        room,
        username: this.username
      }
      this.$store.dispatch('joinRoom', payload)
      this.$store.commit('SET_WAITING_OTHER_PLAYER', true)
    },
    fetchRooms () {
      this.$store.dispatch('fetchRoomsAsync')
    },
    fetchAnswer () {
      this.$store.dispatch('compareAnswerAsync')
    },
    enterRoom (room) {
      this.$store.dispatch('generatePlayground', room.id)
    },
    joinedRoom () {
      this.$store.dispatch('joinedRoom')
    },
    getRoom (room) {
      this.$store.dispatch('fetchPlayers', room)
    }
  },
  created () {
    this.fetchRooms()
    this.joinedRoom()
    this.$store.dispatch('getPlayers')

    socket.on('startingGame', (payload) => {
      this.$router.push('/battleplace')
    })
  },
  watch: {
    generalRoom (value) {
      if (value.length === 2) {
        this.$store.dispatch('preparingGame', value)
      }
    }
  },
  computed: {
    isWaitingOtherPlayer () {
      return this.$store.state.isWaitingOtherPlayer
    },
    rooms () {
      return this.$store.state.rooms
    },
    answer: {
      get () { return this.$store.state.answer },
      set (value) { this.$store.commit('setAnswer', value) }
    },
    gameStart () {
      return this.$store.state.gameStart
    },
    logicRoom () {
      return this.$store.state.logicRoom
    },
    generalRoom () {
      return this.$store.state.generalRoom
    },
    riddleRoom () {
      return this.$store.state.riddleRoom
    }
  }
}
</script>

<style lang="scss" scoped>
  .category-selection {
    padding-top: 70px;
    position: relative;
    h1 {
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }

  .form-input {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    label {
      font-size: 17px;
      margin-right: 20px;
      align-self: center;
    }
    .input-username {
      min-width: 200px;
      padding: 0.5rem 1rem;
      border: 1px solid #0D47A1;
      outline: none !important;
      border-radius: 5px;
      font-size: 15px;
    }
  }

  .question-category {
    padding-top: 20px;
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    justify-content: center;
  }
</style>
