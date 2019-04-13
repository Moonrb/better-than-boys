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
        slidesPerView: 4,
        spaceBetween: 30,
        // centeredSlides: true,
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
                <img src={item.img.replace('w.h','128.180')}/>
                <p className="dre">{item.wish}想看</p>
                <p>{item.nm}</p>
                <p className="week">{item.comingTitle}</p>
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
