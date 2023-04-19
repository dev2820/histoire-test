<script setup lang="ts">
import WTag from "./components/WTag/WTag.vue";
import { ref } from "vue";
import { Theme } from "./components/WTag/types";
console.log("app setup");
const text = "hi";
const theme = ref<Theme>("light");

setTimeout(() => {
  theme.value = "dark";
  console.log("change");
}, 5000);
</script>

<template>
  <w-tag :text="text" :theme="theme"></w-tag>
</template>

<style scoped></style>
