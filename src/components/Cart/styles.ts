import { styled } from "@/src/styles";
import * as Dialog  from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay,{
  position: 'fixed',
  width:'100vw' ,
  height:'100hw' ,
  inset: 0,
  background:'rgba(0,0,0,0.6)' 
})

export const CartContent = styled(Dialog.Content,{
  position:'fixed',
  background:'$gray800' ,
  boxShadow:'-4px 0px 30px rgba(0,0,0,0.8)',
  top:0 ,
  right:0 ,
  bottom:0 ,
  width:'30rem' ,
  padding: '3rem',
  paddingTop: '4.5rem',
  display: 'flex',
  flexDirection:'column',

  h2:{
    fontWeight:700,
    color:'$gray100' ,
    fontSize:'$lg',
    marginBottom:'2rem',
    opacity:0.3 ,
  },

  '> section': {
    display:'flex' ,
    flexDirection:'column',
    gap:'1.5rem' ,
    flex:1 ,
    overflow: 'auto',
  }
  
})

export const Close = styled(Dialog.Close,{
  background:'none' ,
  border:'none' ,
  color: '$gray500',
  position:'absolute' ,
  top:'1.75rem' ,
  right:'1.75rem' ,
  transition: '0.5s',
  '&:hover':{
    scale:'1.1' ,
    color: '$gray300',
  }
  
  
})

export const CartProduct = styled('div',{
  width:'100%' ,
  display:'flex' ,
  flexDirection:'row',
  gap:'1.25rem' ,
  alignItems:'center',
  height:'5.8125rem' ,
})
export const ImageContainer = styled('div',{
  height:'5.8125rem',
  width:'6.3125rem' ,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)' ,
  borderRadius:'8px',

  display:'flex' ,
  alignItems:'center',
  justifyContent:'center',

  img:{
    objectFit:'cover',
  }
})
export const ProductInfo =styled('div',{
  width:'100%' ,
  height:'100%',
  display:'flex' ,
  flexDirection:'column',

  p:{
    color: '$gray300',
    fontSize:'$md'
  },
  strong:{
    marginTop:4,
    color: '$gray300',
    fontSize:'$md',
    fontWeight:'bold'
  },
  button:{
    marginTop:"auto",
    color:'$green500' ,
    fontSize:'$md',
    fontWeight:'bold',
    background:'none' ,
    border:'none' ,
    width:'max-content' ,
  }
})
export const ResumeShop = styled('div',{
  display:'flex',
  flexDirection:'column',
  marginTop:'auto',
  gap:8,

  div:{
    display:'flex' ,
    alignItems:'center',
    justifyContent:'space-between',

    p:{
      fontSize:'$md',
      color:'$gray300',
    },
    '&:last-child':{
      fontWeight:'bold',

      span:{
        fontSize:'$md'
      },
      p:{
        fontSize:'$xl',
        color:'$gray100',
      },
    }
  }

})
export const CheckoutButton = styled('button',{
  width:'100%' ,
  height:'4.3125rem' ,
  marginRight:'3rem',
  background:'$green500' ,
  marginTop:'3.5rem',
  border:'none',
  borderRadius:'8px',

  color:'$gray100' ,
  fontWeight:700,
  fontSize:'$md',

  transition:'0.5s' ,

  '&:disabled':{
    opacity:0.6 ,
    cursor:'not-allowed' ,
  },
  
  '&:not(:disabled):hover':{
    background:'$green300' ,
  }
  
})