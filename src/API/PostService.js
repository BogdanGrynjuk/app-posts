import axios from 'axios';

export class PostService {
  static async getAllPosts(limit, page) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return response;
  }
}
