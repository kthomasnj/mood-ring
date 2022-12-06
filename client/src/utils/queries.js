import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      music {
        _id
        url
        genre
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      music {
        _id
        url
        genre
      }
    }
  }
`;

export const QUERY_MUSIC = gql`
  query getMusic {
    music {
        _id
        url
        genre
    }
  }
`;