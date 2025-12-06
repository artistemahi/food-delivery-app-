import { info } from "console";
import React from "react";
import ReactDOM from "react-dom/client";

/*
Header
    - logo 
    - nav
body
    -search
    -restaurant container
    -restaurant card
        -image
        -name
        -cuisine
        -rating
footer
    -copyright info
    -links
    -address
    -contact info
    -social media icons
*/
// typescript uses
type Info = {
  name: string;
  cuisines: string[];
  costForTwo: string;
  avgRating: number;
  deliveryTime: number;
  cloudinaryImageId: string;
};
type ResProps = {
  resdata: {
    info: Info;
  };
};
const baseURL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/";
const reslist = [
  {
    info: {
      id: "766502",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/16/57381e18-b9c6-4cf1-a9cb-6bc3bf72ecc9_766502.JPG",
      locality: "Athwa",
      areaName: "Athwa",
      costForTwo: "₹400 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.7,
      parentId: "1040",
      avgRatingString: "4.7",
      totalRatingsString: "1.3K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-10-26 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "697",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e",
    },
    cta: {
      link: "https://www.swiggy.com/city/surat/theobroma-athwa-rest766502",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "72605",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/3e0611f1-2572-464f-baca-c3dcf3edc750_72605.JPG",
      locality: "Tribhuvan Complex",
      areaName: "Athwa",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "9.3K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-10-25 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "4.4K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e",
    },
    cta: {
      link: "https://www.swiggy.com/city/surat/pizza-hut-tribhuvan-complex-athwa-rest72605",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "74644",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/cb49d0f8-337c-436a-9e6d-f7b36b26c0ad_74644.jpg",
      locality: "Vesu",
      areaName: "Vesu",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.4,
      parentId: "166",
      avgRatingString: "4.4",
      totalRatingsString: "20K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-10-26 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹55",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "3.6K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e",
    },
    cta: {
      link: "https://www.swiggy.com/city/surat/burger-king-vesu-rest74644",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "675027",
      name: "Olio - The Wood Fired Pizzeria",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/bf073543-46e7-4002-9af6-1e55a202a1ac_675027.JPG",
      locality: "Bhatar",
      areaName: "Jivkor Nagar Co.Op.Hs",
      costForTwo: "₹300 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Fast Food",
        "Snacks",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.1,
      parentId: "11633",
      avgRatingString: "4.1",
      totalRatingsString: "4.0K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "30-40 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-10-26 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e",
    },
    cta: {
      link: "https://www.swiggy.com/city/surat/olio-the-wood-fired-pizzeria-bhatar-jivkor-nagar-co-op-hs-rest675027",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "424877",
      name: "Dilliwale Pahelvanjee'S Cholle Bhature",
      cloudinaryImageId: "tajbfx84hahoum5w9niz",
      locality: "Moti Begumwadi",
      areaName: "New Textile Market",
      costForTwo: "₹300 for two",
      cuisines: ["Punjabi", "Street Food", "Fast Food"],
      avgRating: 4.7,
      veg: true,
      parentId: "289667",
      avgRatingString: "4.7",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-10-25 18:15:00",
        opened: true,
      },
      isOpen: true,
      type: "F",
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e",
    },
    cta: {
      link: "https://www.swiggy.com/city/surat/dilliwale-pahelvanjees-cholle-bhature-moti-begumwadi-new-textile-market-rest424877",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "205488",
      name: "Jay Jalaram Thali",
      cloudinaryImageId: "56d5abe62452d827b7480c4f5515460a",
      locality: "Gopipura",
      areaName: "Gopipura",
      costForTwo: "₹250 for two",
      cuisines: ["Thalis", "Gujarati", "Punjabi", "Chinese", "Biryani"],
      avgRating: 4,
      parentId: "110113",
      avgRatingString: "4.0",
      totalRatingsString: "25K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-10-25 16:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹19",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e",
    },
    cta: {
      link: "https://www.swiggy.com/city/surat/jay-jalaram-thali-gopipura-rest205488",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "456090",
      name: "Mahalaxmi Juice And Fast Food Corner",
      cloudinaryImageId: "zklivmqduux38pw9ikax",
      locality: "Adajan Patiya",
      areaName: "Adajan Patiya",
      costForTwo: "₹300 for two",
      cuisines: ["Ice Cream", "Burgers", "Pizzas", "Salads", "Beverages"],
      avgRating: 4.7,
      veg: true,
      parentId: "273935",
      avgRatingString: "4.7",
      totalRatingsString: "26K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-10-26 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId:
              "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId:
                    "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹109",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "377",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e",
    },
    cta: {
      link: "https://www.swiggy.com/city/surat/mahalaxmi-juice-and-fast-food-corner-adajan-patiya-rest456090",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "841660",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/29d4c993-4ea2-4337-8e2a-fb8b348cdec3_841660.JPG",
      locality: "UDHANA DARWAZA",
      areaName: "SHHLOK BUSINESS CENTRE",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.3,
      veg: true,
      parentId: "2456",
      avgRatingString: "4.3",
      totalRatingsString: "896",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-10-25 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e",
    },
    cta: {
      link: "https://www.swiggy.com/city/surat/dominos-pizza-udhana-darwaza-shhlok-business-centre-rest841660",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "100721",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/d46dbd39-f4b4-414b-a753-c6ded6705cad_100721.JPG",
      locality: "Rustampura",
      areaName: "Rustampura",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.5,
      parentId: "630",
      avgRatingString: "4.5",
      totalRatingsString: "13K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-10-25 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "4.8K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e",
    },
    cta: {
      link: "https://www.swiggy.com/city/surat/mcdonalds-rustampura-rest100721",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "236083",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/54b1c190-a0de-4b6b-bcbb-036237258ea5_236083.JPG",
      locality: "LP Savani Road",
      areaName: "Adajan Gam",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "9.0K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 6.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "6.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-10-26 03:00:00",
        opened: true,
      },
      isOpen: true,
      type: "F",
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e",
    },
    cta: {
      link: "https://www.swiggy.com/city/surat/kfc-lp-savani-road-adajan-gam-rest236083",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "120319",
      name: "Maakhan Bhog",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/23/eb87cfd7-a56c-487e-92f8-91ca2753d32b_120319.JPG",
      locality: "Udhna",
      areaName: "Ghodela House",
      costForTwo: "₹300 for two",
      cuisines: [
        "Sweets",
        "dessert",
        "Snacks",
        "Cakes & Pastries",
        "Indian",
        "North Indian",
      ],
      avgRating: 4.4,
      veg: true,
      parentId: "6999",
      avgRatingString: "4.4",
      totalRatingsString: "3.5K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-10-25 21:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Mithai.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Mithai.png",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e",
    },
    cta: {
      link: "https://www.swiggy.com/city/surat/maakhan-bhog-udhna-ghodela-house-rest120319",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "71037",
      name: "Tipsy Topsy ( since 1987 )",
      cloudinaryImageId: "iwpeojz7oypwikw1slrw",
      locality: "Gandhi Smruti Bhavan",
      areaName: "Nanpura",
      costForTwo: "₹400 for two",
      cuisines: [
        "North Indian",
        "Thalis",
        "Chinese",
        "Fast Food",
        "Street Food",
        "Snacks",
      ],
      avgRating: 4.5,
      veg: true,
      parentId: "694811",
      avgRatingString: "4.5",
      totalRatingsString: "18K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-10-25 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e",
    },
    cta: {
      link: "https://www.swiggy.com/city/surat/tipsy-topsy-since-1987-gandhi-smruti-bhavan-nanpura-rest71037",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "352546",
      name: "Center Point - Ghandhi Smruti",
      cloudinaryImageId: "eha3nb1wqvs0p00kdeaw",
      locality: "Timaliyawad",
      areaName: "Timaliyawad",
      costForTwo: "₹350 for two",
      cuisines: [
        "Fast Food",
        "Burgers",
        "Pizzas",
        "Chinese",
        "Thalis",
        "American",
        "Continental",
      ],
      avgRating: 4.5,
      veg: true,
      parentId: "56320",
      avgRatingString: "4.5",
      totalRatingsString: "19K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-10-25 23:00:00",
        opened: true,
      },
      isOpen: true,
      type: "F",
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e",
    },
    cta: {
      link: "https://www.swiggy.com/city/surat/center-point-ghandhi-smruti-timaliyawad-rest352546",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "79606",
      name: "Shree Sai Restaurant Fancy Dhosa - Salabatpura",
      cloudinaryImageId: "mhpvqwwhamcz70ptlvm0",
      locality: "Salabatpura",
      areaName: "Salabatpura",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "Chinese", "Burgers", "Fast Food"],
      avgRating: 4.6,
      veg: true,
      parentId: "185555",
      avgRatingString: "4.6",
      totalRatingsString: "13K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-10-25 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "38",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e",
    },
    cta: {
      link: "https://www.swiggy.com/city/surat/shree-sai-restaurant-fancy-dhosa-salabatpura-salabatpura-rest79606",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "225325",
      name: "Delhi Dastarkhwan Restaurant",
      cloudinaryImageId: "f7cab267ac86d8baadd8c0a8e3c95348",
      locality: "Kamal Gali",
      areaName: "Chowk Bazar",
      costForTwo: "₹300 for two",
      cuisines: [
        "Biryani",
        "Mughlai",
        "Tandoor",
        "Seafood",
        "Kebabs",
        "shawarma",
        "Buffalo meat",
      ],
      avgRating: 4.2,
      parentId: "69970",
      avgRatingString: "4.2",
      totalRatingsString: "17K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-10-25 23:45:00",
        opened: true,
      },
      isOpen: true,
      type: "F",
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹89",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e",
    },
    cta: {
      link: "https://www.swiggy.com/city/surat/delhi-dastarkhwan-restaurant-kamal-gali-chowk-bazar-rest225325",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "129855",
      name: "Vaishali Vadapav",
      cloudinaryImageId: "v96xusgxtjhnbiwuwlfy",
      locality: "Sosyo Circle",
      areaName: "Sosyo Circle",
      costForTwo: "₹250 for two",
      cuisines: ["Maharashtrian", "Street Food", "Chaat", "Snacks"],
      avgRating: 4.3,
      veg: true,
      parentId: "8629",
      avgRatingString: "4.3",
      totalRatingsString: "11K+",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-10-25 20:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e",
    },
    cta: {
      link: "https://www.swiggy.com/city/surat/vaishali-vadapav-sosyo-circle-rest129855",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "639457",
      name: "Dum Safar Biryani",
      cloudinaryImageId: "47eee43e59a6d49b0f6d9a2b0e523f47",
      locality: "Golden Square",
      areaName: "PARLE POINT",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Kebabs", "North Indian", "Barbecue"],
      avgRating: 4.2,
      parentId: "351013",
      avgRatingString: "4.2",
      totalRatingsString: "1.4K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-10-26 00:00:00",
        opened: true,
      },
      isOpen: true,
      type: "F",
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹109",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e",
    },
    cta: {
      link: "https://www.swiggy.com/city/surat/dum-safar-biryani-golden-square-parle-point-rest639457",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "138863",
      name: "MP Paratha and Omlet",
      cloudinaryImageId: "3ed4c6caff2ea0b068032712f71420ab",
      locality: "New Textile Market",
      areaName: "Zapa Bazar",
      costForTwo: "₹250 for two",
      cuisines: ["Mughlai", "Biryani", "Street Food"],
      avgRating: 4.3,
      parentId: "561628",
      avgRatingString: "4.3",
      totalRatingsString: "15K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-10-26 01:00:00",
        opened: true,
      },
      isOpen: true,
      type: "F",
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "283",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e",
    },
    cta: {
      link: "https://www.swiggy.com/city/surat/mp-paratha-and-omlet-new-textile-market-zapa-bazar-rest138863",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "85205",
      name: "New Shree Sainath Food Parlour",
      cloudinaryImageId: "bcahe3aaqcvjwviu2kz4",
      locality: "Kaji Maidan",
      areaName: "Gopipura",
      costForTwo: "₹250 for two",
      cuisines: ["Thalis", "Chinese", "Gujarati", "Biryani", "Punjabi"],
      avgRating: 4,
      veg: true,
      parentId: "148001",
      avgRatingString: "4.0",
      totalRatingsString: "23K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-10-25 16:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e",
    },
    cta: {
      link: "https://www.swiggy.com/city/surat/new-shree-sainath-food-parlour-kaji-maidan-gopipura-rest85205",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "104342",
      name: "P. Hotel Bhagat Tarachand",
      cloudinaryImageId: "jsukui8wqcox8y3ojdp6",
      locality: "Ring Road",
      areaName: "Ring Road",
      costForTwo: "₹550 for two",
      cuisines: ["Chinese", "Biryani"],
      avgRating: 4.6,
      veg: true,
      parentId: "153347",
      avgRatingString: "4.6",
      totalRatingsString: "3.9K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-10-26 00:00:00",
        opened: true,
      },
      isOpen: true,
      type: "F",
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e",
    },
    cta: {
      link: "https://www.swiggy.com/city/surat/p-hotel-bhagat-tarachand-ring-road-rest104342",
      type: "WEBLINK",
    },
  },
];
const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="data:image/jpeg;base64,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"
          alt="company logo"
        />
      </div>
      <div className="nav">
        <ul className="item">Home</ul>
        <ul className="item">About us</ul>
        <ul className="item">contact us</ul>
        <ul className="item">cart</ul>
      </div>
    </div>
  );
};
const RestaurantCard: React.FC<ResProps> = (Props) => {
  const { resdata } = Props;
  const { info } = resdata;
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    cloudinaryImageId,
    costForTwo,
  } = info;
  return (
    <div className="restaurant-card">
      <div className="images">
        <img className="logoimg" src={baseURL + cloudinaryImageId} alt="" />
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
const Body: React.FC = () => {
  return (
    <div className="body">
      <div className="searchbar">Search bar</div>
      <div className="restaurant-container">
        {reslist.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="copyright-info"></div>
      <div className="links"></div>
      <div className="address"></div>
      <div className="contact-info"></div>
      <div className="social-media-icon"></div>
    </div>
  );
};

const Applayout: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <Body />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Applayout />);
