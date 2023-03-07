import React, {useState} from "react";

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');

    const onInputChange = (e) => {
        setTerm(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(term);
    }

   
        return(
            <div className="search-bar ui segment">
                <form onSubmit={onSubmit}  className="ui form"> 
                    <div className="field">
                        <label htmlFor="sb">Video Search</label>
                        <input 
                         type="text" id="sb"
                         value={term}
                         onChange= {onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    

};
// class SearchBar extends React.Component {
//     state = { term: "" };
    

//     onFormSubmit = (event) => {
//         event.preventDefault();
//         this.props.onFormSubmit(this.state.term);
//     }

//     render () {
//         return(
//             <div className="search-bar ui segment">
//                 <form onSubmit={this.onFormSubmit}  className="ui form"> 
//                     <div className="field">
//                         <label htmlFor="sb">Video Search</label>
//                         <input 
//                          type="text" id="sb"
//                          value={this.state.term}
//                          onChange= {(e) => {
//                             this.setState({ term: e.target.value })
//                         }}
//                         />
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }


export default SearchBar;