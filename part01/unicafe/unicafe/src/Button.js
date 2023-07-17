const Button = (props) => {
  console.log(props);
  return <button onClick={props.up}>{props.name}</button>;
};

export default Button;
