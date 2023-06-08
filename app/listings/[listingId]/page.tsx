import getCurrentUser from "@/app/action/getCurrentUser";
import getListingById from "@/app/action/getListingById"
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";

interface IParam {
    listingId?: string;
}

const ListingPage = async ({ params } : { params: IParam }) => {
    const listing = await getListingById(params)
    const currentUser = await getCurrentUser()

    if (!listing) {
        return (
            <ClientOnly>
                <EmptyState />
            </ClientOnly>
        )
    }
    return (
        <ClientOnly>
            <ListingClient 
                listing= {listing}
                currentUser = {currentUser}
            />
        </ClientOnly>
    )
}

export default ListingPage