<script setup lang="ts">
import IssueCard from 'src/issues/components/issue-list/IssueCard.vue';

import { Issue } from 'src/issues/interfaces/issue';

interface Props {
  issues: Issue[];
}

const props = defineProps<Props>();
</script>

<template>
  <div class="row">
    <IssueCard v-for="issue of props.issues" :key="issue.id" :issue="issue" />
  </div>
</template>


<style scoped></style>
