const React = require('react');
function Navbar ({user}){
return(
    <div className='navbar'>
      { user ? 
      <>
      <p>{user.name}</p>
      <a href='/auth/logout'>выход</a></>
      :
      <>
        <a href='/auth/registration'>регайся</a>
        <a href='/auth/login'>заходи</a></>
}
        <a href='/genres'>ВСЕ ЖАНРЫ</a>
        <a href='/books'>КНИГИ</a>
    </div>
)
}

module.exports = Navbar