import styles from './settings.module.scss';
import Button from '../../shared/uibuttons';

function Settings (props) {

    const handleTypeSubmit = (event) => {
        event.preventDefault();
        const newtype = event.target.elements.type.value;
        props.onTypeSubmit(newtype);
        event.target.elements.type.value = "";
    }

    return (
        <div className={styles.settings}>
            <h2>Settings</h2>
            <h3>Kulutyypit</h3>
            <div className={styles.settings_types}>
                {props.types.map((type) => <div key={type}>{type}</div> )}
                <form onSubmit={handleTypeSubmit}>
                    <div className={styles.typeform}>
                        <input type="text" name="type" />
                        <Button type="submit" primary>Lisää</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Settings;