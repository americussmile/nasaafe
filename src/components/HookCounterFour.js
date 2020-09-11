import React, {useState} from 'react';

function HookCounterFourth(){
    const [items, setItems] = useState([])
    const addItem = () => {
        setItems([... items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <y onClick={addItem}>Add a number</y>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>

        </div>
    )
}

export  default HookCounterFourth