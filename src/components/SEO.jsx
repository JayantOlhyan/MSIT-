import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonicalPath = "" }) => {
    const siteTitle = "msit by Jayant Olhyan – Maharaja Surajmal Institute of Technology";
    const fullTitle = (title && title !== "Home") ? `${title} | msit by Jayant Olhyan` : siteTitle;
    const baseUrl = "https://msit-website.netlify.app";
    const canonicalUrl = `${baseUrl}${canonicalPath}`;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="author" content="Jayant Olhyan" />
            <link rel="canonical" href={canonicalUrl} />
            <link rel="alternate" hreflang="en-IN" href={canonicalUrl} />
            <link rel="alternate" hreflang="x-default" href={canonicalUrl} />

            {/* Open Graph tags (Facebook/LinkedIn) */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content="msit by Jayant Olhyan" />

            {/* Twitter tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="https://msit-website.netlify.app/msit-logo.png" />
        </Helmet>
    );
};

export default SEO;
