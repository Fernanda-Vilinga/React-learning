import React from 'react'

interface MenuProps{
   children:any
}
const  Menu:React.FC<MenuProps>= (props) =>{
    return(
       <div>
      {props.children}
       </div>
    );
}
export default Menu;