import React from 'react';
import TelInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const PhoneInput = ({value,setNumber,error}) => {
    return (
        <TelInput
            onChange={(e) => setNumber(e)}
            className={'phone-input'}
            country={'kg'}
            placeholder={'+996(***) ** ** **'}
            value={value}
            // value={this.state.phone}
            // onChange={phone => this.setState({ phone })}
            inputStyle={{
                border: error ? '3px solid red' : ''
            }}
        />
    );
};

export default PhoneInput;