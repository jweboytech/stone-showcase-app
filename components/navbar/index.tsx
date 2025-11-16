import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { API_TOKEN, REQUEST_URL } from "@/app/constant";

const Navbar = async () => {
  const result = await fetch(REQUEST_URL + "/categories", {
    headers: { Authorization: `Bearer ${API_TOKEN}` },
  }).then(async (res) => res.json());
  const items = (result?.data as Category[]) || [];

  return (
    <div className="py-4 flex justify-center">
      <NavigationMenu>
        <NavigationMenuList>
          {items.map((item) => (
            <NavigationMenuItem key={item.id}>
              <NavigationMenuLink asChild>
                <Link href={`/category/${item.documentId}/commodity`}>
                  {item.name}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
