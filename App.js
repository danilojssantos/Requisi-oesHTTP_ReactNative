import React, {Component} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Filmes from './src/Filmes';


import api from './src/services/api';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filmes: []

    };
  }
//carrega api
  async componentDidMount(){
    const response = await api.get('r-api/?api=filmes');
    this.setState({
      filmes: response.data
    });
  }
  render() {
    return(
      <View style={styles.container}>
        <FlatList 
          data={this.state.filmes}
          keyExtractor={item =>item.id.toString()}
          renderItem={({item}) => <Filmes data={item} />}

        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    }
});

export default App;