import { useState, useEffect } from "react";

import { useQuery, gql } from "@apollo/client";
// import { useQuery } from "urql";
import { useNavigate } from "react-router-dom";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";

const GET_PROPERTIES = gql`
  query GetProperties($amount: Int) {
    getProperties(amount: $amount) {
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

const Properties = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const [filteredProperties, setFilteredProperties] = useState([]);

  const handler = (id: string) => {
    const stateData = { propertyId: id };
    navigate("/propertyDetails", { state: stateData });
  };
  const clickHandler = (e: any) => {
    setSelected(e);
    if (selected == e) {
      setSelected(null);
    }
  };

  const { loading, error, data } = useQuery(GET_PROPERTIES, {
    variables: { amount: 10 },
  });

  if (error) return `Error! ${error.message}`;
  const clickHandler2 = (e: any) => {
    console.log(e);
  };
  if (loading) {
    return "Loading...";
  }
  if (error) {
    return `Error! ${error}`;
  } else {
    console.log(data);
    return (
      <div className="propertiesContainer">
        <div className="listing">
          <div className="filterContainer">
            <div className="filter">
              <h1>Filters</h1>
              <p>Reset</p>
            </div>
            <div className="accordian">
              <div className="contentbox">
                <div className="label">
                  <div className="title">Budget</div>
                  <div onClick={() => clickHandler(1)}>
                    {selected == 1 ? <h1>+</h1> : <h1>-</h1>}
                  </div>
                </div>

                <div className={selected == 1 ? "content" : "content show"}>
                  <div className="bhkContainer">
                    <div
                      className="budget1"
                      onClick={() => clickHandler2("1000000")}
                    >
                      &gt;1000k
                    </div>
                    <div
                      className="budget2"
                      onClick={() => clickHandler2("5000000")}
                    >
                      &gt;5000k
                    </div>
                    <div
                      className="budget3"
                      onClick={() => clickHandler2("10000000")}
                    >
                      &gt;10000k
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordian">
              <div className="contentbox">
                <div className="label">
                  <div className="title">BHK</div>
                  <div onClick={() => clickHandler(2)}>
                    {selected == 2 ? <h1>+</h1> : <h1>-</h1>}
                  </div>
                </div>
                <div className={selected == 2 ? "content" : "content show"}>
                  <div className="bhkContainer">
                    <div className="bhkValue1">1BHK</div>
                    <div className="bhkValue2">2BHK</div>
                    <div className="bhkValue3">3BHK</div>
                    <div className="bhkValue4">3BHK+</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordian">
              <div className="contentbox">
                <div className="label">
                  <div className="title">Property status</div>
                  <div onClick={() => clickHandler(3)}>
                    {selected == 3 ? <h1>+</h1> : <h1>-</h1>}
                  </div>
                </div>
                <div className={selected == 3 ? "content" : "content show"}>
                  <div className="statusContainer">
                    <div className="status1">
                      <input
                        type="radio"
                        value="New projects"
                        name="radio"
                        className="radio"
                      />
                      <div>New projects</div>
                    </div>
                    <div className="status2">
                      <input
                        type="radio"
                        value="Resale properties"
                        name="radio"
                        className="radio"
                      />
                      <div>Resale properties</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordian">
              <div className="contentbox">
                <div className="label">
                  <div className="title">Possession</div>
                  <div onClick={() => clickHandler(4)}>
                    {selected == 4 ? <h1>+</h1> : <h1>-</h1>}
                  </div>
                </div>
                <div className={selected == 4 ? "content" : "content show"}>
                  <div className="possessionContainer">
                    <div className="possession1">
                      <input
                        type="radio"
                        value="readyToMove"
                        name="radio"
                        className="radio"
                      />
                      <div>Ready to move</div>
                    </div>
                    <div className="possession2">
                      <input
                        type="radio"
                        value="1year"
                        name="radio"
                        className="radio"
                      />
                      <div>In 1 year</div>
                    </div>
                    <div className="possession3">
                      <input
                        type="radio"
                        value="2year"
                        name="radio"
                        className="radio"
                      />
                      <div>In 2 year</div>
                    </div>
                    <div className="possession4">
                      <input
                        type="radio"
                        value="3year"
                        name="radio"
                        className="radio"
                      />
                      <div>In 3 year</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordian">
              <div className="contentbox">
                <div className="label">
                  <div className="title">Age of property</div>
                  <div onClick={() => clickHandler(5)}>
                    {selected == 5 ? <h1>+</h1> : <h1>-</h1>}
                  </div>
                </div>
                <div className={selected == 5 ? "content" : "content show"}>
                  <div className="propertyAgeContainer">
                    <div className="propertyAge1">
                      <input
                        type="radio"
                        value="1y"
                        name="radio"
                        className="radio"
                      />
                      <div>less than 1 year</div>
                    </div>
                    <div className="propertyAge1">
                      <input
                        type="radio"
                        value="3y"
                        name="radio"
                        className="radio"
                      />
                      <div>less than 3 year</div>
                    </div>
                    <div className="propertyAge1">
                      <input
                        type="radio"
                        value="5y"
                        name="radio"
                        className="radio"
                      />
                      <div>less than 5 year</div>
                    </div>
                    <div className="propertyAge1">
                      <input
                        type="radio"
                        value="+5y"
                        name="radio"
                        className="radio"
                      />
                      <div>less than +5 year</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="listingContainer">
            <h1 className="listingTitle">Listing</h1>
            <br />
            <div>
              {data.getProperties.map((property: any) => (
                <div
                  className="propertyCard"
                  onClick={() => handler(property._id)}
                  key={property._id}
                >
                  <div className="left">
                    <img
                      src={property.imageUrl}
                      alt=""
                      className="propertyImage"
                    />
                  </div>
                  <div className="right">
                    <div className="upper">
                      <div className="propertyDetails">
                        <h1 className="propertyName">
                          {property.propertyTitle}
                        </h1>
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
          </div>
        </div>
      </div>
    );
  }
};

export default Properties;
