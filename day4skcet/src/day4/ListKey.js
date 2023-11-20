import React from 'react';
export default function ListComponent(){
    const listItems=myList.map((item)=><li key={item.id}>{item.value}</li>);

    return(
        <ul>{listItems}</ul>
    );
}
const myList=[{id:'a',value:'apple'},
              {id:'b',value:'orange'},
              {id:'c',value:'lychee'},
              {id:'d',value:'blueberry'},
              {id:'e',value:'blackberry'}
];