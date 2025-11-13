import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

interface AppleStyleDockProps {
  onNavigate: (page: 'main' | 'about' | 'docs' | 'faq' | 'ecosystems') => void;
}

export function AppleStyleDock({ onNavigate }: AppleStyleDockProps) {
  const data = [
    {
      title: 'Home',
      icon: (
        <i className="ri-home-line text-white text-xl"></i>
      ),
      onClick: () => onNavigate('main'),
    },
    {
      title: 'About',
      icon: (
        <i className="ri-information-line text-white text-xl"></i>
      ),
      onClick: () => onNavigate('about'),
    },
    {
      title: 'Docs',
      icon: (
        <i className="ri-book-open-line text-white text-xl"></i>
      ),
      onClick: () => onNavigate('docs'),
    },
    {
      title: 'FAQ',
      icon: (
        <i className="ri-question-line text-white text-xl"></i>
      ),
      onClick: () => onNavigate('faq'),
    },
    {
      title: 'Ecosystems',
      icon: (
        <i className="ri-global-line text-white text-xl"></i>
      ),
      onClick: () => onNavigate('ecosystems'),
    },
    {
      title: 'GitHub',
      icon: (
        <i className="ri-github-fill text-white text-xl"></i>
      ),
      onClick: () => window.open('https://github.com', '_blank'),
    },
    {
      title: 'X',
      icon: (
        <img src='https://i.postimg.cc/VNfrcJWL/X-vit.png' alt='X' className='h-full w-full object-contain' />
      ),
      onClick: () => window.open('https://x.com/zekayprotocol', '_blank'),
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
