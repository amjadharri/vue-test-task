<template>
  <button class="base-button" @click="onClick" :disabled="disabled">
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    label: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.base-button {
  background: transparent;
  padding: 6px 8px;
  border-radius: 20px;
  cursor: pointer;
  text-transform: capitalize;
  margin: 2px;
}
</style>
