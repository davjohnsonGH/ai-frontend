import { Button } from 'antd';
import styles from './button.module.css';

type DSButtonProps = {
  id: string;
  children?: React.ReactNode;
  type?: any;
  disabled?: boolean;
  onClick: any
  icon?: any
}

const DSButton: React.FC<DSButtonProps> = ({
    id,
    children,
    type,
    disabled,
    onClick,
    icon
}) => {

  return (
    <Button
        id={id || 'default-button'}
        type={type || 'default'}
        icon={icon || null}
        disabled={disabled}
        className={styles['toggle-button']}
        onClick={onClick}
    >
        {children}
    </Button>
  );
};

export default DSButton;

