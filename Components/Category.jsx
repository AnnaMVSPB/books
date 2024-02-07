const React = require('react');
const Layout = require('./Layout')

function Category ({categories,title,user}){

return(
<Layout title={title} user={user}>
<div className='list'>
    {categories.map(category=><div key={category.id} className='genre'><a href={`/genres/${category.name}/books`}>{category.name}</a></div>)}
</div>
</Layout>
)
}

module.exports = Category