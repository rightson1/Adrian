import { Box } from "@mui/material";
import { useState } from "react";

import React from "react";

const Profile = () => {
    const [muscle, setMuscle] = useState('');
    const [equipment, setEquipment] = useState('');
    return <Box>
        <input type="text" onChange={(e) => setMuscle(e.target.value)} />
        <input type="text" onChange={(e) => setEquipment(e.target.value)} />
        <button onClick={() => {
            const result = manager.process('en', `${muscle} ${equipment}`);
            console.log(result);
        }}>Search</button>



    </Box>;
};

export default Profile;
