import "./App.css";
import { useRef } from "react";
import { useStore, actions } from "./store";

function App() {
	const [state, dispatch] = useStore();
	const { todos, todoInput } = state;
	const todoRef = useRef();

	function handleAddTodo() {
		dispatch(actions.addTodo(todoInput));
		dispatch(actions.setTodoInput(""));
		todoRef && todoRef.current.focus();
	}

	return (
		<div className="App">
			<input
				ref={todoRef}
				type="text"
				value={todoInput}
				placeholder="Enter todo..."
				onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
			/>

			<button onClick={handleAddTodo}>Add</button>

			<ul>
				{todos && todos.map((todo, index) => <li key={index}>{todo}</li>)}
			</ul>
		</div>
	);
}

export default App;
