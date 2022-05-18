<template>
  <div class="post">
    <span>{{ post.title }} {{ post.id }}</span>
    <div>
      <BaseButton :label="'View Post'" @click="onViewPostDetails(post.id)" />
      <BaseButton :label="'Eidt Post'" @click="onEditPost(post.id)" />
      <BaseButton :label="'Remove Post'" @click="onRemovePost(post.id)" />
    </div>
    <EditPostModal
      v-if="isEditable"
      :currentPostId="currentPostId"
      @on-close="isEditable = !isEditable"
    />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import BaseButton from "@/components/BaseButton.vue";
import EditPostModal from "@/components/EditPostModal.vue";
export default {
  name: "PostItem",
  props: ["post"],
  components: {
    BaseButton,
    EditPostModal,
  },
  data() {
    return {
      isEditable: false,
      currentPostId: null,
    };
  },
  methods: {
    ...mapMutations(["REMOVE_POST"]),
    onViewPostDetails(id) {
      this.$router.push({ name: "PostDetails", params: { postId: id } });
    },
    onRemovePost(id) {
      this.REMOVE_POST({ postId: id });
    },
    onEditPost(id) {
      this.isEditable = true;
      this.currentPostId = id;
    },
  },
};
</script>

<style scoped>
.post {
  box-shadow: 1px 1px 1px 1px #ccc;
  padding: 8px 10px;
  margin: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
