import { useNavigate } from "react-router-dom";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";
import btnImage from "../assets/arrow.png";
import a1 from "../assets/a1.jpg";
import a2 from "../assets/a2.jpg";
import a3 from "../assets/a3.jpg";
import a4 from "../assets/a4.jpg";
import a5 from "../assets/a5.jpg";
import logo from "../assets/MLogo.png";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";

const Home = () => {
  const navigate = useNavigate();
  const exploreHandler = () => {
    navigate("/properties");
  };
  return (
    <div className="homeContainer">
      <section className="section1">
        <div className="home">
          <div className="content">
            <div className="Title">
              <h2 className="T1">Toronto</h2>
              <h2 className="T2">Properties</h2>
            </div>
            <div className="desc">
              <h2>
                All new properties
                <br /> and houses in toronto are ready to sell
              </h2>
            </div>
            <div>
              <button className="exploreBtn" onClick={exploreHandler}>
                Explore
                <img className="btnImage" src={btnImage} alt="Background " />
              </button>
            </div>
          </div>
          <div>
            <img className="bgImage" src={bg1} alt="Background " />
          </div>

          <div>
            <img className="bgImage" src={bg2} alt="Background " />
          </div>
          <div>
            <img className="bgImage" src={bg3} alt="Background " />
          </div>
        </div>
      </section>
      <section className="section2">
        <div className="properties">
          <div className="S2Title">
            <div className="dash"></div>
            <h1 className="S2T1">Properties</h1>
            <div className="dash"></div>
          </div>
          <div className="S2Desc">
            <h1 className="S2D2">
              Find your house without
              <br />
              any difficulties
            </h1>
          </div>
          <div className="cardContainer">
            {Card(
              bg1,
              "Toronto Skyline",
              "Appartment",
              "Brand new appartment in toronto",
              "2bhk | 1 Bathroom | 1 Balcony",
              "$11,000,00"
            )}
            {Card(
              bg2,
              "The Heights",
              "Appartment",
              "Brand new appartment in toronto",
              "2bhk | 1 Bathroom | 1 Balcony",
              "$12,150,00"
            )}
            {Card(
              bg3,
              "The woodside",
              "House",
              "Brand new appartment in toronto",
              "2bhk | 1 Bathroom | 1 Balcony",
              "$15,240,00"
            )}
            {Card(
              bg4,
              "Union House",
              "House",
              "Brand new appartment in toronto",
              "2bhk | 1 Bathroom | 1 Balcony",
              "$11,000,00"
            )}
          </div>
          <div className="btnContainer">
            <button className="viewAllBtn">
              View all
              <img className="btnImage" src={btnImage} alt="Background " />
            </button>
          </div>
        </div>
      </section>

      <section className="section3">
        <div className="agents">
          <div className="S2Title">
            <div className="dash"></div>
            <h1 className="S2T1">Agents</h1>
            <div className="dash"></div>
          </div>
          <div className="S2Desc">
            <h1 className="S2D2">
              Our best agents always ready to help you
              <br />
              to find the best home
            </h1>
          </div>
          <div className="cardContainer">
            {AgentCard(a1, "John Smith")}
            {AgentCard(a2, "James Ross")}
            {AgentCard(a3, "Scarlett Jones")}
            {AgentCard(a4, "Henry Wilson")}
            {AgentCard(a5, "Loisa Brett")}
          </div>
          <div className="btnContainer2">
            <button className="viewAllBtn2">
              View all
              <img className="btnImage" src={btnImage} alt="Background " />
            </button>
          </div>
        </div>
      </section>
      <section className="section4">
        <div className="customerExperience">
          <div className="S2Title">
            <div className="dash"></div>
            <h1 className="S2T1">Customer Experience</h1>
            <div className="dash"></div>
          </div>
          <div className="S2Desc">
            <h1 className="S2D2">
              Our happy customers shared their
              <br />
              experience with us
            </h1>
          </div>
          <div className="cardContainer">
            {ReviewCard(
              "Sam",
              "''Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.''"
            )}
            {ReviewCard(
              "Erica",
              "''Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.''"
            )}
            {ReviewCard(
              "Alexia",
              "''Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.''"
            )}
          </div>
          <div className="footer">
            <div className="footerContainer">
              <div className="logo2Container">
                <div className="logo2">
                  <img className="logoImage2" src={logo} alt="Background " />
                  <div>
                    <p className="Lname1">Toronto </p>
                    <p className="Lname2">Properties</p>
                  </div>
                </div>
                <div className="socialIcons">
                  <img className="icon" src={s1} alt="Background " />
                  <img className="icon" src={s2} alt="Background " />
                  <img className="icon" src={s3} alt="Background " />
                  <img className="icon" src={s4} alt="Background " />
                </div>
              </div>
              <div className="overview">
                <ul>
                  <p>OVERVIEW</p>
                  <div className="line"></div>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Career</li>
                </ul>
              </div>
              <div className="community">
                <ul>
                  <p>COMMUNITY</p>
                  <div className="line"></div>
                  <li>Support</li>
                  <li>Help</li>
                  <li>Policy</li>
                </ul>
              </div>
              <div className="newsletter">
                <p>STAY CONNECTED</p>
                <div className="line2"></div>
                <input placeholder="Enter your email" />
                <button className="signUp">Sign Up</button>
              </div>
            </div>
            <div className="line3"></div>
            <div className="copyright">
              <div className="crContent">&copy;2023Copyright</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Card = (
  imageName: string,
  city: string,
  type: string,
  desc: string,
  interior: string,
  price: string
) => {
  return (
    <div className="card">
      <img src={imageName} alt="" />
      <div className="cardContent">
        <h1 className="city">{city}</h1>
        <h1 className="type">{type}</h1>
        <h1 className="cardDesc">{desc}</h1>
        <h1 className="interior">{interior}</h1>
        <h1 className="price">{price}</h1>
      </div>
    </div>
  );
};

const AgentCard = (agentImage: string, name: string) => {
  return (
    <div className="card2">
      <div className="agentImage">
        <img src={agentImage} alt="" />
      </div>

      <div className="cardContent2">
        <h1 className="name">{name}</h1>
      </div>
    </div>
  );
};

const ReviewCard = (customerName: string, review: string) => {
  return (
    <div className="card3">
      <h1 className="customerName">{customerName}</h1>
      <h1 className="review">{review}</h1>
    </div>
  );
};

export default Home;
