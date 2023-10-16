import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react'
import React from 'react';
import { updateAllTodo } from '../slices/todoSlice';
import { useDispatch } from 'react-redux';
import styles from './../styles/modules/app.module.scss'
import Button from './Button';


function ChooseAllButton({ todo }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(true);

  const handleAll = () => {
    setChecked(!checked);

    dispatch(
      updateAllTodo({ ...todo, status: checked ? 'complete' : 'incomplete' })
    );
  };

  return (
    <motion.div className={styles.text} >
        <Button onClick={handleAll}>
           Вычеркнуть все 
        </Button>

        {!checked ? <Button variant='primary'>Отменить</Button> : <></>}

    </motion.div>

    
  );
}

export default ChooseAllButton;