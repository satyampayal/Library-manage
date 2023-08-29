import React from 'react'
import {AiTwotoneDelete} from 'react-icons/ai'
function BookList({ book,deleteBook }) {
    return (
        <div className=' flex justify-between px-[20px] text-start '>
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
            <p>{book.isbn} </p>
            <div onClick={()=>deleteBook(book.isbn)}><span><AiTwotoneDelete className='inline cursor-pointer' /></span></div>
            


        </div>
    )
}

export default BookList