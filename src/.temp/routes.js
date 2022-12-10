const c1 = () => import(/* webpackChunkName: "page--src--templates--word-press-post-tag-vue" */ "/Applications/MAMP/htdocs/tokejam/src/templates/WordPressPostTag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--word-press-category-vue" */ "/Applications/MAMP/htdocs/tokejam/src/templates/WordPressCategory.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--word-press-post-vue" */ "/Applications/MAMP/htdocs/tokejam/src/templates/WordPressPost.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Applications/MAMP/htdocs/tokejam/node_modules/gridsome/app/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Applications/MAMP/htdocs/tokejam/src/pages/Index.vue")

export default [
  {
    path: "/tag/test/",
    component: c1
  },
  {
    path: "/category/uncategorized/",
    component: c2
  },
  {
    path: "/category/blog/",
    component: c2
  },
  {
    path: "/il-metaverso/",
    component: c3
  },
  {
    path: "/come-rendere-veloce-un-e-commerce/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
