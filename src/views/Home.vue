<template>
  <div class="home">
    <iframe src="../assets/silence.mp3" allow="autoplay" id="audio" style="display: none"></iframe>
    <audio controls id="myVideo" autoplay loop hidden>
    <source src="../assets/openingTheme.mp3" type="audio/mp3">
      Your browser does not support the audio element.
    </audio>
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
  </div>
</template>

<script>
require('howler')

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
      _this.$router.push('/playground')
    })
    // function playSound () {
    //   var sound = new Howl({
    //     src: 'src/assets/opening.mp4',
    //     autoplay: true,
    //     loop: true,
    //     volume: 0.5
    //   })
    //   sound.play()
    // }
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
</style>
