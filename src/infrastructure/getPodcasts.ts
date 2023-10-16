import axios from 'axios';

export async function getPodcasts() {
  const response = await axios.get<any>('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');

  return response.data.feed.entry;
}
