import { FC, MouseEvent, ReactElement } from 'react';

type Props = {
  text: string;
  icon?: ReactElement;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<Props> = ({ text, icon, onClick }) => {
  return (
    <button
      className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      onClick={onClick}
    >
      {text && <span>{text}</span>}
      {icon && <div className='text-lg'>{icon}</div>}
    </button>
  );
};

export default Button;
