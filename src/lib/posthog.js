// src/lib/posthog.js
import posthog from 'posthog-js';

export function initPostHog() {
  if (typeof window === 'undefined') return;
  if (posthog.__loaded) return;
  const key = process.env.NEXT_PUBLIC_POSTHOG_API_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';
  if (!key) {
    console.warn('PostHog API key missing (NEXT_PUBLIC_POSTHOG_API_KEY). PostHog will not send events.');
    return;
  }
  posthog.init(key, { api_host: host });
  posthog.__loaded = true;
}

export default posthog;
