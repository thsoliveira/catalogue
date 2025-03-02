import { gql } from "@apollo/client/core";

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
      slug
      products {
        id
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query GetProducts($where: CategoryWhereUniqueInput!) {
    category(where: $where) {
      name
      products {
        name
        slug
        description { text }
        image { url }
        price
        category {
          name
          slug
        }
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($where: ProductWhereUniqueInput!) {
    product(where: $where) {
      name
      slug
      image {
        url
      }
      description {
        text
      }
      price
      category {
        products(first: 3) {
          slug
          name
          image {
            url
          }
        }
      }
    }
  }
`;

export const SEARCH_ITEMS = gql`
  query SearchItems($query: String!) {
    products(where: { name_contains: $query }) {
      name
      slug
      description {
        text
      }
      image {
        url
      }
      price
    }
    categories(where: { name_contains: $query }) {
      name
      slug
    }
  }
`;
