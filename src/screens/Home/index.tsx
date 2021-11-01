import React from 'react';
import { Button } from '../../components/Button';
import { ScrollView, View } from 'react-native';



import {
    Container,
    Header,
    Box,
    Title,
    
    ScrollBox
} from './styles';


function buttonContainer(){
    console.log('passei aquei')} ;

function addnewButtonContainer(){
    console.log('aaa')} 





export function Home(){
    return (
      
        
        <Container>
           
            
            <Header>
            <Title>  Projetos </Title>

                
            </Header>
            
            <ScrollBox >
                <ScrollView>
                    <Box
                    onPress={buttonContainer}
                    title="Projetos"
                      
                    >
                        <Title>1</Title>
                    </Box>
                    
                     
                    </ScrollView>       
            </ScrollBox>
            
                <Button
                title={'+ Adicionar'}
                onPress={addnewButtonContainer}
                
                /> 
                

                
                      
                
        </Container>
        
        
               
    );
}

