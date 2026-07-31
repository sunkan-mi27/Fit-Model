const API_BASE_URL = "http://localhost:5000/api";

export async function registerUser(formData) {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Registration failed");
  }

  return data; // { token, user }
}

export async function loginUser(formData) {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
}

export async function getProfile(token) {
  const response = await fetch(`${API_BASE_URL}/user/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch profile");
  }

  return data.user;
}

export async function createPortfolioItem(formData, token) {
  const response = await fetch(`${API_BASE_URL}/portfolio`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData, // FormData sets its own Content-Type with boundary — don't set it manually
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create portfolio item");
  }

  return data.portfolio;
}

export async function fetchPortfolios(userId) {
  const url = userId
    ? `${API_BASE_URL}/portfolio?userId=${userId}`
    : `${API_BASE_URL}/portfolio`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch portfolio items");
  }

  return data.portfolios;
}


export async function deletePortfolioItem(id, token) {
  const response = await fetch(`${API_BASE_URL}/portfolio/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete portfolio item");
  }

  return data;
}

export const SOCKET_URL = "http://localhost:5000";

export async function fetchInbox(token) {
  const response = await fetch(`${API_BASE_URL}/message`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Failed to fetch inbox");
  return data.conversations;
}

export async function fetchConversation(userId, token) {
  const response = await fetch(`${API_BASE_URL}/message/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await response.json();
  if (!response.ok)
    throw new Error(data.message || "Failed to fetch conversation");
  return data.messages;
}

export async function sendMessageApi(formData, token) {
  const response = await fetch(`${API_BASE_URL}/message`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Failed to send message");
  return data.message;
}

export async function searchUsersApi(query, token) {
  const response = await fetch(
    `${API_BASE_URL}/message/search?q=${encodeURIComponent(query)}`,
    { headers: { Authorization: `Bearer ${token}` } },
  );
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Failed to search users");
  return data.users;
}
