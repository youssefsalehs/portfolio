"use server";
import getMyToken from "../getMyToken";

export default async function updateProject(id, formData) {
  try {
    const token = await getMyToken();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to update project");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("update Project Error:", error.message);

    return {
      status: "failed",
      message: error.message,
    };
  }
}
