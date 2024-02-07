const React = require('react')
const Layout = require('./Layout')

const Login = ({title}) => {
  return (
    <Layout title={title}>
    <div className='contAuth'>
        <form className='login form' method='POST' action='/api/auth/login'>
   
            <input type='text' name='email' placeholder='email' required/>
            <input type='text' name='password' placeholder='password' required/>
    
            <button type='submit'>login</button>
        </form>
        <div className='errLogin err'></div>
    </div>
    </Layout>
  )
}

module.exports =  Login