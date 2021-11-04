import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from '../../components/Button';
import { CardBox } from '../../components/CardBox';
import { BoxDTO } from '../../dtos/BoxDTO';

import api from '../../services/api';





import {
    Container,
    Header,
    Box,
    Title, 
    ScrollBox,
    BoxFlat
    
} from './styles';







export function Home(){
    const navigation: any = useNavigation();

    const [box, setBox] = useState([]);

    function HandleEditBox( VarBox: BoxDTO ){
            navigation.navigate('EditBox', {VarBox} )
    }
    function HandleAddBox(){
        navigation.navigate('AddBox')
    }
    useEffect(() =>{
        async function Boxapi () {
        
           try {

            const response = await api.get('/ApiBox');
            setBox(response.data);

           } catch (error) {
               console.log(error);
           }
           
        }
        Boxapi();
    },[box])
   
       
    return (
      
        
        <Container>
           
            
            <Header>
            <Title>  Projetos </Title>

                
            </Header>
            
            <ScrollBox>
               
                    <BoxFlat
                    data={box}
                    keyExtractor={item => item.idprojeto}
                    renderItem={({ item }: { item: BoxDTO }) => 
                    <CardBox data={item} onPress={() => HandleEditBox(item)}/>}   
                    />     
                   
                    
            </ScrollBox>
           
            
                <Button
                title={'+ Adicionar'}
                onPress={HandleAddBox}
                
                /> 
                

                
                      
                
        </Container>
        
        
               
    );
}

