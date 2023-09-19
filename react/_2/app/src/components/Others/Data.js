import {useState, useEffect} from 'react';
import Axios from 'axios';

function Data() {
    // server end urls
    const GETURL = 'http://localhost:5000/getUsers'
    const POSTURL = 'http://localhost:5000/createUser'

    // use states
    const [list, setList] = useState([]);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    // get data
    useEffect(() => {
        Axios.get(GETURL).then((res) => {
            setList(res.data);
        });
    }, [])

    // post data
    const createUser = (e) => {
        e.preventDefault();
        Axios.post(POSTURL, {
                name, username, password,
            }).then((res) => {
                setList([...list, {name, username, password}])
        });
        setName('');
        setUsername('');
        setPassword('');
    };

    // key
    let key = 0;

    return (
        <div>
            <div>
                <h1>Data {'(Get req)'}</h1>
                <div>
                    {list.map((user) => {
                        return (
                            <div key={key++}>
                                <div>{`User: ${key}`}</div>
                                <div>{`Name: ${user.name}`}</div>
                                <div>{`Username: ${user.username}`}</div>
                                <div>{`Password: ${user.password}`}</div><br></br>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div>
                <h1>Form {'(Post req)'}</h1>
                <div>
                    <form onSubmit={createUser}>
                        <input value={name} onChange={(event) => {setName(event.target.value)}} type='text' placeholder='Name'/>
                        <input value={username} onChange={(event) => {setUsername(event.target.value)}} type='text' placeholder='Username'/>
                        <input value={password} onChange={(event) => {setPassword(event.target.value)}} type='password' placeholder='Password'/>
                        <button type='submit'>Post data</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Data;