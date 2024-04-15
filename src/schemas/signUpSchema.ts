import { z } from "zod";

export const UserNameValidation = z
  .string()
  .min(2, "Username must be at least 2 characters long")
  .max(2, "Username must be at least 2 characters long")
  .regex(
    /^[a-zA-Z0-9_]+$/,
    "Username must not contain any special characters or spaces"
  );

export const signUpSchema = z.object({
  username: UserNameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});
