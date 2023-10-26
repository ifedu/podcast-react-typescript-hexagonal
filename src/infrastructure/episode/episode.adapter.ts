import { PodcastRepository } from '../podcast/podcast.repository';

export class EpisodeAdapter {
  private static _instance: EpisodeAdapter;

  static get instance(): EpisodeAdapter {
    if (!EpisodeAdapter._instance) {
      EpisodeAdapter._instance = new EpisodeAdapter();
    }

    return this._instance;
  }

  formatEpisode(podcast: any, responsePodcast: any, episodeId: string) {
    const episodes: any = new PodcastRepository().getEpisodes(responsePodcast);

    const episode = episodes.find((episodeData: any) => {
      return `${episodeData.trackId}` === episodeId;
    });

    return {
      description: episode.description,
      podcastInfo: podcast.info,
      name: episode.trackName,
      url: episode.episodeUrl,
    };
  }
}
