import MobileNav from '@/components/shared/MobileNav';
import Sidebar from '@/components/shared/Sidebar';

export default function Layout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className='auth'>
      <Sidebar />
      <MobileNav />
      <div className='root'>
        <div className='root-container'>
          <div className='wrapper'>{children}</div>
        </div>
      </div>
    </main>
  );
}
