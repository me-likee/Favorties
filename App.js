import React from "react";
import {SafeAreaView,View,Text,Switch, FlatList } from "react-native";
const data = [ 
  {id:0, name: "Cafe 1",isFavorite: true,},
  {id:1,name: "John",isFavorite: false}, 
  {id:2,name:"Jane",isFavorite:true},
  {id:3,name:"Liam",isFavorite:false}, 
  {id:4,name:"Noah",isFavorite:true},
  {id:5,name: "Jack",isFavorite: false,}, 
];

function App()
{
  const[CafeList,SetCafeList]=React.useState(data);//Liste İçin
  const[ShowOnlyFavorites,SetShowOnlyFavorites]=React.useState(false);//Switch İçin
  function OnFavoritesChange(isFavoriteSelected)
  {
    SetShowOnlyFavorites(isFavoriteSelected);// Switch hareketini sağlar
    isFavoriteSelected
    ? SetCafeList(CafeList.filter(cafe=>cafe.isFavorite))
    : SetCafeList(data)
  }
  return(
      <SafeAreaView>
        <View>
           <Text style={{fontSize:40,marginTop:10}}>Favorileri Göster</Text>
           <Switch style={{width:100,height:25}} value={ShowOnlyFavorites} onValueChange={OnFavoritesChange}/>
          <FlatList data={CafeList}
            renderItem={({item}) =><Text style={{fontSize:20,margin:10}}>{item.name}</Text>}/>
        </View>
      </SafeAreaView>
    )
}
export default App;
