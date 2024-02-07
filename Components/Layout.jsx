const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ title, children,user }) {
 return (                        
   <html lang="en">                       
     <head>
       <title>{title}</title>
       <link rel="stylesheet" href="/css/books.css" />
       <link rel="stylesheet" href="/css/navbar.css" />
       <link rel="stylesheet" href="/css/genre.css" />
       <link rel="stylesheet" href="/css/auth.css" />
       <script defer src="/scripts/booksScript.js" />
       <script defer src="/scripts/authScript.js" />
     </head>
     <body>
      <Navbar user={user}/>
      {children}
      </body>
   </html>
 );
};
