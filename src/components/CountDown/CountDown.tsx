import { useEffect, useRef, useState } from 'react';
import styles from './CountDown.module.css';

type CountDownProps = {
      initialSeconds?: number;
      onComplete?: () => void;
};

export function CountDown({ initialSeconds = 1500, onComplete }: CountDownProps) {
      const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
      const [running, setRunning] = useState(false);
      const intervalRef = useRef<number | null>(null);

      useEffect(() => {
            if (running) {
                  intervalRef.current = window.setInterval(() => {
                        setSecondsLeft(s => s - 1);
                  }, 1000);
            }
            return () => {
                  if (intervalRef.current) window.clearInterval(intervalRef.current);
                  intervalRef.current = null;
            };
      }, [running]);

      useEffect(() => {
            if (secondsLeft <= 0) {
                  setRunning(false);
                  setSecondsLeft(0);
                  onComplete?.();
            }
      }, [secondsLeft, onComplete]);

      useEffect(() => {
            setSecondsLeft(initialSeconds);
      }, [initialSeconds]);

      function toggle() {
            setRunning(r => !r);
      }

      function reset() {
            setRunning(false);
            setSecondsLeft(initialSeconds);
      }

      const minutes = Math.floor(secondsLeft / 60);
      const seconds = secondsLeft % 60;

      return (
            <div className={styles.container}>
                  <div className={styles.time}>
                        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                  </div>
                  <div className={styles.controls}>
                        <button className={`${styles.button} ${styles.small}`} onClick={toggle}>
                              {running ? 'Pause' : 'Start'}
                        </button>
                        <button className={`${styles.button} ${styles.small} ${styles.buttonPrimary}`} onClick={reset}>
                              Reset
                        </button>
                  </div>
            </div>
      );
}
