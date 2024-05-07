import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, ReactNode } from 'react';

interface LinkButtonProps extends PropsWithChildren {
  url: string;
  className?: string;
  icon?: ReactNode;
}

function LinkButton({ children, url, className, icon }: LinkButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(url);
  };

  return (
    <div onClick={handleClick} className={className}>
      {icon && <span>{icon}</span>}
      {children}
    </div>
  );
}

export default LinkButton;
