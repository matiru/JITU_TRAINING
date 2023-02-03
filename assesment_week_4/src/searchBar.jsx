import React ,{useState}from "react";



const SearchBar = () => {

const [searchItem, setSearchItem] = useState("");


const [animals , setAnimals] = useState([

    
    {name:"dinosaur", id:1},
    {name:"cat", id:15},
    {name:"dog", id:2},
    {name:"lion", id:3},
    {name:"tiger", id:4},
    {name:"elephant", id:5},
    {name:"monkey", id:6},
    {name:"horse", id:7},
    {name:"cow", id:8},
    {name:"sheep", id:9},
    {name:"goat", id:10},
    {name:"pig", id:11},
    {name:"chicken", id:12},
    {name:"duck", id:13},
    {name:"rabbit", id:14},
    {name:"snake", id:16},
    {name:"frog", id:17},
    {name:"bear", id:18},
    {name:"wolf", id:19},
    {name:"deer", id:20},


])

const filteredAnimals = animals.filter(animal => animal.name.toLowerCase().startsWith(searchItem.toLowerCase()));


const handleChange = (e) => {
    setSearchItem(e.target.value);

}

const handleSubmit = (e) => {
    e.preventDefault();
    setSearchItem("");
}

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <input type="text" value={searchItem} onChange={handleChange} placeholder="Search for an animal"/>
                <button type="submit">Search</button>
            </form>
            <ul>
                {filteredAnimals.map(animal => (
                    <li key={animal.id}>{animal.name}</li>
                ))}
            </ul>
        </div>

    )





}
export default SearchBar;