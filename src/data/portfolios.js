import zakatCalculatorImg from "./image/Zakat-Calculator.jpg";
import goldWeightCalculator from "./image/Gold-Weight-Calculator.jpg";
import xRatePro from "./image/XRate-Pro.jpg";
import redsocksOpenwrt from "./image/Redsocks-OpenWRT.jpg";
import bdixOpenwrt from "./image/BDIX-OpenWRT.jpg";

export const portfolios = {
  Web: [
    {
      type: "featured",
      name: "Zakat Calculator",
      image: zakatCalculatorImg,
      description:
        "A modern, mobile-friendly Zakat calculator that calculates zakatable assets, supports multiple currencies, and includes a Nisab threshold.",
      demo: "https://zakatcalc.emon.one/",
      source:"https://github.com/emonbhuiyan/Zakat-Calculator",
      tools: ["HTML", "CSS", "JavaScript"],
    },
    {
      type: "featured",
      name: "Gold Weight Calculator",
      image: goldWeightCalculator,
      description:
        "A web-based calculator to determine the pure gold content in various karats and display zakatable gold weight.",
      demo: "https://emonbhuiyan.github.io/Gold-Weight-Calculator/",
      source: "https://github.com/emonbhuiyan/Gold-Weight-Calculator",
      tools: ["HTML", "CSS", "JavaScript"],
    },
    {
      type: "featured",
      name: "XRate Pro",
      image: xRatePro,
      description:
        "A powerful currency exchange calculator that provides real-time and historical exchange rates with a sleek, user-friendly interface.",
      demo: "https://xratepro.emon.one/",
      source: "https://github.com/emonbhuiyan/XRate-Pro",
      tools: ["HTML", "Exchange API", "JavaScript"],
    },
    {
      type: "regular",
      name: "Easy Menu Icons",
      description:
        "A lightweight and user-friendly tool for adding icons to website menus effortlessly, enhancing navigation and user experience",
      demo: "https://github.com/emonbhuiyan/Easy-Menu-Icons/releases/tag/v1.0.0",
      source: "https://github.com/emonbhuiyan/Easy-Menu-Icons",
      tools: ["HTML", "JavaScript", "PHP"],
    },
    {
      type: "regular",
      name: "Sokal BD 24",
      description:
        "A dynamic and user-friendly news website delivering the latest updates, articles, and reports with a clean and engaging design.",
      demo: "https://www.sokalbd24.com/",
      source: null,
      tools: ["WordPress"]
    },
  ],
  Networking: [
    {
      type: "featured",
      name: "Redsocks OpenWRT",
      image: redsocksOpenwrt,
      description:
        "A tutorial and installation script for configuring Redsocks on OpenWRT routers, making it easier for BDIX bypass users in Bangladesh to use the SOCKS5 proxy.",
      source: "https://github.com/emonbhuiyan/Redsocks-OpenWRT",
      tools: ["OpenWRT", "Shell Scripting","iptables"],
    },
    {
      type: "featured",
      name: "BDIX OpenWRT",
      image: bdixOpenwrt,
      description:
        "A customized Redsocks extension for BDIX proxy users in Bangladesh, enabling easy configuration of the SOCKS5 proxy on OpenWRT routers.",
      source: "https://github.com/emonbhuiyan/BDIX-OpenWRT",
      tools: ["OpenWRT", ,"Shell Scripting","iptables"],
    },
  ],
}
