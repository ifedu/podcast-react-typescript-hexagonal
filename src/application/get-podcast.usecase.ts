// import { PodcastRepository } from '../infrastructure/podcast/podcast.repository';

export class GetPodcastUseCase {
  constructor(private podcastRepository: any) {}

  async run(podcastId: string) {
    return this.podcastRepository.getPodcast(podcastId);
  }
}
