import React from 'react'
import Style from './Services.module.css'
import Image from 'next/image'
import {services, sections} from '@/data/data'
import devider from '../../public/assets/devider/devider.svg'


const Services = () => {
  return (
    <section className={Style.section}>
    <div className={Style.container}>
    <div className={Style.row}>
      <Image src={devider} alt='#' />  
        <h2>{sections.section1}</h2>
        <div className={Style.itemsContainer}> {/* Key should be here */}
        {services.map((el, index) => (
        <div  key={index} className={Style.itemsContainerItems}>
            <Image width={80} height={80} src={el.img} alt='#' />  
            <div className={Style.itemsContainerText}>
                <p>{el.number}</p>
                <h3>{el.name}</h3>
            </div>
          </div>
         ))}
         </div>
    </div>
    </div>
  </section>
  )
}

export default Services