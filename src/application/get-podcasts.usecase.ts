// import { PodcastRepository } from '../infrastructure/podcast/podcast.repository';

export class GetPodcastsUseCase {
  constructor(private podcastRepository: any) {}

  async run() {
    return this.podcastRepository.getPodcasts();
  }
}
