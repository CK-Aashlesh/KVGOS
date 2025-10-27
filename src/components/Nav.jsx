import CardNav from "../components/NavBar/CardNav.jsx";
import logo from "../assets/img/kvgceosc.png";

const Nav = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Team", ariaLabel: "About Team" },
        { label: "About Us", ariaLabel: "About Us" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Blog", ariaLabel: "Blogs" },
        { label: "Event", ariaLabel: "Event" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" },
      ],
    },
  ];

  return (
    <CardNav
      logo={logo}
      logoAlt="logo"
      items={items}
      baseColor="transparent"
      menuColor="rgba(255, 255, 255, 0.9)"
      buttonBgColor="rgba(255, 255, 255, 0.2)"
      buttonTextColor="rgba(255, 255, 255, 0.9)"
      ease="power3.out"
    />
  );
};

export default Nav;
