<script setup lang="ts">
// import { useRoute } from 'vue-router';

import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import IssueCard from '../components/issue-list/IssueCard.vue';

// const route = useRoute();

// const { id } = route.params;


</script>

<template>
  <div>
    <LoaderSpinner color="white" />
    <router-link to="/">Go Back</router-link>

    <!-- Header -->
    <IssueCard />

    <!-- Comentarios -->
    <LoaderSpinner :thickness="2" size="1.5rem" :show-text="false" />

    <div class="column">
      <span class="text-h3 q-mb-md">Coments (5)</span>
      <IssueCard v-for="comment of 5" :key="comment" />
    </div>
  </div>
</template>


<style scoped></style>
