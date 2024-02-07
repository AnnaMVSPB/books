const React = require('react');
const Layout = require('./Layout')

function BookFormUpdate ({genres,book,title}){
    return(
        <Layout title={title}>
        <form className='updateBook' data-id={book.id}>
            <select name='genreId' defaultValue={book.genreId}>
               {genres.map(el=><option value={el.id}>{el.name}</option>)}
            </select>
            <input name='title' placeholder='title' required defaultValue={book.title}/>
            <input name='description' placeholder='description' defaultValue={book.description}/>
            <input name='img' placeholder='img' defaultValue={book.img}/>
            <input name='author' placeholder='author'defaultValue={book.author}/>
            <button>update</button>
        </form>
        <div className='errBooksUpdate'></div>
        </Layout>
    )
}

module.exports = BookFormUpdate