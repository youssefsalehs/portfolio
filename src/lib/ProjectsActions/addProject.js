"use server";
import getMyToken from "../getMyToken";

export default async function addProject(formData) {
  try {
    const token = await getMyToken();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to add project");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("add Project Error:", error.message);

    return {
      status: "failed",
      message: error.message,
    };
  }
}
