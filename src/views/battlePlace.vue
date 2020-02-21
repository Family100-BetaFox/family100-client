<template>
  <div>
    <div id="main-battleground">
      <div id="question">
        <h1>
          {{question}}
        </h1>
      </div>
      <div id="input-answer">
        <form v-if="!readMode">
          <input type="text">
          <button type="submit">submit answer</button>
        </form>
        <form v-if="readMode">
          <div id="loader">read the question carefully</div>
        </form>
      </div>
    </div>
    <div class="base-timer">
      <div v-if="readMode" class="inner-circle">
        ...
      </div>
      <div v-if="!readMode" class="inner-circle">
        {{initialTime}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      questions: ['apa', 'siapa', 'mengapa', 'dimana', 'kapan', 'apa', 'siapa', 'mengapa', 'dimana', 'kapan'],
      initialTime: 'GO',
      question: 'apa',
      readMode: true,
      index: 0
    }
  },
  methods: {
    clearTime () {
      this.initialTime = 'GO'
      this.index++
      if (this.index === this.questions.length) this.index = 0
      this.question = this.questions[this.index]
      this.readMode = true
    },
    countDown () {
      setInterval(() => {
        if (this.initialTime === 'GO') {
          this.initialTime = 13
        } else if (this.initialTime > 11) {
          this.initialTime--
        } else {
          this.initialTime--
          this.readMode = false
          if (this.initialTime === 0) {
            this.clearTime()
          }
        }
      }, 1000)
    }
  },
  created () {
    this.countDown()
  }
}
</script>

<style scoped>

.base-timer {
  color: white;
  font-size: 15rem;
  display: flex;
  position: fixed;
  bottom: 0;
  width: 16.5rem;
}

.inner-circle {
  width: 100%;
  background-color: #71afaf;
  border-radius: 50%;
  height: 18rem;
}

div#main-battleground {
  height: 100vh;
}

#loader{
  color: rgb(179, 179, 179);
  animation: loading 4s;
}

div#question {
  width: 75vw;
  height: 30%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

div#input-answer {
  height: 30%;
  width: 75vw;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  width: 50%;
}

input[type="text"] {
  padding: 0.5rem;
  font-family: inherit;
  font-size: 20pt;
  color: #909090;
  outline: 0;
}

input[type="text"]:focus {
  animation: shaking .1s infinite;
  border-style: groove;
}

button {
  width: 38%;
  height: 2rem;
  margin: 1rem auto;
  cursor: pointer;
  font-family: inherit;
  border-style: ridge;
  border-radius: 0.5rem;
}

button:hover {
  animation: ease-in .5s infinite;
}

@keyframes shaking {
  0%{
    box-shadow: 0 0 0rem rgba(255, 0, 0, 0.685)
  }
  50%{
    box-shadow: 0 0 1rem rgba(255, 0, 0, 0.685)
  }
  100%{
    box-shadow: 0 0 0.5rem rgba(255, 0, 0, 0.685)
  }
}

@keyframes loading {
  0%{
    opacity: 0;
    transform: scale(1)
  }
  12.5%{
    transform: scale(1.5)
  }
  25%{
    transform: scale(1)
  }
  32.5%{
    transform: scale(1.5)
  }
  50%{
    opacity: 1;
    transform: scale(1)
  }
  62.5%{
    transform: scale(1.5)
  }
  75%{
    transform: scale(1)
  }
  87.5%{
    transform: scale(1.5)
  }
  100%{
    opacity: 0;
    transform: scale(1)
  }
}

@keyframes ease-in {
  0%{
    transform: rotateZ(0deg)
  }
  25%{
    transform: rotateZ(-3deg)
  }
  50%{
    transform: rotateZ(0deg)
  }
  75% {
    transform: rotateZ(3deg)
  }
  100%{
    transform: rotateZ(0deg)
  }
}

</style>
