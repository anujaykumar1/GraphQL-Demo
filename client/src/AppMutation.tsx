
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import './App.css'
import Fetch from './fetch'
import AdvanceFetch from './advance-fetch'
import MutationForm from './mutation'

const Client = new ApolloClient({
  uri:"https://sxewr.sse.codesandbox.io/",
  cache: new InMemoryCache(),

})
function AppMutation() {
  
  return <ApolloProvider client={Client}>
    {/* <Fetch/> */}
   <MutationForm />
  </ApolloProvider>
}

export default AppMutation;
