import React from "react";

function useLocalStorage(itemName, initialValue){
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(()=>{      
        setTimeout(()=>{
          try {
            const localStorageTodo = localStorage.getItem(itemName);
            let parsedItem;
          
            if(!localStorageTodo){
              localStorage.setItem(itemName, JSON.stringify(initialValue));
              parsedItem = initialValue;
            }else{
              parsedItem = JSON.parse(localStorageTodo);
              setItem(parsedItem);
            }
            setLoading(false);
          } catch (error) {
            setLoading(false);
            setError(true);
          }
        }, 3000)
    }, [])
  
  
    const saveItem = (newItem) => {
      localStorage.setItem("TODOS_V1", JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return {item, saveItem, error, loading};
  
  }


  export {useLocalStorage}