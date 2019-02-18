<template>
  <app-page title="Albums">
    <div class="card mb-2">
      <div class="card-body d-flex justify-content-between align-items-center">
        <router-link
          class="btn btn-primary"
          :to="{ name: 'album', params: { id: 'new' } }"
          >Add Album</router-link
        >
        <div class="form-group mb-0">
          <input
            type="search"
            class="form-control"
            v-model="filter"
            placeholder="Search album by title..."
          />
        </div>
      </div>
    </div>

    <app-list :items="filteredAlbums" @click="openAlbum">
      <template slot-scope="{ item: album }">
        <div class="media-body">
          <h5 class="mt-0 mb-1" v-text="album.title"></h5>
          <div class="text-muted">{{ album.createDate | format }}</div>
        </div>
        <div
          class="author ml-3 d-flex justify-content-center align-items-center flex-column"
        >
          <div class="badge badge-success py-4">{{ user.name }}</div>
        </div>
      </template>
    </app-list>
  </app-page>
</template>

<script>
import mixin from "@/mixins/commons";
export default {
  name: "Albums",
  mixins: [mixin],
  data() {
    return {
      filter: "",
      albums: []
    };
  },
  async created() {
    this.setLoading(true);
    try {
      this.albums = await this.getAlbums();
      this.setLoading(false);
    } catch (error) {
      this.$notify({
        group: "message",
        type: "error",
        title: "Error getting albums",
        text: error.message
      });
      this.setLoading(false);
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    filteredAlbums() {
      if (!this.filter) {
        return this.albums;
      }
      return this.albums.filter(item => item.title.match(this.filter));
    }
  },
  methods: {
    getAlbums() {
      return this.$store.dispatch("albums/get");
    },
    openAlbum(album) {
      this.$router.push({ name: "album", params: { id: album.id } });
    }
  }
};
</script>
