<template>
  <aside>
    <h2 class="mb-3 font-family-sans-serif h4 no-border">Categorie</h2>
    <ul>
      <li class="cat-side" v-for="{ node } in $static.categories.edges" :key="node.slug">
        <g-link :to="node.uri">{{ node.name }} ({{ node.count }})</g-link>
      </li>
    </ul>
  </aside>
</template>

<static-query>
query GetCategoryEdges {
  categories {
    edges {
      node {
        id
        name
        slug
        count
        link
        uri
      }
    }
  }
}

</static-query>

<style lang="scss" scoped>
.cat-side {
  font-size: 14px;
}
.no-border {
  border: 0;
}
</style>