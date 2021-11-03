import React, {useEffect, useState} from 'react';
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







export function Home({navigation}){
    const [box, setBox] = useState([]);

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
    },[])
   
       
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
                    <CardBox data={item} onPress={() => navigation.navigate('EditButton')}/>}   
                    />     
                   
                    
            </ScrollBox>
            
                <Button
                title={'+ Adicionar'}
                onPress={() => navigation.navigate('AddButton')}
                
                /> 
                

                
                      
                
        </Container>
        
        
               
    );
}

