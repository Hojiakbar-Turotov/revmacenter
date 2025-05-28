import React from 'react'
import MapSection from '../../components/MapSection';
import AppointmentForm from '../../components/AppointmentForm';
import AboutHero from './AboutHero';
import AboutContent from './AboutContent';
import FeaturesSection from "./FeaturesSection";
import WhyUsSection from "./WhyUsSection";
import {
    Microscope,
    MonitorCheck,
    HeartPulse,
    Syringe,
    UserCheck,
    Puzzle,
    ShieldCheck,
    Clock,
} from "lucide-react";
import ImageGallery from './ImageGallery';
import WhyUs from './WhyUs';

const contentTitle = 'Revma Center Clinic — Клиника для вашего здоровья и движения';
const contentParagraphs = [
    'Revma Center Clinic — это специализированная медицинская клиника, занимающаяся диагностикой и лечением ревматологических заболеваний у взрослых и детей. Мы успешно объединяем передовые технологии, современное оборудование и опыт врачей, чтобы обеспечить нашим пациентам высокий уровень медицинской помощи.',
    'Ежегодно в клинике обслуживаются сотни пациентов, страдающих от болезней суставов, соединительной ткани и аутоиммунных заболеваний. Мы предлагаем полный цикл амбулаторно-диагностических услуг — от первичной консультации до комплексного наблюдения и лечения.',
];

const features = [
    {
        icon: <Microscope />,
        title: "Лабораторные исследования",
        description: "Полный спектр анализов для точной диагностики",
    },
    {
        icon: <MonitorCheck />,
        title: "УЗИ-диагностика",
        description: "Современные аппараты и опытные специалисты",
    },
    {
        icon: <HeartPulse />,
        title: "ЭхоКГ (УЗИ сердца)",
        description: "Неинвазивная оценка состояния сердца",
    },
    {
        icon: <Syringe />,
        title: "Процедурный кабинет",
        description: "Инъекции, капельницы, блокадная терапия и др.",
    },
];

const whyUs = [
    {
        icon: <UserCheck />,
        title: "Узкопрофильные врачи-ревматологи",
        description: "С большим клиническим опытом",
    },
    {
        icon: <Puzzle />,
        title: "Индивидуальный подход",
        description: "К каждому пациенту",
    },
    {
        icon: <ShieldCheck />,
        title: "Высокая точность диагностики",
        description: "",
    },
    {
        icon: <Clock />,
        title: "Удобное время приёма",
        description: "И минимальное ожидание",
    },
];


const imageData = [
    { src: "https://www.revmacenter.uz/slider1.png", alt: "Slider1" },
    { src: "https://www.revmacenter.uz/slider2.jpg", alt: "Slider2" },
    { src: "https://www.revmacenter.uz/slider3.jpg", alt: "Slider3" },
    { src: "https://www.revmacenter.uz/slider4.jpg", alt: "Slider4" },
    { src: "https://www.revmacenter.uz/slider5.png", alt: "Slider5" },
    { src: "https://www.revmacenter.uz/slider1.png", alt: "Slider1" },
    { src: "https://www.revmacenter.uz/slider2.jpg", alt: "Slider2" },
    { src: "https://www.revmacenter.uz/slider3.jpg", alt: "Slider3" },
    { src: "https://www.revmacenter.uz/slider4.jpg", alt: "Slider4" },
    { src: "https://www.revmacenter.uz/slider5.png", alt: "Slider5" },
];

const whyUsItems = [
    {
        icon: "https://www.revmacenter.uz/line1.png",
        title: "Удобное расположение",
        description:
            "Мы находимся недалеко от железнодорожной станции Мытищи, и Вы всегда сможете быстро и удобно добраться как с других районов Мытищ, так и из Москвы.",
    },
    {
        icon: "https://www.revmacenter.uz/line2.png",
        title: "Круглосуточная работа мед. центра",
        description:
            "Медицинский Центр работает круглосуточно, без выходных и праздничных дней. Запись пациентов осуществляется через call-центр, а также в режиме online.",
    },
    {
        icon: "https://www.revmacenter.uz/line3.png",
        title: "Комплексное медицинское обслуживание",
        description:
            "Работаем как с физическими лицами, так и с корпоративными клиентами, предоставляя комплексное медицинское обслуживание в рамках программ ДМС и за наличный расчет.",
    },
    {
        icon: "https://www.revmacenter.uz/line4.png",
        title: "Одни из лучших специалистов",
        description:
            "Вас ждут качественный сервис, опытный и высококвалифицированный персонал, комфортные условия.",
    },
];

export default function About() {
    return (
        <>
            <AboutHero
                title="О центре"
                breadcrumb={{ home: 'Главная', current: 'О центре' }}
                imageSrc="https://www.revmacenter.uz/aboutdoctor.png"
            />
            <AboutContent title={contentTitle} paragraphs={contentParagraphs} />
            <FeaturesSection title="Наши возможности" features={features} />
            <WhyUsSection
                title="Почему выбирают нас"
                reasons={whyUs}
                conclusion={
                    <>
                        В <span className="font-semibold text-indigo-600">Revma Center Clinic</span> мы не просто лечим — мы восстанавливаем качество жизни. Наш приоритет — здоровье ваших суставов, свобода движения и долгосрочный результат.
                    </>
                }
            />
            <ImageGallery images={imageData} />
            <WhyUs items={whyUsItems} />
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
