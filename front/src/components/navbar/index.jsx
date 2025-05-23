import React from 'react'
import NavFunc from './Nav'

export default function Navbar() {
    return (
        <>
            <NavFunc
                logoSrc="https://www.revmacenter.uz/LOGO.svg"
                phone="+998(99) 818-01-11"
                whatsapp="998998180111"
                email="revmacenter01@gmail.com"
                address={{
                    region: "Кибрайский район",
                    street: "Университетская ул., 5/1."
                }}
                schedule={[
                    "понедельник-пятница 08:00‑18:00",
                    "суббота: 08:00‑14:00"
                ]}
                navLinks={[
                    { label: "Главный", href: "/" },
                    { label: "Услуги", href: "/services" },
                    { label: "Врачи", href: "/doctors" },
                    { label: "Отзывы", href: "/reviews" },
                    { label: "О центре", href: "/about" },
                    { label: "Контакты", href: "/contact" }
                ]}
            />
        </>
    )
}
