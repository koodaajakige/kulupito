import styles from './startup.module.scss';
import Button from '../../shared/uibuttons';
import firebase from 'firebase/app';
import { useAuth } from 'reactfire';

function Startup (props) {

    const auth = useAuth();

    const signIn = async () => {
        await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    return (
        <div className={styles.startup}>
            <h1>Kulukirjanpito</h1>
            <div>
                Tervetuloa käyttämään kulukirjanpitoa, johon voit kirjata omat menosi.
                Sinun tulee kirjautua sisään Google-tunnuksillasi, jotta voit käyttää sovellusta.
            </div>
            <Button onClick={signIn} primary>Kirjaudu sisään</Button>
        </div>
    );
}

export default Startup;