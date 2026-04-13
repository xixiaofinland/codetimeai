import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const episodes = await getCollection("episodes");
  const sorted = episodes.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: "CodeTime AI",
    description: "聊编程，聊 AI，聊程序员的那些事",
    site: context.site!,
    items: sorted.map((ep) => ({
      title: ep.data.title,
      pubDate: ep.data.date,
      description: ep.data.description,
      link: `/episodes/${ep.slug}/`,
      enclosure: {
        url: ep.data.audioUrl,
        type: "audio/mpeg",
        // length 0 is acceptable for podcast RSS when size is unknown
        length: 0,
      },
    })),
    customData: "<language>zh-CN</language>",
  });
}
