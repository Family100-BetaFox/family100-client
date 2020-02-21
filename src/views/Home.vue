<template>
  <div class="home">
    <div class="image-background">
      <img class="quiz-image" alt="Quiz" src="../assets/children.jpg">
    </div>
    <div class="jumbotron">
      <h1>Are you smarter than them ?</h1>
      <div class="jumbotron-info">
        <h2>Test your knowledge and get the highest score</h2>
      </div>
      <div class="start-game">
        <div class="animated infinite bounce delay-2s">
          <a>Press any key to continue</a>
        </div>
      </div>
    </div>
    <a href="/battleplace">Go to Battle Place!!</a>
  </div>
</template>

<script>
export default {
  // data () {
  //   return {
  //     room1Playing: false,
  //     room2Playing: false,
  //     room3Playing: false
  //   }
  // },
  name: 'Home',
  // computed: {
  //   room1 () {
  //     return this.$store.state.room1
  //   },
  //   room2 () {
  //     return this.$store.state.room2
  //   },
  //   room3 () {
  //     return this.$store.state.room3
  //   },
  //   answer: {
  //     get () { return this.$store.state.answer },
  //     set (value) { this.$store.commit('setAnswer', value) }
  //   },
  //   gameStart () {
  //     return this.$store.state.gameStart
  //   }
  // },
  // methods: {
  //   fetchRooms () {
  //     this.$store.dispatch('fetchRoomsAsync')
  //   },
  //   fetchAnswer () {
  //     this.$store.dispatch('compareAnswerAsync')
  //   },
  //   enterRoom (roomId) {
  //     this.$store.dispatch('generatePlayground', roomId)
  //   }
  // },
  // created () {
  //   this.fetchRooms()
  // },
  mounted () {
    const _this = this
    window.addEventListener('keypress', function (e) {
      _this.$router.push('/about')
    })
  }
}
</script>
<style lang="scss" scoped>

  .home {
    width: 100%;
    text-align: center;
  }

  .start-game {
    padding-top: 5rem;
  }

  .rooms{
    background-color: aqua;
    margin: 1rem;
    padding: 1rem
  }

  .jumbotron {
    color: #fff;
    padding-top: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 80vh;
    &-info {
      h2 {
        padding-top: 5rem;
        font-weight: bolder;
        letter-spacing: 1.5px;
        color: #ccc;
      }
    }
  }

  .image-background {
    position: relative;
    .quiz-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      filter: brightness(55%);
      z-index: -1000;
    }
  }

// export default {
//   name: 'Home',
//   computed: {
//     rooms () {
//       return this.$store.state.rooms
//     },
//     answer: {
//       get () { return this.$store.state.answer },
//       set (value) { this.$store.commit('setAnswer', value) }
//     }
//   },
//   methods: {
//     fetchRooms () {
//       this.$store.dispatch('fetchRoomsAsync')
//     },
//     fetchAnswer () {
//       this.$store.dispatch('compareAnswerAsync')
//     },
//     enterRoom (roomId) {
//       this.$store.dispatch('generatePlayground', roomId)
//     }
//   },
//   created () {
//     this.fetchRooms()
//   }
// }
// </script>

// <style scoped>

// .home{
//   display: flex;
// }

// .rooms{
//   background-color: aqua;
//   margin: 1rem;
//   padding: 1rem
// }
</style>
