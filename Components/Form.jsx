const React = require('react');
const Layout = require('./Layout')

function Form ({title}){
return(
<Layout title={title}>
<div>
   <form method='POST' action='/addForm'>
    <input name='password'/>
    <button>++++++++</button>
   </form>
</div>
</Layout>
)
}

module.exports = Form