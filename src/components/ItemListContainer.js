import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({saludo}) => {
  return (
    <>
       <h1>{saludo}</h1>
       <ItemList/> 
    </>
  )
}

export default ItemListContainer