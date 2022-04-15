import styles from './menu.module.scss';

function Menu() {
    return (
      <div className={styles.menu}>
        <div>list</div>
        <div>stats</div>
        <div>profile</div>
      </div>
    );
}

export default Menu;