/* const myExperience: {
	title: string,
    startDate: string
    endDate: string, 
    description: string,
}[] = [
	{
		title: 'Proyecto Freelance Punto de Venta',
		startDate: '2021',
		endDate: '',
		description: 'Se ente teal auran te unto de venes eros au el para unia es ena encina con un aprendizarie del entorno laboral.'
	},
] */

interface timeline {
    title: string;
    startDate: string;
    endDate: string;
    description: string;
}

interface project {
    title: string;
    technologies: string[];
    description: string;
    urls: {name: string, url: string}[];
    images: string[];
    startDate: string;
    endDate: string;
    role: string;
}

export const experience: timeline[] = [
    {
        title: 'Proyecto Freelance Punto de Venta',
		startDate: '2021',
		endDate: '',
        description: 'Se estuvo realizando un punto de venta personalizado para una estética en equipo con un excompañero de universidad durante el periodo de estudios, esto con el fin de brindar una solución al cliente y tener aprendizaje de entorno laboral.'
    },
    {
        title: `Córdova Industrial Integradores`,
        startDate: '2022',
        endDate: 'ACTUALIDAD',
        description: 'Responsable de desarrollar soluciones complejas y contribuir en múltiples proyectos en los que se incluyen InteliHogar, InteliHom, Enegrin, Gestión de Pozos JMAS y entre otros proyectos de uso privado.'
    }
];

export const studies: timeline[] = [
    {
        title: 'Técnico en Programación (Estudiante)',
        startDate:'2015',
        endDate: '2018',
        description: 'CBTIS No. 117' 
     },
    {
       title: 'Ingeniería en Sistemas Computacionales (Estudiante)',
       startDate:'2018',
       endDate: '2023',
       description: 'Instituto Tecnológico de Cd. Cuauhtémoc<br>Especialidad: Desarrollo de aplicaciones móviles y aplicaciones web. ' 
    },
    {
        title: `Full Stack Developer (Empleado)`,
        startDate: '2022',
        endDate: 'PRESENTE',
        description: 'Córdova Industrial Integradores<br>Aportaciones: Desarrollé y desplegué 5 aplicaciones hechas en Ionic a la Appstore, he aportado en a mejora de proyectos existentes, desarrollé y desplegué 4 páginas web, aporté al diseño de UX/UI de las aplicaciones y páginas web.'
    },
    {
        title: 'Maestría en Ingeniería de Software y Sistemas Informáticos (Estudiante)',
        startDate:'2023',
        endDate: '2025',
        description: 'UNIR México | Universidad Internacional de La Rioja en México' 
     },
];

