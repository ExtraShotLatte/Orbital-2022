import classes from "./SidebarLink.module.css";

function SidebarLink(props) {
  return (
    <div className={classes.link} onClick={props.clickEvent}>
      <props.icon className={classes.icon} color="primary" />
      <h2>{props.text}</h2>
    </div>
  );
}
export default SidebarLink;
