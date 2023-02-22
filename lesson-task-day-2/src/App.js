import './App.css';
import DefaultProfilePic from './components/DefaultProfilePic';
import ProfileName from './components/ProfileName'
function App() {
  return (
    <div className="App">
      <ProfileName name="Michael"/>
      <DefaultProfilePic altText="Nice"/>
      <ProfileName name="Sander"/>
      <DefaultProfilePic altText="Shmice"/>

    </div>
  );
}

export default App;
