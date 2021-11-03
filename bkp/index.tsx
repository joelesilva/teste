import React from 'react';
import {Button} from '../../components/Button';
import { InputForm } from '../../forms/InputForm';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';


import {
    Container,
    Header,
    Text,
    Titulo,
    Descrição,
    Codigo
  

} from './styles';

interface FormData {
    idprojeto: string;
    ds_titulo: string;
    ds_descricao: string;
}







export function AddBox({navigation}){

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
            
            <Header> 
                <Text>Novo Projeto </Text>

                
            </Header>
                <Codigo>
                <InputForm
                    placeholder="Codigo"
                    keyboardType="numeric"
                    

                    
                    />
                </Codigo>
           
                <Titulo>
            
                    <InputForm
                    placeholder="Título"
                    
                    />
            
                </Titulo>

                <Descrição>
                    <InputForm
                    placeholder="Descrição "
                    
                    />
                </Descrição>
                
            <Button
                title="salvar"
            
                onPress={() => navigation.navigate('Home')}
            />
            
        </Container>
        </TouchableWithoutFeedback>
    );
}