import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
   __typename?: 'Query';
  recipes?: Maybe<Array<Recipe>>;
};

/** Object representing cooking recipe */
export type Recipe = {
   __typename?: 'Recipe';
  id: Scalars['Float'];
  title: Scalars['String'];
};

export type GetRecipesQueryVariables = {};


export type GetRecipesQuery = (
  { __typename?: 'Query' }
  & { recipes?: Maybe<Array<(
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'id' | 'title'>
  )>> }
);


export const GetRecipesDocument = gql`
    query getRecipes {
  recipes {
    id
    title
  }
}
    `;

export function useGetRecipesQuery(options: Omit<Urql.UseQueryArgs<GetRecipesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetRecipesQuery>({ query: GetRecipesDocument, ...options });
};