import cloudinary from "cloudinary";

export const uploadImage = async (req, res, next) => {
  if (req.files) {
    const file = req.files.profile;
    cloudinary.uploader.upload(file.tempFilePath, async (results, err) => {
      if (err) {
        res.status(500).json({
          message: "Unable to upload image",
          error: err,
        });
      }
      req.results = results;
      next();
    });
  } else {
    next();
  }
};

export const checkFormat = (...extensions) => {
  return (req, res, next) => {
    if (req.results) {
      const results = req.results;
      if (!extensions.includes(results.format.toLowerCase())) {
        return res.status(405).json({
          message: `Only ${extensions} format is allowed`,
        });
      } else {
        next();
      }
    } else {
      next();
    }
  };
};
