import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeSlice";
import { changeName } from "../redux/user/userSlice";

// const mapStateToProps = state => {
//     return {
//       numOfCake: state.cake && state.cake.numOfCake,
//     };
//   };

// const mapDispatchToProps = dispatch => {
//   return {
//     buyCake: () => dispatch(buyCake()),
//   };
// };

// const CakeContainer = ({ numOfCake, buyCake }) => {
const CakeContainer = () => {
  const {numOfCake} = useSelector(state => state.cake)
  const { name } = useSelector(state => state.user)

  const dispatch = useDispatch()

  const onBuyCake = () => {
    dispatch(buyCake())
  }

  const onChangeName = () => {
    dispatch(changeName('abebe'))
  }

  return (
    <div>
      <h1>number of cake {numOfCake}</h1>
      <h1>user name {name}</h1>
      <button onClick={onChangeName}>change name</button>
      {/* <button onClick={buyCake}>Buy cake</button> */}
      <button onClick={onBuyCake}>Buy cake</button>
    </div>
  );
};

// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
export default CakeContainer;