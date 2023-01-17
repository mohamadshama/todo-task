import { useState } from "react";
import AddToDoField from "../components/add-todo-field/AddToDoField";
import Dropdown from "../components/dropdown/Dropdown";
import TodoItem from "../components/todo-item/TodoItem";


const options = [
  {value: 'All', label: "All"},
  {value: 'HTML', label: "HTML"},
  {value: 'CSS', label: "CSS"},
  {value: 'JavaScript', label: "JavaScript"},
  {value: 'Angular', label: "Angular"},
  {value: 'React', label: "React"},
]



const Home = () => {

  const [items, setItems] = useState<{id: string; task: string; type: string; isDone: boolean}[]>([]);
  const [type, setType] = useState<string>('All');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setItems([
      ...items,
      {
        id: `${event.target[0].value + Math.random()}`,
        task: event.target[0].value,
        isDone: false,
        type: type
      }
    ])
  }

  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen ">
      <div className="flex flex-col items-center max-w-md m-auto">
        <h6 className="uppercase mt-5 text-xl font-bold">Works To Be Done</h6>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex mt-8 space-x-2">
            
          <AddToDoField />
          <Dropdown onChange={(event) => {
            setType(event.target.value);
          }} value={type} name='tasks-types' options={options} />

          </div>
          
        </form>

        <div className="w-full mt-8 flex flex-col items-center	">
          {
            items.filter((item) => {
              if (type == 'All') return true;
              else return item.type == type;
            }).map((item) => <TodoItem onComplete={(id: string) => {
              setItems(items.map((item) => {
                if (item.id == id) return {...item, isDone: true}
                else return item;
              }));
            }} onDelete={(id: string) => {
              setItems(items.filter((item) => {
                return item.id != id;
              }))
              }} key={item.id} text={item.task} isDone={item.isDone} id={item.id} />)
          }
        </div>
      </div>
    </section>
  );
};

export default Home;
