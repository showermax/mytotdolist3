import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputPropsType = {
    placeholder: string
    setContent: (n: string) => void
    value: string


}
const SuperInput = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setContent(e.currentTarget.value)
    }

    return (
        <input placeholder={props.placeholder} onChange={onChangeHandler} value={props.value} />
    );
};

export default SuperInput;