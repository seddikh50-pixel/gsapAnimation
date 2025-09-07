import Navbar from './components/common/Navbar';
import Stairs from './components/common/Stairs';
import { NavContext } from './components/context/NavContext';
import FullScreenNav from './components/navigation/FullScreenNav';
import './globals.css';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <div className=''>
          <NavContext>
            <Navbar />
            <FullScreenNav />
            <Stairs>
              {children}
            </Stairs>
          </NavContext>
        </div>
      </body>
    </html>
  );
}
