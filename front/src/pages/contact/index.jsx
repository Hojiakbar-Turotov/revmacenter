import React from 'react'
import MapSection from '../../components/MapSection';
import AppointmentForm from '../../components/AppointmentForm';
import ContactInfo from './ContactInfo';

const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "/" },
    { label: "Контакты" },
];

const contacts = [
    {
        label: "Телефон:",
        value: "+998(99) 818-01-11",
        href: "tel:+998998180111",
    },
    {
        label: "E-mail:",
        value: "revmacenter01@gmail.com",
        href: "mailto:revmacenter01@gmail.com",
    },
    {
        label: "Адрес:",
        value: "Кибрайский район Университетская ул., 5/1.",
        href: "#address",
    },
    {
        label: "Режим работы:",
        value: (
            <>
                <span className="block font-bold">понедельник-пятниц:&nbsp;08:00‑18:00</span>
                <span className="block font-bold">суббота: 08:00‑14:00</span>
            </>
        ),
        type: "text",
    },
];


export default function Contact() {
    return (
        <>
            <ContactInfo
                pageTitle="Контакты"
                sectionTitle="Медицинский центр (взрослое отделение)"
                breadcrumbs={breadcrumbs}
                contacts={contacts}
            />
            <MapSection
                title=" "
                mapSrc="https://yandex.uz/map-widget/v1/?ll=69.344224%2C41.368629&z=16&l=map&pt=69.344224,41.368629,pm2rdm"
                height="400px"
            />
            <AppointmentForm
                onSubmit={(data) => {
                    console.log("Form submitted:", data);
                    // serverga yuborish yoki boshqa ishlar
                }}
            />
        </>
    )
}
