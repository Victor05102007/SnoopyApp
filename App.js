import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";

import Feather from "@expo/vector-icons/Feather";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function App() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("./src/assets/images/ccd4ecad52d4a9345695b7b0f711e202.jpg")}
      resizeMode="cover"
    >
      <Image
        source={require("./src/assets/images/ICONE (1).png")}
        style={styles.image}
      />

      <Text style={styles.snoopyapp}>SnoopyApp</Text>

      <View style={styles.visao}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu Email"
          secureTextEntry={true}
          placeholderTextColor="white"
          inputMode={"text"}
          autoCapitalize="characters"
          multiline={true}
        />

        <Feather name="user" size={24} color="white" />
      </View>

      <View style={styles.visao}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          placeholderTextColor="white"
          inputMode={"numeric"}
          autoCapitalize="characters"
          multiline={true}
        />
        <MaterialIcons name="password" size={24} color="white" />
      </View>

      {/*<Button
        title="Enviar"
        color="#ff0000"
        onPress={() => alert("você apertou o botão")}
      />
      */}

      <TouchableOpacity
        style={styles.botao}
        onPress={() => alert("Login feito com sucesso!")}
      >
        <Text style={styles.texto}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => alert("Login feito com sucesso!")}
      >
        <Text style={styles.texto}>Cadastro</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 10,
    color: "yellow",
    fontWeight: "bold",
  },
  input: {
    width: 300,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "yellow",
    color: "yellow",
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  botao: {
    width: 100,
    padding: 10,
    backgroundColor: "transparent",
    color: "yellow",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "yellow",
    color: "yellow",
    marginTop: 25,
  },
  visao: {
    flexDirection: "row",
    width: 300,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
  },
  snoopyapp: {
    color: "white",
    fontSize: 20,
    fontStyle: "Italic",
    fontWeight: "bold",
  },
});
