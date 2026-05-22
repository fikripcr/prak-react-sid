import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import products from "../data/products.json";

export default function Products() {
    return (
        <div id="dashboard-container">
            <PageHeader title="Product"/>
            
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    
                    {/* Table Head */}
                    <thead>
                    <tr className="bg-gray-50 text-gray-600 text-sm uppercase font-semibold border-b border-gray-200">
                        <th className="py-4 px-6 w-16 text-center">ID</th>
                        <th className="py-4 px-6">Nama Produk</th>
                        <th className="py-4 px-6">Kode</th>
                        <th className="py-4 px-6">Kategori</th>
                        <th className="py-4 px-6">Brand</th>
                        <th className="py-4 px-6 text-right">Harga</th>
                        <th className="py-4 px-6 text-center">Stok</th>
                    </tr>
                    </thead>

                    {/* Table Body (Proses Mapping Data) */}
                    <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                    {products.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-150">
                        <td className="py-4 px-6 text-center font-medium text-gray-400">{item.id}</td>
                        <td className="py-4 px-6 font-semibold text-gray-900">
                              <Link to={`/products/${item.id}`} className="text-emerald-400 hover:text-emerald-500">
                                    {item.title}
                              </Link>
                        </td>
                        <td className="py-4 px-6 font-mono text-xs text-gray-500">{item.code}</td>
                        <td className="py-4 px-6">
                            <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-600">
                            {item.category}
                            </span>
                        </td>
                        <td className="py-4 px-6 text-gray-600">{item.brand}</td>
                        <td className="py-4 px-6 text-right font-medium text-gray-900">{item.price}</td>
                        <td className="py-4 px-6 text-center">
                            <span className={`font-semibold ${item.stock < 20 ? 'text-red-500' : 'text-green-600'}`}>
                            {item.stock}
                            </span>
                        </td>
                        </tr>
                    ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
}