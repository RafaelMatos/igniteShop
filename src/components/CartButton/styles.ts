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

  span : {
    position: 'absolute',
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '50%',
    top: 'calc(-1rem / 2)',
    right: 'calc(-1rem / 2)',
    color: '$white',
    border: '2px solid #121214',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    background: '$green500',
  },

  transition: "0.5s",
  
  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },

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


