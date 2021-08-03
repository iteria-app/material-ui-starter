import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputFilterInteger = (props) => {
    const { item, applyValue } = props;

    const handleFilterChange = (event) => {
        const inputTargetValue: string = event.target.value.replace(/[^0-9]/g, '')
        applyValue({ ...item, value: inputTargetValue })
    }

    const columnFieldValue = (): string => {
        return item?.columnField
    }

    const maxLength = (): number => {
        const columnField: string = columnFieldValue()
        if (columnField === 'bigInteger') {
            return 19
        }
        return 9
    }


    return (
        <TextField
            label='Number'
            type='tel'
            value={item?.value || ''}
            inputProps={{ maxLength: maxLength() }}
            onChange={handleFilterChange}
        />
    )
};

export default InputFilterInteger;