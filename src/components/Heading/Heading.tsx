import styles from './Heading.module.css';

type HeadingType = {
      children: React.ReactNode;
};

export function Heading({ children }: HeadingType) {
      return (
            <>
                  <h1 className={styles.heading}>{children}</h1>
            </>
      );
}
