'use client';

import Container from "../Container";
import { IoDiamond } from "react-icons/io5"
import { BsSnow } from "react-icons/bs"
import { FaSkiing } from 'react-icons/fa'
import { TbBeach, TbMountain, TbPool } from "react-icons/tb"
import { 
    GiBarn, 
    GiBoatFishing, 
    GiCactus, 
    GiCastle, 
    GiCaveEntrance, 
    GiForestCamp, 
    GiGrandPiano, 
    GiIsland, 
    GiTreehouse, 
    GiWindmill, 
    GiWoodCabin
} from "react-icons/gi"
import { MdOutlineVilla, MdVilla } from "react-icons/md"
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!'
    },
    {
        label: 'Cabins',
        icon: GiWoodCabin,
        description: 'This property is a cabin!'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property has windmill!'
    },
    {
        label: 'Pool',
        icon: TbPool,
        description: 'This property has a pool!'
    },
    {
        label: 'Island',
        icon: GiIsland,
        description: 'This property is on an island!'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property has skiing activities!'
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: 'This property is in a castle!'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in the countryside!'
    },
    {
        label: 'Treehouses',
        icon: GiTreehouse,
        description: 'This property is an tree house!'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is close to a lake!'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This property has camping activities!'
    },
    {
        label: 'Artic',
        icon: BsSnow,
        description: 'This property has snow!'
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'This property is in a cave!'
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'This property is in a desert!'
    },
    {
        label: 'Grand pianos',
        icon: GiGrandPiano,
        description: 'This property have a grand piano!'
    },
    {
        label: 'Modern',
        icon: MdVilla,
        description: 'This property is a mordern place!'
    },
    {
        label: 'Luxe',
        icon: IoDiamond,
        description: 'This property is is luxurious!'
    },
]

const Categories = () => {
    const params = useSearchParams();

    const category = params?.get('category');
    const pathname = usePathname();
    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
    }

    return(
        <Container>
            <div
                className="
                    pt-4
                    flex
                    flex-row
                    items-center
                    justify-between
                    overflow-x-auto
                "
            >
                {categories.map((item) => (
                    <CategoryBox 
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
    )
}

export default Categories