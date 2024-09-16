import { useQuery } from '@tanstack/vue-query';
import { githubApi } from 'src/api/githubApi';

import { Label } from '../interfaces/label';
import { useIssuesStore } from 'src/stores/issues';
import { storeToRefs } from 'pinia';

const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubApi<Label[]>('labels', {
    params: {
      per_page: 100,
    },
  });

  return data;
};

const useLabels = () => {
  const issuesStore = useIssuesStore();

  const { labels } = storeToRefs(issuesStore);

  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
    gcTime: 1000 * 60 * 60, //1 hora
  });

  return {
    labelsQuery,

    // Getters
    selectedLabels: labels,

    // Methods
    toggleLabel: issuesStore.toggleLabel,
  };
};

export default useLabels;
