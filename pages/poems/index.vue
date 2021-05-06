<script>
export default {
  middleware({ redirect }) {
    return redirect("301", "/poems/page/1");
  },
};
</script>