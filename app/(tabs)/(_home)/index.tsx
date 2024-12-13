import Svg, { Path } from 'react-native-svg';
import { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dimensions } from "react-native";
import { ScrollView } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full width

export default function HomeScreen() {
    return (
        <>
            <ScrollView contentContainerStyle={{ width: '100%', backgroundColor: '#E2E2E2' }} showsHorizontalScrollIndicator={false}>
                <View style={{ height: 210, width: width, position: 'absolute', backgroundColor: '#4DB97F' }} />
                <View style={{ top: 210, height: height - 210, width: width, position: 'absolute', backgroundColor: '#E2E2E2' }} />
                <View style={styles.container}>
                    <Greetings gender={"male"} name={"Lucas"} />
                    <Container>
                        <Balance amount={100000} visibility={true} />
                        <Divisor />
                        <View style={{ marginTop: 25, marginBottom: 25 }}>
                            <Text style={{ fontWeight: 'bold', marginBottom: 35 }}>Meus gastos</Text>
                            <OutgoingComponent type={"fix"} amount={350000} />
                            <OutgoingComponent type={"variable"} amount={350000} />
                            <OutgoingComponent type={"investiment"} amount={350000} />
                            <Button text="Gerenciamento de gastos"/>
                        </View>
                    </Container>
                    <MyAccounts/>
                </View>
            </ScrollView>
        </>
    );
}


type OutgoingComponentInput = {
    type: String
    amount: number
}

function Button(input: TextButtonInput) {
    return (
        <View style={{ alignItems: 'center', marginTop: 30 }}>
            <View style={{ height: 35, width: 192, borderRadius: 28, backgroundColor: '#4DB97F', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>{input.text}</Text>
            </View>
        </View>
    )
}

function MyAccounts() {
    return (
        <Container>
            <Text>Minhas contas</Text>
            <OutputComponentAccount type={"Conta X"} amount={-100000} />
            <OutputComponentAccount type={"Conta Y"} amount={50000} />
            <OutputComponentAccount type={"Conta Z"} amount={750} />
            <Button text="Gerenciamento de contas"/>
        </Container>
    )
}

function OutputComponentAccount(input: OutgoingComponentInput){
    let amount = input.amount / 100;
    let color = "#00B2FF";
    let type = input.type;
    
    return (
        <>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginBottom: 15, marginTop: 15 }}>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                    <View style={{ height: 72, width: 72, borderRadius: 72 / 2, backgroundColor: "black" }} />
                    <Text style={{ fontSize: 14, fontWeight: 'semibold' }}>{type}</Text>
                </View>
                <Text style={{ color: color, fontWeight: 'bold' }}>R$ {amount.toFixed(2)}</Text>
            </View>
            <Divisor />
        </>
    )
}

function OutgoingComponent(input: OutgoingComponentInput) {
    let amount = input.amount / 100;
    let color = () => {
        switch (input.type.toLowerCase()) {
            case "fix":
                return "#FF7072"
            case "variable":
                return "#FFBF75"
            case "investiment":
                return "#69FFC3"
        };
    }
    let type = () => {
        switch (input.type) {
            case "fix":
                return "Fixo"
            case "variable":
                return "Variável"
            case "investiment":
                return "Investimento"
        }

    }

    return (
        <>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginBottom: 15, marginTop: 15 }}>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                    <View style={{ height: 72, width: 72, borderRadius: 72 / 2, backgroundColor: "black" }} />
                    <Text style={{ fontSize: 14, fontWeight: 'semibold' }}>{type()}</Text>
                </View>
                <Text style={{ color: color(), fontWeight: 'bold' }}>R$ {amount.toFixed(2)}</Text>
            </View>
            <Divisor />
        </>
    )
}


function Container({ children }: PropsWithChildren) {
    return (
        <View style={{ backgroundColor: 'white', borderRadius: 20, padding: 26, paddingLeft: 37 }}>
            {children}
        </View>
    )
}

type GreetingsInput = {
    gender: String
    name: String
};

type TextButtonInput = {
    text: String
}

function Greetings(input: GreetingsInput) {
    return (
        <View style={{ flexDirection: "row" }}>
            {/* Colocar a foto de perfil do usuario */}
            <View style={{ height: 72, width: 72, borderRadius: 72 / 2, backgroundColor: "white" }} />
            <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                {
                    input.gender == "male" || input.gender == undefined || input.gender == null ?
                        <Text style={{ fontSize: 18, lineHeight: 18, color: 'white' }}>Bem-vindo,</Text> :
                        <Text style={{ fontSize: 18, lineHeight: 18, color: 'white' }}>Bem-vinda,</Text>
                }
                {
                    input.name == undefined || input.gender == null ?
                        <Text style={{ fontSize: 24, fontWeight: 'bold', lineHeight: 24, color: 'white' }}>Usuário!</Text> :
                        <Text style={{ fontSize: 24, fontWeight: 'bold', lineHeight: 24, color: 'white' }}>{input.name}!</Text>
                }
            </View>
        </View>
    )
}

type BalanceInput = {
    amount: number
    visibility: Boolean
};

function Balance(input: BalanceInput) {
    let amount = input.amount / 100;
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 27 }}>
            <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
                <View style={{ height: 62, width: 8, backgroundColor: '#D9D9D9', borderRadius: 9 }} />
                <View>
                    <Text>Saldo geral</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>R$ {amount.toFixed(2)}</Text>
                </View>
            </View>
            <VisibilityButton />
        </View>
    )
}

function Divisor() {
    return (
        <View style={{ height: 1, width: "auto", backgroundColor: '#D9D9D9' }} />
    )
}

function VisibilityButton() {
    return (
        <>
            <Svg width="22" height="18" viewBox="0 0 22 18" fill="none">
                <Path d="M2.275 12.296C1.425 11.192 1 10.639 1 9C1 7.36 1.425 6.809 2.275 5.704C3.972 3.5 6.818 1 11 1C15.182 1 18.028 3.5 19.725 5.704C20.575 6.81 21 7.361 21 9C21 10.64 20.575 11.191 19.725 12.296C18.028 14.5 15.182 17 11 17C6.818 17 3.972 14.5 2.275 12.296Z" stroke="#B7B7B7" strokeWidth="1.5" />
                <Path d="M14 9C14 9.79565 13.6839 10.5587 13.1213 11.1213C12.5587 11.6839 11.7956 12 11 12C10.2044 12 9.44129 11.6839 8.87868 11.1213C8.31607 10.5587 8 9.79565 8 9C8 8.20435 8.31607 7.44129 8.87868 6.87868C9.44129 6.31607 10.2044 6 11 6C11.7956 6 12.5587 6.31607 13.1213 6.87868C13.6839 7.44129 14 8.20435 14 9Z" stroke="#B7B7B7" strokeWidth="1.5" />
            </Svg>
        </>
    )

}

const styles = StyleSheet.create({
    container: {
        marginTop: 35,
        marginLeft: 15,
        marginRight: 15,
        rowGap: 21
    },
});