import React from 'react';
import Link from 'next/link';

export default function footer() {
  return (
    <footer>
        <h3 className='text-center w-full text-slate-200 py-5'>Made by <Link href='https://github.com/aydanramazanli'> Aydan Ramazanli</Link></h3>
    </footer>
  )
}
