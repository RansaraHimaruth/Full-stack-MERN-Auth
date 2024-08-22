import pkg from "mongoose";
const { Schema, model, models } = pkg;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png",
    },
  },
  {
    timestamps: true,
  }
);

export default models.User || model("User", userSchema);
