import { useQuery } from '@tanstack/vue-query';
import { githubApi } from 'src/api/githubApi';
import { Issue } from '../interfaces/issue';

const getIssues = async (id: number): Promise<Issue> => {
    const { data } = await githubApi.get(`/issues/${id}`);
    return data;
}

const useIssue = (issueId: number) => {
    const issueQuery = useQuery({
        queryKey: ['issue', issueId],
        queryFn: () => getIssues(issueId)
    });

    return {
        issueQuery
    }
}

export default useIssue;