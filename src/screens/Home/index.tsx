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


const testedata = [
    {key: '1'},
    {key: '2'},
    {key: '3'},
    {key: '4'},
    {key: '5'},
    {key: '6'},
    {key: '7'},
    {key: '8'},
]



export function Home(){
    return (
      
        
        <Container>
           
            
            <Header>
            <Title>  Projetos </Title>

                
            </Header>
            
            <ScrollBox >
                <ScrollView>
                    <Box
                    
                      
                    >
                        <Title>Projetos</Title>
                    </Box>
                    
                     
                    </ScrollView>       
            </ScrollBox>
            
                <Button/> 
                

                
                      
                
        </Container>
        
        
               
    );
}

