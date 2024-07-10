import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import Table from './Table';
import useSort from '../hooks/use-sort';

function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer bg-blue-100 hover:bg-gray-100 p-2"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div className="p-3">
        <GoChevronUp />
        <GoChevronDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div className="p-3">
        <GoChevronUp />
        <GoChevronDown />
      </div>
    );
  } else if (sortOrder === 'asc') {
    return (
      <div className="p-3">
        <GoChevronUp />
      </div>
    );
  } else if (sortOrder === 'desc') {
    return (
      <div className="p-3">
        <GoChevronDown />
      </div>
    );
  }
}

export default SortableTable;
