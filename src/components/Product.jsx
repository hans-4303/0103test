import React from 'react'

const Product = ({info}) => {
  console.log(info)

  return (
    <div style={{width: '300px', height: '400px'}}>
      {/* public 폴더 이용, img 바로 띄우기 OK */}
      <img src={`img/${info.img}`} style={{width: '300px', height: '300px'}}></img>
      <p>{info.name}</p>
    </div>
  )
}

export default Product
