import { GetPodcastsUseCase } from '../../application/get-podcasts.usecase';
import { GetPodcastUseCase } from '../../application/get-podcast.usecase';
import { PodcastType } from './podcast.interface';

export class Podcast {
  constructor(private podcast: PodcastType) {}

  get author() {
    return this.podcast.author;
  }

  get description() {
    return this.podcast.description;
  }

  get id() {
    return this.podcast.id;
  }

  get img() {
    return this.podcast.img;
  }

  get name() {
    return this.podcast.name;
  }
}
