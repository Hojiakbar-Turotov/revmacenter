import React from 'react'
import ServicesHeroSlider from './ServicesHeroSlider'

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


export default function Services() {
    return (
        <>
            <ServicesHeroSlider slides={slides} />
        </>
    )
}
