import ProductList from "@/components/ProductList";
import styles from "./page.module.css";
import { FilterArea } from "@/components";

export default async function Home() {
  return (
    <main className={styles.main}>
      <FilterArea />
      <ProductList />
    </main>
  );
}
