# Lessons

- Episode ordering is canonical by `episodeNumber`; use `date` only as a fallback tiebreaker when numbers are equal or missing.
- Remove fake or placeholder episode content from `src/content/episodes/` instead of masking duplicate numbers in the UI.
- Keep canonical podcast links under `https://codetimeai.com/` in both episode shownotes and RSS content; do not leave legacy `codetimecn.com` references in summaries.
