import React from 'react';
import Link from 'next/link'


export default function Categories({categories}) {
  return (
    <div className='flex justify-center items-center'>
        {categories.map(category =>(
            <Link href="/" className="px-4 py-2 w-28 text-center bg-black mx-4 opacity-70 text-white  rounded-md" key={category.id}>
                <div>{category.name}</div> 
            </Link>
        ))}
    </div>
  )
}
