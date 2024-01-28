
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import './App.css'
import Fetch from './fetch'
import AdvanceFetch from './advance-fetch'

const Client = new ApolloClient({
  uri:"https://71z1g.sse.codesandbox.io/",
  cache: new InMemoryCache(),

})
function App() {
  
  return <ApolloProvider client={Client}>
    {/* <Fetch/> */}
    <AdvanceFetch/>
  </ApolloProvider>
}

export default App
