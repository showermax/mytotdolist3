import React from 'react';

type ButtonPropsType ={
    buttonCallback: ()=> void
    title: string
}
export function SuperButton(props: ButtonPropsType) {
    const onClickHandler = () => {
        props.buttonCallback()
    }

    return (
        <button onClick={onClickHandler}>{props.title}</button>
    )

}