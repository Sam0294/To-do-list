import React, { useState } from "react";
import "/workspace/react-hello/src/styles/index.css";

const Home = () => {
	const [tasks, setTasks] = useState("");
	const [todo, setTodo] = useState([]);

	const AddTask = (e) => {
		if (tasks.trim() !== "") {
			if (e.key === "Enter") {
				const newTodos = todo.concat({
					title: tasks,
					id: todo.length + 1,
				});
				setTodo(newTodos);
				e.target.value = "";
			}
		}
	};

	const removeItem = (tasksId) => {
		const removeTask = todo.filter((tasks) => tasks.id != tasksId);
		setTodo(removeTask);
	};

	return (
		<div>
			<div className="back bg-light mx-auto w-75">
				<div className="mb-3 w-50 mx-auto mt-4 ">
					<label htmlFor="exampleInputEmail1" className="form-label ">
						To do List
					</label>
					<input
						type="text"
						className="form-control"
						aria-describedby="emailHelp"
						placeholder="tarea"
						onKeyPress={AddTask}
						onChange={(e) => {
							setTasks(e.target.value);
						}}
					/>
					<br />
					<div className="">
						{todo.map((todo) => {
							return (
								<li
									clasName="list-group-item d-flex"
									key={todo.id}>
									<p className="p-2 flex-fill justify-content-end">
										{todo.title}
										<button
											className="btn btn-light ml-80px equis"
											onClick={() => removeItem(todo.id)}>
											<i className="fas fa-times"></i>
										</button>
									</p>
								</li>
							);
						})}
					</div>
					<div className="form-text">
						{tasks.length == 0
							? "no hay tareas pendientes"
							: todo.length + " " + "tareas"}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
