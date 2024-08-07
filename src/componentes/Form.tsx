import React from 'react'

interface FormProps{
    children:any
}
const Form:React.FC<FormProps>=(props)=>{
    return(
<div>
    {props.children}
    

</div>
);
}
export default Form