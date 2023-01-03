import React from 'react'

const Product = ({info}) => {
  console.log(info)

  return (
    <div style={{maxwidth: '30vw'}}>
      {/* public 폴더 이용, img 바로 띄우기 OK */}
      <img src={`img/${info.img}`} style={{maxWidth: '30vw'}}></img>
      <p>{info.name}</p>
    </div>
  )
}

export default Product
