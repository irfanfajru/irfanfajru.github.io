import { Outlet } from "react-router-dom";
import SpotifyMusic from "../components/SpotifyMusic"
export default function Layout() {
    return <>
        <Outlet />
        <SpotifyMusic />
    </>
}