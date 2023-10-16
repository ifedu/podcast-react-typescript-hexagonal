import axios from 'axios';
import { getPodcasts } from './getPodcasts';

export async function getPodcast(podcastId: string) {
  const podcasts = await getPodcasts();

  const response = await axios.get<any>(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
    )}`
  );
  const podcastData = JSON.parse(response.data.contents);

  const podcastInfo = podcasts.find((podcast: any) => {
    return podcast.id.attributes['im:id'] === podcastId;
  });
  podcastData.info = podcastInfo;

  return podcastData;
}
