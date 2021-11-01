import React from 'react';

import {
    Container,
    Title
} from './styles';

interface ButtonProps {
    title: string;
    onPress: () => void;
}


export function Button({title, onPress}: ButtonProps){
    return (
        <Container
        onPress={onPress}
        title={Title}
        >
            
            <Title>{title} </Title>
        </Container>
    );
}