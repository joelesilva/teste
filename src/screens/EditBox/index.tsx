import React from 'react';
import {Button} from '../../components/Button';
import { InputForm } from '../../forms/InputForm';
import { Ionicons } from '@expo/vector-icons';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';



import {
    Container,
    Header,
    Text,
    Titulo,
    Descrição,
    Codigo,
    TrashButton
  

} from './styles';

export function EditBox({navigation}){
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
            
            <Header> 
                <Text>Editar Projeto </Text>

                <TrashButton>
                <Ionicons name="trash" size={32} color="white" />
                </TrashButton>

                
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