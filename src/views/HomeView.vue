<template>
  <div class="home" style="position: relative">
    <BaseButton :label="'Create Post'" @click="onCreatePost" />
    <BaseButton :label="'Fetch Post'" @click="onFetchPost" />
    <BaseButton :label="'Drone Object'" @click="onDronePage" />
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <PostItem v-for="(post, index) in posts" :key="index" :post="post" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BaseButton from "@/components/BaseButton.vue";
import PostItem from "@/components/PostItem.vue";
// import Drone from "./Drone.vue";

export default {
  name: "HomeView",
  components: {
    BaseButton,
    PostItem,
    // Drone,
  },
  computed: {
    ...mapGetters({
      isLoading: "getIsLoading",
      posts: "getPosts",
    }),
  },
  methods: {
    ...mapActions(["fetchPosts"]),
    onCreatePost() {
      this.$router.push({ name: "CreatePost" });
    },
    onFetchPost() {
      this.fetchPosts();
    },
    onDronePage() {
      this.$router.push("/drone-page");
    },
  },
};
</script>
