import React, { useState } from "react";
import axios from "axios";
import { axiosWithLoginAuth } from "./utils/axiosWithLoginAuth";

const initialColor = {
    id: Date.now(),
    color: "",
    code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [color, setColor] = useState(initialColor)

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    axiosWithLoginAuth()
    .put(`/api/colors/${colorToEdit.id}`, colorToEdit)
          .then(result => {
              // const newColors=colors.map(movie => (
              //   `${colors.id}` === colors.match.params.id
              // ))
              console.log(result)
              setColorToEdit(colorToEdit);
              window.location.reload();
          })
          .catch(error => console.log(error.response));
      };
  

  const deleteColor = id => {
    // make a delete request to delete this color
    axiosWithLoginAuth()
    .delete(`/api/colors/${id}`)
    .then(res =>window.location.reload())
    .catch(err => console.log(err))
  };

  const submitColor = event => {
    event.preventDefault();
    axiosWithLoginAuth()
    .post("/api/colors", color)
    .then(res => {window.location.reload()
   
  })
    .catch(err => console.log(err.res));
}


  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={() => deleteColor(color.id)}>
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
              name='color'
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
              name='code'
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
        <h4>Add New Color</h4>
          <form onSubmit={submitColor}>
            <input 
            type="text"
            value={color.color}
            name='color'
            onChange={e =>
              setColor({ ...color, 
                color: e.target.value })
            }
            placeholder='Color'
            />
            <input 
            type="text"
            value={color.code.hex}
            name='code'
            onChange={e =>
              setColor({
                ...color,
                code: { hex: e.target.value }
              })
            }
            placeholder='Code'
            />
            <button>Add</button>
          </form>
    </div>
  );
};

export default ColorList;
