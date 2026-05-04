import type { CollectionEntry } from 'astro:content'

type EpisodeEntry = CollectionEntry<'episodes'>

export function sortEpisodes(episodes: EpisodeEntry[]) {
  return [...episodes].sort((a, b) => {
    const numberDiff = (b.data.episodeNumber ?? 0) - (a.data.episodeNumber ?? 0)

    if (numberDiff !== 0) {
      return numberDiff
    }

    return b.data.date.valueOf() - a.data.date.valueOf()
  })
}
