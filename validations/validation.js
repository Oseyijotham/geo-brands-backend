import Joi from "joi";

// validation for signup
const signupValidation = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "uk"] } })
    .required()
    .messages({
      "any.required": "Missing required email field",
      "string.email": "Invalid email format",
    }),
  phone: Joi.string().required(),
  password: Joi.string().min(6).max(16).required().messages({
    "any.required": "Missing required password field",
    "string.min": "Password must be at least {#limit} characters long",
    "string.max": "Password cannot be longer than {#limit} characters",
  }),
});

// validation for login
const loginValidation = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "uk"] } })
    .required()
    .messages({
      "any.required": "Missing required email field",
      "string.email": "Invalid email format",
    }),
  password: Joi.string().min(6).max(16).required().messages({
    "any.required": "Missing required password field",
    "string.min": "Password must be at least {#limit} characters long",
    "string.max": "Password cannot be longer than {#limit} characters",
  }),
});

// validation for searching for a place
const validCategories = [
  { name: "Adobe", value: "adobe" },
  { name: "Amazon", value: "amazon" },
  { name: "Alphabet", value: "alphabet" },
  { name: "Apple", value: "apple" },
  { name: "Berkshire Hathaway", value: "berkshire-hathaway" },
  { name: "Chevron", value: "chevron" },
  { name: "Coca-Cola", value: "coca-cola" },
  { name: "Eli Lilly", value: "eli-lilly" },
  { name: "Exxon Mobil", value: "exxon-mobil" },
  { name: "IBM", value: "ibm" },
  { name: "Intel", value: "intel" },
  { name: "JPMorgan Chase", value: "jpmorgan-chase" },
  { name: "Johnson & Johnson", value: "johnson-and-johnson" },
  { name: "McDonald's", value: "mcdonalds" },
  { name: "Mastercard", value: "mastercard" },
  { name: "Meta", value: "meta" },
  { name: "Microsoft", value: "microsoft" },
  { name: "Netflix", value: "netflix" },
  { name: "Nestlé", value: "nestle" },
  { name: "Nike", value: "nike" },
  { name: "PepsiCo", value: "pepsico" },
  { name: "Procter & Gamble", value: "procter-and-gamble" },
  { name: "Samsung", value: "samsung" },
  { name: "Saudi Aramco", value: "saudi-aramco" },
  { name: "Starbucks", value: "starbucks" },
  {name: "Taiwan Semiconductor Manufacturing Company", value: "taiwan-semiconductor-manufacturing-company" },
  { name: "Tesla", value: "tesla" },
  { name: "Toyota", value: "toyota" },
  { name: "UnitedHealth Group", value: "unitedhealth-group" },
  { name: "Visa", value: "visa" },
];


const findPlacesValidation = Joi.object({
  category: Joi.string()
    .valid(...validCategories)
    .required()
    .messages({
      "any.required": `"categorie" is required`,
      "any.only": `"categorie" must be one of: ${validCategories.join(", ")}`,
    }),

  country: Joi.string()
    .pattern(/^[A-Z]{2}$/)
    .required()
    .messages({
      "any.required": `"country" is required`,
      "string.pattern.base": `"country" must be a valid ISO 3166-1 Alpha-2 code (e.g., US, NG, GB)`,
    }),
});


// validation for updating Place Details
const updatePlaceDetailsValidation = Joi.object({
  description: Joi.string().max(60).required().messages({
    "string.max": "Customer name cannot be longer than {#limit} characters",
  }),
});

// prettier-ignore
export {
  updatePlaceDetailsValidation,
  findPlacesValidation,
  signupValidation,
  loginValidation,
};
