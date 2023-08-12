import { getLocalData } from "@/lib/localdata";
import StayPage from "@/components/stays/StayPage";


export default async function page() {



  const data = await getLocalData();
  const stays = data.data.flatMap((category) => Object.values(category).flat());



  return (
    <layout>
      <StayPage stays={stays}/>
    </layout>
  );
}
