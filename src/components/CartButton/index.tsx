
import { CartButtonContainer } from "./styles";
import { Bag, ShoppingBag } from '@phosphor-icons/react'
import {ComponentProps } from "react";

type CartButtonProps = ComponentProps<typeof CartButtonContainer>

export function CartButton({...rest}:CartButtonProps){
  return (
    <CartButtonContainer {...rest}>
      <ShoppingBag weight="bold" />
    </CartButtonContainer>
  )
}