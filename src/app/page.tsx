
import fetchNews from "../utils/fetchNews";
import { categories } from "../../constants";
import NewsList from "./components/NewsList";

async function HomePage() {
  // fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(","));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default HomePage;