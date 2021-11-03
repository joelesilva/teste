import React from 'react';
import { TextInputProps } from 'react-native';

import {
    Container
} from './styles';

type Props = TextInputProps;

export function InputForm({...rest}: Props){
    return (
        <Container {...rest} />

        
    );
}