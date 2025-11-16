import Image from "next/image";
import { API_TOKEN, REQUEST_URL } from "../../../constant";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CommodityPage = async ({
  params,
}: {
  params: { documentId: string };
}) => {
  const { documentId } = await params;
  const result = await fetch(
    REQUEST_URL +
      `/categories/${documentId}?populate[commodities][populate]=image`,
    { headers: { Authorization: `Bearer ${API_TOKEN}` } }
  ).then((res) => res.json());
  const commodityList = result?.data?.commodities as Commodity[];

  return (
    <div className="w-2/3 mx-auto">
      <ul className="grid grid-cols-4 gap-4">
        {commodityList.map((item) => (
          <li className="flex flex-col gap-2" key={item.id}>
            <Image
              src={item.image.url}
              alt="image"
              width={280}
              height={280}
              className="rounded-2xl"
            />
            <div className="flex flex-col">
              <Tooltip>
                <TooltipTrigger>
                  <h3 className="line-clamp-1 text-black text-base text-left cursor-pointer">
                    {item.title}
                  </h3>
                </TooltipTrigger>
                <TooltipContent>{item.title}</TooltipContent>
              </Tooltip>
              <ul>
                <li className="text-sm text-[#364153]">Color: {item.color}</li>
                <li className="text-sm text-[#364153]">
                  Material: {item.material}
                </li>
                <li className="text-sm text-[#364153]">
                  Length: {item.length}
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommodityPage;
