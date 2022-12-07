<template>
  <div>
    <categories-widget class="mb-5 cat-side"/>
    <tags-widget class="mb-5"/>
  </div>
</template>


<script>
import TagsWidget from '~/components/TagsWidget.vue'
import CategoriesWidget from '~/components/CategoriesWidget.vue'
import SearchWordPress from '~/components/SearchWordPress.vue'

export default {
  components: {
    TagsWidget,
    CategoriesWidget,
    SearchWordPress
  }
}
</script>

<style scoped>

</style>