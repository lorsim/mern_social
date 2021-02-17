import {Container} from 'react-bootstrap'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './bootstrap.min.css'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'

function App() {
  return (
    <Router>
      <Header/>
     
      <main className='py-3'>
      <Container>
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/admin/userlist' component={UserListScreen} />
        <Route path='/admin/user/:id/edit' component={UserEditScreen} />
        <Route path='/' component={HomeScreen} exact/>
      </Container>
      </main>
      
      
    </Router>
  );
}

export default App;
