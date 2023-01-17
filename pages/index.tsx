import { useState } from "react";
import AddToDoField from "../components/add-todo-field/AddToDoField";
import Dropdown from "../components/dropdown/Dropdown";
import TodoItem from "../components/todo-item/TodoItem";


const options = [
  {value: 'all', label: "All"},
  {value: 'HTML', label: "HTML"},
  {value: 'CSS', label: "CSS"},
  {value: 'JavaScript', label: "JavaScript"},
  {value: 'Angular', label: "Angular"},
  {value: 'React', label: "React"},
]

const Home = () => {

  const [items, setItems] = useState<{id: string; task: string; isDone: boolean}[]>([]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Event: ", event.target[0].value);
    setItems([
      ...items,
      {
        id: `${event.target[0].value + Math.random()}`,
        task: event.target[0].value,
        isDone: false
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
          <Dropdown name='tasks-types' options={options} />

          </div>
          
        </form>

        <div className="w-full mt-8 flex flex-col items-center	">
          {
            items.map((item) => <TodoItem onComplete={(id: string) => {
              console.log('ID: ', id);
              setItems(items.map((item) => {
                console.log('Item.id', item.id);
                if (item.id == id) return {...item, isDone: true}
                else return item;
              }));
            }} onDelete={(id: string) => {
              setItems(items.filter((item) => {
                return item.id != id;
              }))
              }} key={item.task} text={item.task} isDone={item.isDone} id={item.id} />)
          }
        </div>
      </div>
    </section>
  );
};

export default Home;
