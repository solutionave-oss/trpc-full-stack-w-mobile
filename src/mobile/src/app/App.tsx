import { useEffect } from 'react'
import { View, Text } from 'react-native'
import { client } from '../utils/trpc'

const App = () => {

  useEffect(() => {
    client.test.query({test:"Hello world"}).then((value) => {
      console.log(value.message);
    })
  },[])

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App