import styled from "styled-components";

export const ItemLi = styled.li`
    /* ---判断card类型，两列或三列展示--- */
    width: ${props => props.card == 'song' ? '50%' : '33%'};
    margin-bottom: 10px;
    .card_li_a {
        display: flex;
        align-items: center;
        height: 62px;
        width: 320px;
        border-radius: 8px;
        padding-right: 16px;
        box-sizing: border-box;
        .card_li_img {
            position: relative;
            z-index: 1;
            width: 62px;
            height: 62px;
            overflow: hidden;
            border-radius: 8px;
            flex-shrink: 0;
            img {
                display: block;
                width: 100%;
                transform: calc(1.0);
                transition: all 0.2s ease;
                &:hover {
                    transform: scale(1.06);
                }
            }
        }
        .card_li_bd {
            margin-left: 14px;
            flex: 1;
            .card_li_bd_name {
                font-size: 14px;
                font-weight: 400;
                overflow: hidden;
                /* -----------文字超出用...隐藏-------- */
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            }
            .card_li_bd_singer {
                font-size: 12px;
                font-weight: 400;
                margin-top: 6px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            }
        }
        &:hover {
            .card_li_img {
                transition: all .2s ease;
                transform: scale(1.06);
            }
            .card_li_bd {
                color: skyblue;
            }
        }
        /* -----------------歌曲卡片展示播放和下载----------------- */
        .card_li_do {
            display: flex;
            align-items: center;
            min-width: 56px;
            flex-shrink: 0;
            /* --html结构相同，使用同样的类名，用pos名字占位-- */
            .card_li_pos_p1 {
                width: 24px;
                height: 24px;
                background: url('https://www.kugou.com/common/images/icon_play_style2_black.png') no-repeat;
                background-size: 100%;
                &:hover {
                    background: url('https://www.kugou.com/common/images/icon_play_style2_blue.png');
                    background-size: 100%;
                }
            }
            .card_li_pos_p2 {
                width: 24px;
                height: 24px;
                background: url('https://www.kugou.com/common/images/icon_download_style2_black.png') no-repeat;
                background-size: 100%;
                margin-left: 8px;
                &:hover {
                    background: url('https://www.kugou.com/common/images/icon_download_style2_blue.png') no-repeat;
                    background-size: 100%;
                }
            }
        }
        /* -------------------听书卡片展示热度-------------------- */
        .card_li_hot {
            display: flex;
            align-items: center;
            min-width: 56px;
            flex-shrink: 0;
            .card_li_pos_p1 {
                width: 12px;
                height: 12px;
                background: url('https://www.kugou.com/common/images/icon_play_style2_black.png') no-repeat;
                background-size: 100%;
            }
            .card_li_pos_p2 {
                font-size: 12px;
                color: #000;
            }
            &:hover {
                .card_li_pos_p1 {
                    background: url('https://www.kugou.com/common/images/icon_play_style2_blue.png');
                    background-size: 100%;
                }
                .card_li_pos_p2 {
                    color: skyblue;
                }
            }
        }
    }
`
