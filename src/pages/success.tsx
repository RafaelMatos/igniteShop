import Link from "next/link";
import {
  ImageContainer,
  ImagesContainer,
  SuccessContainer,
} from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";

interface SuccessProps {
  customerName: string;
  productsImages: string[];
}

export default function Success({
  customerName,
  productsImages,
}: SuccessProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <title>Compra finalizada | Ignite Shop </title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>
        <ImagesContainer>
          {productsImages.map((image, i) => {
           return <ImageContainer key={image}>
              <Image
                src={image}
                width={120}
                height={110}
                alt="Camisa Ignite"
              />
            </ImageContainer>
          })}
        </ImagesContainer>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de 
          <strong> {productsImages.length}</strong> camisetas já está a caminho da sua casa.
        </p>
        <Link href={"/"}>Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });
  // console.log("session.line_items:" ,session.line_items)
  const customerName = session.customer_details?.name;
  const product = session.line_items?.data[0].price?.product as Stripe.Product;
  const productsImages = session.line_items?.data.map((item) => {
    const product = item.price?.product as Stripe.Product;
    return product.images[0];
  });
  return {
    props: {
      customerName,
      productsImages,
    },
  };
};
