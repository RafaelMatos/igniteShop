import { useCart } from "@/src/hooks/useCart";
import { CartButtonContainer } from "./styles";
import { ShoppingBag } from "@phosphor-icons/react";
import { ComponentProps } from "react";

type CartButtonProps = ComponentProps<typeof CartButtonContainer>;

export function CartButton({ ...rest }: CartButtonProps) {
  const { cartItems } = useCart()
  const cartQuantity = cartItems.length
  console.log('rest', rest.color)
  return (
    <CartButtonContainer {...rest}>
      <ShoppingBag weight="bold" />
      { cartQuantity >= 1 && rest.color !== 'green' && <span>{cartQuantity}</span>}
    </CartButtonContainer>
  );
}
