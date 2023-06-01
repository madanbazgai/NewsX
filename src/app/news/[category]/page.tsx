import NewsList from "@/app/components/NewsList";
import fetchNews from "@/utils/fetchNews";
import { categories } from "../../../../constants";


type Props = {
  params: { category: Category };
};

export async function generateStaticParams() {
  return categories.map((category) => ({ category: category }));
}

async function NewsCategory({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews(category);

  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default NewsCategory;


