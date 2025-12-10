import Book from "./book"

export default function Library ({books}){
    return(
        <div>
            <h2>My national Central Library</h2>
            <p>book Collection: {books.length}</p>
            <p>address: </p>
            <ul>
                {
                    books.map(book => <Book key={book.id} book ={book}></Book>)
                }
            </ul>
        </div>
    )
}