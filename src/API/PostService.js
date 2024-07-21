import axios from 'axios';

export class PostService {
  static async getAllPosts() {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
