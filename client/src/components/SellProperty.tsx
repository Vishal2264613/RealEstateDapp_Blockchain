import bg4 from "../assets/bg4.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const SellProperty = () => {
  const [error, SetError] = useState("");
  const [propertyTitle, SetPropertyTitle] = useState("");
  const [imageurl, SetImageUrl] = useState("");
  const [homeAddress, SetHomeAddress] = useState("");
  const [price, SetPrice] = useState("");
  const [companyName, SetCompanyName] = useState("");
  const [status, SetStatus] = useState("Ready to move");
  const [bedroom, SetBedroom] = useState("1");
  const [bathroom, SetBathroom] = useState("1");
  const [area, SetArea] = useState("");
  const [type, SetType] = useState("condo");
  const [condition, SetCondition] = useState("new");
  const [floor, SetFloor] = useState("");
  const [parking, SetParking] = useState("");
  const [description, SetDescription] = useState("");
  const [phoneNumber, SetPhoneNumber] = useState("");
  const [email, SetEmail] = useState("");
  const [amenetiesArray, SetAmeneties] = useState<string[]>([]);
  const allAmeneties1 = [
    { id: 1, value: "Air conditioner" },
    { id: 2, value: "Balcony" },
    { id: 3, value: "Pet friendly" },
    { id: 4, value: "Balcony" },
  ];
  const allAmeneties2 = [
    { id: 5, value: "Washer" },
    { id: 6, value: "City view" },
    { id: 7, value: "Elevator" },
    { id: 8, value: "Wardrobe" },
  ];
  const navigate = useNavigate();
  const navHandler = () => {
    navigate("/propertyDetails");
  };
  const addProperty = () => {
    axios.post("http://localhost:3000/uploadData", {
      imageUrl: imageurl,
      homeAddress: homeAddress,
      price: price,
      companyName: companyName,
      status: status,
      bedroom: bedroom,
      bathroom: bathroom,
      area: area,
      type: type,
      condition: condition,
      floor: floor,
      description: description,
      ameneties: amenetiesArray,
      phoneNumber: phoneNumber,
      emailAddress: email,
      propertyTitle: propertyTitle,
      parking: parking,
    });
  };
  const handleAmeneties = (event: any) => {
    var isChecked = event.target.checked;
    var itemName = event.target.value;
    if (isChecked) {
      amenetiesArray.push(itemName);
    } else {
      console.log(itemName);
      const filteredArray = amenetiesArray.filter((item) => item !== itemName);
      SetAmeneties(filteredArray);
    }
  };
  const validation = () => {
    if (propertyTitle == "" && imageurl == "") {
      SetError("Please fill all the fields!");
    } else {
      sellHandler();
      SetError("");
    }
  };
  const sellHandler = () => {
    console.log(propertyTitle);
    console.log(imageurl);
    console.log(homeAddress);
    console.log(price);
    console.log(companyName);
    console.log(status);
    console.log(bedroom);
    console.log(bathroom);
    console.log(area);
    console.log(type);
    console.log(condition);
    console.log(floor);
    console.log(description);
    console.log(amenetiesArray);
    console.log(phoneNumber);
    console.log(email);
    console.log(parking);
    addProperty();
    navHandler();
  };

  return (
    <div className="sellPropertyContainer">
      <div className="SellProperty">
        <div className="property-title">
          <div className="dash"></div>
          <h1 className="sell-title">Sell Property</h1>
          <div className="dash"></div>
        </div>

        <div className="sellPropertyDetails">
          <div className="sellPropertyImg">
            {imageurl == "" ? <img src={bg4} /> : <img src={imageurl} />}
          </div>
        </div>
        <div className="errorMessage">
          <div className="error">
            <p>{error}</p>
          </div>
        </div>
        <div className="inputFields">
          <div className="propertyTitle">
            <input
              placeholder="Property Title"
              onChange={(e) => SetPropertyTitle(e.target.value)}
            />
          </div>
          <div className="urlField">
            <input
              placeholder="Image URL"
              onChange={(e) => SetImageUrl(e.target.value)}
            />
          </div>
          <div className="addressField">
            <input
              placeholder="Home address"
              onChange={(e) => SetHomeAddress(e.target.value)}
            />
          </div>
          <div className="priceField">
            <input
              placeholder="Price"
              type="number"
              onChange={(e) => SetPrice(e.target.value)}
            />
          </div>
          <div className="companyNameField">
            <input
              placeholder="Company name"
              onChange={(e) => SetCompanyName(e.target.value)}
            />
          </div>
          <div className="statusField">
            <select
              name="Status"
              className="status"
              onChange={(e) => SetStatus(e.target.value)}
            >
              <option value="Ready to move">Ready to move</option>
              <option value="Unfurnished, Immediately available">
                Unfurnished, Immediately available
              </option>
              <option value="Underconstruction">Under construction</option>
            </select>
          </div>
          <div className="dropdownFields"></div>
          <div className="dropdownFields">
            <select
              name="Rooms"
              className="roomsField"
              onChange={(e) => SetBedroom(e.target.value)}
            >
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedroom</option>
              <option value="3">3 Bedroom</option>
              <option value="4">4 Bedroom</option>
              <option value="5">5 Bedroom</option>
            </select>
            <select
              name="Baths"
              className="bathsField"
              onChange={(e) => SetBathroom(e.target.value)}
            >
              <option value="1">1 Bathroom</option>
              <option value="2">2 Bathroom</option>
              <option value="3">3 Bathroom</option>
            </select>
            <input
              placeholder="area"
              className="areaField"
              onChange={(e) => SetArea(e.target.value)}
            />
          </div>
          <div className="dropdownFields2">
            <select
              name="type"
              className="typeField"
              onChange={(e) => SetType(e.target.value)}
            >
              <option value="Condo">Condo</option>
              <option value="Appartment">Appartment</option>
              <option value="House">House</option>
            </select>
            <select
              name="condition"
              className="conditionField"
              onChange={(e) => SetCondition(e.target.value)}
            >
              <option value="New">New</option>
              <option value="Old">Old</option>
            </select>
            <input
              placeholder="Floors"
              className="floorsField"
              onChange={(e) => SetFloor(e.target.value)}
            />
          </div>
          <div className="parkingField">
            <select
              name="paking"
              className="parking"
              onChange={(e) => SetParking(e.target.value)}
            >
              <option value="1">1 parking</option>
              <option value="2">2 parking</option>
              <option value="2">3 parking</option>
            </select>
          </div>
          <div className="descriptionField">
            <textarea
              placeholder="Description"
              className="description"
              onChange={(e) => SetDescription(e.target.value)}
            />
          </div>
          <div className="ameneties">
            <div className="amenetiesContainer">
              <div className="container1">
                {allAmeneties1.map((ameneties) => (
                  <div className="checkBox">
                    <input
                      type="checkbox"
                      value={ameneties.value}
                      onChange={(event) => handleAmeneties(event)}
                    />
                    <label>{ameneties.value}</label>
                  </div>
                ))}
              </div>
              <div className="container2">
                {allAmeneties2.map((ameneties) => (
                  <div className="checkBox">
                    <input
                      type="checkbox"
                      value={ameneties.value}
                      onChange={(event) => handleAmeneties(event)}
                    />
                    <label>{ameneties.value}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="contactField">
            <input
              placeholder="Phone number"
              onChange={(e) => SetPhoneNumber(e.target.value)}
            />
          </div>
          <div className="emailField">
            <input
              placeholder="Email address"
              onChange={(e) => SetEmail(e.target.value)}
            />
          </div>
          <div className="sellBtnContainer">
            <div className="sellBtn" onClick={() => validation()}>
              Sell property
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellProperty;
