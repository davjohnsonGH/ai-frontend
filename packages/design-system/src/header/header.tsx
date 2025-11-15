import { Layout }  from 'antd';
import styles from './header.module.css';

type DSHeaderProps = {
    id?: string;
    children: React.ReactNode;
    headerTitle?: string;
    headerDescription?: string;
};

const { Header } = Layout;

const DSHeader: React.FC<DSHeaderProps> = ({
    id,
    children,
    headerTitle,
    headerDescription
}) => {

    return (
        <Header
            id={id || 'main-header'}
            className={styles['DS-header']}
        >
            {children}
            {headerTitle}
        </Header>
    );

}

export default DSHeader;
