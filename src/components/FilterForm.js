import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {cartridges} from './findCartridges';

const FormWrapper = styled.div``;
const Title = styled.h2``;
const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
`;
const Label = styled.label`
width: 25%;
border: 1px solid black;

`;
const InputWrapper = styled.div`
width: 60%;
margin: .2% auto;
display: flex;
justify-content: space-evenly;

`;
const Input = styled.input`
border: 1px solid black;
`;
const Button = styled.button`
background-color: lightgrey;
border: 1px solid black;
width: 20%;
margin: 2% auto;
`;

const initialState = {
    caseType: '',
    bulletDiameter: '',
    neckDiameter: '',
    shoulderDiameter: '',
    baseDiameter: '',
    rimDiameter: '',
    rimThickness: '',
    caseLength: '',
    cartridgeLength: '',
    primer: ''
};

const initialVarianceState = {
    bulletDiameter: '',
    neckDiameter: '',
    shoulderDiameter: '',
    baseDiameter: '',
    rimDiameter: '',
    rimThickness: '',
    caseLength: '',
    cartridgeLength: ''
};

const FilterForm = props => {
    const [readings, setReadings] = useState(initialState);
    const [variance, setVariance] = useState(initialVarianceState);
    const [currentKey, setCurrentKey] = useState('');
    const keys = Object.keys(initialState);
    console.log({keys});

    const onChangeHandler = e => {
        e.preventDefault();
        if (e.target.value) {
            setReadings({...readings, [e.target.name]: e.target.value});
            setCurrentKey(e.target.name);
        } else {
            setReadings({...readings, [e.target.name]: e.target.value});
        }

        /*if (e.target.name === 'caseType' || e.target.name === 'primer') {
            console.log(`readings[${e.target.name}]`, readings[e.target.name]);
            console.log(`before ${e.target.name} filter`, props.cartridges);
            props.setCartridges(props.cartridges.filter(item => item[e.target.name] === readings[e.target.name]));
        }*/
    };

    // useEffect(() => {
    //     props.setCartridges(cartridges.filter(item => item[keys[0]] === readings[keys[0]] && item[keys[1]] < variancePlus(variance[keys[1]], readings[keys[1]]) && item[keys[1]] > varianceMinus(variance[keys[1]], readings[keys[1]])
    //     ));
    // }, [readings]);

    const varianceChangeHandler = e => {
        e.preventDefault();
        setVariance({...variance, [e.target.name]: e.target.value});

    };

    const variancePlus = (variance, reading) => {
        console.log('+variance ', variance, ' +reading ', reading, 'result', Number(reading) + Number(variance));
        return Number(reading) + Number(variance);
    };
    const varianceMinus = (variance, reading) => {
        console.log('-variance ', variance, ' -reading ', reading, 'result', Number(reading) - Number(variance));
        return Number(reading) - Number(variance);
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        let filterList = cartridges;
        keys.forEach(key => {
            if (readings[key]) {
                if (key === 'caseType' || key === 'primer') {
                    console.log('key in foreach', key);
                    filterList = filterList.filter(item => item[key] === readings[key]);
                    console.log('filterList',key,filterList)
                } else {
                    filterList = filterList.filter(item => item[key] <= variancePlus(variance[key], readings[key]) && item[key] >= varianceMinus(variance[key], readings[key]));
                    console.log('filterList',key,filterList)
                }
            }
        });
        props.setCartridges(filterList);
    };

    return (
        <FormWrapper>
            <Title>Filter:</Title>
            <Form onSubmit={e => onSubmitHandler(e)}>
                {keys.map(key => {
                    if (key === 'caseType' || key === 'primer') {
                        return (
                            <InputWrapper key={key}>
                                <Label htmlFor={key}>{key}:</Label>
                                <Input
                                    type='text'
                                    name={key}
                                    value={readings[key]}
                                    onChange={e => onChangeHandler(e)}
                                />
                            </InputWrapper>
                        );
                    } else {
                        return (
                            <InputWrapper key={key}>
                                <Label htmlFor={key}>{key}:</Label>
                                <Input
                                    type='number'
                                    name={key}
                                    value={readings[key]}
                                    onChange={e => onChangeHandler(e)}
                                    step='.001'
                                />
                                <Label htmlFor={key}>Variance:</Label>
                                <Input
                                    type='number'
                                    name={key}
                                    value={variance[key]}
                                    onChange={e => varianceChangeHandler(e)}
                                    step='.001'
                                />
                            </InputWrapper>
                        );
                    }
                })}
                <Button type='submit'>Filter</Button>
            </Form>
        </FormWrapper>
    );
};

export default FilterForm;


