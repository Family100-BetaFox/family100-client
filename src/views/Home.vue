<template>
  <div class="home">
    <div class="rooms" v-for="room in rooms" v-bind:key="room.id">
      <h1>room {{ room.name }}</h1>
      <button v-on:click="enterRoom(room.id)">MASUK GAN</button>
    </div>
    <form v-on:submit.prevent="fetchAnswer">
      <input type="text" v-model="answer">
      <button type="submit">JAWAB!</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    rooms () {
      return this.$store.state.rooms
    },
    answer: {
      get () { return this.$store.state.answer },
      set (value) { this.$store.commit('setAnswer', value) }
    }
  },
  methods: {
    fetchRooms () {
      this.$store.dispatch('fetchRoomsAsync')
    },
    fetchAnswer () {
      this.$store.dispatch('compareAnswerAsync')
    },
    enterRoom (roomId) {
      this.$store.dispatch('generatePlayground', roomId)
    }
  },
  created () {
    this.fetchRooms()
  }
}
</script>

<style scoped>

.home{
  display: flex;
}

.rooms{
  background-color: aqua;
  margin: 1rem;
  padding: 1rem
}

</style>
