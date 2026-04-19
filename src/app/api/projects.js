export async function getFeaturedProjects(category) {
  const res = await fetch(`${process.env.API_URL}/projects/featured`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const data = await res.json();

  return data.data;
}
export async function getAllProjects(category) {
  const res = await fetch(`${process.env.API_URL}/projects`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const data = await res.json();

  return data.data;
}

export async function getProjectsByCategory(category) {
  const res = await fetch(
    `${process.env.API_URL}/projects/category/${category}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const data = await res.json();
  return data.data;
}
export async function getSpecificProject(id) {
  const res = await fetch(`${process.env.API_URL}/projects/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const data = await res.json();
  return data.data;
}
