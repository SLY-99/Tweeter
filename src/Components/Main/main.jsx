import React from 'react';
import '../Main/main.scss';
import Tweets from "../Tweets/tweets";
import Bobur from "../../Assets/Images/img-bobur.png";
import Img from "../../Assets/Images/Icons/img-icon.svg";
import Gif from "../../Assets/Images/Icons/gif-icon.svg";
import Stats from "../../Assets/Images/Icons/statistic-icon.svg";
import Smiling from "../../Assets/Images/Icons/smiling-icon.svg";
import Calendar from "../../Assets/Images/Icons/calendar-icon.svg";
import Data from "../../Localization/data";
import { Context } from '../../Context/localization'

function Main() {

  const { state } = React.useContext(Context);
  const [todos , setTodos] = React.useState([]);


  const addTodo = evt => {
    if (evt.code === 'Enter') {
        const newTodo = {
            id: todos[todos.length - 1]?.id + 1 || 0,
            text: evt.target.value.trim(),
        }
        setTodos([...todos, newTodo])
        evt.target.value = null;
    }
}


  const handleDelete = (evt) => {
    const foundTodoId = Number(evt.target.dataset.id);
    const filteredTodos = todos.filter(todo => todo.id !== foundTodoId)
    setTodos([...filteredTodos]);
}

  return (
    <>
    <div className='main__wrapper border-bottom border-2'>
        <div className='main__box'>
            <img className='main__img' src={Bobur} alt="bobur" />
            <div className='main__mini-box'>
                <p className='main__title'>{Data[state].main.state}</p>
                <input className='main__input' type="text" onKeyUp={addTodo}/>
                <picture className='main__picture'>
                    <img className='main__pic' src={Img} alt="img" />
                    <img className='main__pic' src={Gif} alt="img" />
                    <img className='main__pic' src={Stats} alt="img" />
                    <img className='main__pic' src={Smiling} alt="img" />
                    <img className='main__pic' src={Calendar} alt="img" />
                </picture>
                <button className='main__btn'>Tweet</button>
            </div>
        </div>
    </div>
    <div className='border-bottom border-2'>
    {todos.length > 0 && todos.map((todo) => (
      <React.Fragment key={todo.id}>
              <div className='main__box'>
              <img className='main__img' src={Bobur} alt="bobur" />
              <div className='main__mini-box'>
              <h4 className='main__name'>Bobur <span className='main__username'>@bobur_mavlonov · 1m</span></h4>
              <p className='main__text'>{todo.text}</p>
                  <button data-id = {todo.id} className='main__delete' onClick={handleDelete}>{Data[state].main.delete}</button>
              </div>
             </div>
      </React.Fragment>
    ))}
    </div>
    <Tweets/>
    </>
  );
}

export default Main;