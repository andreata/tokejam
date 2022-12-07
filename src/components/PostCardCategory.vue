<template>
  <div class="post-card content-box content-box-2">
    <div class="post-card__header">
       <g-image alt="Cover image" v-if="post.featuredImage" class="post-card__image" :src="post.featuredImage.node.mediaItemUrl" />
    </div>
    <div class="post-card__content">
      <div class="flex-meta">
        <p class="post-card__author" v-html="post.author.node.name" />
        <formated-date class="post-date date post-card__date" :date="post.date"/>
      </div>
      <h2 class="post-card__title" v-html="post.title" />
      <div class="post-card__description" v-html="post.excerpt.substring(0,100)+ '...'" />  
      <g-link class="post-card__link" :to="post.uri">Link</g-link> 
      <PostMeta class="post-card__meta" :post="post" />
      <PostTags class="post-card__tags" :post="post" />   
    </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import FormatedDate from "~/components/FormatedDate.vue"

export default {
  components: {
    PostMeta,
    PostTags,
    FormatedDate
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.container-box {
  .post-card {
    height: 100%;
    margin-bottom: 0;
  }
}
.container-box, .content-category {
  .post-card {
    &__header {
    max-height: 160px;
    }
  }
}
.post-card {
  margin-bottom: var(--space2);
  position: relative;
  .flex-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: calc(var(--space2) / 2);
  }
  &__author {
    font-size: 0.5rem;
    margin-bottom: 0;
  }
  &__date {
			font-size: 0.5rem;
			padding: 0.1rem 0.3rem;
			border: 1px solid var(--title-color);
			color: var(--title-color);
			max-width: fit-content;
			border-radius: var(--radius);	
		}

  &__header {
    margin-left: calc(var(--space2) * -1);
    margin-right: calc(var(--space2) * -1);
    margin-bottom: calc(var(--space2) / 2);
    margin-top: calc(var(--space2) * -1);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
    @media screen and (max-width: 768px) {
      margin-left: calc(var(--space2) * -0.5);
      margin-right: calc(var(--space2) * -0.5);
    }
    &:empty {
      display: none;
    }
  }
  &__image {
    min-width: 100%;
  }
  &__title {
    margin-top: 0;
    font-size: 95%;
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0,0,0,.1);
  }
  &__tags {
    z-index: 1;
    position: relative;
  }
  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
  &__description {
    font-size: 13px;
  }
}
</style>
