import { useState } from "react";
import "./TodoSearch.css";

function TodoSearch(){

    const [searchValue, setSearchValue] = useState("");

    console.log("buscando: " + searchValue);


    return (
        <input className="TodoSearch"
        placeholder="Escribir todo"
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);             
        }}
        />
    );
}

export {TodoSearch};