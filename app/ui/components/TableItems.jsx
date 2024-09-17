import { getAllProducts } from "../../lib/data";

const TableItems = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const products = await getAllProducts();
  const productProperties = Object.getOwnPropertyNames(products[0]);

  return (
    <div className="relative overflow-x-auto mt-20 sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Tus Productos Aqui
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {productProperties.map((property) => (
              <th className="px-6 py-3" key={property}>
                {property}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {productProperties.map((property) => (
                <td className="px-6 py-4" key={product[property]}>
                  {product[property]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableItems;
