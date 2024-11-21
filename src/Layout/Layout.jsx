import { Outlet, useNavigation } from "react-router-dom"
import { Header } from "../header/Header"
import { Footer } from '../footer/Footer'

export const Layout = () =>{

  const navigation = useNavigation();
  console.log(navigation);

  if(navigation.state === 'loading') return "Loading.......";

    return(
        <>
        <Header />
          <Outlet />
        <Footer />
        </>
    )
}