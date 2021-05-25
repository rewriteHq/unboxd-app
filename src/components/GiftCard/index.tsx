import { Card } from './styles';
import { GiftCardProps } from './types';

const GiftCard: React.FC<GiftCardProps> = ({ image, name, price, raised, onClick }) => {

  const addDefaultSrc = (e: any) => {
    e.target.src = '/assets/ps4.png';
  }
  
  return (
    <Card onClick={onClick}>
      <div className="img-holder">
        <img onError={addDefaultSrc} src={image || '/assets/ps4.png'} alt={name} />
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
