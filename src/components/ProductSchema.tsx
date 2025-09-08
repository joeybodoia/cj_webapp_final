import React from 'react';
import { InventoryItem } from '../lib/supabase';

interface ProductSchemaProps {
  product: InventoryItem;
}

const ProductSchema: React.FC<ProductSchemaProps> = ({ product }) => {
  // Helper function to extract specifications
  const getSpecification = (category: string, field: string) => {
    if (product.product_specifications && Array.isArray(product.product_specifications)) {
      const categorySpec = product.product_specifications.find((spec: any) => spec[category]);
      return categorySpec?.[category]?.[field] || null;
    }
    return null;
  };

  // Helper function to get primary image
  const getPrimaryImage = () => {
    if (product.image_urls && typeof product.image_urls === 'object') {
      const imageUrls = product.image_urls as Record<string, string>;
      return imageUrls['image 1'] || Object.values(imageUrls)[0] || null;
    }
    return null;
  };

  // Helper function to get all images
  const getAllImages = () => {
    if (product.image_urls && typeof product.image_urls === 'object') {
      return Object.values(product.image_urls as Record<string, string>);
    }
    return [];
  };

  // Extract product details
  const capacity = getSpecification('General Specifications', 'Capacity');
  const measurements = getSpecification('General Specifications', 'Measurements (inch)');
  const dryWeight = getSpecification('General Specifications', 'Dry Weight (lbs)');
  const totalJets = getSpecification('Jets Specifications', 'Total Jets (without blower)');
  const primaryImage = getPrimaryImage();
  const allImages = getAllImages();

  // Get description
  const getDescription = () => {
    if (product.product_description && typeof product.product_description === 'object') {
      const desc = product.product_description as Record<string, any>;
      return desc.Description || `Premium ${product.product_type.toLowerCase()} by ${product.product_company}`;
    }
    return `Premium ${product.product_type.toLowerCase()} by ${product.product_company}`;
  };

  // Create product schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.product_name,
    "description": getDescription(),
    "brand": {
      "@type": "Brand",
      "name": product.product_company
    },
    "manufacturer": {
      "@type": "Organization",
      "name": product.product_company
    },
    "category": product.product_category || product.product_type,
    "productID": product.product_name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    ...(primaryImage && {
      "image": allImages.length > 0 ? allImages : [primaryImage]
    }),
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "seller": {
        "@type": "Organization",
        "name": "D's Outdoor Living",
        "url": "https://dsoutdoorliving.com",
        "telephone": "(480) 997-9447",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "3106 W Blue Eagle Lane",
          "addressLocality": "Phoenix",
          "addressRegion": "AZ",
          "postalCode": "85086",
          "addressCountry": "US"
        }
      },
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD",
        "valueAddedTaxIncluded": false
      }
    },
    "additionalProperty": [
      ...(capacity ? [{
        "@type": "PropertyValue",
        "name": "Capacity",
        "value": `${capacity} people`
      }] : []),
      ...(measurements ? [{
        "@type": "PropertyValue",
        "name": "Dimensions",
        "value": measurements
      }] : []),
      ...(dryWeight ? [{
        "@type": "PropertyValue",
        "name": "Dry Weight",
        "value": `${dryWeight} lbs`
      }] : []),
      ...(totalJets ? [{
        "@type": "PropertyValue",
        "name": "Total Jets",
        "value": totalJets
      }] : []),
      {
        "@type": "PropertyValue",
        "name": "Product Type",
        "value": product.product_type
      }
    ],
    ...(product.product_features && Array.isArray(product.product_features) && {
      "additionalFeature": product.product_features.map((feature: any) => ({
        "@type": "PropertyValue",
        "name": feature.title || "Feature",
        "description": feature.description || ""
      }))
    }),
    "isRelatedTo": {
      "@type": "Organization",
      "name": "D's Outdoor Living",
      "description": "Arizona's premier destination for premium spas, hot tubs, swim spas, and gazebos",
      "url": "https://dsoutdoorliving.com"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Homeowners interested in outdoor living and relaxation"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(productSchema, null, 2)
      }}
    />
  );
};

export default ProductSchema;