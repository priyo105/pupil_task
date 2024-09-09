import usefetchData from '../Hooks/usefetchData.tsx';
import { RandomPeople, Root } from '../Types/RandomPeople.tsx';

const getRandomUser = () => {
    const { data, loading, error } = usefetchData<Root[]>({
        url: 'https://randomuser.me/api/?results=100',
        method: 'GET',
    });

    return { data, loading, error }
}

export { getRandomUser };