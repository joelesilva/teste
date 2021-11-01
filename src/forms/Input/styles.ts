import styled from "styled-components/native";
import { TextInput } from 'react-native';
import { RFValue} from 'react-native-responsive-fontsize';


export const Container = styled(TextInput)`
width: 100%;
padding: 16px 18px;

font-size: ${RFValue(15)}px;

background-color: ${({theme}) => theme.colors.shape};
color: ${({theme}) => theme.colors.text};
border-radius: 5px;

margin-bottom: 8px;

font-family: ${({theme}) => theme.fonts.regular};
`;