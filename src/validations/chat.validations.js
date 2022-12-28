import joi from "joi";

export const chatValidation = async (req, res, next) => {
  const chatSchema = joi.object({
    message: joi.string().required().messages({
      "any.required": "Message is required",
    }),
    roomId: joi.number().integer().required().messages({
      "any.required": "Room id is required",
    }),
  });
  const value = await chatSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message.replace(/["'`]+/g, ""),
    });
  } else {
    next();
  }
};
