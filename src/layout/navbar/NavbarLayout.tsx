import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { HiMenuAlt3 } from "react-icons/hi"

interface NavbarLayoutProps {
  toggleSidebar: () => void
}

const NavbarLayout: React.FC<NavbarLayoutProps> = ({
  toggleSidebar
}) => {
  return (
    <Navbar className="border-b border-gray-200 px-4 py-4" fluid>

      <div className="flex">
        <Button onClick={toggleSidebar} className="block md:hidden">
          <HiMenuAlt3 className="mr-2 h-5 w-5"></HiMenuAlt3>
        </Button>
      </div>

      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">REGISTRO</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarLayout