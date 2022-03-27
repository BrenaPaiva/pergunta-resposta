import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Subheading, Title } from 'react-native-paper';

export default function Provinha() {
    const [questoesLista, setQuestoesList] = useState(questoes);
    const [questao, setQuestao] = useState({});

    const styles = StyleSheet.create({
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 100,
        elevation: 3,
        backgroundColor: 'black',
      },
      button2: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 100,
        elevation: 3,
        backgroundColor: 'black',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'gold'
      },
      view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center' 
      },
      phrases: {
        backgroundColor: 'gold',
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 100,
      },
      title: {
        fontStyle: "italic",
        fontSize: 30,
      }
    });

    function geraPergunta() {
        const random = Math.floor(Math.random() * questoesLista.length)
        setQuestao({
            ...questoesLista[random],
            resp: false
        });
    }

    return (
        <View style={styles.view}>
            <Title style={styles.title}>Provinha</Title>
            <Button style={styles.button} onPress={geraPergunta}>
              <Text style={styles.text}>Gerar pergunta</Text>
            </Button>
            <Subheading style={styles.phrases}>{questao.pergunta || ""}</Subheading>
            <Subheading style={styles.phrases}>{questao.resp ? questao.resposta : ""}</Subheading>
            <Button style={styles.button2} onPress={() => setQuestao({ ...questao, resp: true })}>
              <Text style={styles.text}>Mostrar a pergunta</Text>
            </Button>
        </View>
    );
}

const questoes = [
{
  pergunta: "A primeira aula do curso de react-native foi sobre os fundamentos do React?",
  resposta: "Negativo! Antes de caminhar, precisamos aprender a fica de pé! A primeira aula foi sobre o nosso gerenciador de pacotes e Git"
},
{
  pergunta: "É possível instalar um pacote somente editando o package.json?",
  resposta: "Sim! Tá fácil programar hein hahaha"
},
{
  pergunta: "É verdade que o professor Nataniel gosta de Windows?",
  resposta: "Você já sabe essa resposta, poxa"
},
{
  pergunta: "É necessário uma super máquina para programar em React?",
  resposta: "No no no! Sempre dá pra começar de onde você está!"
},
{
  pergunta: "O React-Native é tão bom assim que um código só basta para dispositivos móveis e web?",
  resposta: "Não é bem assim...O nosso RN é muito interessante, mas ainda não é perfeito"
}
];