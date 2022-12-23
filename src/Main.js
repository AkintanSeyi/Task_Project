import React, { useState  , useEffect } from 'react';
import List from './List';

const Main = () => {

  const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
      return (list = JSON.parse(localStorage.getItem('list')));
    } else {
      return [];
    }
  };


const [name , setName] = useState("");
const [list , setList ] = useState(getLocalStorage())
const [selectItem , setSelectItem] = useState("Select Item")
const [editId , setEditId] = useState(null)
const [isEditing , setIsEditing] = useState("")





const handleSubmit = (e) => {
  e.preventDefault()

   if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name , dropDown : selectItem  };
          }
          return item;
        })
      );
      setName('');
      setSelectItem("")
      setEditId(null);
      setIsEditing(false);

    }

    else  {

      const newItem = { id: new Date().getTime().toString(), title: name , dropDown : selectItem };

    //  setList([...list, newItem]);
    setSelectItem("")
    setName('');
      setList([...list , newItem])

    }





  }




const removeItem = (id) => {

  setList(list.filter((item) => item.id !== id));

};
const editItem = (id) => {
  const specificItem = list.find((item) => item.id === id);

  setName(specificItem.title);
  setEditId(id)
  setIsEditing(true)
  setSelectItem(specificItem.dropDown)
};


console.log(list );
console.log(selectItem);

useEffect(() => {
  localStorage.setItem('list', JSON.stringify(list));
}, [list]);




  return (
    <div className='main'>



<section className='section'>

<div className='table-section'>

<h2 >Task</h2>
<form className='form'>

<input
required
            type='text'
            className='form__input'
            placeholder= 'Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

        <select   value={selectItem}  onChange={(e) =>  setSelectItem(e.target.value) }   required className='form__input' >
        <option  disabled value= "Select Item" >Select Item</option>
          <option value= "0 item" >0 item</option>
          <option value= "1 item">1 item</option>
          <option value= "2 item">2 item</option>
          <option value="3 item">3 item</option>
        </select>
        <div className='checkbox'>
        <input className='checkbox__input' type= "checkbox"  />

        </div>

  <button type='submit'  required onClick={handleSubmit} className='form__button'>

   Save




  </button>





</form>

<div  className='form_list'>
 {

  list.length > 0  && <div >
  <List items={list}  removeItem={removeItem} editItem={editItem} />
</div>











 }
</div>





</div>



</section>





    </div>
  )
}

export default Main