import React from 'react'
import Hero from './Hero'
import ServiceGrid from './ServiceGrid';
import PopularServices from './PopularServices';
import DoctorsSlider from './DoctorsSlider';
import BlogSection from './BlogSection';
import MapSection from '../../components/MapSection';
import AppointmentForm from '../../components/AppointmentForm';

const services = [
    {
        title: "Направления",
        items: ["Акушерство", "Косметология", "Хирургия", "Мануальная терапия", "Психотерапия"],
        link: "/contact"
    },
    {
        title: "Диагностика",
        items: ["МРТ", "КТ", "УЗИ", "Рентген", "Гастроскопия"],
        link: "/contact"
    },
    {
        title: "Врачи",
        items: ["Стоматолог", "Эндокринолог", "Хирург", "Терапевт", "Невролог"],
        link: "/contact"
    },
    {
        title: "Детство",
        items: ["Педиатр", "Стоматолог", "Дерматолог", "Офтальмолог", "Логопед"],
        link: "/contact"
    }
];

const servicesData = [
    { title: 'Гастроскопия', image: 'https://www.revmacenter.uz/images/services/service-2.png' },
    { title: 'Прием гинеколога', image: 'https://www.revmacenter.uz/images/services/service-3.png' },
    { title: 'Лабораторная диагностика', image: 'https://www.revmacenter.uz/images/services/service-4.png' },
    { title: 'Кардиология', image: 'https://www.revmacenter.uz/images/services/service-1.png' },
    { title: 'Неврология', image: 'https://www.revmacenter.uz/images/services/service-2.png' },
    { title: 'МРТ', image: 'https://www.revmacenter.uz/images/services/service-1.png' },
]

const doctors = [
    {
        name: 'Dilshod Rahimov',
        specialty: 'Кардиолог',
        image: 'https://www.revmacenter.uz/images/doctors/doc-1.png',
    },
    {
        name: 'Malika Saidova',
        specialty: 'Невролог',
        image: 'https://www.revmacenter.uz/images/doctors/doc-2.png',
    },
    {
        name: 'Javlon Akbarov',
        specialty: 'Гинеколог',
        image: 'https://www.revmacenter.uz/images/doctors/doc-3.png',
    },
    {
        name: 'Malika Saidova',
        specialty: 'Невролог',
        image: 'https://www.revmacenter.uz/images/doctors/doc-4.png',
    },
    {
        name: 'Javlon Akbarov',
        specialty: 'Гинеколог',
        image: 'https://www.revmacenter.uz/images/doctors/doc-1.png',
    },
];

const posts = [
    {
        title: 'Кто находится в группе риска по глаукоме?',
        excerpt: 'Глаукома — прогрессирующее заболевание...',
        image: 'https://www.revmacenter.uz/images/services/service-hero-1.png',
        author: {
            name: 'Савина Наталья',
            avatar: 'https://www.revmacenter.uz/images/doctors/doc-1.png',
        },
        readTime: '5 минут на чтение',
    },
    {
        title: 'Как предотвратить развитие ретинопатии?',
        excerpt: 'Диабетическая ретинопатия — это серьезное...',
        image: 'https://www.revmacenter.uz/images/services/service-hero-2.png',
        author: {
            name: 'Иван Иванов',
            avatar: 'https://www.revmacenter.uz/images/doctors/doc-2.png',
        },
        readTime: '7 минут на чтение',
    },
    {
        title: 'Современные методы лечения катаракты',
        excerpt: 'Катаракта — помутнение хрусталика...',
        image: 'https://www.revmacenter.uz/images/services/service-hero-3.png',
        author: {
            name: 'Ольга Смирнова',
            avatar: 'https://www.revmacenter.uz/images/doctors/doc-3.png',
        },
        readTime: '6 минут на чтение',
    },
    {
        title: 'Кто находится в группе риска по глаукоме?',
        excerpt: 'Глаукома — прогрессирующее заболевание...',
        image: 'https://www.revmacenter.uz/images/services/service-hero-1.png',
        author: {
            name: 'Савина Наталья',
            avatar: 'https://www.revmacenter.uz/images/doctors/doc-1.png',
        },
        readTime: '5 минут на чтение',
    },
    {
        title: 'Как предотвратить развитие ретинопатии?',
        excerpt: 'Диабетическая ретинопатия — это серьезное...',
        image: 'https://www.revmacenter.uz/images/services/service-hero-2.png',
        author: {
            name: 'Иван Иванов',
            avatar: 'https://www.revmacenter.uz/images/doctors/doc-2.png',
        },
        readTime: '7 минут на чтение',
    },
    {
        title: 'Современные методы лечения катаракты',
        excerpt: 'Катаракта — помутнение хрусталика...',
        image: 'https://www.revmacenter.uz/images/services/service-hero-3.png',
        author: {
            name: 'Ольга Смирнова',
            avatar: 'https://www.revmacenter.uz/images/doctors/doc-3.png',
        },
        readTime: '6 минут на чтение',
    },
    // ... boshqa postlar
];

export default function Home() {
    return (
        <>
            <Hero
                title="Позаботьтесь о своём здоровье"
                description="Осуществляем комплексное медицинское обслуживание населения: консультации и амбулаторное лечение у специалистов всех направлений, медицинские обследования и диагностические процедуры."
                buttonText="Записаться"
                buttonLink="/contact"
                videoSrc="https://www.revmacenter.uz/fon.mp4"
                imageSrc="https://www.revmacenter.uz/doctor.png"
            />
            <div className="pt-16 pb-20">
                <ServiceGrid services={services} />
            </div>
            <PopularServices services={servicesData} />
            <DoctorsSlider doctors={doctors} />
            <BlogSection posts={posts} />
            <MapSection
                title="Как нас найти"
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
