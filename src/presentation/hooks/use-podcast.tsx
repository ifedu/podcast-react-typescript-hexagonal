import { useEffect, useState } from 'react';
import { GetPodcastUseCase } from '../../application/get-podcast.usecase';
import { PodcastRepository } from '../../infrastructure/podcast/podcast.repository';

export function usePodcast(podcastId: string) {
  const [podcast, setPodcast] = useState([]);

  useEffect((): any => {
    (async () => {
      const dataPodcast: any = await new GetPodcastUseCase(new PodcastRepository()).run(podcastId);
      setPodcast(dataPodcast);
    })();
  }, [podcastId]);

  return podcast;
}
