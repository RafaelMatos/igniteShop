import { styled } from "@/src/styles";

export const CartButtonContainer = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",

  // background:'$gray800',
  
  padding: 12,
  borderRadius: 6,
  border: 0,

  transition: "0.5s",
  
  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
  // '&:not(:disabled):hover':{
  //   color:'$gray100' ,
  // },

  variants: {
    color: {
      gray: {
        background: "$gray800",
        color: "$gray100",
        '&:not(:disabled):hover':{
          background: "$gray700",
          color:'$white' ,
        },
      },
      green: {
        background: "$green500",
        color: "$gray100",
        "&:not(:disabled):hover": {
          background: "$green300",
          color: "$white",
        },
      },
    },
    size:{
      medium:{
        width: "3rem",
        height: "3rem",
        svg: {
          fontSize: 24,
        },
      },
      large:{
        width: "3.5rem",
        height: "3.5rem",
        svg: {
          fontSize: 32,
        },
      }
    }
  },
  defaultVariants: {
    color: "gray",
    size: "large",
  },
});

// gray :{
//   background:'$gray800',
//   color:'$gray500' ,
// },
// green:{
//   background:'$green500',
//   color:'$gray500' ,
// }
