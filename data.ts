import { IProject, Service, Skill } from "./types";


export const projects: IProject[] = [
    { 
      name: "HsPro - Stavební firma",
      description:
        "Webová stránka pro stavební firmu. Stránka byla vytvořena pomocí CMS systému Wordpress. Byl vytvořen grafický návrh a zajištěn hosting s doménou. Na stránce bylo také provedeno kompletní SEO. ",
      image_path: "images/web-hspro.png",
      deployed_url: "https://hspro.cz/",
      github_url: "https://github.com/pilcikpatrik",
      category: ["Weby"],
      key_techs: ["Wordpress", "Figma", "RankMath", "Javascript", "CSS" ],
      mockups: ["images/web-hspro.png", "images/web-cis.png" ],
      dribble_url: "",
    },
    {
      name: "JP - Zednicke Práce ",
      image_path: "images/web-jp.png",
      deployed_url: "https://visual-algorithm.web.app/",
      github_url: "https://github.com/pilcikpatrik",
      category: ["Weby"],
      description:
        "Webová stránka pro živnostníka. Stránka byla vytvořena pomocí CMS systému Wordpress. Byl vytvořen grafický návrh a zajištěn hosting s doménou. Na stránce bylo také provedeno kompletní SEO.",
      key_techs: [ "Wordpress", "Figma", "RankMath", "Javascript", "CSS" ],
      mockups: ["/images/hspro-web.png", "/images/hspro-web.png" ],
      dribble_url: "",
    },
  
    {
      name: "C.I.S. - Vývoj softwaru",
      image_path: "images/web-cis.png",
      deployed_url: "https://dev-talks.herokuapp.com/",
      github_url: "https://github.com/pilcikpatrik",
      category: ["Weby"],
      description:
        "Webová stránka pro C.I.S. firmu ve které pracuji",
      key_techs: [
        "React",
        "html",
        "CSS",
        "Javascript"
      ],
      mockups: ["/images/hspro-web.png", "/images/hspro-web.png" ],
      dribble_url: "",
    },
  
    {
      name: "Logo - JPZednictvi",
      image_path: "images/jp-logo.svg",
      deployed_url: "https://sumit-chat.netlify.app/",
      github_url: "",
      category: ["Loga"],
      description:
        "Tvorba loga pro zedníka na živnosti. Základ byl vytvořen v Adobe Illustrator a zbytek detailu byl dodělán pomocí Canvy.",
      key_techs: ["Adobe illustrator", "Canva"],
      mockups: ["/images/hspro-web.png", "/images/hspro-web.png" ],
      dribble_url: "https://dribbble.com/pilcikpatrik",
    },
  
    {
      name: "Logo - Tesařství A&K",
      image_path: "images/ak-logo.svg",
      deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
      github_url: "",
      category: ["Loga"],
      description:
        "Tvorba loga pro tesařskou firmu. Základ byl vytvořen v Adobe Illustrator a zbytek detailu byl dodělán pomocí Canvy. ",
      key_techs: ["Adobe illustrator", "Canva"],
      mockups: [ "/images/ak-logo.svg", "/images/logo-v1-cap.png", "/images/logo-v1-cup.png" ],
      dribble_url: "https://dribbble.com/pilcikpatrik",
    },
  
    {
      name: "Logo - Krowka.cz",
      image_path: "images/krowka-logo.svg",
      deployed_url: "!#",
      github_url: "",
      category: ["Loga"],
      description:
        "Tvorba loga pro Eshop Krowka.cz. Celé logo bylo vytvořeno pomocí Adobe Illustrator.",
      key_techs: ["Adobe illustrator"],
      mockups: [ "/images/krowka-logo.svg", "/images/logo-v2-mockup-cap.png", "/images/logo-v2-mockup-cup.png" ],
      dribble_url: "https://dribbble.com/pilcikpatrik",
    },
    {
      name: "Grafika - HSPro",
      image_path: "images/hspro-letak.svg",
      deployed_url: "https://not-utube.web.app/",
      github_url: "",
      category: ["Tiskoviny"],
      description:
        'Kompletní grafické práce pro firmu HSPro. Tyto práce zahrnovali tvorbu Letáků, brožur a banneru na cestu.',
      key_techs: ["Adobe illustrator", "Canva"],
      mockups: ["/images/hspro-web.png", "/images/hspro-web.png" ],
      dribble_url: "https://dribbble.com/pilcikpatrik",
    },
    {
      name: "Grafika - Krowka.cz",
      image_path: "images/krowka-brozura.svg",
      deployed_url: "https://o-my-goal.web.app/",
      github_url: "",
      category: ["Tiskoviny"],
      description:
        "Grafické práce a dlouhodobá spoluprace s Eshopem Krowka.cz. Tvorba bannerů, letáků, brožur, grafiky pro reklamu a eventy.",
      key_techs: ["Adobe illustrator", "Canva"],
      mockups: ["/images/web-hspro.png", "/images/web-cis.png" ],
      dribble_url: "https://dribbble.com/pilcikpatrik",
    },
    {
      name: "Grafika - Tesařství A&K",
      image_path: "images/ak-letak.svg",
      deployed_url: "https://not-utube.web.app/",
      github_url: "",
      category: ["Tiskoviny"],
      description:
        'Kompletní grafické práce pro firmu Tesařství A&K. Tyto práce zahrnovali tvorbu Letáků, brožur a vizitek.',
      key_techs: ["Adobe illustrator", "Canva"],
      mockups: ["/images/web-hspro.png", "/images/web-cis.png" ],
      dribble_url: "https://dribbble.com/pilcikpatrik",
    },
  ];
