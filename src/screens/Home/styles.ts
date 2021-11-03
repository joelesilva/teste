import { FlatList, RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
    
    
`;
export const Header =styled.View`
    
    height: 120px;
    
    justify-content: center;
    align-items: center;
    
    border-radius: -20px;
    background-color: lightblue;
    

    
`;
export const Title =styled.Text`
    font-size: 24px;
    padding-left: 20px;
    color: white;
    align-items: center;

`;
export const Box = styled(RectButton)`
    width: 100%;
    height: 200px;
    
    justify-content: center;
    align-items: center;
    

    
    margin-bottom: 10px;

    border-radius: 20px;
    

    background-color: lavender;
`;
export const ListTitle =styled.Text`
    font-size: 24px;
    padding-left: 20px;
    color: black;
    align-items: center;

`;
export const Captions = styled.View`
    

`;
export const ScrollBox = styled.View`
    width: 100%;
    
`;
export const BoxFlat = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 20
        
        
	},
	showsVerticalScrollIndicator: false,
})`

border-radius: 5px
background-color: #8DB3E2
margin-left: 5px
margin-right: 5px
margin-top: 5px;

`;