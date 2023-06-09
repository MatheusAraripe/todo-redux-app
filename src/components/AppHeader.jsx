import React, { useState } from 'react';
import Button, { SelectButton } from './Button';
import style from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={style.appHeader}>
      <Button onClick={() => setModalOpen(true)}>Add</Button>
      <SelectButton>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton>
      <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
