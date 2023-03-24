import React from "react";
import Head from "next/head";

const HeadMetadata: React.FC = () => {
  return (
    <Head>
      <title>Exclusive Private Jet Travel & Custom Vacations</title>
      <meta
        name="description"
        content="Discover luxurious private jet travel experiences and custom vacations tailored to your preferences. Explore our exclusive destinations and start planning your dream journey."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Exclusive Private Jet Travel & Custom Vacations" />
      <meta
        property="og:description"
        content="Discover luxurious private jet travel experiences and custom vacations tailored to your preferences. Explore our exclusive destinations and start planning your dream journey."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourdomain.com/" />
      <meta property="og:image" content="https://yourdomain.com/static/images/og-image.jpg" />
    </Head>
  );
};

export default HeadMetadata;
