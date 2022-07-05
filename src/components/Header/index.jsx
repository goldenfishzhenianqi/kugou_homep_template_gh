import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderWrapper, HeadD0, HeadLeft, HeadRight, HeadD1, HeadD1Box } from './style'

const Header = () => {
    return (
        <>
            <HeaderWrapper>
                <HeadD0>
                    <HeadLeft>
                        <a href="" className='left_d1'>
                            <img src="https://www.kugou.com/common/images/kugou_white.png" alt="logo" />
                        </a>
                        <div className='left_d2'>
                            <input className='head_ipt' type="text" placeholder='SM新歌独家首发抢先听' />
                            <div className='ipt_search'></div>
                        </div>
                    </HeadLeft>
                    <HeadRight>
                        <a href="" className='head_a'>音乐人</a>
                        <a href="" className='head_a'>主播电台</a>
                        <a href="" className='head_a'>开放平台</a>
                        <a href="" className='head_a'>VIP会员</a>
                        <div className='right_d1'></div>
                        <div className='right_d2'>
                            <img className='user_profile' src="https://imgessl.kugou.com/kugouicon/165/20191012/20191012173111932044.jpg" alt="profile" />
                            <span className='user_name'>金鱼柘念柒</span>
                        </div>
                    </HeadRight>
                </HeadD0>
                <HeadD1Box>
                    <HeadD1>
                        <ul className='head1_ul'>
                            <li className="head1_li ">
                                {/* <a href="">首页</a> */}
                                <NavLink to='/home'>首页</NavLink>
                            </li>
                            <li className="head1_li">
                                <NavLink to='/rank'>榜单</NavLink>
                            </li>
                            <li className="head1_li">
                                <NavLink to='/book'>听书</NavLink>
                            </li>
                        </ul>
                    </HeadD1>
                </HeadD1Box>
            </HeaderWrapper>
        </>
    )
}

export default Header