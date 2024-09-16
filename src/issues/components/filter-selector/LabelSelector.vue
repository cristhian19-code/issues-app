<script setup lang="ts">
import useLabels from 'src/issues/componsables/useLabels';
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';

const { labelsQuery, toggleLabel, selectedLabels } = useLabels();
</script>

<template>
  <div class="q-mt-md">
    <LoaderSpinner v-if="labelsQuery.isLoading.value" class="q-my-md" size="50px" :show-text="false" />

    <q-chip v-else v-for="label of labelsQuery.data.value" @click="toggleLabel(label.name)" :key="label.id"
      :style="{ color: `#${label.color}` }" :outline="selectedLabels.includes(label.name)" clickable
      :label="label.name" />
  </div>
</template>

<style scoped></style>
