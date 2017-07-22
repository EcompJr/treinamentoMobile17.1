//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MemberItem from '../../components/MemberItem';
// create a component
class MembersScreen extends Component {

    constructor(props) {
        super(props);

        this.members = [
            {
                name: 'Alisson Vilas',
                email: 'alisson@ecompjr.com.br',
                github: 'https://github.com/AlissonSVV',
                facebook: 'https://www.facebook.com/alisson.vilasverde',
                job: 'Diretor de Marketing',
                text: 'Saberá subir na vida aquele que tem a humildade de descer quantas vezes precisar.',
                image: 'http://ecompjr.com.br/images/members/member-1.jpg'
            },
            {
                name: 'Bernardo Rosa',
                email: 'bernardo@ecompjr.com.br',
                github: 'https://github.com/brnrdrosa',
                facebook: 'https://www.facebook.com/brnrdrosa',
                job: 'Diretor Financeiro',
                text: 'Quem se define se limita.',
                image: 'http://ecompjr.com.br/images/members/member-2.jpg'
            },
            {
                name: 'Bruno Vogel',
                email: 'bruno@ecompjr.com.br',
                github: 'https://github.com/BugVogel',
                facebook: 'https://www.facebook.com/bruno.vogel.33',
                job: 'Assessor de Projetos',
                text: 'Você já reparou com quem os acidentes acontecem? O acaso só beneficia as mentes preparadas.',
                image: 'http://ecompjr.com.br/images/members/member-3.jpg'
        },
            {
                name: 'Cássio Santos',
                email: 'cassio@ecompjr.com.br',
                github: 'https://github.com/ssscassio',
                facebook: 'https://www.facebook.com/ssscassio',
                job: 'Vice-Presidente',
                text: 'Não procure culpados, procure soluções.',
                image: 'http://ecompjr.com.br/images/members/member-4.jpg'
            },
            {
                name: 'Fábio Barros',
                email: 'fabio@ecompjr.com.br',
                github: 'https://github.com/fabugo',
                facebook: 'https://www.facebook.com/MrFabugo',
                job: 'Conselheiro',
                text: 'Nunca preparado mas sempre pronto para agir.',
                image: 'http://ecompjr.com.br/images/members/member-5.jpg'
            },
            {
                name: 'Gledson de Oliveira',
                email: 'gledson@ecompjr.com.br',
                github: 'https://github.com/Gleddson',
                facebook: 'https://www.facebook.com/gleddson.oliveira.1',
                job: 'Conselheiro',
                text: 'Isso também passa.',
                image: 'http://ecompjr.com.br/images/members/member-6.jpg'
            }, 
            {
                name: 'Kayo Costa',
                email: 'kayo@ecompjr.com.br',
                github: 'https://github.com/kayo220',
                facebook: 'https://www.facebook.com/kayocosta',
                job: 'Diretor de Recursos Humanos',
                text: 'Pessoas > Máquinas',
                image: 'http://ecompjr.com.br/images/members/member-7.jpg'
            },  
            {
                name: 'Luan Victor',
                email: 'luan@ecompjr.com.br',
                github: 'https://github.com/luanvicttor',
                facebook: 'https://www.facebook.com/luanvictor1996',
                job: 'Assessor de Recursos Humanos',
                text: 'O segredo do sucesso é a constância de propósito.',
                image: 'http://ecompjr.com.br/images/members/member-8.jpg'
            },  
            {
                name: 'Lucas Alves',
                email: 'lucas@ecompjr.com.br',
                github: 'https://github.com/lucas2213690',
                facebook: 'https://www.facebook.com/lucasalves.oliveira.94',
                job: 'Assessor de Vice-Presidência',
                text: 'Si vis pacem, para bellum',
                image: 'http://ecompjr.com.br/images/members/member-9.jpg'
            },  
            {
                name: 'Lucas Cardoso',
                email: 'lucascardoso@ecompjr.com.br',
                github: 'https://github.com/skillinhow',
                facebook: 'https://www.facebook.com/thelucascardoso',
                job: 'Membro Consultor',
                text: 'Tudo é como um cubo mágico, aparentemente impossível, mas tudo é questão de perspectiva.',
                image: 'http://ecompjr.com.br/images/members/member-10.jpg'
            },  
            {
                name: 'Maria Luísa',
                email: 'lucas@ecompjr.com.br',
                github: 'https://github.com/LuisaSales',
                facebook: '#',
                job: 'Membro Consultor',
                text: 'Você nunca sabe que resultados virão da sua ação. Mas se você não fizer nada, não existirão resultados.',
                image: 'http://ecompjr.com.br/images/members/member-11.jpg'
            },  
            {
                name: 'Nilson Augusto',
                email: 'nilson@ecompjr.com.br',
                github: 'https://github.com/sinhoshow',
                facebook: 'https://www.facebook.com/nilsonaugusto',
                job: 'Assessor de Vendas',
                text: 'Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos.',
                image: 'http://ecompjr.com.br/images/members/member-12.jpg'
            },  
            {
                name: 'Odivio Caio',
                email: 'odivio@ecompjr.com.br',
                github: 'https://github.com/bezourokq',
                facebook: 'https://www.facebook.com/bezourokq.odiviocaio',
                job: 'Membro Consultor',
                text: 'Eu não gosto da ecompJR, mas estou aqui para gostar!',
                image: 'http://ecompjr.com.br/images/members/member-13.jpg'
            },  
            {
                name: 'Pedro Brandão',
                email: 'pedro@ecompjr.com.br',
                github: 'https://github.com/pedrohenriquebrandao',
                facebook: 'https://www.facebook.com/peubrandao',
                job: 'Assessor de Marketing',
                text: 'Seja a mudança que quer ver no mundo.',
                image: 'http://ecompjr.com.br/images/members/member-14.jpg'
            },  
            {
                name: 'Pedro Neri',
                email: 'pedroneri@ecompjr.com.br',
                github: 'https://github.com/Pedneri1',
                facebook: 'https://www.facebook.com/pedneri1',
                job: 'Presidente',
                text: 'Falar é fácil, me mostre o código.',
                image: 'http://ecompjr.com.br/images/members/member-15.jpg'
            },  
            {
                name: 'Saulo de Tarso',
                email: 'saulo@ecompjr.com.br',
                github: 'https://github.com/SkdTarso',
                facebook: 'https://www.facebook.com/sdtarso',
                job: 'Diretor de Projetos',
                text: 'Aprenda a ter disciplina, pois nem sempre haverá motivação.',
                image: 'http://ecompjr.com.br/images/members/member-16.jpg'
            },  
            {
                name: 'Thatianne Cristina',
                email: 'thatianne@ecompjr.com.br',
                github: 'https://github.com/Thatianne',
                facebook: 'https://www.facebook.com/thati.cristina.18',
                job: 'Assessora Financeira',
                text: 'Ninguém comete erro maior do que não fazer nada porque só pode fazer um pouco.',
                image: 'http://ecompjr.com.br/images/members/member-17.jpg'
            },            
        ]
    }
    render() {
        return (
            
            <View style={styles.container}>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.titulo}>Membros</Text>
                </View>
                <FlatList
                    data={this.members}
                    renderItem={({item}) =><MemberItem membro={item}/>}
                />               
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1d6fb7',
    },
    titulo: {
        fontSize: 30,
        color: '#fff'
    }
});

//make this component available to the app
export default MembersScreen;
