import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const ProfileFinder = () => {
    const [profile, setProfile] = useState('')
    const [userName ,setUserName] = useState('')
    // useEffect(() => {
    //    getProfile();
    // }, [])

    const getProfile = () => {
        Axios.get(`https://api.github.com/users/${userName}`)
        .then((response) => {
            console.log("profile");
            console.log(response.data)
            setProfile(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }
    const handleSubmit =(e) => {
       e.preventDefault();
       getProfile();
    }
    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="User name"
                    className='input'
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)}
                />
                <button className='button'>Search</button>
            </form>
            <div className='doc'>
                <h2>UserName :{profile.login}</h2>
                <h2>Name :{profile.name}</h2>
                <h3>Company :{profile.company}</h3>
                <h3>Public Repo :{profile.public_repos}</h3>
                <h3>Followers :{profile.followers}</h3>
                <h3>Following :{profile.following}</h3>
                <h3>Bio :{profile.bio}</h3>
                <h3>Location :{profile.location}</h3>
                <h3>Created at: {profile.created_at}</h3>
            </div>
        </div>
    )
}

export default ProfileFinder
// https://github.com/Md-Faizan-khan61