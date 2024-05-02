import path from "path";
import { cwd } from "process";
import fs from "fs";
import { ProductsType } from "@/app/category/headphones/page";

export async function GET(
  request: Request,
  { params }: { params: { detail: string } }
) {
  const detailId = params.detail;

  const filePath = path.join(cwd(), "data", "products.json");

  const jsonData = fs.readFileSync(filePath, "utf-8");

  const extracktedData = JSON.parse(jsonData);

  const selectedProduct = extracktedData.filter(
    (item: ProductsType) => item.id === +detailId
  );

  return new Response(JSON.stringify(selectedProduct));
}
