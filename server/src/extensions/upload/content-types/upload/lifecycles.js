const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

module.exports = {
  async beforeDelete(event) {
    const { where } = event.params;

    const entries = await strapi.entityService.findMany("plugin::upload.file", {
      filters: where,
    });
    console.log(entries);
    // entries.forEach((entry) => {
    //   const publicId = entry.provider_metadata?.url;

    //   if (publicId) {
    //     cloudinary.uploader.destroy(publicId, function (error, result) {
    //       if (error) {
    //         strapi.log.error("Failed to delete image from Cloudinary:", error);
    //       } else {
    //         strapi.log.info("Image deleted from Cloudinary:", result);
    //       }
    //     });
    //   }
    // });
  },
};
