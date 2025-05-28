import React from 'react'
import MapSection from '../../components/MapSection';
import AppointmentForm from '../../components/AppointmentForm';
import DoctorsSection from './DoctorsSection';

const doctors = [
    {
        name: "Юсупов Суннатилла Абдумаликович",
        specialty: "ЛОР",
        image: "https://www.revmacenter.uz/images/doctors/doc-1.png",
    },
    {
        name: "Акбарходажева Мунира Раматходжаевна",
        specialty: "Кардирематолог.Педиатр",
        image: "https://www.revmacenter.uz/images/doctors/doc-2.png",
    },
    {
        name: "Жалолходжева Малика Козимхоновна",
        specialty: "Ревматолог",
        image: "https://www.revmacenter.uz/images/doctors/doc-4.png",
    },
    {
        name: "Мухиддинова Зулайхо Нуриллаевна",
        specialty: "УЗИ диагностики",
        image: "https://www.revmacenter.uz/images/doctors/doc-3.png",
    },
];

export default function Doctors() {
    return (
        <>
            <DoctorsSection doctors={doctors} />
            <MapSection
                title="Расположение:"
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
