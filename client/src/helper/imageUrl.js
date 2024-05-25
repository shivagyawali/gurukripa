export const imageUrl = (item) => {
  try {
    const url = item?.attributes?.image?.data?.attributes?.url;

    return url;
  } catch (error) {
    throw error;
  }
};
