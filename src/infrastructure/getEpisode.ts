import axios from 'axios';
import { getPodcast } from './getPodcast';

export async function getEpisode(podcastId: string, episodeId: string) {
  const podcast = await getPodcast(podcastId);

  const episode = podcast.results.find((episodeData: any) => episodeData.trackId === parseInt(episodeId));

  episode.podcastInfo = podcast.info;

  return episode;
}
