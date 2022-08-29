import { styled } from '@mui/system'
import React from 'react'

export default function Footer() {

let MyFooter =styled('div')(({theme})=>({

  textAlign:'center',
  background:'white',
  padding:'10',
  marginBottom:'15px'


}))

  return (
    <MyFooter >

      Design and Developed by Harish 
    </MyFooter>
  )
}
