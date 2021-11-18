import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const styles = StyleSheet.create({
  brasil: {
    width: 181,
    height: 305,
  },
  textBrasil: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  tituloBrasil: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 20,
  },
  tituloBranco: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#fff',
  },
  alemanha: {
    width: 181,
    height: 233,
  },
  textAlemanha: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  tituloBranco: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#fff',
  },
  italia: {
    width: 181,
    height: 233,
  },
  argentina: {
    width: 181,
    height: 233,
  },
  imagemIcones: {
    width: 150,
    height: 150,
  },
  textIcones: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textBranco: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
});

const TelaInicial = ({ navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 20,
      }}
    >
      <TouchableOpacity
        style={{
          alignItems: 'center',
          padding: 20,
          backgroundColor: '#FFFF01',
          marginTop: 20,
          marginBottom: 20,
        }}
        onPress={() => navigation.navigate('Brasil')}
      >
        <Image style={styles.brasil} source={require('./assets/brasil.png')} />
        <Text style={styles.textBrasil}>Seleção Brasileira</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          alignItems: 'center',
          padding: 20,
          backgroundColor: '#808080',
          marginBottom: 20,
        }}
        onPress={() => navigation.navigate('Alemanha')}
      >
        <Image
          style={styles.alemanha}
          source={require('./assets/alemanha.png')}
        />
        <Text style={styles.textAlemanha}>Seleção Alemã</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          alignItems: 'center',
          padding: 20,
          backgroundColor: '#0000FE',
          marginBottom: 20,
        }}
        onPress={() => navigation.navigate('Itália')}
      >
        <Image style={styles.italia} source={require('./assets/italia.png')} />
        <Text style={styles.textAlemanha}>Seleção Italiana</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          alignItems: 'center',
          padding: 20,
          backgroundColor: '#2F8C97',
          marginBottom: 20,
        }}
        onPress={() => navigation.navigate('Argentina')}
      >
        <Image
          style={styles.argentina}
          source={require('./assets/argentina.png')}
        />
        <Text style={styles.textAlemanha}>Seleção Argentina</Text>
      </TouchableOpacity>

      <Button title="Sobre" onPress={() => navigation.navigate('Sobre')} />
    </ScrollView>
  );
};

const Brasil = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFF01',
        width: '100%',
        height: '100%',
      }}
    >
      <Text style={styles.tituloBrasil}>Seleção Brasileira</Text>
      <Image
        style={styles.imagemIcones}
        source={require('./assets/brasil_icone.png')}
      />
      <Text style={styles.textIcones}>Penta Campeã</Text>
      <Text style={styles.textIcones}>2 Vice campeonato</Text>
      <Text style={styles.textIcones}>2 Vezes País Sede</Text>

      <Button title="Voltar" onPress={() => navigation.navigate('Seleções')} />
    </View>
  );
};

const Alemanha = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#808080',
        width: '100%',
        height: '100%',
      }}
    >
      <Text style={styles.tituloBranco}>Seleção Alemã</Text>
      <Image
        style={styles.imagemIcones}
        source={require('./assets/alemanha_icone.png')}
      />
      <Text style={styles.textBranco}>Tetra Campeã</Text>
      <Text style={styles.textBranco}>3 Vice campeonato</Text>
      <Text style={styles.textBranco}>2 Vezes País Sede</Text>

      <Button title="Voltar" onPress={() => navigation.navigate('Seleções')} />
    </View>
  );
};

const Italia = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0000FE',
        width: '100%',
        height: '100%',
      }}
    >
      <Text style={styles.tituloBranco}>Seleção Italiana</Text>
      <Image
        style={styles.imagemIcones}
        source={require('./assets/italia_icone.png')}
      />
      <Text style={styles.textBranco}>Tetra Campeã</Text>
      <Text style={styles.textBranco}>2 Vice campeonato</Text>
      <Text style={styles.textBranco}>2 Vezes País Sede</Text>

      <Button title="Voltar" onPress={() => navigation.navigate('Seleções')} />
    </View>
  );
};

const Argentina = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#2F8C97',
        width: '100%',
        height: '100%',
      }}
    >
      <Text style={styles.tituloBranco}>Seleção Argentina</Text>
      <Image
        style={styles.imagemIcones}
        source={require('./assets/italia_icone.png')}
      />
      <Text style={styles.textBranco}>Bi Campeã</Text>
      <Text style={styles.textBranco}>2 Vice campeonato</Text>
      <Text style={styles.textBranco}>1 Vezes País Sede</Text>

      <Button title="Voltar" onPress={() => navigation.navigate('Seleções')} />
    </View>
  );
};

const TelaSobre = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Seleções App</Text>
      <Text>Versão 1.0</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>
        Desenvolvido por:
      </Text>
      <Text>Vinícius Bacellar</Text>
      <Text>Rafael Aquino</Text>
      <Text>Leonardo Edigio</Text>
      <Text>Cesar Junior</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Início">
        <Stack.Screen name="Seleções" component={TelaInicial} />
        <Stack.Screen name="Brasil" component={Brasil} />
        <Stack.Screen name="Alemanha" component={Alemanha} />
        <Stack.Screen name="Itália" component={Italia} />
        <Stack.Screen name="Argentina" component={Argentina} />
        <Stack.Screen name="Sobre" component={TelaSobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
