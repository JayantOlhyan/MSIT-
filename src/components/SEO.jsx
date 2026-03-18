import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonicalPath = "" }) => {
    const siteTitle = "MSIT - Maharaja Surajmal Institute of Technology";
    const fullTitle = title ? `${title} | MSIT` : siteTitle;
    const baseUrl = "https://msit-website.netlify.app";
    const canonicalUrl = `${baseUrl}${canonicalPath}`;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph tags (Facebook/LinkedIn) */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content="MSIT New Delhi" />

            {/* Twitter tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
};

export default SEO;
