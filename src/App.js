import Header from "./header/Header";
import Tasks from "./Tasks/Tasks";
import React, {useState,useEffect} from 'react'
import AddTask from "./Task/AddTask";
import Counter from "./counter/Counter";
import EventBinding from "./EventBinding/EventBinding";
import ParentComponent from "./ParentComponent/ParentComponent";
import ChildrenComponent from "./childrenComponent/ChildrenComponent";
import Stylesheet from "./components/Stylesheet";
import InlineStyle from "./components/InlineStyle";
import "./components/myStyle.css";
import style from "./components/myStyle.module.css"
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import LifeCycleB from "./components/LifeCycleB";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComponent from "./components/PureComponent";
import RefsComp from "./components/RefsComp";
import FocusInput from "./components/FocusInput";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterRender from "./components/ClickCounterRender";
import HoverCounterRender from "./components/HoverCounterRender";
import User from "./components/User";
import CounterRender from "./components/CounterRender";
import {UserProvider} from "./components/UserContext";
import ComponentA from "./components/ComponentA";
import PostList from "./components/http/PostList";
import PostForm from "./components/http/PostForm";

function App() {
    const [showAddTask,setShowAddTask] = useState(false);
    //const [showFormButtonTitle,setshowFormButtonTitle] = useState('Show Add Form');
    const [tasks,setTasks] = useState([]);
    useEffect(()=>{
        const getTasks = async ()=>{
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer);
        }
      getTasks();

    },[]);
    // Fetch data from back end
    const fetchTasks = async () => {
        const res = await fetch("http://localhost:5000/tasks");
        const data = await res.json();
        console.log(data);
        return data;
    }
    // Fetch data from back end
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`);
        const data = await res.json();
        console.log(data);
        return data;
    }
    const deleteTask = async (id)=>{
        await fetch(`http://localhost:5000/tasks/${id}`,{
            method: "DELETE"
        });
        setTasks(tasks.filter((task)=>{
            return task.id!==id;
        }));
    }
    //Toggle reminder
    const toggleReminder = async (id)=>{
        const taskToToggle = await fetchTask(id);
        const updateTask = {...taskToToggle,reminder:!taskToToggle.reminder};
        const res = await fetch(`http://localhost:5000/tasks/${id}`,{
            method : "PUT",
            headers : {
                "Content-type" : "application/json",
            },
            body : JSON.stringify(updateTask)
        });
        const data =await res.json();
       setTasks(
           tasks.map((task)=>
           task.id === id ? {...task,reminder:!data.reminder} : task
       ));
    }
    const toggleAddForm = () => {
        // if(showFormButtonTitle==="Show Add Form")
        //     setshowFormButtonTitle("Hide Add Form");
        // else
        //     setshowFormButtonTitle("Show Add Form");
        setShowAddTask(!showAddTask);
    }
    const addTask= async (task)=>{
        const res = await fetch("http://localhost:5000/tasks",{
            method : "POST",
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(task)
        })
        const data =await res.json();
        setTasks([...tasks,data]);
        console.log(task);
        // const id = Math.floor(Math.random()*1000 + 1);
        // const newTask = {id,...task};
        // setTasks([...tasks,newTask]);
    }
  return (
     <div className="container">
         {/*<h1 className='error'>Error</h1>*/}
         {/*<h1 className={style.success}>Success</h1>*/}
    {/*//   <Header onToggleShowAddForm={toggleAddForm} showAddForm={showAddTask}/>*/}
    {/*//     {showAddTask && <AddTask onAddTask={addTask}/>}*/}
    {/*//     { tasks.length >0 ?*/}
    {/*//   <Tasks tasks ={tasks}*/}
    {/*//          onToggle={toggleReminder}*/}
    {/*//          onDelete={deleteTask}/>:'No Tasks Show'}*/}
    {/*<CounterRender/>*/}
    {/*<EventBinding/>*/}
    {/*<ParentComponent/>*/}
    {/*<Stylesheet primary={false}/>*/}
    {/*<InlineStyle/>*/}
    {/*<Form/>*/}
    {/*<LifeCycleA/>*/}
    {/*<FragmentDemo/>*/}
    {/*<Table/>*/}
    {/*<PureComponent/>*/}
    {/*<RefsComp/>*/}
    {/*<FocusInput/>*/}
    {/*<ClickCounter name="abdessamade"/>*/}
    {/*<HoverCounter/>*/}
    {/*<ClickCounterRender/>*/}
    {/*<HoverCounterRender/>*/}
    {/*<User render={(isLoggedIn)=>isLoggedIn ? "Abdessamade" : "Guest"}/>*/}
    {/*<CounterRender>*/}
    {/*    {(count,incrementCounter)=>(*/}
    {/*    <ClickCounterRender count={count} incrementCount={incrementCounter}/>*/}
    {/*)}*/}
    {/*</CounterRender>*/}
    {/*<CounterRender> {*/}
    {/*    (count,incrementCounter)=>(*/}
    {/*    <HoverCounterRender count={count} incrementCount={incrementCounter}/>*/}
    {/*)}*/}
    {/*</CounterRender>*/}
    {/*<UserProvider>*/}
    {/*    <ComponentA/>*/}
    {/*</UserProvider>*/}
    {/*<PostList/>*/}
    <PostForm/>
    </div>

  );
}

export default App;
