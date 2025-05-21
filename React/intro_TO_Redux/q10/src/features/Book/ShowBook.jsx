import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const ShowBook = () => {
    const books = useSelector(state=>state.books.books);
    const dispatch = useDispatch()
    const handleChange=(id)=>{
        dispatch(updateBook(id))
    }
  return (
    <div>
        {
            books&& books.map(book=>(
                <ul key={book.id}>
                    <li>{book.bookName}</li>
                    <li>{book.genre}</li>
                    <li>{book.author}</li>
                    <input type="checkbox" onChange={()=>handleChange(book.id)} />
                </ul>
            ))
        }
    </div>
  )
}
