import React from 'react';
import  Header  from './components/header/header.jsx';
import ToDo from './components/todo/todo-connected';
import  Pagination from './components/context/contextSetting';
import  Footer  from './components/footer/footer.jsx';
import './App.scss';
export default function App () {
    return (
      <>
       <Header/>
       <br />
        <ToDo />
       
      <Footer/>
      </>
    );
}
