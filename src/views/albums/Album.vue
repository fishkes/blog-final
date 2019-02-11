<template>
  <app-page>
    <form @submit.prevent="submit" class="needs-validation" novalidate>
      <div class="form-group">
        <label>Title</label>
        <input
          type="text"
          class="form-control"
          placeholder="Album title"
          v-model="album.title"
        />
        <div class="text-danger" v-show="error.title">title is required.</div>
      </div>
      <div class="d-flex">
        <button type="submit" class="btn btn-primary mr-2">
          {{ isEdit ? "Update" : "Save" }}
        </button>
        <button
          v-if="isEdit"
          class="btn btn-danger"
          type="button"
          @click="deleteAlbum"
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
  name: "Album",
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
      const album = await this.$store.dispatch("albums/get", this.id);
      if (album && album[0]) {
        this.album = album[0];
      }
      this.setLoading(false);
    }
  },
  computed: {
    isEdit() {
      return this.id && this.id !== "new";
    }
  },
  data() {
    return {
      error: {
        title: false
      },
      album: {
        title: ""
      }
    };
  },
  methods: {
    async submit() {
      if (this.validate()) {
        this.setLoading(true);
        const message = `Album ${this.isEdit ? "Updated" : "Created"}`;
        try {
          await this.$store.dispatch("albums/save", this.album);
          this.showMessage(message);

          this.setLoading(false);
          this.$router.push({ name: "albums" });
        } catch (error) {
          this.showError(error.message, "Error saving album");
          this.setLoading(false);
        }
      }
    },
    async deleteAlbum() {
      try {
        this.setLoading(true);
        await this.$store.dispatch("albums/delete", this.album.id);
        this.showMessage("Album deleted");
        this.setLoading(false);
        this.$router.push({ name: "albums" });
      } catch (error) {
        this.showError(error.message, "Error deleting album");
        this.setLoading(false);
      }
    },
    validate() {
      let isValid = true;
      const attrs = ["title"];
      attrs.forEach(attr => {
        if (!this.album[attr]) {
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
