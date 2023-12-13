import { ServiceWrapper } from "../../StyledComponets/ServicesStyle";
import { services } from "../../utils/jsonData";

interface Service {
  image: string;
  title: string;
  content: string;
}

const Services = () => {
  return (
    <ServiceWrapper>
      <div>
        <h2>Explore Our Services</h2>
        <h3>
          We are self-service data analytics software that lets you create
          visually.
        </h3>
        <div className="card-container">
          {services.map((card: Service) => (
            <div key={card.title} className="card">
              <img src={card.image} alt={card.title} />
              <h4>{card.title}</h4>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
        <div className="btn">
          <button>Learn More</button>
        </div>
      </div>
    </ServiceWrapper>
  );
};

export default Services;
