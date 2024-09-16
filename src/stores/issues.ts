import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useIssuesStore = defineStore('issues', () => {
  const state = ref(''); // all = '' , open , closed
  const labels = ref<string[]>([]);

  return {
    state,
    labels,

    // Actions

    toggleLabel(labelName: string) {
      if (labels.value.includes(labelName)) {
        labels.value = labels.value.filter((label) => label !== labelName);
        return;
      }

      labels.value.push(labelName);
    },
  };
});
