import dbRef, { connectedRef, userName } from './server/firebase';
import './App.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUser, addParticipant, removeParticipant} from './store/actioncreator';
import { MainScreen } from './components/mainScreen/MainScreen.component';

function App(props) {
  const participantRef = dbRef.child("participants");
  useEffect(() => {
    connectedRef.on('value', (snap) => {
      if(snap.val()) {
        const defaultPreferences = {
          audio: true,
          video: false,   
          screen: false,
        }
        const userRef = participantRef.push({
          userName,
          preference: defaultPreferences,
        });
        
        props.setUser({
          [userRef.key]: {
            userName,
            ...defaultPreferences,
          }, 
        });
        userRef.onDisconnect().remove();
      }
    });

  }, []);

  useEffect(() => {

    if(props.user){
      participantRef.on("child_added", (snap) => {
        const { userName, preferences } = snap.val();
        props.addParticipant({
          [snap.key]: {
            userName,
            ...preferences,
          },
        });
      });
      participantRef.on("child_removed", (snap) => {
        props.removeParticipant(snap.key);
      });
    }

  }, [props.user]);
  return (
    <div className="App">
      < MainScreen />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.currentUser,
    participants: state.participants,
  }  
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
    addParticipant: (participant) => dispatch(addParticipant(participant)),
    removeParticipant: (participantKey) => dispatch(removeParticipant(participantKey)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
