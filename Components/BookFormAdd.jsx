const React = require('react');


function BookFormAdd ({genres}){
    return(
        <>
        <form className='addBook'>
            <select name='genreId'>
               {genres.map(el=><option value={el.id}>{el.name}</option>)}
            </select>
            <input name='title' placeholder='title' required />
            <input name='description' placeholder='description'/>
            <input name='img' placeholder='img' type='file' multiple/>
            <input name='author' placeholder='author'/>
            <button>add</button>
        </form>
        <div className='errBooks'></div>
        </>
    )
}

module.exports = BookFormAdd