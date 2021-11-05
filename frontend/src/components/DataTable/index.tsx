import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { requests } from "utils/requests";
import Pagination from "../Pagination";
const DataTable = () => {
  const [page, setPage] = useState<SalePage>({
    first: true,
    last: false,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });
  const [activePage, setActivePage] = useState<number>();

  const onPageChange = (index: number) => {
    setActivePage(index);
  };

  useEffect(() => {
    requests
      .get(`/sales?page=${activePage}&size=10&sort=date,desc`)
      .then((response) => {
        setPage(response.data);
      });
  }, [activePage]);

  return (
    <>
      <Pagination page={page} onPageChange={onPageChange} />
      <div className="table-responsive">
        <table className="table table-striped table-sm table-hover">
          <thead className="table-dark">
            <tr>
              <th>Data</th>
              <th>Vendedor</th>
              <th>Clientes visitados</th>
              <th>Negócios fechados</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {page.content?.map((sale) => (
              <tr key={sale.id}>
                <td>{formatLocalDate(sale.date, "dd/mm/yyyy")}</td>
                <td>{sale.seller.name}</td>
                <td>{sale.visited}</td>
                <td>{sale.deals}</td>
                <td>{sale.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataTable;
