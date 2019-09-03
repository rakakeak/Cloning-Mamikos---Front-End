import React, { Component } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { Button } from 'native-base';


export default class ListBook extends Component {
    state = {
        listbooks: [
            {
                id : "1",
                cover: 'https://id2-cdn.pgimgs.com/listing/16267193/UPHO.91001965.C400X300/Rumah-Cluster-Sutera-Narada-Alam-Sutera-Tangerang-Selatan-Indonesia.jpg',
                title: "Kost Jadul",
                harga: "50.000"
            
            }
        ],
        refreshing: false
    }

    renderItem = ({ item }) => (
        <View style={{ padding:15, borderBottomColor: "#ddd", borderBottomWidth:1, flexDirection:'row'}}>
            <Image style={{width:120, height:120, borderRadius:6 }} source={{uri: item.cover }} />
            <View style={{marginLeft:20}}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>{item.title}</Text>
                <View style={{flexDirection:'row', paddingTop:20}}>
                <View >
                    <Text style={{fontSize:12}}>Booking </Text>
                    <Text style={{fontSize:12}}>Durasi Sewa</Text>
                </View>
                <View style={{marginLeft:12}}>
                    <Text style={{fontSize:12}}>17 Agustus 2019</Text>
                    <Text style={{fontSize:12}}>3 bulan</Text>
                </View>
                </View>
                <View style={{paddingTop:14}}>
                <Button bordered success style={{borderRadius:6, justifyContent:'center', alignItems:'center', height:20, width:130}}>
                    <Text style={{fontSize:12}}>Tunggu Konfirmasi</Text>
                </Button>
                </View>
            </View>
        </View>
    )
    onRefresh = async () => {
        this.setState({refreshing: true}, () =>{
            const data = this.state.listbooks.concat({id: "2",
             cover:'https://id2-cdn.pgimgs.com/listing/16267193/UPHO.91001965.C400X300/Rumah-Cluster-Sutera-Narada-Alam-Sutera-Tangerang-Selatan-Indonesia.jpg', 
             title: "Kost Kroco",
             harga:"100000"});
            this. setState({
                listbooks: data,
                refreshing: false   
            })
        })
    }
    render() {
        return (
            
            <View style={{flex:1, backgroundColor:'white', padding:10}}>
                <FlatList
                data={this.state.listbooks}
                    keyExtractor={item => item.id}
                    renderItem={this.renderItem} 
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                    />
                    </View> 
    

        )
    }
}