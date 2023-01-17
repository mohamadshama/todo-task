import { RiAddFill } from "react-icons/ri";
export interface IAddToDoField {
}

const AddToDoField: React.FC<IAddToDoField> = () => {
  return <div className="w-full flex justify-between space-x-2 px-1 py-2 bg-white">
  <input className="outline-none" placeholder="Enter The Work" type="text" />
  <button className="bg-cyan-400 text-white rounded-sm text-lg font-bold px-1" type="submit"> <RiAddFill /></button>
</div>;
};

export default AddToDoField;
