import React, {ChangeEvent} from 'react';

type InputPropsType ={
    placeholder: string
    setContent: (n: string)=>void


}
const SuperInput = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        props.setContent(e.currentTarget.value)
    }

    return (
            <input placeholder={props.placeholder} onChange={onChangeHandler}/>
    );
};

export default SuperInput;