import React from 'react';
import {Button} from '../../components/Button';
import { InputForm } from '../../components/inputForm';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import api from '../../services/api';
import { useNavigation, useFocusEffect  } from '@react-navigation/native';


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

const schema = Yup.object().shape({
    idprojeto: Yup
        .number()
        .required("O código é obrigatório")
        .positive("O código deve ser positivo")
        .typeError("Informe um valor numérico"),
    ds_titulo: Yup
        .string()
        .required("O Título é obrigatório"),
    ds_descricao: Yup
        .string()
        .required("A descrição é obrigatório"),
})




export function AddBox(){
    const navigation: any = useNavigation();
    
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    });

    async function handleRegister(form: FormData) {
        const newBox = {
            idprojeto: form.idprojeto,
            ds_titulo: form.ds_titulo,
            ds_descricao: form.ds_descricao,
        }
        console.log(newBox)
         try {
            await api.post("/ApiBox",  newBox ).then(() => navigation.navigate('Home'))           

            reset();
         } catch (error: any) {
             console.log(error.message);
         }
    }




    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
            
            <Header> 
                <Text>Novo Projeto </Text>

                
            </Header>
                <Codigo>
                <InputForm
                    name="idprojeto"
                    placeholder="Codigo"
                    keyboardType="numeric"
                    error={errors.idprojeto && errors.idprojeto.message} 
                    control = {control}
                    
                    />
                </Codigo>
           
                <Titulo>
            
                    <InputForm
                    name="ds_titulo"
                    placeholder="Título"
                    error={errors.ds_titulo && errors.ds_titulo.message}
                    control = {control}
                    />
            
                </Titulo>

                <Descrição>
                    <InputForm
                    name="ds_descricao"
                    placeholder="Descrição "
                    error={errors.ds_descricao && errors.ds_descricao.message}
                    control = {control}
                    />
                </Descrição>
                
            <Button
                title="salvar"
            
                onPress={handleSubmit(handleRegister)}
            />
            
        </Container>
        </TouchableWithoutFeedback>
    );
}