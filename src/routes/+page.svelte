<script>
	import { onMount } from 'svelte';
	import { useState } from './hooks';

	/**
   * @type {any[]}
   */
	let todos = [];
	let todoText = '';

	onMount(() => {
		const existingTodos = localStorage.getItem('todos');
    	// @ts-ignore
    	todos = JSON.parse(existingTodos) || [];
	});

	function addTodo() {
		todos = [...todos, todoText];
    	localStorage.setItem('todos', JSON.stringify(todos));
	}
	/**
   * @param {any} text
   */
	function deleteTodo(text) {
		todos = todos.filter(
			(todo) => todo !== text
		);
		localStorage.setItem('todos', JSON.stringify(todos));
	}

</script>

<main class="App">
	<h1>Svelte Todo App</h1>
 <div class="input-wrapper">
		<input bind:value={todoText} placeholder="Create a new Todo">
		<button type="submit" on:click={addTodo}>Add</button>
</div>

<ul class="todo-list">
	{#each todos as todo}
	<div class="todo">
		<li>{todo}</li>
		<button class="delete-button" on:click={() => deleteTodo(todo)}>
			Delete
		</button>
	</div>
	{/each}
</ul>


</main>

<style>
	*,
*::before,
*::after {
  box-sizing: border-box;
}

.App {
  padding: 1rem;
  max-width: 50%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 768px) {
  .App {
    max-width: 100%;
    padding: 0;
    margin: 0;
  }
}

h1 {
  font-weight: 300;
  color: #44c0b6;
  font-size: 2.5rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
}

@media screen and (max-width: 768px){
  h1 {
    font-size: 1.2rem;
    font-weight: bold;
  }
}

.input-wrapper {
  margin: 3.5rem;
  display: flex;
  justify-content: space-between;  
}

@media screen and (max-width: 768px){
  .input-wrapper {
  max-width: 100%;
  }
}

.todo {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

input {
  width: 450px;
  padding: 0.8em;
}

input:focus {
  outline: none;
}

button {
  width: 120px;
  padding: 0.8em;
  cursor: pointer;
  font-weight: 400;
  letter-spacing: 0.1rem;
}

input{
  font-size: 1em;
  appearance: none;
  border: 2px solid #828691;
}

.add-button {
  color: #44c0b6;
  margin-left: 0.5rem;
  padding: 0.8rem;
}

.delete-button {
  color: #fe6a6a;
}

ul {
  padding: 0;
  list-style: none;
  margin-bottom: 0px;
}
@media screen and (max-width: 768px){
  ul {
    max-width: 100%;
  }
 
}

li {
  width: 450px;
  padding: 0.85em;
  text-align: left;
  margin-bottom: 0.5rem;
  color: #494847;
  letter-spacing: 0.02rem;
  transition: all 0.3s ease-out;
  border-left: 5px solid #cf972e;
}

li:last-child {
  margin-bottom: 0px;
}

.empty {
  font-size: 20px;
  font-weight: 400;
  color: #cf972e;
  letter-spacing: 0.2rem;
}
</style>