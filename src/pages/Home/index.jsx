import React, { memo, useState, useEffect } from 'react'
import axios from 'axios';
import Header from '@/components/Header'
import { Carousel } from 'antd';
import { Content, Banner, NewMV, Footer } from './style'
import RecommendPanel from '@/components/RecommendPanel'

const Home = memo(() => {

  // const pos = {}
  //setData 数据是整个json
  //setSongData 
  //setBookData
  const [songData, setSongData] = useState([])
  const [bookData, setBookData] = useState([])

  useEffect(() => {
    return async () => {
      const data1 = await axios.get('https://www.fastmock.site/mock/cdb98f464d71f15f5b54decc864bed76/kugou/songs')
      // setSongData(data.data)
      setSongData(data1.data)

      const data2 = await axios.get('https://www.fastmock.site/mock/cdb98f464d71f15f5b54decc864bed76/kugou/books')
      setBookData(data2.data)
    }
  }, [])

  return (
    <>
      <Header />
      <Banner>
        {/* 添加Swiper */}
        <Carousel autoplay>
          <div>
            <h3 className='swiper_1'></h3>
          </div>
          <div>
            <h3 className='swiper_2'></h3>
          </div>
          <div>
            <h3 className='swiper_3'></h3>
          </div>
        </Carousel>
      </Banner>
      <Content>
        {/* 推荐页组件 需要传入： 1.data 2.数据在json中的位置 3.title 4.colomn_arrange 默认two 5.titlePlay 默认false */}
        {/* 两种排列方式
          两列：5*2 可换页 默认
          三列：n*3 不可换页 */}
        {/* <NewSongs /> */}
        <RecommendPanel data={songData} title='新歌首发' titlePlay={true} />
        {/* 新MV */}
        <NewMV>
          {/* MV推荐标题 */}
          <div className='mv-title'>
            <h3 className='mv-title-h3'>推荐MV</h3>
            <div className='mv-title-more'>
              <a href="">更多</a>
            </div>
          </div>
          {/* 第一栏MV */}
          <div className='mv-content_d1'>
            <a href="" className='mv-show-a'>
              <img src="https://imgessl.kugou.com/mvhdpic/400/20220610/20220610174146325412.jpg" alt="" className='img' />
              {/* 悬浮播放标签 */}
              <div className="mv-play_item">
                <span className='mv-play_span'></span>
              </div>
            </a>
          </div>
          <div className='mv-content_d2'></div>
        </NewMV>
      </Content>
      <Content>
        {/* <NewBooks /> */}
        <RecommendPanel data={bookData} title='听书精选' arrange='three' />
      </Content>
      <Footer />
    </>
  )
})

export default Home