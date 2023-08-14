import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, ScrollView } from 'react-native';
import MinhaLogo from './image/logo.png';
import {
  useFonts,
  Poppins_700Bold,
  Poppins_100Thin,
  Poppins_400Regular
} from '@expo-google-fonts/poppins'

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Poppins_100Thin,
    Poppins_700Bold,
    Poppins_400Regular
  })
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tituloempresa}>Empresa XPTO</Text>
        <Image
          source={MinhaLogo}
          style={styles.logo}
        />
      </View>
      <View style={styles.formulario}>
        <View>
          <Text style={styles.labelClientes}>Cadastro de clientes</Text>
        </View>
        <View>
          <View>
            <Text style={styles.labels}>Matricula</Text>
            <TextInput style={styles.forms}></TextInput>
          </View>
          <View>
            <Text style={styles.labels}>Nome</Text>
            <TextInput style={styles.forms}></TextInput>
          </View>
          <View>
            <Text style={styles.labels}>Logradouro</Text>
            <TextInput style={styles.forms}></TextInput>
          </View>
          <View>
            <Text style={styles.labels}>Número</Text>
            <TextInput style={styles.forms}></TextInput>
          </View>
          <View>
            <Text style={styles.labels}>Bairro</Text>
            <TextInput style={styles.forms}></TextInput>
          </View>
          <View>
            <Text style={styles.labels}>CEP</Text>
            <TextInput style={styles.forms}></TextInput>
          </View>
          <View>
            <Text style={styles.labels}>Cidade</Text>
            <TextInput style={styles.forms}></TextInput>
          </View>
          <View>
            <Text style={styles.labels}>UF</Text>
            <TextInput style={styles.forms}></TextInput>
          </View>
        </View>
      </View>
      <SafeAreaView style={styles.scroll}>
        <ScrollView style={{padding: 15}}>
          <Text style={styles.titulos}>Dados dos alunos</Text>
          <Text>Jhonata Goncalves Antunes</Text>
          <Text style={{marginBottom: 15}}>202102212812</Text>
          <Text>Joubert Lima Correa de Oliveira</Text>
          <Text>202102283388</Text>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 118,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    //width: '100%',
    //height: '100%',
  },
  logo: {
    width: 150,
    height: 150,
    zIndex: -99,
  },
  tituloempresa : {
    top: 25,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins_700Bold',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    right: 19
  },
  formulario: {
    top: 25,
    marginBottom: 50,
  },
  labelClientes: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 25,
    fontFamily: 'Poppins_700Bold'
  },
  labels:{
    marginTop: 15,
    marginBottom: 8,
    fontFamily: 'Poppins_400Regular'
  },
  forms: {
    fontSize: 15,
    padding: 9,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
  },
  scroll: {
    marginBottom: 35,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderRadius: 5

  },
  titulos: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins_700Bold',
  }
  

  
});
