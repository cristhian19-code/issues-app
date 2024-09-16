<script setup lang="ts">
import { useIssuesStore } from 'src/stores/issues';

const issueStore = useIssuesStore();


const options = [
  { label: 'All', value: '' },
  { label: 'Open', value: 'open' },
  { label: 'Closed', value: 'closed' }
]
</script>

<template>
  <div>
    <q-btn-toggle v-model="issueStore.state" push toggle-color="primary" :options="options" />
  </div>
</template>

<style scoped></style>
