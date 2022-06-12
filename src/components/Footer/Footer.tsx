import React from 'react';
import useStyles from './styles'

export const Footer = () => {
    const styles = useStyles();
    return (
        <footer className={styles.contactDiv}>
            <div className={styles.contactP}>
                <ul className={styles.ul}>
                    <li className={styles.cp}>Contacts</li>
                    <li className={styles.cpli}>
                        phone: 8(985)788-80-64
                    </li>
                    <li className={styles.cpli} style={{textDecoration: "none"}}>
                        <a className={"contact-a"} target="_blank" href="@woodyh92" >Say hello on Telegram</a>
                    </li>
                    <li className={styles.cpli}>
                        <a className={"contact-a"} href="mailto:ifabrichnov@yandex.ru">mail to: ifabrichnov@yandex.ru</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}