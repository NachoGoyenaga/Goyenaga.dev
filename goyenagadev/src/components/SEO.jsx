import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function SEO({ title, description }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language || 'es';

    document.title = title 
      ? `${title} | Ignacio Goyenaga` 
      : "Ignacio Goyenaga | Full Stack Engineer";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description || "Ignacio Goyenaga - Full Stack Engineer especializado en .NET (C#), React, SQL Server y Azure en Costa Rica.");
  }, [title, description, i18n.language]);

  return null;
}