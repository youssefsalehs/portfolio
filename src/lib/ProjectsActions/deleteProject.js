"use server";
import getMyToken from "../getMyToken";

export default async function deleteProject(id) {
  try {
    const token = await getMyToken();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to delete project");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Delete Project Error:", error.message);

    return {
      status: "failed",
      message: error.message,
    };
  }
}
