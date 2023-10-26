import { GetEpisodeUseCase } from '../../application/get-episode.usecase';

export class Episode {
  private static _instance: Episode;

  static get instance(): Episode {
    if (!Episode._instance) {
      Episode._instance = new Episode();
    }

    return this._instance;
  }

  async get(podcastId: string, episodeId: string) {
    return GetEpisodeUseCase.instance.run(podcastId, episodeId);
  }
}
