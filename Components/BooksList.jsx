const React = require('react');

const Layout = require('./Layout');
const Book = require('./Book');
const BookFormAdd = require('./BookFormAdd');

function BooksList ({books,title,genres,user}){
return(
<Layout title={title} user={user}>
   { user && <BookFormAdd genres={genres}/>}
<div className='list booksList'>
    {books.map(el=><Book book={el} key={el.id} user={user}/>)}
</div>
</Layout>
)
}

module.exports = BooksList