// SpotifyPKCE.js
const clientId = '41cab9bcc2bd4dfa81df6132028adc76';
const redirectUri = 'http://127.0.0.1:5173/';
const scope = 'playlist-modify-private playlist-modify-public';

function generateRandomString(length) {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++)
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  return result;
}

async function generateCodeChallenge(codeVerifier) {
  const digest = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(codeVerifier)
  );
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export async function redirectToAuthCodeFlow() {
  const verifier = generateRandomString(128);
  const challenge = await generateCodeChallenge(verifier);
  localStorage.setItem('verifier', verifier);

  const params = new URLSearchParams({
    client_id: clientId,
    response_type: 'code',
    redirect_uri: redirectUri,
    scope,
    code_challenge_method: 'S256',
    code_challenge: challenge,
  });

  window.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

export async function getAccessToken() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  if (!code) return null;

  const verifier = localStorage.getItem('verifier');
  const body = new URLSearchParams({
    client_id: clientId,
    grant_type: 'authorization_code',
    code,
    redirect_uri: redirectUri,
    code_verifier: verifier,
  });

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });

  const data = await response.json();
  localStorage.setItem('access_token', data.access_token);
  window.history.replaceState({}, document.title, '/'); // clean URL
  return data.access_token;
}

export function getSavedAccessToken() {
  return localStorage.getItem('access_token');
}
