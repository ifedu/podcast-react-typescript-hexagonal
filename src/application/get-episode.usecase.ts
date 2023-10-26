import { EpisodeRepository } from '../infrastructure/episode/episode.repository';

export class GetEpisodeUseCase {
  private static _instance: GetEpisodeUseCase;

  static get instance(): GetEpisodeUseCase {
    if (!GetEpisodeUseCase._instance) {
      GetEpisodeUseCase._instance = new GetEpisodeUseCase();
    }

    return this._instance;
  }

  async run(podcastId: string, episodeId: string) {
    return EpisodeRepository.instance.getFormattedEpisode(podcastId, episodeId);
  }
}
