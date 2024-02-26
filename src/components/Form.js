import { useState } from "react";

function Form() {
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState(1);
  function handleSubmit (e) {
    e.preventDefault();
    if (!name) return;

    const newTask = {name, quantity, completed:false, id: Date.now()};
    console.log(newTask);
  }
  
  
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <select value={quantity} onChange={(e) =>setQuantity(Number(+e.target.value))}>
        {Array.from({length:20}, (_, i) => i+1).map(num=><option value={num} key={num}>{num}</option>)}
      </select>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={e=>setName(e.target.value)}
        placeholder="Type a task here..."
      />

      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
