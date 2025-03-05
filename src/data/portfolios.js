import zakatCalculatorImg from "./image/Zakat-Calculator.jpg";
import goldWeightCalculator from "./image/Gold-Weight-Calculator.jpg";

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
      type: "regular",
      name: "Easy Menu Icons",
      description:
        "A lightweight and user-friendly tool for adding icons to website menus effortlessly, enhancing navigation and user experience",
      demo: "https://github.com/emonbhuiyan/Easy-Menu-Icons/releases/tag/v1.0.0",
      source: "https://github.com/emonbhuiyan/Easy-Menu-Icons",
      tools: ["HTML", "CSS", "JavaScript", "PHP"],
    },
  ],
  Networking: [
    {
      type: "featured",
      name: "Redsocks OpenWRT",
      image: require("./image/Redsocks-OpenWRT.jpg"),
      description:
        "A tutorial and installation script for configuring Redsocks on OpenWRT routers, making it easier for BDIX bypass users in Bangladesh to use the SOCKS5 proxy.",
      source: "https://github.com/emonbhuiyan/Redsocks-OpenWRT",
      tools: ["OpenWRT", "Shell Scripting","iptables"],
    },
    {
      type: "featured",
      name: "BDIX OpenWRT",
      image: require("./image/BDIX-OpenWRT.jpg"),
      description:
        "A customized Redsocks extension for BDIX proxy users in Bangladesh, enabling easy configuration of the SOCKS5 proxy on OpenWRT routers.",
      source: "https://github.com/emonbhuiyan/BDIX-OpenWRT",
      tools: ["OpenWRT", ,"Shell Scripting","iptables"],
    },
  ],
}
