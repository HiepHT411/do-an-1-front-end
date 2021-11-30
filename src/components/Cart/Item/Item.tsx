import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../../../types/types';
// Styles
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <h3>Giá: {item.price}VND</h3>
      <div  dangerouslySetInnerHTML={{ __html: item.description}}/>
      
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
);

export default Item;