import React from 'react';
//import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ items , removeItem ,  editItem }) => {

  return (
    <div >
      {items.map((item) => {
const {id , title , dropDown } = item;
        return (
          <div className='list'  key={id}>
          <article className='list__item' >
            <p className='title'>{title}</p>


            <div className='list__select'>

            <p className='title'>{dropDown}</p>

            </div>
            <div className='btn-container'>

              <button
                type='button'
                onClick={() => editItem(id)}
                style = {{marginRight : ".5rem" , color : "green" , fontSize : "1.2rem"}}
              >
                Edit
              </button>
              <button
                type='button'
             onClick={() => removeItem(id)}
             style = {{marginRight : ".5rem" , color : "red" , fontSize : "1.2rem"}}
              >
               Trash
              </button>
            </div>
          </article>
          </div>
        );
      })}
    </div>
  );
};

export default List;
