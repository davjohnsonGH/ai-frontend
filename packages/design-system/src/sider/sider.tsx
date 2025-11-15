import { Layout }  from 'antd';
import styles from './sider.module.css';

type DSSiderProps = {
  id?: string;
  children: React.ReactNode;
  trigger: boolean;
  collapsible: boolean;
  collapsed: boolean;
};

const { Sider } = Layout;

const DSSider: React.FC<DSSiderProps> = ({
  id,
  trigger,
  collapsible,
  collapsed,
  children
}) => {
    return (
        <Sider
            id={id || "main-sider"}
            trigger={trigger || null }
            collapsible={collapsible}
            collapsed={collapsed}
            theme='light'
            className={styles['sider']}
        >
            {children}
        </Sider>
  )};

export default DSSider;
