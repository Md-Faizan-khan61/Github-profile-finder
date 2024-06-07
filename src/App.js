import logo from './logo.svg';
import './App.css';
import ProfileFinder from './profileFinder';

function App() {
  return (
   <>
   <div className='header'>
   <i class="fa-brands fa-github fa-flip fa-2xl"></i>
   <h2 style={{textAlign:"center",color:'purple',marginLeft:'3px'}}>Github Profile Finder</h2>
   </div>
  
   <ProfileFinder />
   </>
  )
}

export default App;
