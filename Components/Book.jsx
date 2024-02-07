const React = require('react');



function Book ({book,user}){

return(

<div className='bookCard' data-id = {book.id}>

<div className='contImg'><img src={book.img}/></div>
<h3>{book.title}</h3>
<p>Автор:{book.author}</p>
<p>{book.description}</p>
{ user && user.id === book.userId && <div className='buttonBoks'><button className='deleteBook'  ><img className='deleteBook' src='/img/delete.png'/></button>
<button><a  href={`/books/${book.id}/formUpdate`} ></a>
<img src='/img/update.png'/>
</button></div>}
</div>

)
}

module.exports = Book