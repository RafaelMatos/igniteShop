import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Product(){
  const { query } = useRouter()
  return(
    <ProductContainer>
      <ImageContainer>
        <Image src={'https://picsum.photos/200/300'} width={300} height={200}></Image>
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,00</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem accusantium repellat quasi. Reprehenderit perspiciatis, ex odio obcaecati illum nam ipsam labore!</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}