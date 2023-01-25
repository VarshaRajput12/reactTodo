import React, { useState } from "react";

function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  const handleEvent = (e) => {
    setActivity(e.target.value);
  };

  const addActivity = () => {
    setListData((listData) => {
      const updatedList = [...listData, activity];
      setActivity("");
      return updatedList;
    });
  };

  const removeActivity = (i) => {
    const updatedListData = listData.filter((elem, id) => {
      return i !== id;
    });
    setListData(updatedListData);
  };

  const removeAll = () => {
    setListData([]);
  };

  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={handleEvent}
        />
        <button onClick={addActivity}>Add</button>
        <p className="list-heading">Here is your List</p>
        {listData !== [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i} className="flex">
                  <div className="listData">{data}</div>
                  <div>
                    <button
                      onClick={() => removeActivity(i)}
                      className="remove_btn"
                    >
                      Remove
                    </button>
                  </div>
                </p>
              </>
            );
          })}
        {listData.length >= 1 && (
          <button onClick={removeAll}>Remove All</button>
        )}
      </div>
    </>
  );
}

export default TodoList;
