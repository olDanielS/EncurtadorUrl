import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard } from 'react-native';
import {Background, Container, Title, Inputs, BtnSubmit, TextSubmit, BtnShortedUrl, TextShortedUrl} from './styles';
import * as Clipboard from 'expo-clipboard';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AppEncurtadorUrl() {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [urlShorted, setUrlShorted] = useState('');

  const short = async () => {
    if(url.includes('http://') || url.includes('https://')){
      fetch(`https://cutt.ly/api/api.php?key=d519db7dc12399ba122b81be4d40f5b9a3403&short=${url}&name=${name}`).then( async(response) => {
          let data = await response.json()
              if(data.url.status === 1 || data.url.status === 2){
                alert('Algo deu errado, verifique os campos e tente novamente')
                return
              }
              else if (data.url.status === 3){
                alert('O nome personalizado já esta em uso, tente outro!')
                return
              }
            setUrlShorted(data.url.shortLink)
            setUrl('')
            Keyboard.dismiss()
        })
      
      }else{
        alert('Verique os campos e tente novamente!')
        Keyboard.dismiss()
      }
  }

  const copyUrl = async () => {
    await Clipboard.setStringAsync(urlShorted);
    alert('Url copiada com sucesso!')
  }

 return (
   <Background onPress={() => Keyboard.dismiss()}>
    <Container>
    <StatusBar style='light'/>
        <Title> Minimun<Title style={{fontSize: 35, color: '#fff', fontWeight: 'bold'}}>Url</Title></Title>
        <Inputs
          placeholder='URL'
          value={url}
          onChangeText={(text) => setUrl(text)}
        />
        <Inputs
          placeholder='Nome personalizado (opcional)'
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <BtnSubmit onPress={() => short()}>
          <TextSubmit>Encurtar</TextSubmit>
        </BtnSubmit>
        <BtnShortedUrl onPress={() => copyUrl()}>
          <TextShortedUrl> {urlShorted} {urlShorted ? <Ionicons name='copy' size={20} color='#fff' style={{marginLeft: 10}}/> : ''} </TextShortedUrl>
        
        </BtnShortedUrl>
    </Container>
  </Background>
  );
}