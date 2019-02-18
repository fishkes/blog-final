<template>
  <app-page :title="title">
    <form @submit.prevent="submit" class="needs-validation" novalidate>
      <div class="form-group">
        <label>Title</label>
        <input
          data-test="post-title"
          type="text"
          class="form-control"
          placeholder="Post title"
          v-model="post.title"
        />
        <div class="text-danger" v-show="error.title">title is required.</div>
      </div>
      <div class="form-group">
        <label>Body</label>
        <textarea
          data-test="post-body"
          class="form-control"
          placeholder="Post body"
          v-model="post.body"
          :rows="rows"
        ></textarea>
        <div class="text-danger" v-show="error.body">body is required.</div>
      </div>
      <div class="d-flex">
        <button type="submit" class="btn btn-primary mr-2" data-test="save-btn">
          {{ isEdit ? "Update" : "Save" }}
        </button>
        <button
          v-if="isEdit"
          class="btn btn-danger"
          type="button"
          @click="deletePost"
          data-test="delete-btn"
        >
          Delete
        </button>
      </div>
    </form>
  </app-page>
</template>

<script>
import mixin from "@/mixins/commons";
export default {
  name: "Post",
  mixins: [mixin],
  props: {
    id: {
      type: [String, Number],
      default: null
    }
  },
  async created() {
    if (this.isEdit) {
      this.setLoading(true);
      const post = await this.$store.dispatch("posts/get", this.id);
      if (post) {
        this.post = post;
      }
      this.setLoading(false);
    }
  },
  computed: {
    rows() {
      if (this.post.body) {
        const match = this.post.body.match(/\w+$/gim);
        if (match) {
          return match.length > 3 ? match.length : 3;
        }
        return 3;
      }
      return 3;
    },
    isEdit() {
      return this.id && this.id !== "new";
    },
    title() {
      return this.isEdit ? "Update Post" : "Create Post";
    }
  },
  data() {
    return {
      error: {
        title: false,
        body: false
      },
      post: {
        title: "",
        body: ""
      }
    };
  },
  methods: {
    async submit() {
      if (this.validate()) {
        this.setLoading(true);
        const message = `Post ${this.isEdit ? "Updated" : "Created"}`;
        try {
          await this.$store.dispatch("posts/save", this.post);
          this.showMessage(message);

          this.setLoading(false);
          this.$router.push({ name: "posts" });
        } catch (error) {
          this.showError(error.message, "Error saving post");
          this.setLoading(false);
        }
      }
    },
    async deletePost() {
      try {
        this.setLoading(true);
        await this.$store.dispatch("posts/delete", this.post.id);
        this.showMessage("Post deleted");
        this.setLoading(false);
        this.$router.push({ name: "posts" });
      } catch (error) {
        this.showError(error.message, "Error deleting post");
        this.setLoading(false);
      }
    },
    validate() {
      let isValid = true;
      const attrs = ["title", "body"];
      attrs.forEach(attr => {
        if (!this.post[attr]) {
          this.error[attr] = true;
          isValid = false;
        } else {
          this.error[attr] = false;
        }
      });

      return isValid;
    }
  }
};
</script>

<style scoped></style>
