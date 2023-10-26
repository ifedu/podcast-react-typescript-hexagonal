import { EpisodeAdapter } from './episode.adapter';
import { PodcastRepository } from '../podcast/podcast.repository';
import axios from 'axios';

export class EpisodeRepository {
  private static _instance: EpisodeRepository;

  static get instance(): EpisodeRepository {
    if (!EpisodeRepository._instance) {
      EpisodeRepository._instance = new EpisodeRepository();
    }

    return this._instance;
  }

  async getFormattedEpisode(podcastId: string, episodeId: string) {
    const podcast = await new PodcastRepository().getPodcast(podcastId);

    const responsePodcast = await axios.get<any>(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
      )}`,
    );

    return EpisodeAdapter.instance.formatEpisode(podcast, responsePodcast, episodeId);
  }
}
