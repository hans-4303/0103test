import React from 'react'
import { useState } from 'react'
import Product from '../components/Product'

const Home = () => {
  const [homeInfo, setHomeInfo] = useState([
    {name: '옷1', img: '../img/옷1.png'},
    {name: '옷2', img: '../img/옷2.png'},
    {name: '옷3', img: '../img/옷3.png'}
  ])
  return (
    /* 최상위 컨테이너 */
    <div>
      {/* 상단 이미지가 들어갈 자리 */}
      <div>
        <img src='img/decoration-gdc602371b_1920.jpg' style={{maxWidth: '95vw'}}></img>
      </div>
      {/* 더보기와 컴포넌트가 들어갈 자리 */}
      <div style={{padding: '20vh 20vw'}}>
        <div>
          <a href="">더보기</a>
        </div>
        {/* 컴포넌트 호출 */}
        <div style={{display: 'flex'}}>
          {homeInfo.map((info, index) => <Product info={info} key={index}></Product>)}
        </div>
      </div>
    </div>
  )
}

export default Home
