import { TimerIcon } from 'lucide-react';
import styles from './Logo.module.css';
export function Logo() {
      return (
            <div className={styles.logo}>
                  <a href='#' className={styles.linkLogo}>
                        <TimerIcon size={64} />
                        <span>Chronos</span>
                  </a>
            </div>
      );
}
