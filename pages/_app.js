import '../styles/globals.css'
import SideNavbar from '../components/SideNavbar';

function MyApp({ Component, pageProps }) {
  return(
      <SideNavbar>
     <Component {...pageProps} />
     </SideNavbar>

  );
}
export default MyApp
