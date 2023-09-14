import './Task.css';
import PropTypes from 'prop-types';

const Task = ({ task, checkHandler, deleteHandler }) => {
  return (
    <div className="task-container">
      <li key={task.id}>
        <div className={task.done ? 'done' : ''}>{task.text}</div>
        <div className="btn-container">
          <button className="btn-check" onClick={() => checkHandler(task.id)}>
            Check
          </button>
          <button className="btn-delete" onClick={() => deleteHandler(task.id)}>
            Delete
          </button>
        </div>
      </li>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  checkHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default Task;
