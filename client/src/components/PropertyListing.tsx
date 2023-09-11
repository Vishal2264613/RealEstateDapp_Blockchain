import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import { useQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const GET_PROPERTIES = gql`
  query GetPropertiesByPrice($price: String) {
    getPropertiesByPrice(price: $price) {
      _id
      imageUrl
      homeAddress
      price
      companyName
      status
      bedroom
      bathroom
      area
      type
      condition
      floor
      description
      ameneties
      phoneNumber
      emailAddress
      propertyTitle
      parking
    }
  }
`;
const PropertyListing = () => {
  const navigate = useNavigate();
  const handler = (id: string) => {
    const stateData = { propertyId: id };
    navigate("/propertyDetails", { state: stateData });
  };

  const { loading, error, data } = useQuery(GET_PROPERTIES, {
    variables: { price: "1000000" },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      {data.getPropertiesByPrice.map((property: any) => (
        <div className="propertyCard" onClick={() => handler(property._id)}>
          <div className="left">
            <img src={property.imageUrl} alt="" className="propertyImage" />
          </div>
          <div className="right">
            <div className="upper">
              <div className="propertyDetails">
                <h1 className="propertyName">{property.propertyTitle}</h1>
                <h1 className="company">{property.companyName}</h1>
              </div>

              <h1 className="price">${property.price}</h1>
            </div>

            <div className="middle">
              <h1 className="details">Details: {property.area}</h1>
              <h1 className="status">Status: {property.status}</h1>
            </div>
            <div className="lower">
              <img src={p1} alt="" className="icons" />
              <h1 className="beds">{property.bedroom} Bedroom</h1>
              <img src={p2} alt="" className="icons" />
              <h1 className="baths">{property.bathroom} Bathroom</h1>
              <img src={p3} alt="" className="icons" />
              <h1 className="parking">{property.parking} Parking</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const propertiesList = [
  {
    imageName: bg1,
    propertyName: "3 BHK Appartment",
    company: "By Johanson Housing",
    price: "$7,50,000",
    status: "Unfurnished, Immediatly available",
    details: "200 sqft.",
    beds: "3 Bed",
    baths: "3 Bath",
    parking: "2 Parking",
  },
  {
    imageName: bg2,
    propertyName: "2 BHK Appartment",
    company: "By ARS Housing Ltd",
    price: "$4,50,000",
    status: "Ready to move",
    details: "150 sqft.",
    beds: "2 Bed",
    baths: "1 Bath",
    parking: "1 Parking",
  },
  {
    imageName: bg3,
    propertyName: "4 BHK House",
    company: "By Johanson Housing",
    price: "$9,00,000",
    status: "Ready to move",
    details: "400 sqft.",
    beds: "4 Bed",
    baths: "2 Bath",
    parking: "2 Parking",
  },
  {
    imageName: bg4,
    propertyName: "3 BHK House",
    company: "By ARS Housing Ltd",
    price: "$5,75,000",
    status: "Unfurnished,Immediatly available",
    details: "290 sqft.",
    beds: "3 Bed",
    baths: "1 Bath",
    parking: "2 Parking",
  },
];

export default PropertyListing;
