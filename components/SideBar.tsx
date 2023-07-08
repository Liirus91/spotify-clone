interface SideBarProps {
  children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default SideBar;
