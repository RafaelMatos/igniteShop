import { styled } from "@/src/styles";

export const CartButtonContainer = styled('button',{
  display:'flex' ,
  alignItems:'center',
  justifyContent:'center',
  position:'relative',
  
  background:'$gray800',
  width:'3rem',
  height:'3rem',
  padding:12 ,
  borderRadius:6,
  border:0,
  color:'$gray500' ,
  transition: '0.5s',
  svg:{
    fontSize:24
  },
  '&:disabled':{
    opacity:0.6 ,
    cursor:'not-allowed' ,
  },
  '&:not(:disabled):hover':{
    color:'$gray100' ,
  }
})