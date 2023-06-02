import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../Redux/contacts/contactsActions";
import { LabelContact, InputContact } from './Filter.styled';

function Filter() {
  const filterValue= useSelector((state) => state.contacts.filter);
  // console.log(filterValue);
  const dispatch = useDispatch();

  return (
    <LabelContact>
      Find contacts by name
      <InputContact type="text"
      name="filter"
      value={filterValue}
      onChange={(e) => dispatch(changeFilter(e.target.value))} />
    </LabelContact>
  );
}

export default Filter;


// import { Input } from 'components/Form/InputForm.styled';
// import React from 'react';
// class Filter extends React.Component {
// state = {
//     value: ' ',
// };

// handInputFilter=e=>{
//     const name= e.currentTarget.value;
//     this.setState({value: name});
// };

// filterSubmit=e=>{
// this.props.onFilterSubmit(this.state);

// };

// render() {
//     return (
//         <div onFilterSubmit={this.filterSubmit}>
//                 <Input
//                     type="text"
//                     name="filter"
//                     value={state.filter}
//                     id={3}
//                     onChange={this.handInputFilter}
//                 />
//         </div>
// );
// }
// }
// export default Filter
