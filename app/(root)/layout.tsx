import Topbar from '@/components/shared/Topbar/Topbar';
import styles from './layout.module.css';
import Leftbar from '@/components/shared/Leftbar/Leftbar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div id={styles.container}>
            <Leftbar />
            <div>
                <Topbar />
                {children}
            </div>
        </div>
    );
};

export default RootLayout;
