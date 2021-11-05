import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { requests } from "utils/requests";

const DataTable = () => {
  const [page, setPage] = useState<SalePage>({
    first: true,
    last: false,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });

  useEffect(() => {
    requests.get(`/sales?page=0&size=10&sort=date,desc`).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
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
            <tr>
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
  );
};

export default DataTable;
