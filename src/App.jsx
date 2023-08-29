
import { useEffect, useState } from 'react'
import './App.css'
import BookList from './Components/BookList';
//import BookForm from './Components/BookForm'

// getting the values from local storage
const getDatafromLS=()=>{
  const data=localStorage.getItem("book");
  if(data){
    return JSON.parse(data);// convert into OBJECT 
  }
  else{
    return []
  }
}
function App() {
 // const [books, setBooks] = useState([]);
 const [books, setBooks] = useState(getDatafromLS());

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setISBN] = useState("");
  const handlerBook = (e) => {
    e.preventDefault();
    // local storage
    let book = {
      title,
      author,               // i am not give value because pof ES6 are very smart if not give then it automaticly insert value its key name
      isbn
    };
    setBooks([...books, book]);
    setTitle('');
    setAuthor('');
    setISBN('');
  }
//////////////// DELETE BOOK 
  const deleteBook=(isbn)=>{
    const filterBook=books.filter((element,index)=>{
      return element.isbn!==isbn
    })

    setBooks(filterBook);
  }

  // removeAllBook
  const removeAllBook=()=>{
    setBooks([])
  }

  useEffect(() => {
    localStorage.setItem("book", JSON.stringify(books));// local storage save always string that's why i convert in string
  }, [books]);

  return (
    <div className='px-[20px]'>
      <h1 className='text-center text-[36px] '>BookList App</h1>
      <p className='text-center text-[16px] italic text-orange-500 mb-3'>Add and view your book using local storage</p>
      <div className='max-w-[1170px] grid grid-cols-2  gap-4 mx-auto'>
        <div className='bg-[rgba(158,154,154,0.12)] px-[20px] py-[10px] rounded-[10px]  '>
          <form
            onSubmit={handlerBook}
            className='grid gap-3'>
            <h1>Title</h1>
            <input type="text" name="title" id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Enter book title'
            />
            <h1>Author</h1>
            <input type="text" name="author" id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder='Enter author name'
            />
            <h1>ISBN</h1>
            <input type="number" name="isbn" id="isbn"
              value={isbn}
              onChange={(e) => setISBN(e.target.value)}
              placeholder='enter book isbn number'
            />
            <button type='submit' className='bg-green-600 text-white text-center px-[20px] py-[5px]'>ADD</button>

          </form>
        </div>

        <div className='bg-[rgba(158,154,154,0.12)] px-[20px] py-[10px] h-fit rounded-[10px] justify-center self-center ' >
          {books.length>0 && <>
                      <div className='flex justify-between bg-blue-600 text-[24px] text-white rounded-[5px] px-[10px]'>
                        <h1 className=''>Title</h1>
                        <h1>Author</h1>
                        <h1>ISBN</h1>
                        <h1>Delete</h1>
                      </div>
                     <div className='grid gap-3'>
                     {books.map((item)=> <BookList key={item.isbn} book={item} deleteBook={deleteBook}/>
                      )}
                     </div>
                     <button  type='button' onClick={removeAllBook} className='bg-red-600 text-white text-[24px] w-[100%] rounded-[10px] mb-2 mt-2'>Remove All</button>
          </>
          }
          {books.length < 1 && <div>No Books are added yet</div>}

        </div>


      </div>

    </div>
  )
}

export default App
