const GITHUB_URL = "https://api.github.com";
const GITHUB_TOKEN = "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";

// get Search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: { Authorization: `${GITHUB_TOKEN}` },
  });

  const data = await res.json();
  return data.items;
};
