<template>
  <div class="edit-post-modal">
    <div>
      <label> Edit title</label>
      <BaseInutfield v-model="title" />
    </div>
    <div>
      <label> Edit body</label>
      <BaseInutfield v-model="body" />
    </div>
    <BaseButton :label="'submit Post'" @click="onSubmit" />
  </div>
</template>

<script>
import BaseInutfield from "./BaseInputfield.vue";
import BaseButton from "./BaseButton.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "EditPostModal",
  props: ["currentPostId"],
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
  },
  methods: {
    ...mapMutations(["UPDATE_POST"]),
    onSubmit() {
      this.UPDATE_POST({
        id: this.currentPostId,
        title: this.title,
        body: this.body,
      });
      this.$emit("on-close");
    },
  },
  mounted() {
    const post = this.posts.filter((post) => post.id == this.currentPostId);
    const { title, body } = post[0];
    this.title = title;
    this.body = body;
  },
};
</script>

<style scoped>
.edit-post-modal {
  border-radius: 12px;
  position: absolute;
  width: 400px;
  height: max-content;
  padding: 16px;
  background: #ccc;
  right: 0;
  left: 0;
  top: 8px;
  margin: 0 auto;
  z-index: 4;
}
</style>
