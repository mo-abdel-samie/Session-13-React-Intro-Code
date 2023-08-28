import React from "react";

const itemsStyle = { 
    color: "red",
    fontSize: "20px"
 }

const DoToItem = ({ val }) => <li style={itemsStyle}>{val}</li>;

const handelClick = (e) => {
    console.log("Hello \n".repeat(20),e);
}

export const ToDoItems = () => {
  return (
      <div>
          <button onClick={handelClick}>Click</button>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
        

        {["A.Samie", "Jo", "Fatma", "Yara"].map((item, i) => (
            <DoToItem  val={item} key={i}/>
        ))}

        {["A.Samiemap <br/>", "Jo <br/>", "Fatma <br/>"]}
      </ul>
    </div>
  );
};
