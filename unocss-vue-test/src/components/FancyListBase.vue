<script setup lang="ts">
defineProps<{
  list: { id: string; item: unknown }[];
}>();
</script>

<template>
  <ul>
    <li v-for="{ id, ...rest } in list" :key="id">
      <slot :item="rest"></slot>
    </li>
  </ul>
</template>
