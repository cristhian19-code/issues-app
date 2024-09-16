import axios from 'axios';

export const githubApi = axios.create({
  baseURL: `https://api.github.com/repos/${process.env.GITHUB_REPO}/${process.env.GITHUB_USER}`,
  headers: {
    // Authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
});
