import Image from "next/image"
import tshirt1 from "../assets/tshirts/1.png";
import tshirt2 from "../assets/tshirts/2.png";
import tshirt3 from "../assets/tshirts/3.png";
import tshirt4 from "../assets/tshirts/4.png";
import { HomeContainer, Product } from "../styles/pages/home"
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'


export default function Home() {
const [sliderRef] = useKeenSlider({
  slides:{
    perView:3,
    spacing:48,
  }
})

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={tshirt1} alt="Foto da camisa" width={520} height={480}></Image>
        <footer>
          <strong>Camisa Astronaut</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={tshirt2} alt="Foto da camisa" width={520} height={480}></Image>
        <footer>
          <strong>Camisa Ignite</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={tshirt3} alt="Foto da camisa" width={520} height={480}></Image>
        <footer>
          <strong>Camisa Ignite</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={tshirt4} alt="Foto da camisa" width={520} height={480}></Image>
        <footer>
          <strong>Camisa Ignite</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
