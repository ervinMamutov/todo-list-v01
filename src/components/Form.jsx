import { useState } from 'react';
import './Form.css';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

const Form = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const changeHandler = (e) => {
    setError(false);
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      setError(true);
      return;
    }

    const task = {
      id: uuid(),
      text: inputValue,
      done: false,
    };

    addTask(task);
    setInputValue('');
  };

  return (
    <div className="wrapper">
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          className="input-text"
          placeholder="Add a new Task"
          value={inputValue}
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <button type="submit" className="btn-confirm">
          Confirm
        </button>
      </form>
      {error && <p className="error">Add a new Task</p>}
    </div>
  );
};

Form.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default Form;
