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
                <h3>UserName :&nbsp;<span style={{color:"purple"}}>{profile.login}</span></h3>
                <h2>Name :&nbsp;<span style={{color:"purple"}}>{profile.name}</span></h2>
                <h3>Company :&nbsp;<span style={{color:"purple"}}>{profile.company}</span></h3>
                <h3>Public Repo :&nbsp;<span style={{color:"purple"}}>{profile.public_repos}</span></h3>
                <h3>Followers :&nbsp;<span style={{color:"purple"}}>{profile.followers}</span></h3>
                <h3>Following :&nbsp;<span style={{color:"purple"}}>{profile.following}</span></h3>
                <h3>Bio :&nbsp;&nbsp;<span style={{color:"purple"}}>{profile.bio}</span></h3>
                <h3>Location :&nbsp;<span style={{color:"purple"}}>{profile.location}</span></h3>
                <h3>Created at:&nbsp; <span style={{color:"purple"}}>{profile.created_at}</span></h3>
            </div>
        </div>
    )
}

export default ProfileFinder
// https://github.com/Md-Faizan-khan61