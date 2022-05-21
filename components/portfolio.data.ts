import RemwellLogo from '../assets/remwell-logo-96.png'
import GPMLogo from '../assets/gpm-logo.jpeg'
import RZDLogo from '../assets/voronin-rzd-logo.svg'
import CatlenseLogo from '../assets/catlense-orange.png'
import MygreenwayLogo from '../assets/mygreenway-logo.svg'
import VoroninLogo from '../assets/voronin_logo.svg'

export default [
  {
    title: 'rem-well.ru',
    description: 'Сайт для компании, ремонтирующей локомотивные устройства безопасности',
    img: RemwellLogo.src,
    link: 'remwell',
    specColor: '#2295FF',
    subTitle: 'Ремвелл',
    date: '12.03.2020',
    customer: {href: 'mailto:office@rem-well.ru', text: 'office@rem-well.ru', name: 'Артём Пашнин'},
    text: `
    Ремвелл - Компания, занимающаяся техническим обслуживанием и ремонтом локомотивных устройств безопасности.
    <br><br>
    Генеральный директор компании обратился к нам в начале 2020 года и с того времени мы продолжаем наше продуктивное сотрудничество. Проект поддерживается нашей студией всё это время и претерпел 3 редизайна, переход на актуальные технологии, лаконичный домен и более мощный сервер.<br><br>
    На сайте используется самописная админка, позволяющая полностью контролировать действия посетителей сайта и управлять контентом на нём<br><br>
    Используемые технологии: React, Express, MongoDB
    `
  },
  {
    title: 'gpm-centr.ru',
    description: 'Сайт под ключ для компании, занимающейся арендой строительной техники',
    img: GPMLogo.src,
    link: 'gpm-centr',
    date: '25.07.2021',
    specColor: '#38D35B',
    subTitle: 'ГПМ-Центр',
    customer: {href: 'https://t.me/k_n_y_a_z_e_f_f', text: '@k_n_y_a_z_e_f_f', name: 'Алексей Князев'},
    text: `
    ГПМ-Центр - официальный дилером компании Zoomlion, которая занимается производством строительной техники<br><br>
    С компанией мы работаем начиная с июля 2021 года, за это время произведено много доработок, так как заказчик обратился к нам с очень странным макетом. Мы составили примерный дизайн, продумали поведение посетителей и согласовали все моменты, чтобы получился максимально качественный продукт.<br><br>
    Поддержка сайта оказывается и по сей день, мы редактируем каталог техники, вносим необходимые изменения на сайт, продолжаем наше сотрудничество.<br><br>
    Сайт написан на чистом php.
    `
  },
  {
    title: 'rzd.voronin.xyz',
    description: 'Помощник поиска неисправностей для работников РЖД',
    img: RZDLogo.src,
    date: '10.06.2021',
    link: 'rzd',
    specColor: '#000',
    subTitle: 'Помощник поиска неисправностей',
    customer: {href: 'mailto:e_voronin@mail.ru', text: 'e_voronin@mail.ru', name: 'Евгений Воронин'},
    text: `
    Сайт создан под ключ и закрывает проблемы поиска неисправностей для внутреннего пользования сотрудниками РЖД<br><br>
    Стек разработки - Express + MongoDB & React
    `
  },
  {
    title: 'old.catlense.ru',
    description: 'Старая версия текущего сайта',
    img: CatlenseLogo.src,
    link: 'catlense',
    date: '20.08.2021',
    specColor: '#f89749',
    subTitle: 'Catlense Landing v1.0',
    customer: {href: 'https://t.me/catlense', text: '@catlense', name: 'Максим Воронин'},
    text: 'Самая первая версия сайта catlense.ru<br><br>То, что Вы видите сейчас - полностью переработанная версия<br><br>Стек разработки - React',
    imgStyle: {borderRadius: 50}
  },
  {
    title: 'mygreenway.shop',
    description: 'Вёрстка шаблона интернет-магазина',
    img: MygreenwayLogo.src,
    link: 'mygreenway',
    specColor: '#74c044',
    subTitle: 'Mygreenway',
    date: '04.06.2021',
    customer: {href: 'https://t.me/olarsen', text: '@olarsen', name: 'Олег'},
    text: `
    Летом 2021 года к нам обратился один из заказчиков, с просьбой повторить дизайн интернет-магазина Greenway, внеся некоторые корректировки.<br><br>
    Работа над проектом идёт по сей день.
    <br><br>
    Стек разработки - чистые php & js
    `
  },
  {
    title: 'voronin.xyz',
    description: 'Сайт-визитка веб-разработчика',
    img: VoroninLogo.src,
    link: 'voronin',
    date: '04.02.2020',
    specColor: 'rgb(58 184 255)',
    subTitle: 'Voronin Landing',
    customer: {href: 'https://t.me/mv_voronin', text: '@mv_voronin', name: 'Максим Воронин'},
    customLink: 'https://cdn.kwork.ru/files/portfolio/t0/20/c1e513e45d83f1dfc1569db0585121679101270d-1621968520.webp',
    text: `
    Один из первых профессиональных сайтов нашей компании, созданный на чистом php.
    `
  },
]