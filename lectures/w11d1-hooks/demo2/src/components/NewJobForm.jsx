import { useState, useRef } from 'react';
import './NewJobForm.css';
import { useNavigate } from 'react-router-dom';

// a job listing consists of a title, salary, pto, applied, saved, id
const NewJobForm = props => {
  const navigate = useNavigate();

  // all form inputs should be controlled, meaning they are tied directly to state
  const [listing, setListing] = useState({
    title: '',
    salary: '',
    pto: '',
    applied: false,
    saved: false
  });
  
  // useRef allows us to store/persist mutable info between renders
  // unlike useState, changes to this info do not trigger rerenders
  // invocations of `useRef` return an object with a key of `current` that points to undefined (initially)
  const refData = useRef();
  console.log(refData);

  const [errors, setErrors] = useState([]);
  console.log(errors);
  const postToServer = listing => {
    console.log(listing);
  }

  const handleChange = key => e => {
    setListing(old => ({ ...old, [key]: e.target.value}));
  };

  const validate = () => {
    const errors = [];
    if (listing.title.length > 40) errors.push('Title is too long');
    if (listing.salary === '') errors.push('Salary must be defined');
    return errors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validate();
    if (errors.length > 0) {
      setErrors(errors);
    } else {
      setErrors([]);
      setListing({
        title: '',
        salary: '',
        pto: '',
        applied: false,
        saved: false
      })
      postToServer(listing);
      navigate('/jobs');
    }
  };

  return (
    <div className='new-job-form'>
      <h2>NewJobForm</h2>
      {errors.length > 0 && (
        errors.map((err, idx) => <p key={idx}>{err}</p>)
      )}
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Title'
          value={listing.title}
          onChange={handleChange('title')}
        />
        <input
          placeholder='Salary'
          value={listing.salary}
          onChange={handleChange('salary')}
        />
        <input
          placeholder='PTO'
          value={listing.pto}
          onChange={handleChange('pto')}
        />
        <input type='submit' value={'Submit'} ref={refData} />
      </form>
    </div>
  );
};

export default NewJobForm;