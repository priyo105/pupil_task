import React, { useState } from 'react';
import axios from 'axios';
import CustomInput from '../Components/CustomInput.tsx';
import CustomCheckBox from '../Components/CustomCheckBox.tsx';
import CustomButton from '../Components/CustomButton.tsx';

function AddPupil() {
    const [forename, setForname] = useState('');
    const [surname, setSurname] = useState('');
    const [formType, setFormType] = useState('');
    const [isSend, setSend] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFormSubmit = async () => {
        const formData = { 'foreName':forename, 'surName':surname, 'form':formType, 'send':isSend ,pic: ""};

        setLoading(true);
        setError(null);

        try {
            await axios.post('http://localhost:5000/pupil/v1/create', formData);
        } catch (err) {
            setError('An error occurred while submitting the form.');
            alert('Failed to create');

        } finally {
            setLoading(false);
            alert('Form Submitted! New User Created');
            setForname('');
            setSurname('')
            setFormType('')
            setSend(false)

        }
    };

    return (
        <div style={{ marginTop: '5%', marginLeft: '10%', marginRight: '10%' }}>
            <h1 style={{ textAlign: 'center' }}>Add Pupil</h1>

            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <div>
                    <CustomInput 
                        onChange={(e) => setForname(e.target.value)} 
                        name='Forename' 
                        value={forename} 
                        placeholder='Enter Forename' 
                    />
                    <CustomInput 
                        onChange={(e) => setSurname(e.target.value)} 
                        name='Surname' 
                        value={surname} 
                        placeholder='Enter Surname' 
                    />
                    <CustomInput 
                        onChange={(e) => setFormType(e.target.value)} 
                        name='Form Type' 
                        value={formType} 
                        placeholder='Enter Form Type' 
                    />
                    <CustomCheckBox 
                        name='send' 
                        label={"SEND ? "} 
                        checked={isSend} 
                        onChange={(e) => setSend(e.target.checked)} 
                    />
                    <div style={{ margin: '5%' }}>
                        <CustomButton 
                            onClick={handleFormSubmit} 
                            label={loading ? 'Submitting...' : 'Submit'} 
                        />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
        </div>
    );
}

export default AddPupil;
