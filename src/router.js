import Vue from "vue";
import Router from "vue-router";
import Posts from "./views/posts/Posts.vue";
import Albums from "./views/albums/Albums.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "posts",
      component: Posts
    },
    {
      path: "/posts/:id",
      name: "post",
      props: true,
      component: () =>
        import(/* webpackChunkName: "post" */ "./views/posts/Post.vue")
    },
    {
      path: "/albums",
      name: "albums",
      component: () =>
        import(/* webpackChunkName: "albums" */ "./views/albums/Albums.vue")
    },
    {
      path: "/albums/:id",
      name: "album",
      props: true,
      component: () =>
        import(/* webpackChunkName: "album" */ "./views/albums/Album.vue")
    }
  ]
});
