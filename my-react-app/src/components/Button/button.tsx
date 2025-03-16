import classNames from 'classnames';

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string;          // 可选 className，用于自定义样式
  disabled?: boolean;          // 按钮是否禁用
  size?: ButtonSize;           // 按钮大小，使用 ButtonSize 枚举
  btnType?: ButtonType;        // 按钮类型，使用 ButtonType 枚举
  children: React.ReactNode;   // 按钮内容，必须传入（如文本或图标）
  href?:string
}


const Button:React.FC<BaseButtonProps> = ({
  disabled = false,
  btnType = ButtonType.Default,
  size,
  children,
  href
})=>{
  const classes = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled//a連結本身沒有disabled屬性，所以透過class來加上
  });
  
  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }else{
    return (
      <button 
        className={classes}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
}

export default Button