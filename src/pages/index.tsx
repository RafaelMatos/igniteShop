import Image from "next/image"
import tshirt1 from "../assets/tshirts/1.png";
import tshirt2 from "../assets/tshirts/2.png";
import tshirt3 from "../assets/tshirts/3.png";
import tshirt4 from "../assets/tshirts/4.png";
import { HomeContainer, Product } from "../styles/pages/home"



export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={tshirt1} alt="Foto da camisa" width={520} height={480}></Image>
        <footer>
          <strong>Camisa Astronaut</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={tshirt2} alt="Foto da camisa" width={520} height={480}></Image>
        <footer>
          <strong>Camisa Ignite</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
