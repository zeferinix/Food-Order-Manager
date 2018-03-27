import gql from 'graphql-tag';
import { User } from '../models';

export interface GetCurrentLoggedInUserQueryResponse {
  User: User;
}

export const GetCurrentLoggedInUserQuery = gql`
  query getCurrentLoggedInUserQuery {
    User: me {
      id
      username
      hash
      first_name
      middle_name
      last_name
      full_name
      birthdate
      nickname
      email
      caption
      image
      confirmed
      created_at
      is_active
      last_active
    }
  }
`;
