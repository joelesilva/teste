import React from 'react';
import {Button} from '../../components/Button';
import {InputForm} from '../../forms/InputForm';

import {
    Container,
    Header,
    Text,
    Corpo
} from './styles';

function addnewButtonContainer(){
    console.log('aaa')} 

export function AddButton(){
    return (
        <Container>
            <Header> 
                <Text>Novo Projeto </Text>

            </Header>

            <Corpo>
            <InputForm
                name="name"
                control={control}
                placeholder="Nome"
                autoCapitalize="sentences"
                autoCorrect={false}
                error={errors.name && errors.name.mensage}
            
            />

            </Corpo>

            <Button
                title="salvar"
                onPress={addnewButtonContainer}
            />
        </Container>
    );
}