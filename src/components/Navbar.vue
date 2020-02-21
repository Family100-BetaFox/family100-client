<template>
  <nav>
    <div class="message">Welcome to Arena</div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
  nav {
    position: fixed;
    width: 100%;
    height: 70px;
    background: #2c3e50;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    .message {
      display: inline-block;
      white-space: nowrap;
      animation: floatText 15s infinite linear;
      padding-left: 100%;

      &:hover {
        animation-play-state: paused;
      }
    }
  }

  @keyframes floatText {
    to {
      transform: translateX(-100%);
    }
  }
</style>
