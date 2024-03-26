import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './SessionModal.css';
import { createUser, loginUser } from '../store/sessionReducer';

const SessionModal = ({ modalState, setModalState }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if (modalState === 'signup') {
      dispatch(createUser({ username, password }))
        .then(() => setModalState(null))
        .catch(async res =>{
          let data = await res.json();
          setErrors(data);
        });
    } else {
      dispatch(loginUser({ username, password }))
        .then(() => setModalState(null))
        .catch(async res => {
          let data = await res.json();
          setErrors(data.errors);
        });
    }
  };

  return (
    <div className='modal-background' onClick={e => setModalState(null)}>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <h2>SessionModal: {modalState}</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Username'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            placeholder='Password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input type='submit' value={modalState} />
        </form>
        {errors.map((err, idx) => (<p key={idx}>{err}</p>))}
      </div>
    </div>
  );
};

export default SessionModal;