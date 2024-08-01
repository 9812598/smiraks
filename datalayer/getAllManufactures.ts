﻿import axios from "./bearer";
import qs from "qs";
const apiUrl = process.env.STRAPI_API_BASE_URL;

interface Props {
  pageCount?: number;
}

export default async function getAllManufactures(pageCount?: Props) {
  const query = qs.stringify({
    fields: ["title", "slogan", "slug"],
    populate: {
      logo: {
        fields: ["name", "url", "alternativeText"],
      },
    },

    pagination: {
      pageSize: 9,
      page: pageCount,
      withCount: true,
    },
    encodeValuesOnly: true,
  });

  const res = await axios.get(`${apiUrl}/manufacturers?${query}`);

  // console.log(`${apiUrl}/manufacturers?${query}`);

  return res?.data;
}
