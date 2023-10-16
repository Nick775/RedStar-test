import { AnimatePresence, motion } from 'framer-motion';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/modules/app.module.scss';
import TodoItem from './TodoItem';
import ChooseAllButton from './ChooseAllButton';
import Button from './Button'

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  const [show, setShow] = useState(true);

  return (
    <motion.div
      className={styles.content__wrapper}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <ChooseAllButton todo={todoList} />
      
      <AnimatePresence>
      <Button onClick={() => setShow(prev => !prev)}>
        Показать checkbox
      </Button>
        {todoList ? (
          todoList.map((todo) => (
            <TodoItem key={todo.id} todo={todo} show={show} />
          ))
        ) : (
          <motion.p variants={child} className={styles.emptyText}>
            Нет задач
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default AppContent;





