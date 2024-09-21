import { useQuery } from '@tanstack/vue-query';
import { Issue } from '../interfaces/issue';
import { githubApi } from 'src/api/githubApi';

const getIssues = async (): Promise<Issue[]> => {
    const params = new URLSearchParams();

    params.append('per_page', '10');

    const { data } = await githubApi.get('/issues', {
        params
    })

    return data;
}

const useIssues = () => {
    const issuesQuery = useQuery({
        queryKey: ['issues'],
        queryFn: getIssues
    });

    return {
        issuesQuery
    }
}

export default useIssues;