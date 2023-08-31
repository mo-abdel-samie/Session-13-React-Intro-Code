import React, { useState } from "react";

export const FormAddUser = ({ userHandler }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    let user = {
      name,
      title,
      task: true,
    };

    userHandler(user);
    setName("");
    setTitle("");
  };

  return (
    <form onSubmit={addUserHandler} className="shadow-sm mt-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          className="form-control"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button type="submit" className="btn btn-outline-success">
          Add
        </button>
      </div>
    </form>
  );
};
