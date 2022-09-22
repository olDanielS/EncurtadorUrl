import styled from "styled-components/native";

export const Background = styled.TouchableWithoutFeedback`
flex: 1;
`;
export const Container = styled.View`
flex: 1;
background-color: #131313;
align-items: center;
justify-content: center;
`;
export const Title = styled.Text`
font-size: 30px;
color: #FF7425;
font-weight: 500;
margin-bottom: 25px;
`;
export const Inputs = styled.TextInput`
width: 90%;
height: 45px;
background-color: #DCDCDC;
margin-bottom: 20px;
border-radius: 5px;
padding: 10px;
`;
export const BtnSubmit = styled.TouchableOpacity`
width: 50%;
height: 45px;
background-color: #FF7425;
margin-bottom: 15px;
border-radius: 5px;
padding: 5px;
`;
export const TextSubmit = styled.Text`
text-align: center;
font-size: 23px;
color: #FFF;
font-weight: bold;
`;
export const BtnShortedUrl = styled.TouchableOpacity`
flex-direction: row;
`;
export const TextShortedUrl = styled.Text`
color: #fff;
font-size: 16px;
margin-bottom: 10px;
`;


