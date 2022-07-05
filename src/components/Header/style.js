import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 80px;
    background-color: #00a9ff;
`
// 导航栏1
export const HeadD0 = styled.div`
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: gray; */
`

export const HeadLeft = styled.div`
    height: 38px;
    display: flex;
    align-items: center;
    .left_d1 {
        margin-right: 40px;
        img {
            width: 146px;
        }
    }
    .left_d2 {
        position: relative;
        width: 280px;
        height: 30px;
        input {
            &.head_ipt {
                width: 100%;
                height: 100%;
                border: none;
                padding: 4px 10px 4px 40px;
                box-sizing: border-box;
                font-size: 14px;
                color: #fff;
                border-radius: 31px;
                background: rgb(77,194,255);
            }
        }
        .ipt_search {
            background: url('https://www.kugou.com/common/images/icon_search_white.png') no-repeat;
            background-size: 100%;
            width: 15px;
            height: 15px;
            position: absolute;
            left: 15px;
            top: 8px;
            cursor: pointer;
        }
    }
`

export const HeadRight = styled.div`
    height: 38px;
    display: flex;
    align-items: center;
    .head_a {
        font-size: 14px;
        color: #fff;
        opacity: 0.9;
        display: block;
        margin-right: 30px;
        min-width: 52px;
        text-align: center;
    }
    .right_d1 {
        width: 1px;
        background: rgba(255,255,255,0.5);
        height: 14px;
    }
    .right_d2 {
        display: flex;
        align-items: center;
        margin-left: 20px;
        cursor: pointer;
        .user_profile {
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
        .user_name {
            overflow: hidden;
            max-width: 70px;
            font-size: 14px;
            color: #fff;
            opacity: 0.9;
            margin-left: 8px;
        }
    }
`

// 导航栏2,路由
export const HeadD1Box = styled.div`
    width: 100%;
    height: 60px;
    position: relative;
    z-index: 1;
`
export const HeadD1 = styled.div`
    height: 60px;
    background: rgba(0, 169, 255, 0.04);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    //背景图片 渐变颜色
    background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.6));
    .head1_ul {
        width: 1000px;
        height: 60px;
        display: flex;
        margin: 0 auto;
        .head1_li {
            height: 100%;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            a {
                width: 72px;
                color: #000;
                &.active {
                    display: inline-block;
                    color: #fff;
                    font-weight: 700;
                    background: #00a9ff;
                    height: 34px;
                    line-height: 34px;
                    border-radius: 18px;
                }
            }
        }
    }
    
`