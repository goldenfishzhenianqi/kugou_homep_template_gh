import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { ItemLi } from './style'

const CardItem = memo(({ data }) => {//props解构

  let card = null
  if (data.hasOwnProperty('hot')) {
    card = 'book'
  } else {
    card = 'song'
  }

  return (
    <>
      <ItemLi card={card} >
        <Link className='card_li_a' to='/detail'>
          <div className="card_li_img">
            <img src={data.img} alt="disc" />
          </div>
          <div className="card_li_bd">
            <p className="card_li_bd_name">{data.name}</p>
            <p className="card_li_bd_singer">{data.singer}</p>
          </div>
          <div className={classnames(
            { card_li_do: card == 'song' },
            { card_li_hot: card == 'book' }
          )}>
            <span className="card_li_pos_p1"></span>
            <span className="card_li_pos_p2">{data.hot}</span>
          </div>
        </Link>
      </ItemLi>
    </>
  )
})

export default CardItem