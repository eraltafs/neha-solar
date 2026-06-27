import {
    Battery,
    Cable,
    Zap,
    Sun,
    ShieldCheck,
    Gauge,
  } from "lucide-react";
  
  export const products = [
    {
      title: "Solar Panels",
      description: "High efficiency Mono PERC & TOPCon panels.",
      image: "/products/modules.png",
      icon: Sun,
    },
    {
      title: "Solar Inverters",
      description: "On-grid, Hybrid & Off-grid inverters.",
      image: "/products/inverters.png",
      icon: Zap,
    },
    {
      title: "Lithium Batteries",
      description: "Long life lithium storage batteries.",
      image: "/products/lithium-battery2.png",
      icon: Battery,
    },
    {
      title: "Tall Tubular Batteries",
      description: "Reliable backup for homes & offices.",
      image: "/products/tubular-battery.webp",
      icon: Battery,
    },
    {
      title: "ACDB / DCDB",
      description: "Protection units for solar systems.",
      image: "/products/acdb.webp",
      icon: ShieldCheck,
    },
    {
      title: "DC Wire",
      description: "UV resistant premium solar cables.",
      image: "/products/dc-wire.webp",
      icon: Cable,
    },
    {
      title: "MC4 Connector",
      description: "Waterproof high quality connectors.",
      image: "/products/mc4.webp",
      icon: Cable,
    },
    {
      title: "Solar Meter",
      description: "Net Meter & Energy Meter solutions.",
      image: "/products/meter.webp",
      icon: Gauge,
    },
  ];