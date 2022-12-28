import joi from "joi";

export const userValidation = async (req, res, next) => {
  const userSchema = joi.object({
    username: joi.string().required().messages({
      "any.required": "Username is required",
    }),
    password: joi.string().min(8).required().messages({
      "any.required": "Password is required",
      "string.min": "Password require 8 characters",
    }),
    confirm_password: joi.string().min(8).required().messages({
      "any.required": "Confirm Password is required",
      "string.min": "Confirm Password require 8 characters",
    }),
  });
  const value = await userSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message.replace(/["'`]+/g, ""),
    });
  } else {
    next();
  }
};

export const loginValidation = async (req, res, next) => {
  const userSchema = joi.object({
    username: joi.string().required().messages({
      "any.required": "Username is required",
    }),
    password: joi.string().min(8).required().messages({
      "any.required": "Password is required",
      "string.min": "Password require 8 characters",
    }),
  });
  const value=await userSchema.validate(req.body)
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message.replace(/["'`]+/g, ""),
    });
  } else {
    next();
  }
};
