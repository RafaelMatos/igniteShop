import { CartButton } from "../CartButton";
import * as Dialog from "@radix-ui/react-dialog";
import {
  CartContent,
  CartProduct,
  CheckoutButton,
  Close,
  Overlay,
  ImageContainer,
  ProductInfo,
  ResumeShop,
} from "./styles";
import { X } from "@phosphor-icons/react";
import Image from "next/image";
import { useCart } from "@/src/hooks/useCart";

export function Cart() {
  const { cartItems , removeCartItem, cartTotal } = useCart();
  const cartQuantity = cartItems.length;
  const fomatedCartTotal = new Intl.NumberFormat('pt-BR',{
    style:'currency',
    currency:'BRL',
  }).format(cartTotal)

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <CartContent>
          <Close>
            <X size={24} weight="bold" />
          </Close>
          <h2>Sacola de compras</h2>
          <section>
            {cartQuantity <= 0 && <p>Parece que seu carrinho está vazio :(</p>}
            {cartItems.map((product) => {
              return (
                <CartProduct key={ product.id}>
                  <ImageContainer>
                    <Image
                      src={product.imageUrl}
                      width={100}
                      height={93}
                      alt=""
                    />
                  </ImageContainer>
                  <ProductInfo>
                    <p>Camiseta { product.name }</p>
                    <strong>{product.price}</strong>
                    <button onClick={()=>{
                      removeCartItem(product.id)
                    }}>Remover</button>
                  </ProductInfo>
                </CartProduct>
              );
            })}
          </section>
          <ResumeShop>
            <div>
              <span>Quantidade</span>
              <p>{cartQuantity} {cartQuantity > 1 ? 'itens' : 'item'}</p>
            </div>
            <div>
              <span>Valor total</span>
              <p>{fomatedCartTotal}</p>
            </div>
          </ResumeShop>
          <CheckoutButton>Finalizar compra</CheckoutButton>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
