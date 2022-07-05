import styled from "styled-components"

export const Title = styled.div`
    height: 50px;
    margin: 60px 0 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* -------------title左侧---------------- */
    .songs-title_d1 {
        display: flex;
        .songs-title_h3 {
            font-size: 26px;
            font-weight: 500;
            color: #000000;
        }
        .songs-title_ul {
            display: flex;
            margin-left: 50px;
            margin-top: 10px;
            .songs-title_li {
                padding: 0 12px;
                font-size: 14px;
                font-weight: 400;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 15px;
                height: 24px;
                margin-right: 14px;
                cursor: pointer;
                &.active {
                    background: rgba(0, 169, 255, 0.1);
                    color: #00a9ff;
                    .songs-title_playnow {
                        opacity: 1;
                    }
                }
                .songs-title_playnow {
                    width: 14px;
                    height: 14px;
                    background: url('https://www.kugou.com/common/images/icon_play_little_blue.png') no-repeat;
                    background-size: 100%;
                    margin-top: 1px;
                    margin-left: 2px;
                    opacity: 0;
                }
            }
        }
    }
    /* ----------------title右侧----------- */
    /* 歌曲page切换样式 */
    .songs-title_d2 {
        display: flex;
        margin-right: 20px;
        .newsong-title_d2_sp {
            width: 16px;
            height: 16px;
            margin: 4px 4px 0;
            cursor: pointer;
            background: url('https://www.kugou.com/common/images/icon_arrow_right_gray.png') no-repeat;
            background-size: 100%;
            &.newsong-pre {  
                    transform: rotate(180deg);
            }
        }
    }
    /* 更多图标样式 */
    .songs-title_more {
        a {
            font-size: 14px;
            color: #858585;
            background: url('https://www.kugou.com/common/images/icon_arrow_right_gray.png') no-repeat;
            background-size: 16px;
            background-position: right 2px;
            padding-right: 19px;
        }
    }
`