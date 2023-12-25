import React from 'react'
import Image from 'next/image'

const Brand = () => {
  return (
    <>
    <div className='flex justify-center  relative bottom-16 flex-wrap m-2 gap-16'>

        <Image src='/emi.png' height={133} width={125} alt='emirates'  />
        <Image src='/british.png' height={145} width={150} alt='emirates'  />
        <Image src='/qatar.png' height={130} width={140} alt='emirates'  />
        <Image src='/sing.png' height={130} width={140} alt='emirates'  />
        <Image src='/malin.png' height={130} width={124} alt='emirates'  />
        <Image src='/mal.png' height={130} width={124} alt='emirates'  />
        <Image src='/cathi.png' height={130} width={124} alt='emirates'  />
      </div>
    
    </>
  )
}

export default Brand