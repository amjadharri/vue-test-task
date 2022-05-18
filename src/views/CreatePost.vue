<template>
  <div class="create-post">
    <div>
      <label> Enter title</label>
      <BaseInutfield v-model="title" />
    </div>
    <div>
      <label> Enter body</label>
      <BaseInutfield v-model="body" />
    </div>
    <BaseButton :label="'Add Post'" :disabled="isDisabled" @click="onAddPost" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BaseInutfield from "@/components/BaseInputfield.vue";
import BaseButton from "@/components/BaseButton.vue";
export default {
  name: "CreatePost",
  components: {
    BaseInutfield,
    BaseButton,
  },
  data() {
    return {
      title: "",
      body: "",
    };
  },
  computed: {
    ...mapGetters({
      posts: "getPosts",
    }),
    isDisabled() {
      return this.title == "" || this.body == "" ? true : false;
    },
  },
  methods: {
    ...mapActions(["addPost"]),
    onAddPost() {
      const id = this.posts.length + 1;
      this.addPost({ title: this.title, body: this.body, id });
      this.$router.push("/");
    },
  },
};
</script>
