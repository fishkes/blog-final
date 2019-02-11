export default {
  methods: {
    setLoading(state) {
      this.$store.dispatch("setLoading", state);
    },
    showError(text = "An error occured", title = "Error") {
      this.$notify({
        group: "message",
        type: "error",
        title,
        text
      });
    },
    showMessage(text = "", title = "", type = "success") {
      this.$notify({
        group: "message",
        type,
        title,
        text
      });
    }
  }
};
