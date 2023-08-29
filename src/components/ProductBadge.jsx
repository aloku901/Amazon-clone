import React from 'react'

const ProductBadge = ({ badge }) => {

    if(badge === "choice") {
        return (
            <span className='text-xs xl:text-sm bg-slate-800 text-white p-1'>Amazon's<span className='text-orange-500 '>Choice</span></span>
        )
    } else if (badge === "seller") {
        return (
            <span className='text-xs xl:text-sm bg-orange-500 text-white p-1'>#01 Best Seller</span>
        )
    }  else if (badge === "limited") {
        return (
            <span className='text-xs xl:text-sm bg-red-800 text-white p-1'>Limited Time Deals</span>
        )
    }

  return (
    <div>
      
    </div>
  )
}

export default ProductBadge
