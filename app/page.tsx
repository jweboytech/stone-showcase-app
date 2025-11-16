import { redirect } from "next/navigation";
import { API_TOKEN, REQUEST_URL } from "./constant";

async function Home() {
  const result = await fetch(REQUEST_URL + "/categories", {
    headers: { Authorization: `Bearer ${API_TOKEN}` },
  }).then(async (res) => res.json());
  const items = (result?.data as Category[]) || [];

  if (items.length > 0) {
    return redirect(`/category/${items[0].documentId}/commodity`);
  }
}

export default Home;
