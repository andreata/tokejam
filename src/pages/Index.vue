<template>
  <Layout>
   <div>
      <h1 class="title-home">Benvenuto su TokeJam</h1>
      <p class="text-center">Se sei un imprenditore ecommerce, sai quanto sia importante ottimizzare il tuo sito per garantire un'esperienza utente
      eccellente e massimizzare le conversioni. Con alcuni semplici passi, puoi facilmente migliorare la tua presenza online e
      aumentare le vendite.<br>
      
      <strong>Milgiora il tuo eCommerce oggi per avere successo domani! </strong></p>
      
      <div class="container-box">
        <div class="item-box"  v-for="{ node } in $page.posts.edges" :key="node.id">
          <PostCardCategory  :post="node" />
        </div>
      </div>
      
      <CategoryQuery /> 
    
      <div>
        <h2 class="text-center"><span>Ultimi post</span></h2>
      </div>
      <div class="posts">
        <PostCard v-for="{ node } in $page.posts.edges" :key="node.id" :post="node"/>
      </div>

    </div>
  </Layout>
</template>

<page-query>

query  {

 posts(first:4, where: {orderby: {field: DATE, order: DESC}}) {
  	pageInfo {
			hasNextPage
      hasPreviousPage
      startCursor
      endCursor
		}
    edges {
      node {
        id
        title
        date
        link
        excerpt
        uri
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            slug
            mimeType
            mediaItemUrl
            altText
            mediaDetails {
              width
            }
          }
        }   
      }
    }
  }
}


</page-query>

<script>
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'
import PostBox from '~/components/PostBox.vue'
import PostCard from '~/components/PostCard.vue'
import CategoryQuery from '~/components/CategoryQuery.vue'
import Pagination from '~/components/Pagination.vue'
import CategoryHome from '~/components/CategoryHome.vue'
import PostCardCategory from '~/components/PostCardCategory.vue'

export default {
  components: {
    Pager,
    Post,
    PostBox,
    PostCard,
    CategoryQuery,
    Pagination,
    CategoryHome,
    PostCardCategory,
  },
 
   metaInfo () {
    return {
      title: 'Raggiungi il successo con le app di incontri',
      meta: [ 
      {
        description: 'Raggiungi il successo con le app di incontri',
        key: 'Raggiungi il successo con le app di incontri',
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'App di Incontri',
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'App di Incontri',
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'Raggiungi il successo con le app di incontri',
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Raggiungi il successo con le app di incontri',
      },
      {
        key: 'og:image',
        name: 'og:image',
        content: '',
      },
    ],
    }
  }
}

</script>

<style lang="scss" soped>
.title-home {
  text-align: center;
}
.container-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .item-box {
      padding: 3px;
  }
}
.carousel-cell {
  width: 100%;
}

@media screen and (max-width: 768px) {
  .container-box {
    flex-wrap: wrap;
  }
  .carousel-cell {
    width: 100%;
  }
}

.light {
  font-weight: 100;
}

</style>