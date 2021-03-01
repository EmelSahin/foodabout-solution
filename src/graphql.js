import gql from 'graphql-tag'

export const TOKEN_AUTH = gql`
  mutation tokenAuth($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
      user {
        id
        firstName
        lastName
        email
        phone
        role
      }
      refreshExpiresIn
    }
  }
`
export const CUISINES = gql`
  query cuisines {
    cuisines {
      id
      name
      icon
      order
    }
  }
`
export const BANNERS = gql`
query banners {
  banners {
    id
    bannerType
    title
    text
    image
    icon
    order
  }
}`
export const RESTAURANTS = gql`
query restaurants($approveStatus: ApproveStatuses) {
  restaurants(approveStatus: $approveStatus) {
    id
    restaurantChain {
      id
      name
      logo
    }
    users {
      id
      firstName
      lastName
      role
    }
    name
    logo
    email
    phone
    mobile
    address
    zipcode
    city
    latitude
    longitude
    approveStatus
    rejectReason
    cuisines {
      id
      name
      icon
    }
    estimatedDeliveryTime
  }
}

`
export const MENUS = gql`
  query menus($approveStatus: ApproveStatuses) {
    menus(approveStatus: $approveStatus) {
      id
      name
      description
      language
      photo
      approveStatus
      rejectReason
    }
  }
`
export const MENU_CATEGORIES = gql`
  query menuCategories($approveStatus: ApproveStatuses) {
    menuCategories(approveStatus: $approveStatus) {
      id
      name
      approveStatus
      rejectReason
    }
  }
`
export const MENU_ITEMS = gql`
  query menuItems($approveStatus: ApproveStatuses) {
    menuItems(approveStatus: $approveStatus) {
      id
      name
      internalName
      description
      deliveryPrice
      inStorePrice
      taxRate
      photo
      approveStatus
      rejectReason
      optionGroups {
        id
        name
        description
        options {
          id
          name
          price
          taxRate
        }
      }
    }
  }
`
export const RESTAURANT_FEEDBACKS = gql`
  query restaurantFeedbacks($approveStatus: ApproveStatuses) {
    restaurantFeedbacks(approveStatus: $approveStatus) {
      id
      date
      speed
      service
      taste
      comment
      approveStatus
      rejectReason
    }
  }
`
export const ABOUT_USES = gql`
query aboutUses {
  aboutUses {
    id
    title
    summary
    body
    order
  }
}
`
export const CONTACTS = gql`
query contacts {
  contacts {
    id
    name
    phone
    fax
    mobile
    email
    address
  }
}`
export const FAQS = gql`
query faqs {
  faqs {
    id
    question
    answer
    order
  }
}`

export const LEGALS = gql`
query legals {
  legals {
    id
    title
    summary
    body
    order
  }
}`