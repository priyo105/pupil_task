// import { API_URL } from '../../config';
import usefetchData from '../Hooks/usefetchData.tsx';
import { Pupil } from '../Types/Pupil.tsx';

const getPupilList = () => {
    const { data, loading, error } =  usefetchData<Pupil[]>({
        url: 'http://localhost:5000/' + 'pupil/all',
        method: 'GET',
    });

    return { data, loading, error }
}

export  {getPupilList};