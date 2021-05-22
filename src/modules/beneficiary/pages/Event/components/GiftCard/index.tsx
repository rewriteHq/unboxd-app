import { Card } from './styles';
import { GiftCardProps } from './types';

const GiftCard: React.FC<GiftCardProps> = ({ image, name, price, raised }) => {
  return (
    <Card>
      <div className="img-holder">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h3 className="name">{name}</h3>
        <p className="price">₦{price}</p>
        <div className="progress">
          <p className="amount-raised">₦{raised} raised</p>
          <div className="progress-circle"></div>
        </div>
      </div>
    </Card>
  );
};

export default GiftCard;
