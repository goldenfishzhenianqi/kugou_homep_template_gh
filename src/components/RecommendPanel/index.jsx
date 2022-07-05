import React, { useReducer } from 'react'
import ListBox from './ListBox'
import ListTitle from './Title'

const RecommendPanel = (props) => {
    //解构全部参数?
    // const {title, data, arrange} = props

    //Title 和 ListBox 的联动需要配置两个参数实现
    //pagination：数据展示的当前页，两列布局需要
    //activeIndex: 当前数据索引，(例如，在推荐歌曲中是area，在精选听书中是category)
    const reducer = (state, action) => {
        switch (action.type) {
            case 'updatePage':
                return { ...state, pagination: action.data }
            case 'activeIndex':
                return { ...state, activeIndex: action.data }
            default:
                break
        }
    }
    const [panelConfig, dispatch] = useReducer(reducer, {
        pagination: 1,
        activeIndex: 0
    });

    return (
        <div style={{ minWidth: '660px' }}>
            <ListTitle
                args={props}
                dispatch={dispatch}
                config={{ pagination: panelConfig.pagination, activeIndex: panelConfig.activeIndex }}></ListTitle>
            <ListBox
                args={props}
                config={{ pagination: panelConfig.pagination, activeIndex: panelConfig.activeIndex }}></ListBox>
        </div>
    )
}
export default RecommendPanel
