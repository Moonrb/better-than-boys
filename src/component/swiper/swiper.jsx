import React from 'react'
import Swiper from 'react-id-swiper'
import Listfile from '../listfile/listfile'
import { Pagination} from 'swiper/dist/js/swiper.esm'
import './swiper.scss'

const SimpleSwiperWithParams = (props) => {
    const params = {
        modules: [Pagination],
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
    };

    return(
        <Swiper {...params} key={props.comminacrosslist.length}>
            {list(props)}
        </Swiper>
    )

};


const  list = (props)=>(
    props.comminacrosslist.map(item=>(
        <div key={item.id}>
            <Listfile key={item.id} id={item.id} {...props}>
                <h1>{item.nm}</h1>
            </Listfile>
        </div>
    ))
    // props.comminacrosslist.map(item=>(
    //
    //     <div key={item.id}>
    //             <h1>{item.nm}</h1>
    //     </div>
    //
    // ))

)
export default SimpleSwiperWithParams;
