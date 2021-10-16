import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { Alert } from 'react-native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default () => {
  
  useEffect ( () => (
    Alert.alert (
      'título',
      'Mensagem',
      [
        {text: 'Concordo!', onPress: ()=>console.log('Concordamos!')},
        {text: "Não Concordo!", onPress: ()=>console.log('Não concordou!')},
        {text: "Cancelar", onPress: ()=>console.log('Cancelou!'), style: 'cancel'},
        {text: "Ok", onPress: ()=>console.log('Ok!')}
      ]
    )
  ), []);
  
  return (
    <Page>

    </Page>
  );
}