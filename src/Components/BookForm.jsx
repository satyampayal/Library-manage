import React from 'react'

function BookForm() {
  return (
    <div className='max-w-[600px]'>
        <div className='bg-[rgba(0,0,0,0.7)] px-[20px] py-[10px]'>
        <form  
        className='grid gap-3'>
              <h1>Title</h1>
              <input type="text" name="title" id="title"
                 placeholder='Enter book title'
                />
                <h1>Author</h1>
                <input type="text" name="author" id="author" 
                   placeholder='Enter author name'
                />
                <h1>ISBN</h1>
                <input type="number" name="isbn" id="isbn" 
                     placeholder='enter book isbn number'
                />

        </form>
        </div>
                
    
    </div>
  )
}

export default BookForm