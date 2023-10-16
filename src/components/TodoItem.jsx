// import { format } from 'date-fns';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';
import { updateOneTodo } from '../slices/todoSlice';
import CheckButton from './CheckButton';
import TodoModal from './TodoModal';
import Button from './Button';

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function TodoItem({ todo, show }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  

  useEffect(() => {
    if (todo.status === 'complete') {
      setChecked(true);
    } else {
      setChecked(false);
    }
    console.log(show)
  }, [todo.status]);

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateOneTodo({ ...todo, status: checked ? 'incomplete' : 'complete' })
    );
  };

  return (
    <>
      <motion.div className={styles.item} variants={child}>
        <div className={styles.todoDetails}>
            {show ? "" : <CheckButton checked={checked} handleCheck={handleCheck} />}
          <div className={styles.texts}>
            <p
              className={getClasses([
                styles.todoText,
                todo.status === 'complete' && styles['todoText--completed'],
              ])}
            >
              {todo.title}
            </p> 
          </div>            

        </div>          
        <div>
            {todo.status === 'complete' ? <Button>Восстановить</Button> : <Button>Завершить</Button>}
        </div>
      </motion.div>
      <TodoModal todo={todo} />
    </>
  );
}

export default TodoItem;







