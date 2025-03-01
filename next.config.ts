import i18n from "./next-i18next.config"; // Importe a configuração do i18n
import type { NextConfig } from "next";

// Defina o tipo I18NConfig manualmente
type I18NConfig = {
  defaultLocale: string;
  locales: string[];
};

const nextConfig: NextConfig = {
  i18n: i18n.i18n as I18NConfig, // Adicione a configuração do i18n
  // Outras configurações do Next.js...
};

export default nextConfig;