import {
    MaterialReactTable,
    useMaterialReactTable
} from 'material-react-table';

 const table = useMaterialReactTable({
        columns,
        data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    });

return <MaterialReactTable table={table} />;

