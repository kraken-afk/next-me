export type pinnedReposType = {
  data: {
    user: {
      pinnedItems: {
        nodes: Array<{
          name: string;
          description: string;
          primaryLanguage: {
            color: string;
            name: string;
          };
          homepageUrl: string;
        }>;
      };
    };
  };
};

export function pinnedReposQueryBuilder(user: string): string {
  return `{
      user(login: "${user}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              primaryLanguage {
                color
                name
              }
              homepageUrl
            }
          }
        }
      }
    }`;
}
