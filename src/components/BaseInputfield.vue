<template>
  <input
    class="input-field"
    type="text"
    :placeholder="placeholder"
    v-model="inputValue"
    @input="onInput"
  />
</template>

<script>
export default {
  name: "BaseInutfield",
  props: {
    placeholder: {
      type: String,
      default: "Enter value..",
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
<style scoped>
.input-field {
  padding: 4px;
  border-radius: 24px;
  /* border: none; */
  height: 30px;
  margin: 8px;
}
.input-field::placeholder {
  padding-left: 4px;
}
</style>
