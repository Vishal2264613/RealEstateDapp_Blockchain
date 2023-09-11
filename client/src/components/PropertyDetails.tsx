import am1 from "../assets/am1.png";
import am2 from "../assets/am2.png";
import am3 from "../assets/am3.png";
import am4 from "../assets/am4.png";
import am5 from "../assets/am5.png";
import am6 from "../assets/am6.png";
import am7 from "../assets/am7.png";
import am8 from "../assets/am8.png";
import { useLocation } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
const GET_PROPERTY = gql`
  query Property($id: ID!) {
    property(ID: $id) {
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
const PropertyDetails = () => {
  const location = useLocation();
  const statedata = location.state;

  const { loading, error, data } = useQuery(GET_PROPERTY, {
    variables: { id: statedata.propertyId },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div className="detailContainer">
      <div className="details">
        <div className="propertyInfo">
          <div className="propertyImg">
            <img src={data.property.imageUrl} />
          </div>
          <div className="price">${data.property.price}</div>
          <div className="infoContainer">
            <div className="address">{data.property.homeAddress}</div>
            <div className="infoBox">
              <div id="sameInfo" className="rooms">
                {data.property.bedroom} Bedroom
              </div>
              <div id="sameInfo" className="baths">
                {data.property.bathroom} Bathroom
              </div>
              <div id="sameInfo" className="area">
                {data.property.area}
              </div>
            </div>
          </div>
          <div className="description">
            <p className="label">DESCRIPTION</p>
            <p>{data.property.description}</p>
          </div>
          <div className="infoBox2">
            <div id="sameInfo1" className="homeType">
              {" "}
              {data.property.type}
            </div>
            <div id="sameInfo1" className="floor">
              {data.property.floor}
            </div>
            <div id="sameInfo1" className="condition">
              {data.property.condition}
            </div>
            <div id="sameInfo1" className="status">
              {data.property.status}
            </div>
          </div>
          <p className="amenetiesLabel">Ameneties</p>
          <div className="amenetiesBox">
            <ul>
              <li>
                <div className="iconImage">
                  <img src={am1} />
                </div>

                <p>Air Conditioner</p>
              </li>
              <li>
                <div className="iconImage">
                  <img src={am2} />
                </div>
                <p>Balcony</p>
              </li>
              <li>
                <div className="iconImage">
                  <img src={am3} />
                </div>
                <p>Pet friendly</p>
              </li>
              <li>
                <div className="iconImage">
                  <img src={am4} />
                </div>
                <p>Pool</p>
              </li>
              <li>
                <div className="iconImage">
                  <img src={am5} />
                </div>
                <p>Washer</p>
              </li>
              <li>
                <div className="iconImage">
                  <img src={am6} />
                </div>
                <p>City View</p>
              </li>
              <li>
                <div className="iconImage">
                  <img src={am7} />
                </div>
                <p>Elevator</p>
              </li>
              <li>
                <div className="iconImage">
                  <img src={am8} />
                </div>
                <p>Wardrobe</p>
              </li>
            </ul>
          </div>
          <div className="buyPropertyContainer">
            <button className="buyBtn">Buy property</button>
          </div>
        </div>
        <div className="contact">
          <div className="saveAndShare">
            <button>Save</button>
            <button>Share</button>
          </div>
          <div className="contactContainer">
            <p className="contactTitle">Contact Us</p>
            <input
              placeholder="Email"
              value={""}
              className="contractEmailField"
            />
            <p className="mailContent">I'm still interested in this property</p>
            <button className="contactBtn">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
