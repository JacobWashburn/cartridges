import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {cartridges} from './findCartridges';

const FormWrapper = styled.div`
margin-top: 2%;
`;
const Form = styled.form``;
const Input = styled.input``;
const Label = styled.label``;
const Select = styled.select``;
const Option = styled.option``;

const SearchForm = props => {
    const [query, setQuery] = useState('');
    const [selectValue, setSelectValue] = useState('name');

    const onChangeHandler = e => {
        setQuery(e.target.value);

    };

    useEffect(() => {
        const filterList = cartridges.filter(item => {
            return item[selectValue].toString().toLowerCase().includes(query.toLowerCase());
        });
        props.setCartridges(filterList)
    },[query])

    return (
        <FormWrapper>
            <Form onSubmit={e => e.preventDefault()}>
                <Label>Search:
                    <Input
                        type='text'
                        name='search'
                        value={query}
                        onChange={e => onChangeHandler(e)}
                        autoComplete='off'
                    />
                </Label>
                <Label> By:
                    <Select onChange={e => setSelectValue(e.target.value)}>
                        <Option value='name'>Name</Option>
                        <Option value='caseType'>Case Type</Option>
                        <Option value='bulletDiameter'>Bullet Diameter</Option>
                        <Option value='neckDiameter'>Neck Diameter</Option>
                        <Option value='shoulderDiameter'>Shoulder Diameter</Option>
                        <Option value='baseDiameter'>Base Diameter</Option>
                        <Option value='rimDiameter'>Rim Diameter</Option>
                        <Option value='rimThickness'>Rim Thickness</Option>
                        <Option value='caseLength'>Case Length</Option>
                        <Option value='cartridgeLength'>Cartridge Length</Option>
                        <Option value='primer'>Primer</Option>
                    </Select>
                </Label>
            </Form>
        </FormWrapper>
    );
};

export default SearchForm;