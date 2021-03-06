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
  resposta: "Negativo! Antes de caminhar, precisamos aprender a fica de p??! A primeira aula foi sobre o nosso gerenciador de pacotes e Git"
},
{
  pergunta: "?? poss??vel instalar um pacote somente editando o package.json?",
  resposta: "Sim! T?? f??cil programar hein hahaha"
},
{
  pergunta: "?? verdade que o professor Nataniel gosta de Windows?",
  resposta: "Voc?? j?? sabe essa resposta, poxa"
},
{
  pergunta: "?? necess??rio uma super m??quina para programar em React?",
  resposta: "No no no! Sempre d?? pra come??ar de onde voc?? est??!"
},
{
  pergunta: "O React-Native ?? t??o bom assim que um c??digo s?? basta para dispositivos m??veis e web?",
  resposta: "N??o ?? bem assim...O nosso RN ?? muito interessante, mas ainda n??o ?? perfeito"
}
];