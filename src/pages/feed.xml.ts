import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { experimental_AstroContainer } from "astro/container";
import { sortEpisodes } from "../utils/episodes";
import { escapeHtml, getEpisodeUrl, getShowNotesFooterHtml } from "../utils/podcast";

export async function GET(context: APIContext) {
  const sorted = sortEpisodes(await getCollection("episodes"));
  const container = await experimental_AstroContainer.create();

  return rss({
    title: "代码时间",
    description: "聊编程，聊 AI，聊程序员的那些事",
    site: context.site!,
    items: await Promise.all(
      sorted.map(async (ep) => {
        const { Content } = await ep.render();
        const renderedShowNotes = (
          await container.renderToString(Content, {
            request: new Request(getEpisodeUrl(ep.slug)),
          })
        ).trim();

        return {
          title: ep.data.title,
          pubDate: ep.data.date,
          description: ep.data.description,
          link: `/episodes/${ep.slug}/`,
          content: [
            `<p>${escapeHtml(ep.data.description)}</p>`,
            renderedShowNotes,
            getShowNotesFooterHtml(ep.slug),
          ]
            .filter(Boolean)
            .join("\n"),
          enclosure: {
            url: ep.data.audioUrl,
            type: "audio/mpeg",
            // length 0 is acceptable for podcast RSS when size is unknown
            length: 0,
          },
        };
      }),
    ),
    customData: "<language>zh-CN</language>",
  });
}
