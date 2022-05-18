<template>
  <div class="post-details">
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <h2>Post ID {{ post.id }}</h2>
      <p>{{ post.title }}</p>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "PostDetails",
  computed: {
    ...mapGetters({
      isLoading: "getIsLoading",
      post: "getPost",
    }),
  },
  methods: {
    ...mapActions(["fetchPosts", "fetchPost"]),
    async init() {
      const postId = await this.$route.params.postId;
      if (postId) {
        await this.fetchPosts();
        await this.fetchPost({ postId });
      }
    },
  },
  created() {
    this.init();
  },
};
</script>
