<script setup lang="ts">
import FancyList, { type Item } from "./components/FancyList.vue";
import { ref } from "vue";

type ListItem = Item<{ item: string }>;

const list: ListItem[] = [
  { id: "0", item: "a" },
  { id: "1", item: "b" },
  { id: "2", item: "c" },
];
</script>

<template>
  <fancy-list :list="list">
    <template v-slot="prop: ListItem">
      {{ prop.item }}
    </template>
  </fancy-list>
</template>

<style scoped></style>
