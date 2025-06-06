import React from 'react'
import ServicesHeroSlider from './ServicesHeroSlider'
import ServiceStatistics from './ServiceStatistics';
import ServiceAccordion from './ServiceAccordion';
import MapSection from '../../components/MapSection';
import AppointmentForm from '../../components/AppointmentForm';

const slides = [
    {
        title: 'РЕВМАТИЗМ',
        subtitle: 'Ревматизм: первичный приём',
        description: 'При ревматизме ревматолог оценивает боли, отёки суставов и сердечные симптомы. Рекомендуются лабораторные и инструментальные обследования для диагностики.',
        imageSrc: 'https://www.revmacenter.uz/images/services/service-hero-1.png'
    },
    {
        title: 'ревматоидный-артрит',
        subtitle: 'Ревматоидный артрит: первичный приём',
        description: 'При ревматоидном артрите основными симптомами являются боль, отёк и ограничение движений суставов. Ревматолог помогает с постановкой диагноза и планом лечения.',
        imageSrc: 'https://www.revmacenter.uz/images/services/service-hero-2.png'
    },
    {
        title: 'подагра',
        subtitle: 'Подагра: первичный приём',
        description: 'При подагре наблюдаются внезапные боли и покраснения в суставах. Ревматолог назначает анализы и рекомендации по диете и лечению.',
        imageSrc: 'https://www.revmacenter.uz/images/services/service-hero-3.png'
    },
    {
        title: 'артроз',
        subtitle: 'Артроз: первичный приём',
        description: 'Артроз связан с повреждением суставов. Ревматолог рекомендует методы снижения боли, восстановление подвижности и лечение.',
        imageSrc: 'https://www.revmacenter.uz/images/services/service-hero-4.png'
    },
    {
        title: 'системная-красная-волчанка',
        subtitle: 'Системная красная волчанка: первичный приём',
        description: 'СКВ — аутоиммунное заболевание, поражающее несколько органов. Ревматолог оценивает состояние кожи, суставов, почек и анализы крови.',
        imageSrc: 'https://www.revmacenter.uz/images/services/service-hero-5.png'
    },
    {
        title: 'болезнь-бехтерева',
        subtitle: 'Болезнь Бехтерева: первичный приём',
        description: 'При болезни Бехтерева происходит окостенение позвоночника. Ревматолог оценивает боль, скованность и ограничение дыхания для начала лечения.',
        imageSrc: 'https://www.revmacenter.uz/images/services/service-hero-6.png'
    },
    {
        title: 'склеродермия',
        subtitle: 'Склеродермия: первичный приём',
        description: 'Склеродермия проявляется уплотнением кожи и внутренних органов. Ревматолог предлагает анализы и план лечения.',
        imageSrc: 'https://www.revmacenter.uz/images/services/service-hero-7.png'
    },
    {
        title: 'фибромиалгия',
        subtitle: 'Фибромиалгия: первичный приём',
        description: 'Фибромиалгия сопровождается общей болью, усталостью и бессонницей. Ревматолог оценивает состояние и рекомендует медикаменты и психоэмоциональную поддержку.',
        imageSrc: 'https://www.revmacenter.uz/images/services/service-hero-8.png'
    },
    {
        title: 'васкулиты',
        subtitle: 'Васкулиты: первичный приём',
        description: 'Васкулиты вызывают воспаление сосудов. Ревматолог оценивает общее состояние и результаты анализов для выбора направления лечения.',
        imageSrc: 'https://www.revmacenter.uz/images/services/service-hero-9.png'
    },
    // Qo‘shimcha slaydlar shu tarzda
];

const statsData = [
    {
        icon: 'https://www.revmacenter.uz/cross.svg',
        value: '10+',
        label: 'Лет заботы о вашем здоровье',
    },
    {
        icon: 'https://www.revmacenter.uz/cross.svg',
        value: '50+',
        label: 'Квалифицированных специалистов',
    },
    {
        icon: 'https://www.revmacenter.uz/cross.svg',
        value: '100+',
        label: 'Медицинских услуг по всем направлениям',
    },
    {
        icon: 'https://www.revmacenter.uz/cross.svg',
        value: '1 день',
        label: 'Прием врача любой специальности в день обращения',
    },
];

const services = [
    {
        title: 'Ревматизм: первичный приём',
        description:
            'Ревматизм — это воспалительное заболевание, которое может поражать сердце, суставы, кожу и мозг. Первичный приём включает сбор анамнеза, оценку жалоб и направление на анализы для постановки диагноза и составления плана лечения.',
    },
    {
        title: 'Ревматоидный артрит: первичный приём',
        description:
            'Ревматоидный артрит — хроническое воспалительное заболевание суставов. На приёме врач оценивает степень воспаления, направляет на анализы крови и рентген, после чего разрабатывает индивидуальный план лечения.',
    },
    {
        title: 'Подагра: первичный приём',
        description:
            'Подагра проявляется внезапной болью в суставах, чаще всего в большом пальце ноги. Врач выявляет провоцирующие факторы, направляет на анализ уровня мочевой кислоты и рекомендует диету и препараты.',
    },
    {
        title: 'Артроз: первичный приём',
        description:
            'Артроз — это дегенеративное заболевание суставов. На приёме врач выясняет степень поражения, назначает рентген и определяет тактику лечения, включая медикаментозную и немедикаментозную терапию.',
    },
    {
        title: `Системная красная волчанка: первичный приём`,
        description: `СКВ — сложное аутоиммунное заболевание. Ревматолог проводит осмотр, изучает анализы крови и мочи, оценивает состояние кожи, суставов, почек и других органов. Назначается комплексная терапия.`,
    },
    {
        title: `Болезнь Бехтерева: первичный приём`,
        description: `Болезнь Бехтерева (анкилозирующий спондилит) характеризуется воспалением позвоночника. На первом приёме врач выявляет скованность движений, боли в пояснице и направляет на МРТ или рентген.`,
    },
    {
        title: `Склеродермия: первичный приём`,
        description: `Склеродермия — это заболевание, вызывающее утолщение кожи и поражение внутренних органов. Ревматолог анализирует симптомы, оценивает кожные изменения и назначает лабораторные тесты.`,
    },
    {
        title: `Фибромиалгия: первичный приём`,
        description: `Фибромиалгия — синдром хронической боли в мышцах и тканях. На приёме врач оценивает уровень боли, усталости, нарушения сна и психоэмоциональное состояние пациента для подбора терапии.`,
    },
    {
        title: `Васкулиты: первичный приём`,
        description: `Васкулиты — воспаления сосудов, которые могут поражать разные органы. Врач проводит осмотр, назначает анализы крови, УЗИ или биопсию и подбирает иммуносупрессивную терапию.`,
    },
    // ...boshqa xizmatlar
];



export default function Services() {
    return (
        <>
            <ServicesHeroSlider slides={slides} />
            <ServiceStatistics stats={statsData} />
            <ServiceAccordion services={services} />
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
