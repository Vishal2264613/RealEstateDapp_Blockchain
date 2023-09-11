const { gql } = require("@apollo/client");
module.exports = gql`
  type Property {
    _id: String
    imageUrl: String
    homeAddress: String
    price: String
    companyName: String
    status: String
    bedroom: String
    bathroom: String
    area: String
    type: String
    condition: String
    floor: String
    description: String
    ameneties: [String]
    phoneNumber: String
    emailAddress: String
    propertyTitle: String
    parking: String
  }

  input propertyInput {
    imageUrl: String
    homeAddress: String
    price: String
    companyName: String
    status: String
    bedroom: String
    bathroom: String
    area: String
    type: String
    condition: String
    floor: String
    description: String
    ameneties: [String]
    phoneNumber: String
    emailAddress: String
    propertyTitle: String
    parking: String
  }

  type Query {
    property(ID: ID!): Property!
    getProperties(amount: Int): [Property]
    getPropertiesByPrice(price: String): [Property]
    getPropertiesByBhk(bhk: String): [Property]
  }

  type Mutation {
    addProperty(propertyInput: propertyInput): Property!
    deleteProperty(ID: ID!): Boolean
    editProperty(ID: ID!, propertyInput: propertyInput): Boolean
  }
`;
