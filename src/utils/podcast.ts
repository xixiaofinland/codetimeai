export const PODCAST_SITE_URL = 'https://codetimeai.com/'

export function getEpisodeUrl(slug: string) {
  return `${PODCAST_SITE_URL}episodes/${slug}/`
}

export function escapeHtml(text: string) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export function getShowNotesFooterHtml(slug: string) {
  const episodeUrl = getEpisodeUrl(slug)

  return [
    '<hr />',
    `<p><strong>节目主页：</strong><a href="${PODCAST_SITE_URL}">${PODCAST_SITE_URL}</a><br />`,
    `<strong>本期 shownotes：</strong><a href="${episodeUrl}">${episodeUrl}</a></p>`,
  ].join('')
}
