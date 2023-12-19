"use server";
import mongoose from "mongoose";
import { Page } from "../models/Page";
import { getServerSession } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";

async function grabUsername(formData) {
  const username = formData.get("username");
  mongoose.connect(process.env.MONGO_URI);

  const existingPageDoc = await Page.findOne({ uri: username });
  if (existingPageDoc) {
    return false;
  } else {
    const session = await getServerSession(authOptions);
    return await Page.create({
      uri: username,
      owner: session?.user?.email,
    });
  }
}

export default grabUsername;
