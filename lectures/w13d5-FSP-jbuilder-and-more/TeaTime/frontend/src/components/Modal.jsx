import React from 'react';
import { closeModal } from '../store/modalReducer';
import { useSelector, useDispatch} from 'react-redux';
import TeaForm from './TeaForm';

function Modal() {
  const modal = useSelector(state => state.modal)
  const dispatch = useDispatch();

  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'form':
      component = <TeaForm />;
      break;
    case 'other':
      break;
    default:
      return null;
  }

  const handleClick = (e) => {
    dispatch(closeModal());
  }
  
  return (
    <div className="modal-background" onClick={handleClick}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

export default Modal;
