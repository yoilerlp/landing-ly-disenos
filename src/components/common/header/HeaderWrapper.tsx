import { useEffect, useState, type PropsWithChildren } from 'react';
import { cn } from '@/helpers/cn';

type Props = PropsWithChildren<{
  className?: string;
}>;

const HeaderWrapper = ({ children, className }: Props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn('w-full fixed flex justify-center z-50', className)}>
      <div
        className={cn(
          'w-full flex justify-between items-center px-14 py-6 transition-all duration-300 will-change-transform',
          {
            'rounded-[40px] py-4 w-[90%] bg-white/10 backdrop-blur-[32px] md:translate-y-5':
              scrolled,
            'border-b border-white/20 shadow-lg': scrolled,
          }
        )}
      >
        {children}
      </div>
    </header>
  );
};

export default HeaderWrapper;

