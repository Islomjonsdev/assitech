import React from 'react'

const Title = ({title, ...props}) => {
  return (
    <div {...props}>
        <h2 className='text-[45px] text-[#2E3A6B] leading-[55px] tracking-wide font-bold'>{title}</h2>
    </div>
  )
}

export default Title