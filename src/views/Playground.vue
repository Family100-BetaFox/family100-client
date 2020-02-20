<template>
  <div class="playground">
    <Navbar/>
    <div class="category-selection">
      <h1>Please select category </h1>
      <div class="question-category">
        <QuestionCategory v-for="(category, i) in categories" :key="i" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import QuestionCategory from '../components/QuestionCategory'
export default {
  name: 'Playground',
  components: {
    Navbar,
    QuestionCategory
  },
  data: () => ({
    categories: [
      {
        name: 'Logic'
      },
      {
        name: 'Riddle'
      },
      {
        name: 'General'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
  .category-selection {
    padding-top: 100px;
  }
</style>
