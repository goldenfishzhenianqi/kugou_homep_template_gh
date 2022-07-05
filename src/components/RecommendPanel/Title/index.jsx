import classnames from 'classnames'
import { Title } from './style'

const ListTitle = (props) => {
    //连续解构
    const {
        args: { title, data, arrange = 'two', titlePlay = false },
        dispatch,
        config
    } = props

    // 点击切换歌曲页面
    const operatePage = e => {
        const { target } = e
        const { pagination } = config
        if (target.className.includes('pre')) {//点击的是前一页？
            if (pagination !== 1) {
                dispatch({ type: 'updatePage', data: pagination - 1 })
            }
        } else {
            if (pagination !== 3) {
                dispatch({ type: 'updatePage', data: pagination + 1 })
            }
        }
    }

    return (
        <Title>
            {/* title左侧地区列表 */}
            <div className='songs-title_d1'>
                <h3 className='songs-title_h3'>{title}</h3>
                <ul className='songs-title_ul'>
                    {/* 添加active类，显示背景和播放按钮图标 */}
                    {
                        data?.map((item, index) => (
                            //同样的，使用classnames库 动态设置 active 类名
                            <li className={classnames('songs-title_li', config.activeIndex === index ? 'active' : '')}
                                key={index}
                                onClick={() => {
                                    dispatch({ type: 'activeIndex', data: index });//把当前点击的item索引设置为activeIndex,展示效果
                                    dispatch({ type: 'updatePage', data: 1 })//pagination设置成初始1
                                }
                                } >
                                {item.category}
                                {/* books的title不显示播放按钮 */}
                                {titlePlay ? <span className='songs-title_playnow'></span> : null}
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* title右侧 */}
            {
                arrange == 'two' ?
                    //切换新歌页面
                    <div className='songs-title_d2'>
                        <span className='newsong-title_d2_sp newsong-pre' onClick={e => operatePage(e)}></span>
                        <span>{config.pagination}</span>
                        <span>/</span>
                        <span>3</span>
                        <span className='newsong-title_d2_sp newsong-next' onClick={e => operatePage(e)}></span>
                    </div>
                    :
                    // 更多按钮 
                    <div className='songs-title_more'>
                        <a href="">更多</a>
                    </div>
            }
        </Title>
    )
}
export default ListTitle
