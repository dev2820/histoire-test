<script setup lang="ts">
import { PropType, computed } from "vue";
import { Theme } from "./types";
console.log("WTag setup");

const props = defineProps({
  text: String,
  theme: String as PropType<Theme>,
});

const style = () => {
  return {
    [props.theme ?? "light"]: true,
  };
};
</script>

<template>
  <p class="text" :class="style()">The brown fox jumps over the lazy dog</p>
</template>

<style scoped>
.text {
  --at-apply: text-3rem font-bold leading-100% underline;
}

.dark {
  color: red;
}
.light {
  color: blue;
}
</style>
