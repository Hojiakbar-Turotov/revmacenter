import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout() {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Dinamik sahifa joyi */}
            <Outlet />

            {/* Footer (ixtiyoriy) */}
            <Footer
                phoneNumbers={["+998(99) 818-01-11", "+998(90) 123-45-67"]}
                address="Кибрайский район Университетская ул., 5/1"
                whatsappLink="https://wa.me/998998180111"
                telegramLink="https://t.me/revma_center_clinic"
            />
        </>
    );
}
