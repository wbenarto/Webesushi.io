import React, { useState } from "react";

const type = [
  {
    _id: 1,
    name: "maki",
  },
  {
    _id: 2,
    name: "regular",
  },
  {
    _id: 3,
    name: "special",
  },
  {
    _id: 4,
    name: "nigiri",
  },
  {
    _id: 5,
    name: "sashimi",
  },
  {
    _id: 6,
    name: "sushirito",
  },
  {
    _id: 7,
    name: "combo",
  },
];

function CheckBox(props) {
  const [Checked, setChecked] = useState([]);
  console.log(Checked);

  const handleToggle = (value, name) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    props.handleFilters(name);
    console.log(Checked);
  };
  return (
    <div>
      {type.map((e) => (
        <>
          <input
            onChange={() => handleToggle(e._id, e.name)}
            type="checkbox"
            checked={Checked.indexOf(e._id) === -1 ? false : true}
            key={e.id}
            value={e.name}
          ></input>
          <label>{e.name}</label>
        </>
      ))}
    </div>
  );
}

export default CheckBox;
