import "./TodoSearch.css";

function TodoSearch(){
    return (
        <input className="TodoSearch" placeholder="Escribir todo"
        onChange={(event) => {
            console.log("Escribiendo...");
            console.log(event);
            console.log(event.target);
            console.log(event.target.value);                     
        }}
        />
    );
}

export {TodoSearch};