import axios from 'axios';
import { PodcastsResponse } from './podcast.interface';
import { PodcastType } from '../../domain/entities/podcast.interface';
import { Podcast } from '../../domain/entities/podcast';

export class PodcastRepository {
  async getPodcasts() {
    const response: PodcastsResponse = await axios.get<any>(
      'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
    );

    return response.data.feed.entry.map((podcast: any): PodcastType => {
      return {
        author: podcast['im:artist'].label,
        description: podcast.summary.label,
        id: podcast.id.attributes['im:id'],
        img: podcast['im:image'][2].label,
        name: podcast['im:name'].label,
      };
    });
  }

  async getPodcast(podcastId: string) {
    const podcasts = await this.getPodcasts();

    const podcastSelected = podcasts.find((podcast: any) => {
      return podcast.id === podcastId;
    });
    console.log(
      '🚀 ~ file: podcast.repository.ts:29 ~ PodcastRepository ~ podcastSelected ~ podcastSelected:',
      podcastSelected,
    );

    const episodesResponse = await this.getEpisodes(podcastId);
    const episodes = episodesResponse.results
      .map((episode: any) => {
        if (!episode.description) {
          return;
        }

        return {
          id: episode.trackId,
          name: episode.trackName,
          releaseDate: episode.releaseDate,
          trackTimeMillis: episode.trackTimeMillis,
        };
      })
      .filter(Boolean);

    return new Podcast({
      ...podcastSelected,
      episodes,
    });
  }

  async getEpisodes(podcastId: string) {
    let episodes;

    try {
      const episodesResponse = await axios.get<any>(
        `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
      );

      episodes = episodesResponse.data;
    } catch (e) {
      const episodesResponse = await axios.get<any>(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
        )}`,
      );

      episodes = JSON.parse(episodesResponse.data.contents);
    }

    return episodes;
  }
}
