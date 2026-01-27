import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink
        // className={({ isActive, isPending, isTransitioning }) =>
        //   [
        //     isPending ? "pending" : "",
        //     isActive ? "activeLink" : "",
        //     isTransitioning ? "transition" : "",
        //   ].join("")
        // }
        // style={({ isActive, isPending, isTransitioning }) => {
        //   return {
        //     fontWeight: isActive ? "bold" : "",
        //     color: isPending ? "red" : "pink",
        //     viewTransitionName: isTransitioning ? "slide" : "",
        //   };
        // }}
        to="/auth"
      >
        Home
      </NavLink>
      <NavLink to="/posts">Posts</NavLink>
    </header>
  );
};

export default Header;

// Note -
//     NavLink by default set an active class on the link and aria-label as well
