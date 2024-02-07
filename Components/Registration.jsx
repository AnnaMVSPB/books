const React = require('react')
const Layout = require('./Layout')

const Registration = ({title}) => {
  return (
    <Layout title={title}>
    <div className='contAuth'>
        <form className='registration form' method='POST'>
            <input type='text' name='name' placeholder='name' required/>
            <input type='email' name='email' placeholder='email' required/>
            <input type='password' name='password' placeholder='password' required/>
            <input type='password' name='password2' placeholder='erPassword' required/>
            <button type='submit'>registration</button>
        </form>
        <div className='errRega err'></div>
    </div>
    </Layout>
  )
}

module.exports =  Registration