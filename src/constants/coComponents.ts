import About from "../pages/Others/About";
import TSV from "../pages/Others/TSV";
import Reklam from "../pages/Others/Reklam";
import HWorks from "../pages/Others/HWorks";
import Qaydalar from "../pages/Others/Qaydalar";
import Privacy from "../pages/Others/Privacy";
import { IComponents } from "../pages/Others/OtherDetail";



export const components: IComponents[] = [
  {
    id: 1,
    slug: "haqqımızda",
    name: "Layihə haqqında",
    component: About,
  },
  {
    id: 2,
    slug: "tsv",
    name: "Tez-tez verilən suallar",
    component: TSV,
  },
  {
    id: 3,
    slug: "reklam",
    name: "Reklam və əməkdaşlıq",
    component: Reklam,
  },
  {
    id: 4,
    slug: "nececalishir",
    name: "Necə çalışır?",
    component: HWorks,
  },
  {
    id: 5,
    slug: "qaydalar",
    name: "İstifadə qaydaları",
    component: Qaydalar,
  },
  {
    id: 6,
    slug: "mexfilik",
    name: "Məxfilik siyasəti",
    component: Privacy,
  },
];
