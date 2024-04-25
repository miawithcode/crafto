import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getCategories = async () => {
  const { items: categories } = await client.getEntries({
    content_type: "category",
    order: ["fields.order"],
  });

  return { categories };
};

export const getResourcesByCategory = async (categoryId) => {
  const { items: resources } = await client.getEntries({
    content_type: "resource",
    order: ["fields.title"],
    "fields.category.sys.contentType.sys.id": "category",
    "fields.category.fields.categoryId": categoryId,
  });

  return { resources };
};

export const getResourceCountsByCategory = async () => {
  const { categories } = await getCategories();
  const categoryIds = categories.map((category) => category.fields.categoryId);

  const counts = {};

  for (const id of categoryIds) {
    const { resources } = await getResourcesByCategory(id);
    counts[id] = resources.length;
  }

  return { counts };
};