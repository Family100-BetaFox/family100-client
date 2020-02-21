<template>
  <a @click="joinRoom(room)" class="question-board hvr-grow-rotate">
    <div class="question-board-content"
      :class="room.name === 'General Topic' ? 'general' :
      room.name === 'Logic Topic' ? 'logic' : 'riddle' ">
      {{ room.name }}
    </div>
  </a>
</template>

<script>
export default {
  name: 'QuestionCategory',
  props: {
    room: Object
  },
  methods: {
    joinRoom (room) {
      this.$emit('joinRoom', room)
    }
  },
  created () {
    this.$emit('sendRoom', this.room)
  }
}
</script>

<style lang="scss" scoped>
  .question-board {
    cursor: pointer;
    display: inline-block;
    &-content {
      width: 300px;
      height: 100px;
      background: #ccc;
      margin: 0 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;

      &.logic {
        background: #E53935
      }

      &.general {
        background: #43A047
      }

      &.riddle {
        background: #FFB300;
      }
    }
  }

.hvr-grow-rotate {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
    &:hover, &:focus, &:active {
      -webkit-transform: scale(1) rotate(5deg);
      transform: scale(1) rotate(5deg);
    }
}
</style>
