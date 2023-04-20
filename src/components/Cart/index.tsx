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
  ResumeShop
} from "./styles";
import { X } from "@phosphor-icons/react";
import Image from "next/image";

export function Cart() {
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
            {/* <p>Parece que seu carrinho está vazio</p> */}
            <CartProduct>
              <ImageContainer>
                <Image src='https://s3-alpha-sig.figma.com/img/387d/13ce/de131bd1ccf9bbe6b2331e88d3df20cd?Expires=1682899200&Signature=WNSlOz6Sr475Brge3FjkuRsoY5P4VlS~REmyIm7Mt7YmuBzxQdm6HmO7D1djkwu4EYUkClXwbjH-EScmenSUobmTSz2rgdDKbPUv9bHnOd2zwXY8tdcrg-M75HsRRSuys7mdOn0HD4VXZguYAYFae~Pc0LzX35-uaNT28cDAZ8oHnoRHkC2R33GTD7F6-CQX-7bgjAwzhBRCjk87RVc08oqMrftb0rzTr6R0n5fuByk8yqpna3O0DwhHhNuVtZK5VJwXEY8E1OKDznb-NiUhHhkjsrRUW~-~49KT8kYXKZFN0JqWKqFlRxFjmlboHeL4gVkjN0CiN95Y8luGwJsYzA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' width={100} height={93} alt=""/>
              </ImageContainer>
              <ProductInfo>
                <p>Camiseta Explorer</p>
                <strong>R$ 79,00</strong>
                <button>Remover</button>
              </ProductInfo>
              
            </CartProduct>
          </section>
            <ResumeShop>
              <div>
                <span>Quantidade</span>
                <p>1 item</p>
              </div>
              <div>
                <span>Valor total</span>
                <p>R$ 79,00</p>
              </div>
            </ResumeShop>
            <CheckoutButton>Finalizar compra</CheckoutButton> 
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
