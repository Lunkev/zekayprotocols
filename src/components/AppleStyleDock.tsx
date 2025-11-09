import {
  HomeIcon,
  Info,
  BookOpen,
  HelpCircle,
  SunMoon,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

interface AppleStyleDockProps {
  onNavigate: (page: 'main' | 'about' | 'docs') => void;
}

export function AppleStyleDock({ onNavigate }: AppleStyleDockProps) {
  const data = [
    {
      title: 'Home',
      icon: (
        <HomeIcon className='h-full w-full text-white' />
      ),
      onClick: () => onNavigate('main'),
    },
    {
      title: 'About',
      icon: (
        <Info className='h-full w-full text-white' />
      ),
      onClick: () => onNavigate('about'),
    },
    {
      title: 'Docs',
      icon: (
        <BookOpen className='h-full w-full text-white' />
      ),
      onClick: () => onNavigate('docs'),
    },
    {
      title: 'FAQ',
      icon: (
        <HelpCircle className='h-full w-full text-white' />
      ),
      onClick: () => {},
    },
    {
      title: 'X',
      icon: (
        <img src='https://i.postimg.cc/VNfrcJWL/X-vit.png' alt='X' className='h-full w-full object-contain' />
      ),
      onClick: () => {},
    },
    {
      title: 'Theme',
      icon: (
        <SunMoon className='h-full w-full text-white' />
      ),
      onClick: () => {},
    },
  ];

  return (
    <div className='absolute top-2 left-1/2 max-w-full -translate-x-1/2 pointer-events-auto z-20'>
      <Dock className='items-end pb-3'>
        {data.map((item, idx) => (
          <div key={idx} onClick={item.onClick}>
            <DockItem className='aspect-square rounded-full bg-[#202020] cursor-pointer'>
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </div>
        ))}
      </Dock>
    </div>
  );
}
