import '../css/PriceCard.css'

export const PriceCard = ({ features, plan, price }) => {
  return (
    <div className="priceCard">
      <h2>{plan}</h2>
      <div className="featureList">
        {features &&
          features.length > 0 &&
          features.map((feature,index) => <span key={index}>✅{feature}</span>)}
      </div>
      <h3>{price}</h3>
      <button id='price-Card-btn'>Get Started</button>
    </div>
  );
};
