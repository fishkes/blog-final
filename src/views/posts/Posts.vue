<template>
  <app-page>
    <div class="card mb-2">
      <div class="card-body d-flex justify-content-between align-items-center">
        <router-link
          class="btn btn-primary"
          :to="{ name: 'post', params: { id: 'new' } }"
          >Add Post</router-link
        >
        <div class="form-group mb-0">
          <input
            type="search"
            class="form-control"
            v-model="filter"
            placeholder="Search post by title..."
          />
        </div>
      </div>
    </div>

    <app-list :items="filteredPosts" @click="openPost">
      <template slot-scope="{ item: post }">
        <div
          class="author mr-3 d-flex justify-content-center align-items-center flex-column"
        >
          <div class="badge badge-warning py-4">{{ user.name }}</div>
        </div>
        <div class="media-body">
          <h5 class="mt-0 mb-1" v-text="post.title"></h5>
          <span>{{ post.body | trimmer }}</span>
          <div class="text-muted">{{ post.createDate | format }}</div>
        </div>
      </template>
    </app-list>
  </app-page>
</template>

<script>
import mixin from "@/mixins/commons";
export default {
  name: "Posts",
  mixins: [mixin],
  data() {
    return {
      filter: "",
      posts: []
    };
  },
  async created() {
    this.setLoading(true);
    try {
      this.posts = await this.getPosts();
      this.setLoading(false);
    } catch (error) {
      this.$notify({
        group: "message",
        type: "error",
        title: "Error getting posts",
        text: error.message
      });
      this.setLoading(false);
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    filteredPosts() {
      if (!this.filter) {
        return this.posts;
      }
      return this.posts.filter(item => item.title.match(this.filter));
    }
  },
  methods: {
    getPosts() {
      return this.$store.dispatch("posts/get");
    },
    openPost(post) {
      this.$router.push({ name: "post", params: { id: post.id } });
    }
  }
};
</script>
