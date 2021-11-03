import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { BoxDTO } from '../../dtos/BoxDTO';

import {
  Container,
  Code,
  Title,
  Description,
  Details,
} from './styles';

interface Props extends TouchableOpacityProps{
    data: BoxDTO;
    onPress?: () => any;
}

export function CardBox({data, onPress, ...rest}: Props){
  return (
    <Container 
      onPress={onPress}
      {...rest}
    >
        <Details>
            <Code>{data.idprojeto}</Code>
            <Title>{data.ds_titulo}</Title>
            <Description>{data.ds_descricao}</Description>
        </Details>
    </Container>
  );
}