export const projects: project[] = [
    {
        title: 'Aplicación Cord',
        technologies: [
            "ionic", "angular", "tailwind", "sass", "figma", "google-cloud", "apple", "android"
        ],
        description: `
            Cord es un proyecto creado por la área de innovación y desarrollo tecnológico de Córdova Industrial (CIDTcor), 
            que busca automatizar las empresas por medio de la Industria 4.0. Haciendo uso del IoT busca hacer que las empresas 
            que cuenten con los servicios de Cord, cuenten una aplicación de gestión de las áreas de manufactura desde donde pueden 
            monitorear multiples variables que son fundamentales en la producción de algún producto o servicio, además brindandoles 
            la oportunidad de controlar a distancia cualquier dispositivo enlazado a la aplicación y tener alertas personalizadas 
            las 24 horas del día en caso de que haya un problema con alguna máquina o dispositivo de manufactura.

            Encargado del diseño de UX / UI intuitivo para todo público en la aplicación Figma. 
            Encargado de hacer el prototipo funcional del diseño en el framework de Ionic con Angular y haciendo uso de Tailwind.
            Encargado de hacer el branding que se muestra en la PlayStore y AppStore.
            Encargado de configurar toda la plataforma de iOS e iPadOS en Google Cloud para funcionales como Cloud Messaging y Crashlytics.
            Encargado de la implementación de autenticación en la App (Inicio de sesión de Google, Apple y Email) y su respectiva configuración en iOS e iPadOS.
            Encargado de realizar la publicación de la App en la plataforma de iOS e iPadOS (AppStore).  
        `,
        urls: [
            {
                name: 'PlayStore',
                url: 'https://play.google.com/store/apps/details?id=com.cidtcor.cord&pcampaignid=web_share'
            },
            {
                name: 'AppStore',
                url: 'https://apps.apple.com/mx/app/cord/id6559758124'
            },
        ],
        images: [],
        startDate: '2024',
        endDate: 'HOY',
        role: 'Developer, UI Designer', 
    },
    {
        title: 'Aplicación Enegrin',
        technologies: [
            "ionic", "angular", "sass", "tailwind", "figma", "firestore", "node-red", "google-cloud",
        ],
        description: `
            Enegrin es un proyecto creado por la área de innovación y desarrollo tecnológico de Córdova Industrial (CIDTcor), en el cual se busca que las 
            empresas productoras mexicanas cuenten con energías verdes, con una mayor calidad y estabilidad para evitar que dichas empresas detengan la producción de 
            los servicios que brindan. En esta aplicación se busca que el contratista tenga una forma de monitoreo con información básica sobre el funcionamiento del sistema de generación
            de energía brindado por la marca, en donde habrán gráficos, información recibida y una zona para enviar comandos a los dispositivos de control en caso de ser requeridos.

            Encargado del diseño preliminar de UX / UI intuitivo sin el branding en la aplicación Figma. 
            Encargado de la estructuración de datos en la base de datos.
            Encargado de la implementación de autenticación en la App (Inicio de sesión de Google, Apple y Email) y su respectiva configuración en iOS e iPadOS.
            Encargado de hacer el branding que se muestra en la PlayStore y AppStore.
            Encargado de trabajar en conjunto con un compañero de equipo para la transmisión de datos de la aplicación a los dispositivos de control de la empresa (PLC e IoT).
            Encargado de realizar la publicación de la App en la plataforma de iOS e iPadOS (AppStore).  
        `,
        urls: [
            {
                name: 'PlayStore',
                url: 'https://play.google.com/store/apps/details?id=com.cidtcor.enegrin&hl=es_419&gl=US'
            },
            {
                name: 'AppStore',
                url: 'https://apps.apple.com/ec/app/enegrin/id6463267797'
            },
        ],
        images: [],
        startDate: '2022',
        endDate: '',
        role: 'Developer, UI Designer', 
    },
    {
        title: 'Página Web Enegrin',
        technologies: [
            "wordpress", "php", "css"
        ],
        description: `
            Enegrin es un proyecto creado por la área de innovación y desarrollo tecnológico de Córdova Industrial (CIDTcor), en el cual se busca que las 
            empresas mexicanas cuenten con energías verdes, con una mayor calidad y estabilidad para evitar que dichas empresas detengan la producción de 
            los servicios que brindan.

            Se realizó una página web CMS usando Worpress, esto con el fin de mostrar como funciona dicha empresa, poder agendar citas y que las personas
            interesadas puedan ver la visión y visión de la marca.

            Estuve involucrado en el proceso de instalación de Wordpress, en la mejora de seguridad y rendimiento de la misma y en la creación del distinto
            contenido que se puede visualizar en las páginas.
        `,
        urls: [
            {
                name: 'Página Web',
                url: 'https://enegrin.com'
            },
        ],
        images: [],
        startDate: '2022',
        endDate: '',
        role: 'Developer, UI Designer', 
    },
    {
        title: 'Panel de Gestión Enegrin',
        technologies: [
            "angular", "sass", "tailwind", "firestore"
        ],
        description: `
        
        `,
        urls: [
            {
                name: 'InteliHogar (ES)',
                url: 'https://intelihogar.com/landing'
            },
            {
                name: 'InteliHom (EN)',
                url: 'https://intelihom.com/landing'
            },
        ],
        images: [],
        startDate: '2022',
        endDate: '',
        role: 'Developer, UI Designer', 
    },
    {
        title: 'JMAS Gestión del Agua',
        technologies: [
            "angular", "sass", "tailwind"
        ],
        description: `Testing`,
        urls: [
            {
                name: 'InteliHom',
                url: 'https://intelihom.com/landing'
            },
            {
                name: 'InteliHogar',
                url: 'https://intelihogar.com/landing'
            },
        ],
        images: [],
        startDate: '2022',
        endDate: '',
        role: 'Developer, UI Designer', 
    },
    {
        title: 'Aplicación de Monitoreo InteliHogar',
        technologies: [
            "angular", "sass", "tailwind"
        ],
        description: ``,
        urls: [
            {
                name: 'InteliHom',
                url: 'https://intelihom.com/landing'
            },
            {
                name: 'InteliHogar',
                url: 'https://intelihogar.com/landing'
            },
        ],
        images: [],
        startDate: '2022',
        endDate: '',
        role: 'Developer, UI Designer', 
    },
    {
        title: 'BackEnd InteliHogar | InteliHom',
        technologies: [
            "angular", "sass", "tailwind"
        ],
        description: ``,
        urls: [
            {
                name: 'InteliHom',
                url: 'https://intelihom.com/landing'
            },
            {
                name: 'InteliHogar',
                url: 'https://intelihogar.com/landing'
            },
        ],
        images: [],
        startDate: '2022',
        endDate: '',
        role: 'Developer, UI Designer', 
    },
    {
        title: 'Aplicación InteliHogar | InteliHom',
        technologies: [
            "angular", "sass", "tailwind"
        ],
        description: ``,
        urls: [
            {
                name: 'InteliHom',
                url: 'https://intelihom.com/landing'
            },
            {
                name: 'InteliHogar',
                url: 'https://intelihogar.com/landing'
            },
        ],
        images: [],
        startDate: '2022',
        endDate: '',
        role: 'Developer, UI Designer', 
    },
    {
        title: 'Tienda Web InteliHogar | InteliHom',
        technologies: [
            "angular", "sass", "tailwind"
        ],
        description: ``,
        urls: [
            {
                name: 'InteliHogar (ES)',
                url: 'https://intelihogar.com/landing'
            },
            {
                name: 'InteliHom (EN)',
                url: 'https://intelihom.com/landing'
            },
        ],
        images: [],
        startDate: '2022',
        endDate: '',
        role: 'Developer, UI Designer', 
    },
    {
        title: 'Gestión de Obras Córdova Industrial',
        technologies: [
            "angular", "sass", "tailwind"
        ],
        description: `Este proyecto es una aplicación web creada para la empresa Córdova Industrial, tiene el objetivo de ayudar a gestionar a los
        trabajadores del área de automatización industrial cuando se encuentran realizando tareas en el campo. Dicha aplicación es capaz de gestionar
        los distintos proyectos del campo contando con rendimientos de oficiales y ayudantes, reportes de rendimientos, gestión de administrativos, administración
        de requisiciones, ordenes de compra, reportes financieros de entradas y salidas de dinero, gestión de inventario y préstamo de herramientas, entre otras funcionalidades.
        
        En dicho proyecto estuve encargado de desarrollar algoritmos complejos y manejo de gran cantidad de datos para lograr que se muestren los rendimientos, todos los algoritmos relacionados 
        a lo que es los reportes financieros, gestión de Auth, manejo y estructura de datos en base de datos NoSQL y encargado del diseño de UX / UI en modo responsivo (para laptop y móviles).`,
        urls: [
            {
                name: 'InteliHom',
                url: 'https://intelihom.com/landing'
            },
            {
                name: 'InteliHogar',
                url: 'https://intelihogar.com/landing'
            },
        ],
        images: [],
        startDate: '2022',
        endDate: '',
        role: 'Developer, UI Designer', 
    }
    /* 
    {
        title: '',
        technologies: [],
        description: '',
        urls: [],
        images: [],
        startDate: '',
        endDate: '',
        role: '', 
    } 
    */
];