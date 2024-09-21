<script setup lang="ts">
import { useRoute } from 'vue-router';

import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import IssueCard from '../components/issue-list/IssueCard.vue';
import useIssue from '../componsables/useIssue';

const route = useRoute();

const { id } = route.params;

const { issueQuery } = useIssue(Number(id))
</script>

<template>
  <div>
    <LoaderSpinner color="white" />
    <router-link to="/">Go Back</router-link>

    <!-- Header -->
    <IssueCard :issue="issueQuery.data.value" />

    <!-- Comentarios -->
    <LoaderSpinner :thickness="2" size="1.5rem" :show-text="false" />

    <div class="column">
      <span class="text-h3 q-mb-md">Coments (5)</span>
      <!-- <IssueCard v-for="comment of 5" :key="comment" /> -->
    </div>
  </div>
</template>


<style scoped></style>
