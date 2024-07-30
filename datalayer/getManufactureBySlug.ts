﻿import axios from "./bearer";
import qs from "qs";
const apiUrl = process.env.STRAPI_API_BASE_URL;

export default async function getManufactureBySlug({ slugName }: any) {
  const query = qs.stringify({
    filters: {
      slug: {
        $eq: slugName,
      },
    },
    fields: ["title", "textAndPics", "slogan"],
    populate: {
      logo: {
        fields: ["name", "url"],
      },
    },
    pagination: {
      pageSize: 8,
      page: 1,
      withCount: true,
    },
    encodeValuesOnly: true,
  });

  const res = await axios.get(`${apiUrl}/manufacturers?${query}`);

  // console.log(`${apiUrl}/manufacturers?${query}`);

  return res?.data?.data[0]?.attributes;
}
