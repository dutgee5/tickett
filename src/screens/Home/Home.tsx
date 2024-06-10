import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { use } from 'i18next'
import { useQuery } from '@tanstack/react-query';

const Home = () => {

  // "const {data,isLoading,error} = useQuery({
  //   queryKey: ['Home'],
  //   queryFn:()=>{/* queryFunction    fetch data*/}
  // });
  
  return (
    <View>
      <Text>Home</Text>
    </View>
  ) 
}

export default Home

const styles = StyleSheet.create({})