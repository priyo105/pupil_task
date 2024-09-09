import { useEffect, useState } from "react";
import { getPupilList } from "../Api/Pupil.tsx";
import { getRandomUser } from "../Api/RandomPicApi.tsx";
import { Pupil } from "../Types/Pupil.tsx";
import React from "react";
import SearchInput from "../Components/SearchInput.tsx";
import PupilListHeaders from "../Components/PupilListHeaders.tsx";
import PupilView from "../Components/Pupil.tsx";
import CustomButton from "../Components/CustomButton.tsx";
import { useNavigate } from 'react-router-dom';

function Home() {

    const data = getPupilList()
    const pupiData = data.data;
    const radnomPeoples = getRandomUser();
    const [filteredPupils, setFilteredPupils] = useState<Pupil[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (pupiData) {
            setFilteredPupils(pupiData)
        }

    }, [pupiData])


    //serach press
    const onSearchPressed = (query: string) => {
        if (pupiData) {
            const lowerCaseQuery = query.toLowerCase();
            const filtered = pupiData.filter(pupil => {
                const fullName = `${pupil.foreName.toLowerCase()} ${pupil.surName.toLowerCase()}`;
                return fullName.includes(lowerCaseQuery);
            });
            setFilteredPupils(filtered);
        }
    };
    
    return (
        <div className="App">
            <h1 className="centeredText">Pupil List</h1>
            <div style={{ display: 'flex', justifyContent: 'right', marginRight: '10%' }}>
                <CustomButton onClick={() => { navigate('add') }} label={"Add"} />

            </div>

            <SearchInput onSearch={onSearchPressed} />
            <PupilListHeaders />

            {filteredPupils && filteredPupils.length > 0 ? (
                filteredPupils.map((item, index) => (
                    <PupilView pupil={item} index={index + 1} randomPeople={radnomPeoples.data ? radnomPeoples.data.results[index].picture.medium : 'default-avatar.png'}
                    />
                ))
            ) : (
                <p>No pupils found.</p>
            )}

        </div>)
}

export default Home