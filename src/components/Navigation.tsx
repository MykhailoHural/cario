import Link from 'next/link';

const Navigation = () => {
  const navItems = [
    { label: 'Discover', href: '#discover' },
    { label: 'About', href: '#about' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'What\'s New', href: '#whats-new' },
    { label: 'Contact Team', href: '#contact' },
  ];

  return (
    <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50">
      <div className="nav-blur rounded-full px-8 py-4">
        <div className="flex items-center gap-14">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-[85.8px] h-[21.45px]">
              <div className="absolute top-0 left-0 w-[18.84px] h-[21.12px]" style={{backgroundColor: 'var(--color-primary)'}}></div>
              <div className="absolute top-[0.33px] left-[19.37px] w-[18.95px] h-[20.46px]" style={{backgroundColor: 'var(--color-primary)'}}></div>
              <div className="absolute top-[0.33px] left-[39.77px] w-[15.71px] h-[20.46px]" style={{backgroundColor: 'var(--color-primary)'}}></div>
              <div className="absolute top-[0.33px] left-[58.11px] w-[3.73px] h-[20.46px]" style={{backgroundColor: 'var(--color-primary)'}}></div>
              <div className="absolute top-0 right-0 w-[21.45px] h-[21.45px] rounded-full border-[3.86px]" style={{borderColor: 'var(--color-secondary)'}}>
                <div className="absolute top-[2.3px] right-[3.17px] w-[3.31px] h-[3.31px] transform rotate-[-30deg]" style={{backgroundColor: 'var(--color-secondary)'}}></div>
              </div>
              <div className="absolute top-[7.29px] left-[71.97px] w-[6.9px] h-[6.9px] border-[1.34px]" style={{borderColor: 'var(--color-secondary)'}}></div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-14">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-semibold leading-[90%] tracking-[-0.02em] transition-colors duration-200" 
                style={{color: '#0F0F1C'}}
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'} 
                onMouseOut={(e) => e.currentTarget.style.color = '#0F0F1C'}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Avatar */}
          <div className="w-11 h-11 rounded-full border-3 bg-gray-200 overflow-hidden" style={{borderColor: '#D1DBF6'}}>
            <div className="w-full h-full opacity-20" style={{background: 'linear-gradient(to bottom right, var(--color-primary), var(--color-secondary))'}}></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
