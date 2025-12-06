import { HomeView } from "@/modules/Home/ui/views/home-view";
import { HydrateClient , trpc } from "@/trpc/server";

export const dynamic = "force-dynamic";

interface PageProps { 
  searchParams : Promise<{categoryId? : string}>
}

const Page = async ({searchParams} : PageProps)  =>  {

const { categoryId } = await searchParams;

  void  trpc.categories.getMany.prefetch();
 
  return (
    <div>
      <HydrateClient>
        <HomeView categoryId={categoryId}/>
      </HydrateClient>
    </div>
  ) 

};

export default Page;