import styled from "styled-components";

export const Banner = styled.div`
    h3 {
        width: 1519px;
        height: 560px;
        overflow: hidden;
    }
    .swiper_1 {
        background: url('https://imgessl.kugou.com/commendpic/20220617/20220617231437393045.jpg') no-repeat center top;
    }
    .swiper_2 {
        background: url('https://imgessl.kugou.com/commendpic/20220630/20220630212022404148.jpg') no-repeat center top;
    }
    .swiper_3 {
        background: url('https://imgessl.kugou.com/commendpic/20220317/20220317145017775531.jpg') no-repeat center top;
    }
`
export const Content = styled.div`
    width: 1000px;
    margin: 0 auto;
    display: flex;
`
export const NewMV = styled.div`
    width: 320px;
    margin-left: 20px;
    float: right;
    .mv-title {
        height: 50px;
        margin: 60px 0 20px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .mv-title-h3 {
            font-size: 26px;
            font-weight: 500;
            color: #000;
        }
        .mv-title-more {
            a {
                font-size: 14px;
                color: #858585;
                background: url('https://www.kugou.com/common/images/icon_arrow_right_gray.png') no-repeat;
                background-size: 16px;
                background-position: right 2px;
                padding-right: 19px;
            }
        }
    }
    .mv-content_d1 {
        .mv-show-a {
            display: block;
            position: relative;
            border-radius: 8px;
            overflow: hidden;
            img {
                width: 320px;
                height: 180px;
                border-radius: 8px;
                transform: scale(1.0);
                transition: all 0.2s ease;
            }
            .mv-play_item {
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                .mv-play_span {
                    width: 50px;
                    height: 50px;
                    background: url('https://www.kugou.com/common/images/icon_play_white.png') no-repeat;
                    background-size: 100%;
                    opacity: 0.9;
                    transition: all 0.2s ease;
                }
            }
            
            &:hover {
                img {
                    transform: scale(1.06);
                }
                .mv-play_item {
                    background: rgba(0,0,0,.4);
                    opacity: 1;
                    .mv-play_span {
                        opacity: 1;
                    }
                }
            }
        }
    }
`
export const Footer = styled.div`
    width: 100%;
    height: 150px;
    /* background-color: #2c323b; */
`
