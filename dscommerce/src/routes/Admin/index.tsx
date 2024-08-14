import { Outlet } from "react-router-dom";
3
import HeaderAdmin from "../../components/HeaderAdmin";

export default function AdminHome() {
  return (
    <>
      <HeaderAdmin />
      <Outlet />    
    </>
  )
}