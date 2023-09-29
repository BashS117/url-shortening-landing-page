import { useRoutes, BrowserRouter } from "react-router-dom"
import Home from "../Home"
import Header from "../../components/Header"
import './App.css'
import { ShortenProvider } from "../../context"

const AppRoutes=()=>{
  let routes=useRoutes([
    {path: '/', element :<Home/>},
    {path: '/Hombres', element :<Home/>},
    // {path:'/MyAccount',element: <MyAccount/>},
    // {path:'/MyOrder',element: <MyOrder/>},
    // {path:'/MyOrders',element: <MyOrders/>},
    // {path:'/MyOrders/last',element: <MyOrder/>},
    // {path:'/MyOrders/:id',element: <MyOrder/>},

    // {path:'/SignIn',element: <SignIn/>},
    // {path:'/*',element: <NotFound/>},
  ])
  return routes;
}

const App=()=> {

  return (
  
<ShortenProvider>
<BrowserRouter>
        <Header />

        <AppRoutes />

      </BrowserRouter>
</ShortenProvider>
  
    

  )
}

export default App
