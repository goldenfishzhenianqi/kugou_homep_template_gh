import { Content } from './style'
import CardItem from '@/components/common/CardItem'

const ListBox = (props) => {

    const { //解构
        args: { data, arrange = 'two' },
        config: { activeIndex, pagination }
    } = props

    return (
        <Content>
            <div className='newsongslist_main active'>
                <ul className='newsongslist_ul active'>
                    {/* 一条新歌数据 */}
                    {
                        arrange == 'three' ?
                            data[activeIndex]?.list.map(item => (
                                <CardItem data={item} key={item.id} />
                            )) :
                            //songData[activeIndex][pos]? 判断数据是否拿到，没有不执行后面
                            data[activeIndex]?.list.slice(10 * (pagination - 1), 10 * pagination).map(item => (
                                <CardItem data={item} key={item.id} />
                            ))
                    }
                </ul>
            </div>
        </Content>
    )
}
export default ListBox