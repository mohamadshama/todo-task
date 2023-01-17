import { MdCheck, MdDelete } from "react-icons/md";

export interface ITodoItem {
  text: string;
  isDone: boolean;
  id: string;
  onDelete: Function;
  onComplete: Function;
}

const TodoItem: React.FC<ITodoItem> = ({ text, isDone, onComplete, onDelete, id }) => {
  return <div className={`flex justify-between w-full bg-white p-2 mb-2 ${isDone ? 'opacity-40 w-11/12' : ''}`}>
    <span className={isDone ? 'line-through' : ''}>{text}</span>
    <div className="flex space-x-1">
      <button disabled={isDone} className="bg-green-500	text-lg text-white p-1" onClick={() => onComplete(id)}><MdCheck /></button>
      <button disabled={isDone} className="bg-red-500 text-lg text-white p-1" onClick={() => onDelete(id)}><MdDelete /></button>
    </div>
  </div>;
};

export default TodoItem;
