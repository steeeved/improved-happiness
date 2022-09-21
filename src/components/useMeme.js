import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export const useMeme = () => {
  const fetchMemes = async () => {
      const { data } = await Axios.get('https://api.imgflip.com/get_memes');
    return data;
  };

  const { data, isLoading, refetch, error } = useQuery(['meme'], () => {
    return fetchMemes();
  });  

  const memes = data?.data?.memes;

  return { memes, isLoading, refetch };
};
