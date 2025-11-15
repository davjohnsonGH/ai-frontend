import { Layout }  from 'antd';
import styles from './content.module.css';

type DSContentProps = {
  id: string;
  children: React.ReactNode
};

const { Content } = Layout;

const DSContent: React.FC<DSContentProps> = ({
    id,
    children,
}) => {

  return (

    <Content
        id={id || "main-content"}
        className={styles['DS-content']}
    >
        {children}
    </Content>

  );
};

export default DSContent;

