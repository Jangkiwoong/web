const Searchbar = ({type, placeholder, onChange, value}) => {
    return (
        <div>
            <h1>{value === "" ? "?" : value}</h1>
            <input tpye={type} placeholder={placeholder} onChange={onChange}></input>
        </div>
    );
}

export default Searchbar;