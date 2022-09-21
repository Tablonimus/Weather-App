import React, { useState } from "react";
import Styles from './Searchbar.module.css'

export default function SearchBar({onSearch}) {

  const [ciudadABuscar, funcionQueModificaCiudadABuscar] = useState('')

  function onHandleInputChange (e){
    e.preventDefault();
    funcionQueModificaCiudadABuscar(e.target.value);
    
    console.log(ciudadABuscar)
  }

  function onSubmitForm(e){
    e.preventDefault();
    onSearch(ciudadABuscar)
  }

  return (
    <form onSubmit={(e) => onSubmitForm(e)}>
      <input className={Styles.input}
        type="text"
        placeholder="Ciudad..."
        onChange = {(e => onHandleInputChange(e))}
      />
      <input className={Styles.btnSearch} type="submit" value="Agregar" />
    </form>
  );
}