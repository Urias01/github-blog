import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";


export function AppLayout() {
  return (
    <div className="antialised flex min-h-screen flex-col font-nunito">
      <Header />

      <>
        <Outlet />
      </>
    </div>
  )
}